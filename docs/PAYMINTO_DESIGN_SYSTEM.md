# Payminto website design system

The landing page uses a minimal identity built around payment ownership and composable infrastructure.
The open-channel P retains the product initial while two separated routes suggest a payment flow.
The website keeps the admin workspace's Inter typography and product structure, with a quieter ink-and-mint palette.

## Brand assets

Use the outlined logo SVGs under `public/brand/`.
Their lettering is outlined from Inter 700, so the downloadable lockup does not require an installed font.
Use the light version on white or pale surfaces and the dark version on ink surfaces.
Use the monochrome version for one-colour reproduction.
The mark is shared by the navigation, footer, dashboard illustration, payment-flow illustration, and favicon.
Keep at least 8 units of clear space around the symbol on its 48-unit grid.
Use the mark at 24px or larger in interfaces, with 16px reserved for favicon use.
Use the full lockup at 145px wide or larger.
Transparent PNG exports are provided at 1x, 2x, 3x, and 4x for every SVG variant.
The light logo preview and small-size construction proof live in `docs/brand/`.

| Role | Value |
| --- | --- |
| Canvas and surface | `#ffffff` |
| Secondary surface | `#f5f8f7` |
| Soft mint surface | `#eaf4ef` |
| Ink and primary text | `#152f2b` |
| Primary action | `#176b55` |
| Action hover | `#125340` |
| Symbol accent | `#23846d` |
| Mint on dark surfaces | `#75d7bd` |
| Secondary text | `#4e625b` |
| Muted text | `#64756e` |
| Border | `#dce6e1` |

Primary actions use white text on deep green.
Mint is a supporting colour, rather than a full-page background or decorative gradient.
Inter is the interface and display family.
The hero uses weight 600, two concise lines, and a readable 1.12 line height.
Buttons use compact rounded rectangles, and cards use restrained corners and thin borders.

## Layout and illustrations

The first screen pairs ownership-focused copy with a compact diagram of checkout, agent payments, the self-hosted core, and connected payment rails.
The diagram is native HTML and SVG, labelled as an illustration, and contains no live payment data.
The second section presents four existing target audiences in a simple divided layout.
The fuller dashboard preview remains in the product section, with its fixed sidebar, independently scrolling workspace, and clearly labelled example data.
Provider filters, hackathon tracks, architecture, and existing product content remain available.
Preserve the supplied explanatory artwork under `public/generated/`.
The mobile companion remains labelled as a concept.
The social preview at `/brand/payminto-social.png` uses the updated identity when `SITE_URL` is configured.

## Behaviour and verification

Preserve working section links, mobile navigation, keyboard FAQs, focus indicators, image alternatives, and reduced-motion support.
The payment-path animation remains static on narrow or short screens.
Run lint, the production export, and the existing desktop/mobile browser tests before pushing.
Avoid unverified customer, fee, settlement-speed, or production-readiness claims.
