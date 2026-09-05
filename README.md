# Jiali (Lily) Grellner — Personal Resume Website

A single-page personal resume website for **Jiali (Lily) Grellner**, built from her resume and deployed publicly on Vercel.

**Live URL:** *pending Vercel deployment — see notes below*

**Repo:** https://github.com/jxing61/aiworkshop

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) — static/server-rendered
- [TypeScript](https://www.typescriptlang.org) 5
- [Tailwind CSS](https://tailwindcss.com) 4
- Deployed on [Vercel](https://vercel.com)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-updates as you edit source files.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the Next.js development server |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Features

- Header (name, title, location, email link)
- Professional summary
- Work experience (most recent first)
- Skills (grouped)
- Education
- Responsive layout (phone + laptop)
- Light/dark theme toggle, defaults to the visitor's system preference

## Deliberately skipped

- Projects / portfolio section (the resume does not list projects on the site)
- Contact form (out of scope for phase 1)
- Analytics, CMS, database, or authentication (out of scope)

## Deployment notes

The repository is public and push-ready. A Vercel deployment was **not** created during the workshop run because no Vercel authentication token is available in the environment — connecting Vercel requires an interactive `vercel login` (device authorization) or a `VERCEL_TOKEN`. Connect this GitHub repo to Vercel to enable push-triggered builds:

1. Import `github.com/jxing61/aiworkshop` at https://vercel.com/new
2. Framework preset: Next.js (defaults apply)
3. Deploy — the repo builds clean with `npm run build` and no type/lint errors