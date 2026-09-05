# Jiali (Lily) Grellner — Personal Resume Website

A single-page personal resume website for **Jiali (Lily) Grellner**, built from her resume and deployed publicly on Vercel.

**Live URL:** https://temporary-express-glacier-0bxlihp.vercel.app *(temporary — expires ~60 min; claim the deployment below for a persistent URL)*

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

The repository is public and the site builds clean with `npm run build` (0 type errors, lint clean). A temporary Vercel deployment is live at the URL above and was created headlessly with the Vercel CLI. It expires after 60 minutes.

To keep the site on a **persistent** public URL, claim the temporary deployment or connect the repo:

1. **Claim the existing deployment** (fastest): visit https://vercel.com/claim-deployment?code=c4c1bd03-10de-4b28-9c53-80ab0806a3b2 and sign in.
2. Or import `github.com/jxing61/aiworkshop` at https://vercel.com/new (framework preset: Next.js, defaults apply).