# EKC Digital

A modern, professional landing page for EKC Digital — a web design agency serving small businesses.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js app router pages & layout
├── components/       # Reusable section components
│   └── ui/           # Shared UI primitives (Button, Container, etc.)
└── lib/
    └── constants.ts  # Site content — edit text, links, and data here
```

## Customization

Most content lives in `src/lib/constants.ts`. Update copy, services, templates, pricing features, and contact details there without touching component code.

Brand colors are defined in `src/app/globals.css`:

- Secondary (dark): `#111827`
- Accent (lime): `#D9F99D`
- Surface (light gray): `#F9FAFB`

## Build

```bash
npm run build
npm start
```
