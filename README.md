# Payminto website

The standalone Payminto landing page, extracted from the existing landing project with its original generated artwork and a minimal ink-and-mint identity.
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
Deploy the contents of `out/` to a static web host.
On AWS Amplify, connect this repository and the build settings in `amplify.yml` are picked up automatically (Node 22, output in `out/`).
Alternatively, import this repository into a Next.js-compatible hosting service with `npm run build` as the build command.
No environment variables are required.
Optionally set `SITE_URL` to your verified public origin at build time to enable the branded social preview with an absolute image URL.
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

- `app/page.tsx`: navigation, positioning, target audiences, payment controls, roadmap, card-to-crypto, custody comparison, architecture, self-hosting overview, features, payment flow, agent integration, product illustrations, FAQ, and calls to action.
- `app/components/providers-section.tsx`: hackathon providers, track teams, and Why Solana in one section; remove it and its `Providers` nav link after the hackathon.
- `app/components/payment-flow-preview.tsx`: compact hero illustration of the self-hosted payment flow.
- `app/components/dashboard-preview.tsx`: admin preview with a fixed sidebar and an independently scrolling workspace.
- `app/globals.css`: ink-and-mint theme, typography, responsive layout, and accessibility.
- `app/layout.tsx`: page metadata, fonts, and favicon.
- `public/brand/`: outlined SVG logo family, transparent PNG exports, and the updated social preview.
- `public/generated/`: original generated product illustrations.
- `docs/PAYMINTO_DESIGN_SYSTEM.md`: shared brand and website visual reference.

The dashboard preview uses the admin panel design with example data.
Checkout artwork is illustrative, not a live product screenshot.
The mobile companion is explicitly presented as a concept.
All calls to action lead to real sections on this page; add verified product documentation or release URLs when those destinations are available.
There are no placeholder install commands, fabricated press endorsements, testimonials, or blanket zero-fee claims.
Card providers and blockchain networks remain external payment rails, with their own requirements and costs.
