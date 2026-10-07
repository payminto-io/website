# Payminto website

The standalone Payminto landing page, extracted from the existing landing project with its original generated artwork and purple design system.
The page introduces private, self-hosted card and crypto payment infrastructure for businesses, developers, and AI agent builders.

This repository contains the marketing website only.
It has no payment backend, merchant dashboard, database connection, wallet credentials, or live payment execution.

## Run locally

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Build and preview

```sh
npm run build
npm start
```

The build exports the site into `out/`.
The preview server runs at http://127.0.0.1:3107; set `PORT` to change it.
Deploy the contents of `out/` to a static web host, or import this repository into a Next.js-compatible hosting service with `npm run build` as the build command.
No environment variables are required.
Optionally set `SITE_URL` to your verified public origin at build time to enable the supplied social preview with an absolute image URL.
Without a public origin, image metadata is omitted so share cards never point at localhost.
`npm start` is a local preview server, not a production deployment service.

## Verify

```sh
npm run lint
npm run build
npx playwright install chromium
npm test
```

Browser tests exercise the production export on desktop and mobile: image loading, internal link targets, horizontal overflow, keyboard FAQ interaction, mobile navigation, and reduced-motion behavior.
GitHub Actions runs these checks on pushes and pull requests.

## Edit the landing page

- `app/page.tsx`: navigation, positioning, target audiences, card-to-crypto, custody comparison, architecture, self-hosting overview, features, payment flow, agent integration, product illustrations, FAQ, and calls to action.
- `app/globals.css`: purple theme, typography, responsive layout, and accessibility.
- `app/layout.tsx`: page metadata, fonts, and favicon.
- `public/generated/`: original generated illustrations and the existing social preview.
- `docs/PAYMINTO_DESIGN_SYSTEM.md`: original visual reference.

Dashboard and checkout artwork are illustrative, not live product screenshots.
The mobile companion is explicitly presented as a concept.
All calls to action lead to real sections on this page; add verified product documentation or release URLs when those destinations are available.
There are no placeholder install commands, fabricated press endorsements, testimonials, or blanket zero-fee claims.
Card providers and blockchain networks remain external payment rails, with their own requirements and costs.
