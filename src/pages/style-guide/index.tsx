import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../../styles/main.scss";
import "../../styles/pages/StyleGuide.scss";

// ─── Data ──────────────────────────────────────────────────────────────────

const fontSizeRows = [
  {
    cls: ".display-heading",
    mobile: "4.2rem/4.6rem",
    desktop: "4.2rem/5.2rem",
    sizePx: "4.2rem",
  },
  {
    cls: ".x-lg-heading",
    mobile: "3.4rem/3.8rem",
    desktop: "3.6rem/4.0rem",
    sizePx: "3.4rem",
  },
  {
    cls: ".lg-heading",
    mobile: "2.8rem/2.8rem",
    desktop: "3.2rem/3.2rem",
    sizePx: "2.8rem",
  },
  {
    cls: ".md-heading",
    mobile: "2.0rem/2.8rem",
    desktop: "2.2rem/2.8rem",
    sizePx: "2.0rem",
  },
  {
    cls: ".sm-heading",
    mobile: "1.9rem/2.6rem",
    desktop: "same",
    sizePx: "1.9rem",
  },
  {
    cls: ".caption",
    mobile: "1.7rem/2.6rem",
    desktop: "Same",
    sizePx: "1.7rem",
  },
];

const textStyleRows = [
  { cls: "em, .italic", css: "font-style: italic" },
  { cls: ".uppercase", css: "text-transform: uppercase" },
  { cls: ".underline", css: "text-decoration: underline" },
  { cls: ".no-underline", css: "text-decoration: none" },
  { cls: ".no-wrap", css: "white-space: nowrap" },
  { cls: ".text-center", css: "text-align: center" },
  { cls: ".text-left", css: "text-align: left" },
  { cls: ".text-right", css: "text-align: right" },
];

const fontWeightRows = [
  { cls: "b, strong, .strong, .bold", css: "font-weight: 700" },
  { cls: ".semibold", css: "font-weight: 500" },
  { cls: ".regular-weight", css: "font-weight: 400" },
  { cls: ".light-weight", css: "font-weight: 300" },
];

const primarySwatches = [
  { hex: "#005876", varName: "--swatch_deep-sea", bg: "#005876" },
  { hex: "#FF5100", varName: "--swatch_bright-orange", bg: "#FF5100" },
];

const secondarySwatches = [
  { hex: "#38454A", varName: "--swatch_gun-powder", bg: "#38454A" },
  { hex: "#FAFAFA", varName: "--swatch_cloud", bg: "#FAFAFA" },
];

const backgroundClasses = [
  ".background-color_deep-sea",
  ".background-color_bright-orange",
  ".background-color_gun-powder",
  ".background-color_cloud",
];

const colorClasses = [".color_deep-sea", ".color_gun-powder", ".color_white"];

const borderClasses = [".border-color_deep-sea", ".border-color_gun-powder"];

const buttons = [
  { label: "CTA Button", cssClass: "btn-no-background", isStrong: true },
  {
    label: "CTA Button",
    cssClass: "background-color_deep-sea",
    isStrong: false,
  },
  { label: "CTA Button", cssClass: "border-color_deep-sea", isStrong: false },
  {
    label: "CTA Button",
    cssClass: "background-color_bright-orange",
    isStrong: false,
  },
  {
    label: "CTA Button",
    cssClass: "border-color_bright-orange",
    isStrong: false,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────

interface Swatch {
  hex: string;
  varName: string;
  bg: string;
}

const SwatchGroup: React.FC<{ label: string; swatches: Swatch[] }> = ({
  label,
  swatches,
}) => (
  <>
    <p className="sg-palette-label">{label}</p>
    <div className="sg-swatches">
      {swatches.map((s) => (
        <div className="sg-swatch" key={s.varName}>
          <div
            className="sg-swatch__color"
            style={{ backgroundColor: s.bg }}
            role="img"
            aria-label={`Color swatch: ${s.hex}`}
          />
          <div className="sg-swatch__info">
            <strong>{s.hex}</strong>
            <code>var({s.varName})</code>
          </div>
        </div>
      ))}
    </div>
  </>
);

// ─── Page ──────────────────────────────────────────────────────────────────

const StyleGuide: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="style-guide">
      {/* ── Hamburger button (mobile only) ── */}
      <button
        className="style-guide__menu-btn"
        aria-label={navOpen ? "Close menu" : "Open menu"}
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Overlay ── */}
      {navOpen && (
        <div
          className="style-guide__overlay"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar Nav ── */}
      <nav
        className={`style-guide__nav ${navOpen ? "is-open" : ""}`}
        aria-label="Style guide sections"
      >
        <ul>
          <li>
            <span>Typographpy</span>
            <ul>
              <li>
                <a href="#font-stack" onClick={() => setNavOpen(false)}>
                  Font Stack
                </a>
              </li>
              <li>
                <a href="#font-sizes" onClick={() => setNavOpen(false)}>
                  Font Sizes
                </a>
              </li>
              <li>
                <a href="#text-styles" onClick={() => setNavOpen(false)}>
                  Text Styles
                </a>
              </li>
              <li>
                <a href="#font-weights" onClick={() => setNavOpen(false)}>
                  Font Weights
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>Color Schemes</span>
            <ul>
              <li>
                <a href="#swatches" onClick={() => setNavOpen(false)}>
                  Swatches
                </a>
              </li>
              <li>
                <a href="#color-classes" onClick={() => setNavOpen(false)}>
                  Color Classes
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>Buttons &amp; Anchors</span>
            <ul>
              <li>
                <a href="#basic-buttons" onClick={() => setNavOpen(false)}>
                  Basic Buttons
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* ── Main Content ── */}
      <main className="style-guide__main">
        <h1>Style Guide</h1>

        {/* ════ Typography ════ */}
        <section className="sg-section" aria-labelledby="typography-heading">
          <h2 className="sg-section__title" id="typography-heading">
            Typography
          </h2>

          <div className="sg-section__subsection" id="font-stack">
            <h3 className="sg-section__subtitle">Font Stack</h3>
            <p className="sg-font-stack">
              "<strong>Roboto</strong>", Sans-serif
            </p>
          </div>

          <div className="sg-section__subsection" id="font-sizes">
            <h3 className="sg-section__subtitle">
              Font Sizes <em>(font-size/line-height)</em>
            </h3>
            <div className="sg-table-wrapper">
              <table className="sg-table" aria-label="Font size scale">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>320-639px</th>
                    <th>960px and above</th>
                  </tr>
                </thead>
                <tbody>
                  {fontSizeRows.map((row) => (
                    <tr key={row.cls}>
                      <td style={{ fontSize: row.sizePx, fontWeight: 400 }}>
                        {row.cls}
                      </td>
                      <td>{row.mobile}</td>
                      <td>{row.desktop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="sg-section__subsection" id="text-styles">
            <h3 className="sg-section__subtitle">Text Styles</h3>
            <table
              className="sg-table sg-table--text-styles"
              aria-label="Text utility classes"
            >
              <thead>
                <tr>
                  <th>Class</th>
                  <th>CSS Property</th>
                </tr>
              </thead>
              <tbody>
                {textStyleRows.map((row) => (
                  <tr key={row.cls}>
                    <td>{row.cls}</td>
                    <td>{row.css}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sg-section__subsection" id="font-weights">
            <h3 className="sg-section__subtitle">Font Weights</h3>
            <table
              className="sg-table sg-table--font-weights"
              aria-label="Font weight utility classes"
            >
              <thead>
                <tr>
                  <th>Class</th>
                  <th>CSS Property</th>
                </tr>
              </thead>
              <tbody>
                {fontWeightRows.map((row) => (
                  <tr key={row.cls}>
                    <td>{row.cls}</td>
                    <td>{row.css}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ════ Color Schemes ════ */}
        <section className="sg-section" aria-labelledby="color-heading">
          <h2 className="sg-section__title" id="color-heading">
            Color Schemes
          </h2>

          <div className="sg-section__subsection" id="swatches">
            <h3 className="sg-section__subtitle">Swatches</h3>
            <SwatchGroup label="Primary Palette" swatches={primarySwatches} />
            <SwatchGroup
              label="Secondary Palette"
              swatches={secondarySwatches}
            />
          </div>

          <div className="sg-section__subsection" id="color-classes">
            <h3 className="sg-section__subtitle">Color Classes</h3>
            <div className="sg-color-classes">
              <div className="sg-color-class-group">
                <h4>Backgrounds</h4>
                <ul>
                  {backgroundClasses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="sg-color-class-group">
                <h4>Colors</h4>
                <ul>
                  {colorClasses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="sg-color-class-group">
                <h4>Borders</h4>
                <ul>
                  {borderClasses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════ Buttons & Anchors ════ */}
        <section className="sg-section" aria-labelledby="buttons-heading">
          <h2 className="sg-section__title" id="buttons-heading">
            Buttons &amp; Anchors
          </h2>

          <div className="sg-section__subsection" id="basic-buttons">
            <h3 className="sg-section__subtitle">Basic Buttons</h3>
            <div className="sg-button-grid">
              {buttons.map((btn, i) => (
                <div className="sg-button-row" key={i}>
                  <div className="sg-button-meta">
                    <p className="sg-button-meta__label">
                      CSS Classes: <strong>.{btn.cssClass}</strong>
                    </p>
                    <p className="sg-button-meta__label">
                      Guidance: Primary CTA
                    </p>
                  </div>
                  <a href="#" className={btn.cssClass}>
                    {btn.isStrong ? <strong>{btn.label}</strong> : btn.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <StyleGuide />
  </React.StrictMode>,
);
