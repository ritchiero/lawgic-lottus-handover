# Diestra — Lawgic Diestra Design System

> **Lawgic Diestra** — *Educación especializada en IA para profesionales del derecho.*
> No vendemos tecnología: hacemos que los despachos la dominen con criterio.

The **Diestra** design system encodes the Lawgic Diestra brand — an authoritative, calm, education-first identity for a company that teaches legal professionals to apply AI with judgment. This repository is both the living style guide (Design System tab) and a component library consumable by other projects.

**Essence**
- La IA es una **habilidad profesional**.
- No vendemos tecnología, vendemos **destreza**.
- **Educación especializada** para despachos.

**Headline voice:** *"IA con criterio. Derecho con ventaja."*

---

## Sources

This system was built from the brand's two visual-identity boards (uploaded by the user):
- `uploads/ChatGPT Image 15 jun 2026, 09_22_18.png` — Sistema de identidad visual (logo, color, type, components, applications, tone).
- `uploads/ChatGPT Image 15 jun 2026, 09_24_31.png` — Sistema de diseño documental (covers, letterhead, PPT, editorial, applications).

No codebase, Figma file, or vector logo/font files were provided. Where a bespoke asset had no vector source, it was faithfully reconstructed and flagged (see **Caveats**).

---

## Content fundamentals

**Language:** Spanish (Spain/LatAm-neutral), professional register. Most copy is in Spanish; keep it so.

**Tone:** authoritative but encouraging; precise, never hype. The brand sells *mastery*, not software. Copy is confident and plainspoken — short declaratives, often in rhythmic triplets:
- *"La destreza no es innata. Se entrena. Se practica. Se convierte en ventaja."*
- *"IA con criterio. Derecho con ventaja."*

**Person:** speaks **to** the professional ("tu despacho", "tu práctica") and **about** the brand in the first person plural ("hacemos", "no vendemos"). Avoid "yo".

**Casing:** sentence case for headings and UI. UPPERCASE only for eyebrows/section labels and CTAs (with wide tracking). Never all-caps body.

**Numerals & data:** confident, specific, tabular ("−50%", "+150%", "94%", "2h 45m", "8 lecciones"). Positive deltas in green, negative in muted red. Always tabular-nums in tables.

**Vocabulary:** the six principles double as a lexicon — *criterio, método, destreza, claridad, práctica, ventaja*. Lean on them.

**Emoji:** none. The brand uses a four-point **sparkle** glyph as a motif (for "new"/AI), never emoji.

**Punctuation/vibe:** calm, generous whitespace; periods over exclamation marks; no jargon-dumping. Education > marketing.

---

## Visual foundations

**Color.** Deep navy (`#0B1D3A` *Azul Profundo*) and near-black graphite anchor everything; white is the dominant surface. Four soft pastels — **menta** `#C8F2E6`, **azul bruma** `#D6E6FF`, **lila suave** `#CDBCF7`, **lima acento** `#D6F56A` — provide calm support. **Lime is the only energetic accent**: reserve it for one CTA per view, "new" tags, progress and section numbers on dark. The signature **brand gradient** runs mint → bruma → lila → lime and appears on hero washes, module-card headers, quote cards and cover slides.

**Type.** Two families. **Quattrocento** (a Garalde old-style serif — warm, sturdy, editorial-authoritative) is used **only** for titles and pull-quotes. **Google Sans Flex** does all the work: H1/H2/H3 are Google Sans Flex SemiBold with tight tracking; body is Google Sans Flex Regular at generous 1.7 line-height; eyebrows and CTAs are uppercase with wide tracking. The logo wordmark sets "Lawgic" in Google Sans Flex 800 and "Diestra" in the display serif.

**Spacing & layout.** 8-pt rhythm. Centered max-width containers (~1180px) with 32px gutters. Generous vertical padding between sections (80–96px). Content is left-aligned in heroes, centered for value-prop rows.

**Backgrounds.** Mostly flat white or the very subtle `--gradient-soft` wash; dark sections use `--gradient-ink` (navy). No photography baked into the system. The **acento-pixel** motif (a cross built from small squares in brand colors) and a subtle **leaf pattern** are the recurring decorations — always peripheral, never load-bearing.

**Corners & cards.** Cards are white, 16px radius, 1px hairline border (`--border-subtle`) + a soft navy-tinted shadow (`--shadow-sm`), lifting to `--shadow-md` and translateY(-3px) on hover. Controls (buttons/inputs) round at 10px; tags, avatars and the "new" badge are fully round pills. Feature cards / modals / quote cards round at 24px.

**Shadows.** Soft and low-contrast, tinted with navy (`rgba(11,29,58,…)`) — never black, never harsh. Five steps xs→xl.

**Borders.** Hairline 1px neutral for structure; 1.5px navy for emphasis (secondary buttons, focused inputs). On dark surfaces, `rgba(255,255,255,0.12)`.

**Motion.** Restrained and quick. `--ease-standard` / `--ease-out`, 130–360ms. Hover = lift + shadow or subtle background shift; press = `scale(0.975)`. No bounces, no decorative looping animation. Focus shows a soft navy ring (`--focus-ring`).

**Transparency & blur.** Used for sticky nav/topbars only: ~85% white with `backdrop-filter: blur()`. Pastel "soft" tints (`--mint-bg`, `--lila-bg`, …) back icon chips and active nav items.

**Imagery vibe.** Cool, light, optimistic — pastel gradients on near-white, navy ink. Clean, minimalist, professional; no grain, no warm filters.

---

## Iconography

Thin **line icons**, ~1.7px stroke, rounded joins/caps, navy (`currentColor`) — the Feather/Lucide visual language. The six brand principles each have one (compass = *criterio*, 2×2 grid = *método*, sparkle = *destreza*, target = *claridad*, leaf = *práctica*, bar-chart = *ventaja*). The four-point **sparkle** is filled and signals AI / "new".

No icon font or sprite was provided. The specimen cards and kits use small inline SVGs hand-matched to the brand's stroke weight and style. **For new work, use [Lucide](https://lucide.dev) at stroke-width 1.7** — it matches this set closely (`compass`, `layout-grid`, `sparkles`, `target`, `leaf`, `bar-chart-3`, `arrow-right`, `eye`). Keep icons monochrome navy; let the pastel chip behind them carry color. Unicode/emoji are not used.

**Assets** (`assets/`): `logo-lockup.svg` — the **official** full vector lockup (Lawgic Diestra, transparent, navy `#061B4A`; recolor to white on dark with `filter: brightness(0) invert(1)`). `isotipo.svg` — the official laurel mark alone, recolorable. `isotipo-navy.png` / `isotipo-white.png` — raster fallbacks for contexts that can't use SVG. The `Logo` / `Isotipo` React components render the official mark inline and recolor by tone.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this one file). `@import`s all tokens + `base.css`.
- `base.css` — element resets + brand utility classes (`.dx-display`, `.dx-eyebrow`, `.dx-gradient`, …).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — isotipo PNGs (navy / white).
- `SKILL.md` — Agent-Skill front matter for downstream use.

**Components** (`components/`, namespace `window.DiestraDesignSystem_bce2f6`)
- `brand/` — **Logo**, **Isotipo**, **PixelMotif**
- `forms/` — **Button**, **Input**, **Select**, **Checkbox**, **Switch**
- `display/` — **Badge**, **Card**, **ModuleCard**, **QuoteCard**, **ProgressBar**
- `navigation/` — **Tabs**
- Each dir has a `*.card.html` (@dsCard) showcase. Each component has `.jsx` + `.d.ts` + `.prompt.md`.

**Foundations** (`guidelines/foundations/`) — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `website/` — marketing homepage (`index.html` + `site.jsx`).
- `platform/` — learning platform: login → dashboard → lesson (`index.html` + `app.jsx`).

**Slides** (`slides/`) — `title`, `content`, `section`, `data` (1280×720, self-contained).

---

## Caveats

- **Brand fonts (client direction).** Display serif is **Quattrocento**; UI/sans is **Google Sans Flex** — both Google Fonts, set in `tokens/fonts.css`. (These replaced the earlier "Diestra Display"→Playfair and Inter choices.) Swap `--font-display` / `--font-sans` + the `@import` if direction changes.tch. Swap `--font-display` + the import in `tokens/fonts.css` when the licensed font arrives.
- **Logo: official vector, fully integrated.** `assets/logo-lockup.svg` (the client-supplied vector lockup, recolored to brand navy) is the source of truth. The `Logo` component renders this exact vector inline — recolored by `tone` (navy / inverse-white / graphite) and cropped to the wordmark for the `stacked` variant — so every `<Logo/>` across the system uses the real brand mark and typeface. `Isotipo` ships the laurel mark alone. Recolor to white on dark with `filter: brightness(0) invert(1)` when using the raw SVG in an `<img>`.
- **Icons are matched, not original.** Inline SVGs / Lucide stand in for the brand's icon set; provide the source set if one exists.
- Fonts load via Google Fonts `@import` (no self-hosted binaries shipped).
