# Jiali (Lily) Grellner — Personal Resume Website

A single-page personal resume website for **Jiali (Lily) Grellner**, built from her resume and deployed publicly on Vercel.

**Live URL:** *set after deployment*

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