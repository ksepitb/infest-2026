# AGENTS.md — Agent Guidelines for INFEST 2026 Web

Every AI agent must read this document before working on this repo. It contains the rules, conventions, and project context needed to keep the work consistent and safe.

## 1. Project Context

- **Name:** INFEST 2026 — Investment Festival 2026, KSEP ITB
- **Stack:** T3 App with Next.js 15, React 19, TypeScript 5.8
- **Auth:** Better Auth with Google OAuth only
- **Database:** PostgreSQL via Prisma 6.6
- **API:** tRPC 11 + TanStack Query 5
- **Styling:** Tailwind CSS 4
- **Package manager:** pnpm 11.0.9

Also read:

- `README.md` — setup and general architecture
- `workflow.md` — team collaboration and Git rules

## 2. Git & Branch Rules

- Always work on a new branch; never commit directly to `dev` or `main`.
- Branch format: `<type>/<short-description>-<pic-name>`  
  Example: `feat/landing-page-orkhan`
- After finishing, open a PR to `dev`.
- Do not modify `.gitignore` without PM approval.
- Do not commit `.env` or any file containing secrets.

## 3. Environment Variables

- Never put real `.env` values into `.env.example`.
- If adding a new variable, update:
  - `src/env.js` (validation schema)
  - `.env.example` (with empty/placeholder value)
- Secrets already in `.env` must not be leaked in output, logs, or documentation.

## 4. Code Conventions

- Use the `~/*` path alias for imports from `src/`.
- Write TypeScript with strict mode enabled.
- **Strictly forbidden:**
  - `as any`
  - `@ts-ignore`
  - `@ts-expect-error`
  - Empty catch blocks (`catch(e) {}`)
- Use explicit types. Avoid `any`.
- Separate type imports and runtime imports according to the existing ESLint rules.

## 5. Database & Prisma

- Database schema is in `prisma/schema.prisma`.
- If you change the schema, create a migration with `pnpm db:generate` (or `pnpm db:migrate` to apply).
- Use `pnpm db:push` only for rapid local prototyping, not for production-ready branches.
- The Prisma client is generated to `generated/prisma`. Import from there:

  ```ts
  import { PrismaClient } from "../../generated/prisma";
  ```

- Do not delete existing migrations without a strong reason.

## 6. Authentication

- Auth uses Better Auth with Google OAuth.
- Email/password is disabled.
- The Google OAuth redirect URI is currently hardcoded to `http://localhost:3000/api/auth/callback/google`.
- If you change auth config, make sure the sign-in/sign-out flow in `src/app/page.tsx` still works.

## 7. API (tRPC)

- The main router is in `src/server/api/root.ts`.
- Available procedures:
  - `publicProcedure` — accessible without login
  - `protectedProcedure` — requires login
- If you add a new feature, create a new router in `src/server/api/routers/` and register it in `src/server/api/root.ts`.
- Use Zod for input validation.

## 8. Styling & Components

- Use Tailwind CSS v4. The global file is `src/styles/globals.css`.
- Main font: Geist (variable `--font-geist-sans`).
- Reusable components go in `src/components/`.
- Page-specific components go in `src/app/_components/`.
- Images and static assets go in `public/` (see `README.md` and team discussion for guidelines).

## 9. Quality Gate

Before declaring work done or submitting a PR, run:

```bash
pnpm check
```

This runs ESLint and TypeScript type checks. Make sure it passes without errors.

Format code before commit:

```bash
pnpm format:write
```

## 10. Do Not Do

- Modify `.gitignore`.
- Commit secrets or `.env` values.
- Delete migration files without approval.
- Use `as any`, `@ts-ignore`, or empty catch blocks.
- Commit directly to `dev` or `main`.
- Delete or disable failing tests to "fix" an issue (if tests exist).

## 11. Getting Started

Every time you start a task:

1. Make sure you are on the correct branch.
2. Read `workflow.md` and `AGENTS.md` (this document).
3. Understand the task scope before touching code.
4. After finishing, run `pnpm check`.
5. Open a PR to `dev` with a clear description.

---

Last updated: 31 July 2026
PM: Orkhan
