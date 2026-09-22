# KHONG Home UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Match the supplied KHONG architects desktop and mobile Home screenshots while preserving the existing Astro routes, metadata, assets, accessibility, and motion preferences.

**Architecture:** Keep the shared document shell and navigation in `src/layouts/Layout.astro`; keep the landing composition and contact row in `src/pages/index.astro`. Preserve the shared header position, max-width, typography, navigation conventions, and footer for all routes. Use a stable Home page-state class so Home-only mobile adjustments do not affect Project, Concept, or Prize. Use CSS media queries and the existing logo/lotus assets without adding dependencies or duplicating images.

**Tech Stack:** Astro 5, vanilla CSS, semantic HTML, existing PNG/AVIF assets.

---

### Task 1: Add a page-state hook without changing the shared layout contract

**Files:**
- Modify: `src/layouts/Layout.astro`
- Test: `npm run build`

- [ ] **Step 1: Confirm the current navigation contract**

Keep the existing `navItems` array, `active` prop, header padding, `max-width`, and right-aligned desktop navigation so every route continues to render the same shared shell. Add a page-state class to the body and a stable class to the Home nav item:

```astro
<body class={active === "Home" ? "home-page" : "inner-page"}>

...

<a
  class={`nav-link nav-home ${item.label === active ? "active" : ""}`}
  href={item.href}
>
  {item.label}
</a>
```

- [ ] **Step 2: Add Home-only mobile behavior**

In the global responsive section, scope mobile hiding/centering to `.home-page` only. Keep `.inner-page` navigation exactly as it is, including its header position, max-width, right alignment, focus outline, and active underline:

```css
@media (max-width: 768px) {
  .home-page .site-nav {
    align-items: center;
    text-align: center;
  }

  .home-page .site-nav .nav-home {
    display: none;
  }
}
```

- [ ] **Step 3: Build-check the shared shell**

Run `npm run build`.

Expected: Astro exits with code 0 and generates the existing routes without missing-component or CSS parsing errors.

### Task 2: Tune the Home desktop composition

**Files:**
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Preserve the existing semantic structure and assets**

Keep the `.landing`, `.brand-wrapper`, `.brand`, `.lotus`, and `.contact` elements, including the logo link, `aria-hidden` lotus decoration, address, and email link. Do not introduce a second logo or lotus image.

- [ ] **Step 2: Set desktop sizing from viewport geometry**

Update the Home styles so the logo remains centered in the upper-middle and the lotus occupies only the lower band:

```css
.landing {
  min-height: 0;
  padding: clamp(7rem, 15vh, 10rem) 0 clamp(16rem, 35vh, 23rem);
}

.brand {
  width: clamp(15rem, 20vw, 22rem);
  max-width: calc(100vw - 2rem);
}

.lotus {
  bottom: clamp(3rem, 7vh, 5rem);
  height: clamp(13rem, 32vh, 19rem);
  background-position: center bottom;
}
```

- [ ] **Step 3: Keep contact readable above the artwork**

Retain the fixed contact line and its opaque backdrop; keep desktop address and email on one line while allowing wrapping at narrower widths:

```css
.contact address {
  max-width: 100%;
  white-space: normal;
}
```

- [ ] **Step 4: Build-check the landing page**

Run `npm run build`.

Expected: exit code 0 with the Home page generated and no warnings that prevent output.

### Task 3: Tune the Home mobile composition without affecting inner pages

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/Layout.astro`
- Test: `npm run build`

- [ ] **Step 1: Match the phone reference spacing**

Use a mobile breakpoint that keeps the logo prominent, places the menu below it, and reserves the lower band for lotus artwork and contact details:

```css
@media (max-width: 768px) {
  .home-page .landing {
    min-height: 46rem;
    height: auto;
    padding: 4.8rem 1rem 16rem;
    align-items: flex-start;
  }

  .home-page .brand-wrapper {
    margin-top: 1.5rem;
  }

  .home-page .brand {
    width: min(78vw, 20rem);
  }

  .home-page .lotus {
    bottom: 4.6rem;
    height: 13rem;
    background-size: auto 100%;
    background-position: center bottom;
  }

  .home-page .contact {
    bottom: 1rem;
    font-size: 0.72rem;
  }

  .home-page .contact address {
    flex-direction: column;
    gap: 0.2rem;
    white-space: normal;
  }

  .home-page .contact .sep {
    display: none;
  }
}
```

- [ ] **Step 2: Prevent mobile overflow**

Verify that Home uses natural vertical scrolling on mobile, that the lotus does not force horizontal overflow, and that the contact backdrop covers the full text block. Do not change the shared body overflow behavior for inner pages unless the current shared rule already applies to all routes by design.

- [ ] **Step 3: Build-check responsive CSS**

Run `npm run build`.

Expected: exit code 0.

### Task 4: Render and verify the visual result

**Files:**
- Test: `src/pages/index.astro`
- Test: `src/layouts/Layout.astro`

- [ ] **Step 1: Start the local Astro server**

Run `npm run dev -- --port 4321` and use the local Home URL `http://127.0.0.1:4321/`.

- [ ] **Step 2: Capture desktop and mobile views**

Capture the Home page at approximately 1440x900 and 390x844, matching the supplied screenshots. Confirm the logo, nav, lotus, and contact line do not overlap.

- [ ] **Step 3: Verify interaction and accessibility**

Check that:

- the logo returns to `/`;
- the desktop `Home` item is active and underlined;
- mobile shows only `Concept`, `Project`, and `Prize` in the navigation;
- email remains a `mailto:` link;
- keyboard focus is visible;
- reduced motion prevents the lotus reveal animation from running visibly;
- mobile has no horizontal scrollbar.

- [ ] **Step 4: Run the final build**

Run `npm run build` once more after visual adjustments.

Expected: exit code 0.

### Task 5: Review the final diff

**Files:**
- Review: `src/layouts/Layout.astro`
- Review: `src/pages/index.astro`

- [ ] **Step 1: Inspect only intended changes**

Run `git diff -- src/layouts/Layout.astro src/pages/index.astro` and confirm there are no changes to unrelated routes or assets.

- [ ] **Step 2: Check whitespace and repository state**

Run `git diff --check` and `git status --short`.

Expected: no whitespace errors; pre-existing modified files remain untouched except for the two planned Home/layout files.
