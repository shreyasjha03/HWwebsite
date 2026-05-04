<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tech Stack

- **Next.js 16.2.4** with Turbopack (App Router, React 19)
- **Tailwind CSS v4** — uses `@tailwindcss/postcss` plugin, NOT `tailwind.config.ts`. Theme defined in `globals.css` via `@theme inline`.
- **TypeScript strict**, path alias `@/*` → `./src/*`
- **Framer Motion** for animations, **lucide-react** for icons
- **clsx** + **tailwind-merge** via `cn()` utility in `src/lib/utils.ts`
- Fonts: **Sora** (headings/display), **DM Sans** (body)

## Commands

```
npm run dev      # dev server
npm run build    # production build (verifies TypeScript + compilation)
npm run start    # serve production build
npm run lint     # eslint
```

No test framework is configured. Do not invent one unless asked.

## Architecture

```
src/
├── app/                  # App Router pages + layout
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Homepage
│   ├── services/
│   │   ├── page.tsx      # Marketplace (uses useSearchParams → must be wrapped in Suspense)
│   │   └── [slug]/       # Service detail (SSG via generateStaticParams)
│   ├── mentors/
│   │   ├── page.tsx      # Mentor listing (client component, filters)
│   │   └── [id]/         # Mentor profile (SSG via generateStaticParams)
│   ├── blog/
│   │   ├── page.tsx      # Blog index
│   │   └── [slug]/       # Article (SSG via generateStaticParams)
│   ├── about/            # About page
│   └── contact/          # Lead capture form (client component)
├── components/
│   ├── ui/               # Button, Card, Badge, Input (primitive UI)
│   ├── sections/         # Homepage sections (HeroSection, etc.)
│   └── shared/           # Navbar, Footer, AnnouncementBar
├── lib/
│   ├── data/             # Static mock data: services.ts, mentors.ts, blog.ts
│   └── utils.ts          # cn(), formatPrice()
└── types/index.ts        # All TypeScript interfaces
```

## Key Conventions

- **Data layer**: All mock data lives in `src/lib/data/`. Export typed arrays + helper functions (`getServiceBySlug`, `getMentorById`, etc.). New pages should use the same pattern.
- **Client/server split**: Pages default to server components. Add `"use client"` only when using hooks (`useState`, `useSearchParams`, etc.).
- **`useSearchParams`**: Must be used inside a component wrapped in `<Suspense>` at the page level, or `next build` fails with a prerender error. See `src/app/services/page.tsx` for the pattern.
- **`generateStaticParams`**: All dynamic routes (`[slug]`, `[id]`) use this for SSG. Also export `generateMetadata` for per-page SEO.
- **Tailwind v4 theme**: Custom colors/tokens are in `globals.css` under `@theme inline`. Use the design tokens (`--color-primary`, `--font-display`, etc.) — do not hardcode hex values in components.
- **`cn()` utility**: Use `cn()` from `@/lib/utils` for conditional className merging, not template literals.
- **Page chrome**: Most pages follow the pattern: `<AnnouncementBar />` → `<Navbar />` → `<main className="flex-1">` → `<Footer />`. The layout `flex flex-col` on body ensures the footer stays at bottom.

## Verification Order

1. `npm run build` — catches TypeScript errors + compilation issues
2. `npm run lint` — ESLint

Build must pass before considering work complete.
