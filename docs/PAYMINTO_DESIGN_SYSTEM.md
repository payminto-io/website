# Payminto landing design system

This website preserves the existing Payminto landing project's light canvas, purple identity, bold typography, and supplied generated imagery.
The page explains infrastructure ownership, payment rails, and human plus agent workflows.

## Palette

| Role | Value |
| --- | --- |
| Canvas | `#fafaf7` |
| Surface | `#ffffff` |
| Alternate surface | `#f4f5f1` |
| Lavender surface | `#ede9fe` |
| Brand | `#a78bfa` |
| Brand ink | `#3b1d8a` |
| Primary text | `#0e0f0c` |
| Secondary text | `#454745` |
| Caption text | `#656562` |

Primary buttons pair purple backgrounds with deep-purple text.
The final footer is the inverted dark surface.
Theme values live in `app/globals.css`.

## Typography and layout

Inter Black carries the display headings; Inter handles body content, and Geist Mono handles illustrative code.
Display headings retain the original tight 0.85 line height.
The desktop hero uses a 96px display size, with smaller responsive sizes for tablet and mobile.
Content sits in a 1152px container with 24px side gutters.
Major sections use generous spacing, reduced on mobile.
Rounded image frames and pill buttons preserve the original visual identity.
Purple underlines are the recurring headline accent.

## Page content

The page moves from the ownership promise and target audiences into card-to-crypto, custody comparison, architecture, self-hosting preparation, features, payment flow, dashboard illustration, AI agents, mobile concept, networks, FAQ, and final calls to action.
Navigation and calls to action resolve to sections on this page.
Do not add placeholder destinations or invented installation commands.
Card providers and blockchain networks remain external rails with their own requirements and fees.
Avoid unverified fee, settlement-speed, customer, press, licensing, or production-readiness claims.

## Imagery

The supplied assets remain under `public/generated/`.
Dashboard and checkout images are illustrations rather than live screenshots.
The mobile companion is identified as a concept.
Retain suitable supplied art instead of regenerating it during ordinary edits.
The original image-generation pipeline is outside this standalone website; generation credentials are not required to build or deploy it.
The supplied social preview is enabled only when the build has a verified `SITE_URL` origin.

## Interaction and accessibility

The mobile navigation opens and closes with a labeled button and closes after a link is selected.
FAQ controls expose their expanded state and support keyboard activation.
Provide visible focus indicators, a skip link, descriptive image alternatives, and valid internal anchors.
Lenis and GSAP effects are disabled when reduced motion is requested.
The payment-path animation also becomes a static, fully visible diagram on narrow or short screens.
Keep body content readable without requiring animation to finish.

## Validation

Run lint, the static production build, and the Playwright suite before pushing changes.
Browser checks cover the exported site on desktop and mobile, including image loading, navigation, FAQ interaction, overflow, and reduced motion.
