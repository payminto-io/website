# Payminto website design system

The website follows the current merchant/admin panel identity.
Keep the website and admin panel recognizably part of the same product.

## Shared brand

Use the navy rounded-square P mark, green corner accent, title-case Payminto wordmark, and Merchant infrastructure subtitle.
Navigation, footer, dashboard preview, and favicon use the same brand construction.
The admin panel remains the reference for future branding changes.

| Role | Value |
| --- | --- |
| Canvas | `#f7f8fa` |
| Surface | `#ffffff` |
| Secondary surface | `#f1f3f6` |
| Primary action | `#e22323` |
| Action hover | `#c91e1e` |
| Soft action surface | `#fceeea` |
| Brand navy | `#17152f` |
| Primary text | `#15171c` |
| Secondary text | `#4b5260` |
| Muted text | `#69707d` |
| Border | `#e4e7ec` |
| Success | `#22b86a` |

Primary actions have white text on red.
Inter is shared across the website and admin interface.
Headings use weight 700 and a readable 1.08 line height rather than the old billboard treatment.
Website headings remain larger than application headings to suit marketing content.
Cards use restrained 12px or 16px corners and thin borders.
Buttons use compact rounded rectangles rather than pills.

## Product preview and imagery

The dashboard preview uses real HTML and SVG with the admin panel's sidebar, coral banner, metric cards, chart, and transaction rows.
Its figures are explicitly example data.
It makes no backend requests and cannot execute payments.
Preserve the supplied explanatory artwork under `public/generated/`.
Those illustrations are secondary content, rather than the source of the website's brand palette.
The mobile companion is labeled as a concept.
The existing social preview remains available when `SITE_URL` is configured.

## Behaviour and verification

Preserve working section links, mobile navigation, keyboard FAQs, focus indicators, image alternatives, and reduced-motion support.
The payment-path animation is static on narrow or short screens.
Run lint, the production export, and the existing desktop/mobile browser tests before pushing.
Avoid unverified customer, fee, settlement-speed, or production-readiness claims.
