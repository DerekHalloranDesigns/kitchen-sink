# Kitchen Sink — Design System Starter

A React + TypeScript + SCSS starter kit for building a component-based design system, modelled after [uzzell.codes/demo/nrg-assessment](https://uzzell.codes/demo/nrg-assessment/).

---

## Project Goal

Recreate the NRG Assessment design system page inside this React + TypeScript starter kit — using SCSS, CSS custom properties (design tokens), and accessible, reusable components.

---

## Tech Stack

| Tool           | Purpose                            |
| -------------- | ---------------------------------- |
| React          | UI rendering                       |
| TypeScript     | Type-safe props and component APIs |
| SCSS           | Styling (no CSS-in-JS)             |
| Webpack        | Bundling                           |
| Jest + ts-jest | Unit testing                       |

No additional libraries are added unless explicitly discussed and justified first.

---

## File Structure

```
src/
├── styles/
│   ├── _tokens.scss       # CSS custom properties (design tokens) — defined once here
│   ├── _base.scss         # Resets, typography, body defaults — imports tokens
│   └── global.scss        # Entry point for global styles — imports base + tokens
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.scss
│   │   └── Button.test.tsx
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.scss
│   │   └── Input.test.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.scss
│   │   └── Card.test.tsx
│   └── ...
│
├── App.tsx                # Root component — imports global.scss, composes page
└── index.tsx              # React mount point
```

---

## Architecture Decisions

### Design Tokens (`_tokens.scss`)

All colour, spacing, typography, border-radius, and shadow values are defined here as CSS custom properties on `:root`. Every component consumes these via `var(--token-name)` — change a token here, it cascades everywhere.

### Base Styles (`_base.scss`)

Box-sizing reset, body font defaults, and baseline typography. Imports tokens so it can reference them. Not component-specific.

### Component Styles (co-located `.scss` files)

Each component owns its own `.scss` file, sitting next to the `.tsx`. They reference global CSS variables (not SCSS variables) so they stay decoupled from the token file at the Sass level. This avoids import-order issues and keeps components portable.

### TypeScript Props for Variants

Components use typed props for visual variants and states:

```tsx
// Example
type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};
```

This makes the component API self-documenting and prevents invalid combinations.

### Accessibility by Default

- All `<input>` elements have associated `<label>` elements (via `htmlFor` / `id`)
- Buttons use native `<button>` elements (not `<div>`)
- Focus states are visible and not suppressed
- `aria-*` attributes added where semantic HTML isn't sufficient

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

## Component Inventory

Planned components (based on the NRG Assessment reference page):

- `Button` — variants: primary, secondary, ghost; sizes: sm, md, lg
- `Input` — types: text, email, password; states: default, focus, error, disabled
- `Card` — generic container with optional header/footer slots
- `Badge` — status indicators
- `Typography` — heading + body text scale
- `ColorSwatch` — token visualisation for the design system page itself

---

## Design Token Categories

Defined in `src/styles/_tokens.scss`:

- **Color** — brand palette, semantic colours (success, error, warning, info), neutrals
- **Typography** — font families, size scale, line heights, font weights
- **Spacing** — 4px base grid scale (`--space-1` through `--space-16`)
- **Border Radius** — sm, md, lg, full
- **Shadows** — elevation levels (sm, md, lg)
- **Transitions** — duration and easing defaults

---

## Contributing / Conventions

- Keep changes minimal and incremental — don't refactor unrelated files
- One component per folder
- No new libraries without discussion
- All new tokens go in `_tokens.scss` — never hardcode values in component styles
- Write a test for any component with interactive behaviour
