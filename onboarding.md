# INFEST 2026 Web — Onboarding Guide

> Generated for repo: `D:\infest-2026\web`  
> Last updated: 2026-08-12

---

## 1. Project Overview

**INFEST 2026** (Investment Festival 2026, KSEP ITB) is the public-facing event website for the annual investment-education festival held by KSEP ITB. The site markets the festival, explains competitions (ERC / BCC), and will eventually handle participant registration and authentication.

- **Repo:** `infest-2026/web`
- **PM:** Muhammad Orkhan (`vescentongit`)
- **Team:** Nicholas Wise, Bagas Anugrah, Threegie Gendhis, Avicenna Ananda

---

## 2. Tech Stack

| Layer | Technology | Version / Notes |
|-------|-----------|-----------------|
| Framework | Next.js (App Router) | 15.2.3, Turbopack dev |
| Runtime | React | 19.0.0 |
| Language | TypeScript | 5.8.2, strict mode |
| Auth | Better Auth | 1.3, Google OAuth only |
| ORM | Prisma | 6.6.0 |
| Database | PostgreSQL | Neon in prod; local Postgres acceptable |
| API | tRPC | 11.0.0 + TanStack Query 5 |
| Styling | Tailwind CSS | v4, custom theme in `globals.css` |
| Fonts | Poppins + Inter | loaded via `next/font/google` |
| Animation | Framer Motion | 13.0.0 |
| Package manager | pnpm | 11.0.9 (required) |

---

## 3. Project Structure

```
infest-2026/
├── .omo/                    # Planning artifacts (this file)
├── prisma/
│   └── schema.prisma        # Database schema (Better Auth + Post model)
├── public/                  # Static assets (logos, ornaments, icons)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── _components/     # Page-specific components
│   │   │   ├── erc/         # ERC page components
│   │   │   ├── event-page/  # Shared event-page visuals
│   │   │   ├── landing/     # Landing page components
│   │   │   └── register/    # Registration page components
│   │   ├── api/
│   │   │   ├── auth/[...all]/route.ts   # Better Auth catch-all handler
│   │   │   └── trpc/[trpc]/route.ts     # tRPC API handler
│   │   ├── bcc/
│   │   │   └── page.tsx     # BCC competition page
│   │   ├── erc/
│   │   │   └── page.tsx     # ERC competition page
│   │   ├── events/
│   │   │   └── page.tsx     # Events listing page
│   │   ├── register/
│   │   │   ├── page.tsx     # Registration hub
│   │   │   ├── bcc/
│   │   │   │   └── page.tsx # BCC registration form
│   │   │   └── erc/
│   │   │       └── page.tsx # ERC registration form
│   │   ├── layout.tsx       # Root layout (fonts, providers, metadata)
│   │   └── page.tsx         # Landing page (home)
│   ├── components/          # Reusable components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── scroll-reveal.tsx
│   │   ├── page-transition.tsx
│   │   ├── faq-accordion.tsx
│   │   ├── section-header.tsx
│   │   └── section-badge.tsx
│   ├── env.js               # Environment variable validation (T3 env)
│   ├── server/              # Server-only code
│   │   ├── api/
│   │   │   ├── routers/
│   │   │   │   └── post.ts  # Example router (hello/create/getLatest)
│   │   │   ├── root.ts      # tRPC root router
│   │   │   └── trpc.ts      # tRPC init, context, procedures
│   │   ├── better-auth/
│   │   │   ├── client.ts    # `authClient` for client-side auth
│   │   │   ├── config.ts    # Better Auth configuration
│   │   │   ├── index.ts     # Re-exports
│   │   │   └── server.ts    # Server-side auth helpers
│   │   └── db.ts            # Prisma client singleton
│   ├── styles/
│   │   └── globals.css      # Tailwind v4 theme + custom utilities
│   └── trpc/
│       ├── query-client.ts  # TanStack Query client factory
│       ├── react.tsx        # tRPC + Query provider for client components
│       └── server.ts        # Server-side tRPC caller
├── .env.example             # Template env file (no secrets)
├── eslint.config.js
├── next.config.js           # Imports src/env.js for validation
├── package.json
├── postcss.config.js
├── prettier.config.js
└── tsconfig.json
```

---

## 4. Key Entry Points & Config

### 4.1 Environment Variables (`src/env.js`)

All env vars are server-side only unless prefixed with `NEXT_PUBLIC_`.

| Variable | Required | Notes |
|----------|----------|-------|
| `BETTER_AUTH_SECRET` | Yes (prod), optional (dev) | Long random string. Generate with `openssl rand -base64 32` |
| `BETTER_AUTH_GOOGLE_CLIENT_ID` | Yes | Google OAuth Client ID |
| `BETTER_AUTH_GOOGLE_CLIENT_SECRET` | Yes | Google OAuth Client Secret |
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NODE_ENV` | Optional | `development` / `test` / `production` |

Important:
- `next.config.js` imports `src/env.js`, so env validation runs on build/dev start.
- Use `SKIP_ENV_VALIDATION=true` to bypass validation (e.g. Docker).
- Never commit real values to `.env.example`.

### 4.2 Authentication (`src/server/better-auth/config.ts`)

```ts
export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  emailAndPassword: { enabled: false },
  socialProviders: {
    google: {
      clientId: env.BETTER_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
      redirectURI: "http://localhost:3000/api/auth/callback/google",
    },
  },
});
```

- Google OAuth only.
- Redirect URI is **hardcoded to localhost**; must be updated for production.
- Auth API route: `src/app/api/auth/[...all]/route.ts`.

### 4.3 Database (`prisma/schema.prisma`)

- Provider: `postgresql`
- Prisma client output: `../generated/prisma`
- Models: `User`, `Session`, `Account`, `Verification` (Better Auth) + `Post` (example/demo).
- Import pattern:
  ```ts
  import { PrismaClient } from "../../generated/prisma";
  ```

### 4.4 tRPC (`src/server/api/trpc.ts`, `src/server/api/root.ts`)

- Context provides `db` and `session`.
- Procedures:
  - `publicProcedure` — no login required.
  - `protectedProcedure` — throws `UNAUTHORIZED` if no session.
- Timing middleware adds artificial 100–500 ms delay in dev to catch waterfalls.
- New routers go in `src/server/api/routers/` and must be registered in `src/server/api/root.ts`.

### 4.5 Styling (`src/styles/globals.css`)

- Tailwind v4 with `@import "tailwindcss"`.
- Custom CSS variables for the INFEST purple/pink/gold theme.
- `@theme` block registers colors/backgrounds/shadows as Tailwind utilities.
- Custom `@utility` classes for gradient text, glow effects, etc.

---

## 5. Current Pages & Components Inventory

### Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Landing page: hero, about, events carousel, timeline, FAQ |
| `/events` | `src/app/events/page.tsx` | Events listing |
| `/erc` | `src/app/erc/page.tsx` | ERC (Equity Research Competition) page |
| `/bcc` | `src/app/bcc/page.tsx` | BCC (Business Case Competition) page |
| `/register` | `src/app/register/page.tsx` | Registration hub |
| `/register/erc` | `src/app/register/erc/page.tsx` | ERC registration form |
| `/register/bcc` | `src/app/register/bcc/page.tsx` | BCC registration form |

### Reusable Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navbar` | `src/components/navbar.tsx` | Fixed top nav with mobile menu, scroll-spy on home |
| `Footer` | `src/components/footer.tsx` | Social links + contact info |
| `ScrollReveal` | `src/components/scroll-reveal.tsx` | Scroll-triggered reveal animation wrapper |
| `PageTransition` | `src/components/page-transition.tsx` | Route transition wrapper |
| `FaqAccordion` | `src/components/faq-accordion.tsx` | FAQ accordion component |
| `SectionHeader` | `src/components/section-header.tsx` | Reusable section header |
| `SectionBadge` | `src/components/section-badge.tsx` | Reusable badge/pill |

### Page-Specific Components

- `src/app/_components/landing/events-carousel.tsx`
- `src/app/_components/erc/erc-hero.tsx`, `erc-description.tsx`, `erc-prize-pool.tsx`, `erc-timeline.tsx`, `erc-faq.tsx`, `erc-countdown.tsx`, `erc-decorations.tsx`, `erc-wrapper.tsx`, `erc-footer.tsx`
- `src/app/_components/event-page/theme-divider.tsx`, `section-badge.tsx`, `logo-infest.tsx`, `location-pill.tsx`, `highlight.tsx`, `day-card.tsx`, `styles.ts`
- `src/app/_components/register/rules-card.tsx`

---

## 6. Environment Setup Checklist

1. **Install pnpm 11+ and Node.js 20+**
2. **Clone and install dependencies**
   ```bash
   pnpm install
   ```
3. **Copy environment file**
   ```bash
   cp .env.example .env
   ```
4. **Fill `.env`**
   - `BETTER_AUTH_SECRET` — `openssl rand -base64 32`
   - `BETTER_AUTH_GOOGLE_CLIENT_ID` / `BETTER_AUTH_GOOGLE_CLIENT_SECRET` — from Google Cloud Console
   - `DATABASE_URL` — PostgreSQL connection string
5. **Sync database**
   ```bash
   pnpm db:migrate
   # or for rapid prototyping:
   pnpm db:push
   ```
6. **Run dev server**
   ```bash
   pnpm dev
   ```
7. **Open** `http://localhost:3000`

---

## 7. Common Development Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm start            # Start production server
pnpm check            # Run ESLint + TypeScript checks (quality gate)
pnpm lint             # ESLint
pnpm lint:fix         # ESLint with auto-fix
pnpm typecheck        # TypeScript no-emit
pnpm format:check     # Prettier check
pnpm format:write     # Prettier write
pnpm db:generate      # Generate migration from schema changes
pnpm db:migrate       # Apply pending migrations
pnpm db:push          # Push schema directly (dev/prototyping only)
pnpm db:studio        # Open Prisma Studio
```

Always run `pnpm check` before opening a PR.

---

## 8. Git & Branch Workflow

- **Main branches:** `main` (production), `dev` (active development)
- **Never commit directly to `main` or `dev`.**
- **Branch naming:** `<type>/<short-description>-<pic-name>`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`
  - Example: `feat/landing-page-orkhan`
- **Pull Request flow:**
  1. Work on feature branch
  2. Push to remote
  3. Open PR to `dev`
  4. PM reviews and merges
- **Environment / secrets rules:**
  - Do not modify `.gitignore` without PM approval.
  - Do not commit `.env` or secrets.
  - Add new env vars to both `src/env.js` and `.env.example`.

---

## 9. Code Conventions

- Use `~/*` path alias for `src/` imports.
- Strict TypeScript — `strict` mode enabled.
- **Forbidden:**
  - `as any`
  - `@ts-ignore`
  - `@ts-expect-error`
  - Empty catch blocks (`catch(e) {}`)
- Use explicit types; avoid `any`.
- Separate type imports from runtime imports per ESLint rules.
- Reusable components → `src/components/`
- Page-specific components → `src/app/_components/`
- New tRPC routers → `src/server/api/routers/`, then register in `src/server/api/root.ts`.
- Use Zod for input validation.

---

## 10. Common Gotchas & Next-Step Pointers

1. **Google OAuth redirect URI is localhost-only.** For staging/production, update `redirectURI` in `src/server/better-auth/config.ts` and add the URI in Google Cloud Console.
2. **Prisma client import path is non-standard.** Import from `../../generated/prisma` relative to the importing file, not `@prisma/client`.
3. **Env validation runs at build/start.** If you see validation errors on `pnpm dev`, check `.env` against `src/env.js`.
4. **tRPC dev delay is intentional.** The timing middleware simulates network latency to surface waterfalls.
5. **Landing page FAQ data is placeholder.** Replace `faqData` and `timelineData` in `src/app/page.tsx` with real content.
6. **Footer contact info is placeholder.** Replace defaults in `src/components/footer.tsx` with real event/competition contacts.
7. **No tests currently exist.** If adding tests, follow the project’s quality gate and do not disable failing tests.
8. **Auth flow is not yet integrated into the UI.** The sign-in/sign-out flow in `src/app/page.tsx` should be verified whenever auth config changes.

---

## 11. Reference Documents

Always re-read before starting a task:

- `README.md` — setup and architecture
- `workflow.md` — team collaboration and Git rules
- `AGENTS.md` — agent/code conventions and project context

---

*End of onboarding guide.*