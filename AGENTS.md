<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Workshop (Resume Website)

A personal resume website for **Lily Grellner**, built on Next.js 16 (App Router, TypeScript, Tailwind CSS).

## Project setup

- Repo: `github.com/jxing61/aiworkshop` (private), default branch `main`
- Owner: Lily Grellner (board user)
- Entry points: `src/app/page.tsx` (home), `src/app/layout.tsx` (root layout), `src/app/globals.css` (global styles)

## Commands

- `npm run dev` — development server
- `npm run build` — production build (verify before pushing)
- `npm run lint` — ESLint (must pass)
- `npm run start` — serve production build

## Conventions

- Server components by default; add `"use client"` only when interactivity is needed
- Tailwind CSS v4 utility classes for styling
- Do not commit `.env*` files; secrets live in Paperclip managed env
