# infest-2026

Infest Web is A T3 Stack app built with Next.js, Better Auth, Prisma, tRPC, and Tailwind CSS.

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework
- [Better Auth](https://better-auth.com/) — authentication
- [Prisma](https://prisma.io/) — ORM and database schema
- [Neon](https://neon.tech/) — serverless PostgreSQL
- [tRPC](https://trpc.io/) — end-to-end typesafe APIs
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [pnpm](https://pnpm.io/) — package manager

## Prerequisites

- Node.js 20+
- pnpm 11+
- A Google Cloud project with OAuth 2.0 credentials
- A Neon PostgreSQL database

## Getting Started

1. **Clone the repo and install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Fill in the values:

   - `BETTER_AUTH_SECRET` — a long random string. Generate one with:

     ```bash
     openssl rand -base64 32
     ```

   - `BETTER_AUTH_GOOGLE_CLIENT_ID` and `BETTER_AUTH_GOOGLE_CLIENT_SECRET` — from Google Cloud Console.
   - `DATABASE_URL` — your Neon pooled connection string.

3. **Sync the database schema**

   ```bash
   pnpm db:migrate
   ```

   Or use `pnpm db:push` for rapid prototyping.

4. **Run the dev server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Authentication

This app uses **Google OAuth only**. Sign in is handled via Better Auth's social provider flow.

### Google Cloud Console setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials.
2. Create **OAuth 2.0 Client ID** credentials (Web application).
3. Add this Authorized redirect URI:

   ```
   http://localhost:3000/api/auth/callback/google
   ```

4. Copy the Client ID and Client Secret into `.env`.

For production, add your production callback URI as well (e.g., `https://yourdomain.com/api/auth/callback/google`).

## Database

This project is configured to use **Neon PostgreSQL**. To switch databases, just change `DATABASE_URL` in `.env` to any valid PostgreSQL connection string.

Useful commands:

- `pnpm db:generate` — generate a new migration from schema changes
- `pnpm db:migrate` — apply pending migrations
- `pnpm db:push` — push schema changes directly (dev only)
- `pnpm db:studio` — open Prisma Studio

## Available Scripts

- `pnpm dev` — start the development server with Turbopack
- `pnpm build` — create an optimized production build
- `pnpm start` — start the production server
- `pnpm check` — run ESLint and TypeScript checks
- `pnpm lint` / `pnpm lint:fix` — run ESLint
- `pnpm typecheck` — run TypeScript in no-emit mode
- `pnpm format:check` / `pnpm format:write` — run Prettier

## Project Structure

```
src/
  app/              # Next.js app router pages
  env.js            # environment variable validation
  server/           # server-only code
    api/            # tRPC and auth API routes
    better-auth/    # Better Auth configuration
    db.ts           # Prisma client setup
  trpc/             # tRPC routers and client
  styles/           # global styles
prisma/
  schema.prisma     # database schema
```

## Deployment

Deploy to Vercel, or any platform that supports Next.js:

1. Set all environment variables in your hosting dashboard.
2. Run `pnpm db:migrate` against your production database.
3. Build and start the app.

For detailed guides, see the [T3 deployment docs](https://create.t3.gg/en/deployment).

## The Team

| Name | Username | Role |
|------|---------|------|
| Nicholas Wise | nicholaswisee | PRESIDEN KSEP ITB |
| Muhammad Orkhan | vescentongit | PM / Fullstack |
| Bagas Anugrah | bagasapt-spec | Fullstack |
| Threegie Gendhis | threegiegendhis | Frontend |
| Avicenna Ananda | colezzes | Fullstack | 
