# KHONG Home UI Design

## Scope

Implement the supplied desktop and mobile references for the KHONG architects Home page. Keep the existing Astro project, SEO metadata, asset paths, and non-Home routes intact unless a shared layout change is required for responsive navigation.

## Visual direction

Use a restrained architectural editorial layout: white paper background, charcoal type, KHONG red mark, monospaced typography, and black botanical linework anchored along the bottom edge. The page should feel quiet and precise, with the logo and lotus illustration carrying the visual identity rather than extra decoration.

## Layout behavior

### Desktop

- Keep the primary navigation as a right-aligned vertical stack in the top-right corner.
- Show `Home`, `Project`, `Concept`, and `Prize` in that order.
- Render `Home` as the active item with darker text and an underline.
- Center the KHONG logo in the upper-middle of the viewport, leaving clear space between the logo and the lotus artwork.
- Anchor the lotus linework across the lower viewport, above the contact line.
- Keep the address and email in one centered horizontal row at the bottom.

### Mobile

- Preserve the centered logo and the vertical rhythm from the phone reference.
- Hide the redundant `Home` navigation item; the logo remains the Home link.
- Center `Concept`, `Project`, and `Prize` below the logo.
- Keep the lotus artwork full-width at the bottom with enough white space above it.
- Stack address, city, and email into readable centered lines without horizontal overflow.
- Allow the browser page to scroll naturally when the viewport is short, while keeping the intended first viewport composition.

## Shared layout contract

- Preserve the shared header position, `max-width`, horizontal padding, right-aligned desktop navigation, typography tokens, focus styles, and footer conventions for every route.
- Scope Home-only navigation changes with a page-level Home class or equivalent selector; do not globally hide or recenter navigation items for Project, Concept, or Prize.
- Keep route-specific composition in the route page. Shared layout changes are limited to adding a stable page-state hook when needed.

## Components and data

- Reuse `Layout.astro` for document metadata, focus handling, and shared navigation.
- Keep the Home-specific content in `src/pages/index.astro`.
- Reuse `/hotlink-ok/khong-logo.png` and `/hotlink-ok/lotus-linework.avif`; do not duplicate binary assets.
- Preserve the existing accessible logo link, navigation landmark, address element, email link, and reduced-motion behavior.

## Interaction and accessibility

- Navigation and email remain real links.
- The active navigation state remains visually apparent and is represented by the current page label.
- Keep visible keyboard focus styles.
- Decorative lotus artwork remains hidden from assistive technology.
- Respect `prefers-reduced-motion` for the lotus reveal and any other transitions.

## Verification

- Run `npm run build` after implementation.
- Start the Astro dev server and inspect the Home page at desktop and mobile viewport sizes.
- Verify there is no horizontal overflow on mobile, the footer text remains readable, and the logo/lotus composition does not overlap navigation or contact information.

## Out of scope

- Redesigning Project, Concept, or Prize page content.
- Replacing the existing logo or lotus artwork.
- Adding a new dependency or CMS integration.
