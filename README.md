# Skyradix.com

The Skyradix company website, built with [Next.js](https://nextjs.org) (App Router), React, Tailwind CSS and framer-motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint over the project      |

## Environment variables

Create a `.env.local` file (it is git-ignored):

| Variable     | Purpose                                                     |
| ------------ | ----------------------------------------------------------- |
| `GMAIL_USER` | Gmail address that sends and receives contact-form emails   |
| `GMAIL_PASS` | Gmail app password for that account                          |

## Project structure

```
src/
  app/                  Routes (one folder per page)
    api/contact/        Contact form endpoint (sends mail via Gmail SMTP)
    gym-os/             Gym OS product page
    prototypes/         Demo client sites (fitness, e-commerce)
    layout.jsx          Root layout, global metadata, analytics
    sitemap.js, robots.js
  components/
    home/               Home page sections
    layout/             Navbar and footer
    gym-os/             Interactive Gym OS dashboard demo
    prototypes/         Shared prototype cards
    ui/                 Shared UI primitives (Button, Card, Typography, ...)
  lib/utils.js          `cn()` class-name helper
public/                 Static assets
```
