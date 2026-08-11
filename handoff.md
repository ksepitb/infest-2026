HANDOFF CONTEXT
===============
USER REQUESTS (AS-IS)
---------------------
- Onboard repo ini, baca @AGENTS.md @workflow.md dan @README.md
- Tolong fix scroll reveal di @src/app/events/page.tsx
- Revert changes that you made on the theme-divider, carousel,
GOAL
----
The scroll-reveal fix on the events page is complete and verified; decide whether to keep or revert the remaining pre-existing logo-infest.tsx change and continue with the next task.
WORK COMPLETED
--------------
- Read AGENTS.md, workflow.md, and README.md to onboard the repo conventions.
- Fixed scroll reveal in src/app/events/page.tsx by replacing section-wide ScrollReveal wrappers with per-element reveals and small stagger delays.
- Kept the Hero section wrapped in a single ScrollReveal.
- Applied staggered ScrollReveal to Pre-Events (badge → DayCard 1 → DayCard 2), Main Event (badge → divider → theme box → DayCard), and Date & Location (divider → location pill).
- Moved the Main Event decorative dotted image outside ScrollReveal so it stays static.
- Reverted src/app/_components/event-page/theme-divider.tsx to git HEAD.
- Reverted the Highlights carousel in src/app/events/page.tsx back to EventsCarousel with the original custom "Last Year's Highlights" heading.
- Removed the unused HighlightsCarousel import and escaped the apostrophe as &apos; to satisfy ESLint.
- Verified the page renders correctly via Playwright screenshots.
- Ran pnpm check successfully.
CURRENT STATE
-------------
- Branch: feat/registration-page-orkhan
- pnpm check passes with only pre-existing warnings in src/app/bcc/page.tsx and src/app/_components/event-page/section-badge.tsx.
- Working tree modifications:
- src/app/events/page.tsx — scroll-reveal fix and carousel revert.
- src/app/_components/event-page/logo-infest.tsx — still modified, but this change predates my work.
- public/images/event-ornament-mid-bottom.png — untracked, pre-existing.
- Dev server was running on localhost:3000 during verification.
PENDING TASKS
-------------
- Decide whether to revert src/app/_components/event-page/logo-infest.tsx (it was modified before this session; I did not change it).
- No todos were created in this session.
- Next logical step is to review the events page scroll reveal in browser and then push the branch / open a PR to dev.
KEY FILES
---------
- src/app/events/page.tsx — events page with granular scroll reveal and reverted carousel.
- src/components/scroll-reveal.tsx — reusable Framer Motion scroll-reveal wrapper.
- src/app/_components/landing/events-carousel.tsx — carousel currently used in the Highlights section.
- src/app/_components/event-page/theme-divider.tsx — reverted to git HEAD.
- src/app/_components/event-page/logo-infest.tsx — pre-existing modification still in working tree.
IMPORTANT DECISIONS
-------------------
- Chose per-element ScrollReveal with stagger delays instead of wrapping entire sections, creating a cascading reveal effect as the user scrolls.
- Kept EventsCarousel + custom heading rather than switching to HighlightsCarousel, because the user explicitly asked to revert the carousel change.
- Left decorative background images outside ScrollReveal so only content elements animate.
- Did not revert logo-infest.tsx because that change existed before my session and the user only asked to revert theme-divider and carousel.
EXPLICIT CONSTRAINTS
--------------------
- Always work on a new branch; never commit directly to dev or main.
- Branch format: <type>/<short-description>-<pic-name>.
- After finishing, open a PR to dev.
- Do not modify .gitignore without PM approval.
- Do not commit .env or any file containing secrets.
- Use the ~/* path alias for imports from src/.
- Strictly forbidden: as any, @ts-ignore, @ts-expect-error, empty catch blocks.
- Run pnpm check before declaring work done or submitting a PR.
CONTEXT FOR CONTINUATION
------------------------
- The repo is a T3 App: Next.js 15, React 19, TypeScript 5.8, Better Auth with Google OAuth, Prisma 6.6/Neon, tRPC 11, Tailwind CSS 4, pnpm 11.0.9.
- Page-specific components live in src/app/_components/ and reusable components in src/components/.
- The ScrollReveal component uses Framer Motion whileInView with viewport once: true and amount: 0.25.
- If further visual tweaks are needed, use Playwright/screenshots to verify because static review cannot confirm animation timing.