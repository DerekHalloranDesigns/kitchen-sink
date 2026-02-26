# Kitchen Sink

Kitchen Sink is a React + TypeScript design system starter built around a token-first styling architecture using SCSS and CSS custom properties.

It functions as both a component system and a living style guide.

---

## Tech Stack

- React 18
- TypeScript
- SCSS (`@use` module architecture)
- CSS Custom Properties (Design Tokens)
- Webpack (multi-entry configuration)
- Jest

---

## Architecture

### Design Tokens

All visual decisions are centralized in `src/styles/_tokens.scss` as CSS custom properties defined on `:root`.

Token categories include:

- Color
- Typography scale
- Spacing system (4px grid)
- Layout constraints
- Border radius and width
- Elevation (shadow scale)
- Motion (transitions)

Components consume tokens via `var(--token-name)` and do not use hard-coded values.

---

### Style Layering

Global styling is managed through `main.scss` using SCSS `@use` in controlled order:

1. Tokens
2. Base styles
3. Utilities
4. Components
5. Page-level styles

This ensures predictable cascade behavior and avoids specificity conflicts.

---

### Component Structure

- React components: `src/components/`
- Component styles: `src/styles/components/`
- Breakpoint mixins: `src/styles/_breakpoints.scss`
- Utilities: `src/styles/_utilities.scss`

Styles are modularized and reference global tokens directly.

---

### Multi-Entry Setup

The project includes two independent React entry points:

- `src/index.tsx` (main surface)
- `src/pages/style-guide/index.tsx` (standalone style guide)

Each is bundled via separate Webpack entry points.

---

## File Structure

```
src/
├── __tests__/
├── assets/
├── components/
├── pages/
│   └── style-guide/
├── styles/
│   ├── components/
│   ├── pages/
│   ├── _base.scss
│   ├── _breakpoints.scss
│   ├── _tokens.scss
│   ├── _utilities.scss
│   └── main.scss
├── types/
├── index.html
├── index.tsx
└── setupTests.ts
```

---

## Conventions

- Design tokens are the single source of truth
- No raw color, spacing, or font values inside component styles
- Semantic HTML is preferred over ARIA overrides
- All interactive elements include visible focus states

---

## Getting Started

```bash
npm install
npm start
npm test
npm run build
```
