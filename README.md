# Kitchen Sink — Design System Starter

A React + TypeScript + SCSS starter kit for building a component-based design system, modelled after the [NRG Assessment style guide](https://uzzell.codes/demo/nrg-assessment/).

---

## Project Goal

Recreate the NRG Assessment design system page as a living style guide inside this React + TypeScript app — using SCSS, CSS custom properties (design tokens), and accessible, reusable components.

---

## Tech Stack

| Tool           | Purpose                            |
| -------------- | ---------------------------------- |
| React          | UI rendering                       |
| TypeScript     | Type-safe component props and APIs |
| SCSS (`@use`)  | Styling — no CSS-in-JS             |
| Webpack        | Bundling                           |
| Jest + ts-jest | Unit testing                       |

No additional libraries are added unless explicitly discussed and justified first.

---

## File Structure

```
src/
├── __tests__/                        # Jest unit tests

├── assets/                           # Static images and SVGs
│   ├── gray-curve.svg
│   ├── man-on-cpu-potatoa.png
│   ├── plug-circle-bolt.svg
│   └── woman-at-cpu.png

├── components/                       # Shared UI components
│   ├── About.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Plans.tsx
│   └── SampleComponent.tsx

├── pages/
│   └── style-guide/
│       ├── index.html                # HTML entry for the style guide page
│       └── index.tsx                 # Style guide React page (standalone root)

├── styles/
│   ├── components/                   # Per-component SCSS files
│   │   ├── About.scss
│   │   ├── Button.scss
│   │   ├── Header.scss
│   │   ├── Hero.scss
│   │   ├── Plans.scss
│   │   └── SampleComponent.scss
│   ├── pages/
│   │   └── StyleGuide.scss           # Styles scoped to the style guide page
│   ├── _base.scss                    # Resets and base typography
│   ├── _breakpoints.scss             # Breakpoint mixins
│   ├── _tokens.scss                  # CSS custom properties (design tokens)
│   ├── _utilities.scss               # Utility/helper classes
│   └── main.scss                     # Global entry point — imports all partials

├── types/
│   ├── image.d.ts                    # Type declarations for image imports
│   └── SampleComponentProps.ts       # Example prop types

├── index.html                        # Main app HTML entry
├── index.tsx                         # Main app React root
└── setupTests.ts                     # Jest setup
```

---

## Architecture

### Entry Points

There are two separate React roots:

- **`src/index.tsx`** — the main marketing app (`Header`, `Hero`, `About`, `Plans`). Imports `main.scss`.
- **`src/pages/style-guide/index.tsx`** — the standalone style guide page. Imports `main.scss` and `pages/StyleGuide.scss`.

Both use `createRoot` directly and are served as independent pages via separate Webpack entry points.

### Global Styles (`src/styles/main.scss`)

The single global import file. Uses SCSS `@use` (not `@import`) and load order is intentional:

```scss
@use "tokens"; // 1. CSS custom properties — must come first
@use "base"; // 2. Resets + typography, references token vars
@use "utilities"; // 3. Helper/utility classes
@use "components/Button";
@use "components/About";
@use "breakpoints";
```

### Design Tokens (`src/styles/_tokens.scss`)

All design decisions live here as CSS custom properties on `:root`. Components consume them via `var(--token-name)` — never hard-coded values.

Token categories:

- **Color** — brand palette: `--color-deep-sea`, `--color-orange`, `--color-gun-powder`, `--color-cloud`, `--color-white`
- **Typography** — font family, size scale (`--font-size-display` through `--font-size-caption`), line heights, font weights
- **Spacing** — 4px base grid, `--space-1` through `--space-20`
- **Layout** — `--container-max-width`, `--container-padding`
- **Border** — radius scale (`--border-radius-sm` through `--border-radius-full`), width, color
- **Shadow** — `--shadow-card`, `--shadow-hover`
- **Transitions** — `--transition-base`

### Component Styles

Each component has a co-located `.scss` file in `src/styles/components/`. They use `@use "../breakpoints" as *` for responsive mixins and reference global CSS variables directly — no SCSS variable imports needed.

### Breakpoints (`src/styles/_breakpoints.scss`)

Defines `respond-to()` mixins used across component files:

```scss
@include respond-to("mobile") {
  flex-direction: column;
}
```

### Utilities (`src/styles/_utilities.scss`)

Global single-purpose classes that mirror what the style guide documents:

- **Text alignment:** `.text-center`, `.text-left`, `.text-right`
- **Text style:** `.uppercase`, `.underline`, `.no-underline`, `.no-wrap`, `.italic`
- **Font weight:** `.bold`, `.semibold`, `.regular-weight`, `.light-weight`
- **Color:** `.color_deep-sea`, `.color_gun-powder`, `.color_white`
- **Background:** `.background-color_deep-sea`, `.background-color_bright-orange`, `.background-color_gun-powder`, `.background-color_cloud`
- **Border:** `.border-color_deep-sea`, `.border-color_gun-powder`

---

## Style Guide Page

The style guide (`src/pages/style-guide/index.tsx`) is a self-contained React page that documents the design system. It includes a collapsible sidebar nav (mobile toggle, always visible on desktop) with anchor links to each section.

Sections:

- **Typography** — font stack, font size scale with mobile/desktop values, text style utilities, font weight utilities
- **Color Schemes** — primary and secondary swatches with hex values and token variable names; background, color, and border utility class lists
- **Buttons & Anchors** — all button variants with their CSS classes and usage guidance

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Run tests
npm test

# Build for production
npm run build
```

---

## Key Conventions

- Change a value once in `_tokens.scss` — it cascades everywhere
- Never hard-code colour, spacing, or font values inside component SCSS files
- New components get a `.tsx` in `src/components/` and a `.scss` in `src/styles/components/`
- Use native semantic HTML (`<button>`, `<nav>`, `<section>`, `<label>`) before reaching for ARIA attributes
- All interactive elements must have visible focus states
- No new npm libraries without prior discussion and justification
