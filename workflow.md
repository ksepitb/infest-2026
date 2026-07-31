# INFEST 2026 Web — Team Workflow

This document contains the collaboration rules for the `infest-2026/web` repo. All contributors must follow this workflow.

## 1. Branching Strategy

Every new piece of work **must** be done on a separate branch. Do not commit directly to `dev` or `main`.

- Main branches:
  - `main` — production branch, visible to INFEST 2026 participants.
  - `dev` — active development branch. All new features are merged here first.

## 2. Branch Naming

Use the following format:

```
<type>/<short-description>-<pic-name>
```

### Common branch types

| Type | Purpose | Example |
|------|---------|---------|
| `feat` | New feature | `feat/landing-page-orkhan` |
| `fix` | Bug fix | `fix/login-redirect-orkhan` |
| `docs` | Documentation | `docs/readme-update-orkhan` |
| `style` | Styling / UI changes | `style/hero-section-orkhan` |
| `refactor` | Code refactor without behavior change | `refactor/api-handlers-orkhan` |
| `chore` | Maintenance, dependency, config | `chore/update-deps-orkhan` |

### Branch name rules

- Use lowercase letters and separate words with hyphens (`-`).
- Keep the description short but clear.
- Append the PIC name at the end.

Correct examples:

```bash
git checkout -b feat/registration-flow-orkhan
git checkout -b fix/navbar-mobile-orkhan
git checkout -b docs/workflow-update-orkhan
```

Incorrect examples:

```bash
git checkout -b orkhan-landing-page        # missing type
git checkout -b feat/landing page          # contains space
git checkout -b FEAT/LandingPage-Orkhan    # mixed case
```

## 3. Pull Request Flow

1. After finishing work on your branch, push it to remote:

   ```bash
   git push -u origin feat/feature-name-pic
   ```

2. Open a Pull Request (PR) to the `dev` branch.
3. Fill in the PR description clearly:
   - What was done
   - Main changes
   - How to check / test
   - Screenshots if there are UI changes
4. The PM (@vescentongit) will review. If revisions are needed, fix them in the same branch and push again.
5. Once approved, the PR will be merged into `dev` by the PM.
6. Branches that have been merged may be deleted.

## 4. Environment Variables

- **Never** put real `.env` values into `.env.example`.
- `.env.example` must only contain the list of variables with empty or placeholder values.
- The `.env` file is already ignored by Git. Make sure no env file is committed.
- If adding a new variable, update both `src/env.js` and `.env.example`.

Correct `.env.example` example:

```env
BETTER_AUTH_SECRET=""
BETTER_AUTH_GOOGLE_CLIENT_ID=""
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
```

> Use a generic placeholder for `DATABASE_URL`, never real credentials.

## 5. Deployment Branches

| Branch | Purpose | Notes |
|--------|---------|-------|
| `dev` | Development / staging | Where features are tested before production |
| `main` | Production | What INFEST 2026 participants will see |

- Do not merge to `main` without PM approval.
- All features must go through `dev` first.

## 6. Gitignore

- **Do not** modify `.gitignore` without PM approval.
- If a file needs to be ignored locally, use `.git/info/exclude` on your own machine.

## 7. Using an Agent / AI

If you use an AI agent to work on a task:

1. Make sure the agent reads `AGENTS.md` first.
2. Provide the context of the branch being worked on.
3. Verify the agent's output before creating a PR.
4. Agents are not allowed to:
   - Commit directly to `dev` or `main`
   - Modify `.gitignore`
   - Put secrets into `.env.example`

## 8. Quality Gate Before PR

Before creating a PR, run the following locally:

```bash
pnpm check
```

This runs lint and type checks. Make sure there are no errors before submitting a PR.

## 9. Rules Summary

- [x] Create a new branch for every task.
- [x] Use the `feat/feature-name-pic` branch naming format.
- [x] Open PR to `dev` and wait for PM review.
- [x] Keep `.env` secret; do not put it in `.env.example`.
- [x] `main` is production, `dev` is development.
- [x] Leave `.gitignore` as-is.
- [x] If using an agent, make it read `AGENTS.md`.

---

Last updated: 31 July 2026
PM: Orkhan
