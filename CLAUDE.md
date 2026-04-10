# brunz.me

Personal portfolio and resume hosting site for Daniel Brunsdon.

## Commands
- `pnpm install` — install dependencies
- `pnpm dev` — local dev server (Next.js)
- `pnpm build` — production build
- `pnpm lint` — ESLint

## Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS 3, MDX
- Font: JetBrains Mono
- Deployed on Vercel from `master` branch

## Structure
- `app/` — Next.js pages (About, Work, Music, `/r/[id]` resume routes)
- `content/work/` — Work project MDX files
- `content/play/` — Personal project MDX files (redirects to /work currently)
- `content/resumes/` — Tailored resumes as MDX, hosted at `/r/[hash]`
- `lib/` — Content loaders, Spotify helpers
- `components/` — Shared components (PageLayout, MDXContent)
- `public/` — Static assets (avatar, project images)

## Conventions
- All content is MDX with gray-matter frontmatter
- Resume URLs are private (no-index, no-follow) — don't expose hashes publicly
- Use `pnpm` as the package manager
- Monospace-first design — keep the aesthetic minimal and typographic
