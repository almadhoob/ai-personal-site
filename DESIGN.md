---
name: Ahmed's Intranet
description: The Orbital Observatory — A space-and-robotics personal sanctuary for a transnational poet and technologist
colors:
  primary: '#f6d365'
  secondary: '#b8a5ff'
  tertiary: '#74dff6'
  base-100: '#0b1026'
  base-200: '#17152f'
  base-300: '#242144'
  base-content: '#f1f0fa'
  muted: '#aaaec7'
  line: '#35344f'
  success: '#9cdbb5'
  error: '#ff9eaf'
  badge-border: '#45415e'
typography:
  display:
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    fontSize: 'clamp(3.7rem, 7.6vw, 6.6rem)'
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  headline:
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    fontSize: 'clamp(2rem, 3.8vw, 3.05rem)'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.03em'
  title:
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    fontSize: '1.05rem'
    fontWeight: 550
    lineHeight: 1.4
    letterSpacing: 'normal'
  body:
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    fontSize: '0.95rem'
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 'normal'
  label:
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace"
    fontSize: '0.62rem'
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: '0.14em'
rounded:
  sm: '4px'
  field: '8px'
  card-tech: '9px'
  md: '12px'
  lg: '14px'
  box: '24px'
  pod: '26px'
  full: '9999px'
spacing:
  xs: '8px'
  sm: '12px'
  md: '24px'
  lg: '48px'
  xl: '96px'
components:
  badge-outline:
    backgroundColor: '#24214455'
    textColor: '#c5b9e9'
    rounded: '{rounded.full}'
    padding: '5px 10px'
  distro-card:
    backgroundColor: '{colors.base-200}'
    textColor: '{colors.base-content}'
    rounded: '{rounded.lg}'
    padding: '34px 18px 28px'
  technology-card:
    backgroundColor: '#24214445'
    textColor: '{colors.base-content}'
    rounded: '9px'
    padding: '23px 6px 18px'
  follow-link:
    backgroundColor: '#242144a0'
    textColor: '{colors.base-content}'
    rounded: '{rounded.md}'
    padding: '26px'
  btn-ghost-square:
    backgroundColor: 'transparent'
    textColor: '{colors.base-content}'
    rounded: '{rounded.full}'
    size: '46px'
---

# Design System: Ahmed's Intranet

## Overview

**Creative North Star: "The Orbital Observatory"**

The Orbital Observatory is an interstellar telemetry deck where human poetry and cybernetic exploration coexist under distant starfields. Drawing inspiration from deep-space astronomy, planetary cartography, and cybernetic interfaces, the visual world establishes a contemplative digital sanctuary for Ahmed Almadhoob. It pairs dark atmospheric depth with meticulous typographic rhythm, bridging Middle Eastern poetic warmth and the precision of Unix-like systems.

Surfaces inhabit a deep midnight canvas illuminated by gentle radial nebula gradients and quiet starfield coordinates. Content is organized into measured telemetry transmissions, balanced between tactile instrument cards and organic celestial silhouettes.

The design explicitly rejects generic corporate SaaS minimalism, sterile dashboard templates, and ungrounded hyper-busy retro-futurism. In their place, it practices contemplative poetic restraint: high-contrast legibility, zero-JS resilience, and purposeful, memorable ornamentation.

**Key Characteristics:**

- **Atmospheric Cosmic Canvas**: Deep navy background (#0b1026) textured with subtle nebula luminescence and starry coordinates.
- **Solar Flare & Ion Accents**: Warm Starlight Gold (#f6d365) and Nebula Lavender (#b8a5ff) anchored by Electric Cyan (#74dff6) telemetry signals.
- **Tripartite Typographic Harmony**: Modern sans-serif structure, classical literary serif warmth, and monospace instrumentation.
- **Kinetic Hover Feedback**: Translucent flat panels that subtly elevate (-3px to -4px) and illuminate their borders upon interaction.
- **Intentional Celestial Asymmetry**: Organic orbital curves and tilted planetoid frames serving as signature framing anchors.

## Colors

The palette draws from deep astronomical observations: Solar Flare and Ion Drive radiance set against a Deep Cosmic Abyss.

### Primary

- **Starlight Gold** (`#f6d365`): High-significance celestial beacon. Reserved for the landing hero title star, the primary email beacon link, and playful robot sticker highlights.

### Secondary

- **Nebula Lavender** (`#b8a5ff`): Ethereal twilight accent. Anchors the wordmark, subtitle headings, text selection highlights, planetary orbit rings, quote citation rules, and card hover borders.

### Tertiary

- **Electric Cyan** (`#74dff6`): Active ion telemetry signal. Exclusively powers live telemetry dots, focus-visible outlines, skip-link background, and robot optic sensors.

### Neutral

- **Deep Cosmic Abyss** (`#0b1026`): Canvas base background (`--color-base-100`).
- **Nebula Trench** (`#17152f`): Secondary recessed foundation (`--color-base-200`) and lower gradient stop for cards.
- **Cyber Chamber** (`#242144`): Mid-depth interactive surface (`--color-base-300`, `--color-neutral`) for container fills and hover backgrounds.
- **Orbit Boundary Line** (`#35344f`): Structural hairline borders (`--line`) and transmission divider rules.
- **Starlight White** (`#f1f0fa`): High-contrast primary reading text (`--color-base-content`).
- **Interstellar Ash** (`#aaaec7`): Secondary reading text, telemetry coordinates, subtitles, and captions (`--muted`).
- **Spectral Mint** (`#9cdbb5`): Semantic success indicators (`--color-success`).
- **Supernova Coral** (`#ff9eaf`): Semantic error alerts (`--color-error`).

### Named Rules

**The Rarity of Solar Gold Rule.** Starlight Gold (`#f6d365`) is strictly reserved for high-significance landmarks (the hero star, the primary contact beacon, and robot accents). It must never exceed 5% of any given view.

**The Beacon Signal Rule.** Electric Cyan (`#74dff6`) is the exclusive signifier of active telemetry, keyboard focus, and operational signals. It never serves as broad container fills.

## Typography

**Display Font:** `'Inter', 'Segoe UI', system-ui, sans-serif`  
**Body Font:** `'Inter', 'Segoe UI', system-ui, sans-serif`  
**Serif Accent Font:** `Georgia, 'Times New Roman', serif`  
**Label / Mono Font:** `'SFMono-Regular', Consolas, 'Liberation Mono', monospace`

**Character:** A deliberate tripartite harmony: Inter commands structural clarity and monumental display hierarchy; Georgia infuses humanist warmth into philosophical passages and literary quotations; SFMono delivers cold scientific precision for telemetry, coordinates, and metadata.

### Hierarchy

- **Display** (weight 750, `clamp(3.7rem, 7.6vw, 6.6rem)`, line-height 1.02, letter-spacing -0.035em): Monumental hero wordmark and main page title.
- **Headline** (weight 600, `clamp(2rem, 3.8vw, 3.05rem)`, line-height 1.2, letter-spacing -0.03em): Major section headings (H2).
- **Title** (weight 550, `1.05rem`, line-height 1.4): Card headings, distribution names, and subsection titles (H3).
- **Body** (weight 400, `clamp(1.15rem, 2.1vw, 1.7rem)` for intro / `0.95rem` standard, line-height 1.8–1.9): Narrative reading prose and descriptive copy; constrained to 65–75ch for optimal reading comfort.
- **Label** (weight 400, `0.52rem` to `0.7rem`, letter-spacing 0.11em to 0.18em, uppercase): Telemetry coordinates, section eyebrows, badges, transmission divider metadata, and timestamps.

### Named Rules

**The Tripartite Division Rule.** Every text element belongs to exactly one of three voices: Structural (Inter sans-serif), Humanist (Georgia serif italic for poetry and quotes), or Telemetry (SFMono monospace uppercase for data and coordinates). Mixing their semantic purposes is prohibited.

## Layout

The spatial model relies on a single-column, centered observation deck (`.site-shell`) clamped to `min(1180px, calc(100% - 96px))` on wide viewports, systematically adapting down to `calc(100% - 64px)` at 1000px, `calc(100% - 40px)` at 700px, and `calc(100% - 32px)` at 380px.

Content follows a strict rhythmic grid:

- **Hero Section**: Two-column asymmetric balance (`1.25fr 1fr`) pairing typography with the orbital portrait system; collapses to single column at 700px.
- **Distribution Grid**: 3-column instrument layout (`repeat(3, minmax(0, 1fr))`) with 24px gutters; collapses to single column on mobile.
- **Technology Grid**: 7-column matrix (`repeat(7, minmax(0, 1fr))`) with 12px gutters; steps down to 4 columns at 860px/700px and 3 columns at 380px.
- **Social Grid**: 2-column featured cards (`repeat(2, minmax(0, 1fr))`) with 20px gutters; collapses to single column at 700px.
- **Rhythm**: Spacing increments anchor to 8px base units (`8px`, `12px`, `24px`, `48px`, `96px`).

## Elevation & Depth

Surfaces rely on atmospheric cosmic layering and translucency rather than physical skeuomorphic shadows. The canvas utilizes deep dark radial nebula gradients overlaid with procedural starfield dust. Panels float directly upon this cosmic field, establishing depth through translucency (`background: linear-gradient(130deg, #24214470, #17152f55)`) and delicate hairline boundary borders (`#35344f` and `#514667`).

### Shadow Vocabulary

- **Portrait Cosmic Aura** (`box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25)`): Deep atmospheric shadow grounding the hero portrait assembly.
- **Constellation Diffuse Glow** (`box-shadow: inset 0 0 90px rgba(184, 165, 255, 0.03), 0 0 80px rgba(184, 165, 255, 0.02)`): Ambient internal and external lavender radiance on the interest cloud shell.
- **Beacon Radiant Pulse** (`box-shadow: 0 0 12px rgba(116, 223, 246, 0.47)`): Luminous glow around the 6px cyan signal dot.
- **Mascot Sticker Drop** (`filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.31))`): Tactile physical drop shadow for the tilted robot graphic.

### Named Rules

**The Atmospheric Radiance Rule.** Elevation is expressed through tonal luminosity and radial nebula translucency, not heavy drop shadows. Surfaces glow from within the cosmic dark.

**The Kinetic Hover-Lift Rule.** Interactive cards rest flat on the cosmic canvas; hovering triggers an immediate -3px to -4px translateY lift and a border shift toward Nebula Lavender (`#b8a5ff99`).

## Shapes

The form language balances crisp rectilinear telemetry cards with organic, asymmetrical celestial silhouettes.

- **Small Radius** (`4px`): Interactive link focus rings.
- **Field Radius** (`8px`–`9px`): Technology grid buttons and compact utility controls.
- **Card Radius** (`12px`–`14px`): Standard content cards, distribution containers, and media embeds.
- **Box Radius** (`24px`): Structural dialogs and large panels (`--radius-box`).
- **Pill / Circular** (`9999px` / `50%`): Topic badges, signal beacons, icon buttons, and orbit rings.

### Signature Geometries

- **The Tilted Portrait Frame**: `border-radius: 44% 44% 26px 26px` with `transform: rotate(3deg)`, creating an organic cyber-pod aperture.
- **The Constellation Cloud Shell**: `border-radius: 35% 45% 35% 45% / 10% 15% 10% 15%` establishing an irregular organic nebula boundary.
- **Planetary Orbits**: Hairline elliptical rings (`border: 1px solid #b8a5ff40`) tilted at -15° and -20° angles orbiting primary focal points.

## Components

Components are styled as modular telemetry units with clear tactile and visual boundaries.

### Buttons

- **Shape**: Circular pill or rounded square (`46px` diameter, `50%` radius).
- **Social Icon Button**: Ghost variant (`btn btn-square btn-ghost`), transparent at rest, `#242144` background on hover.
- **Focus State**: `outline: 2px solid #74dff6; outline-offset: 6px; border-radius: 4px;`.

### Chips & Badges

- **Style**: DaisyUI outline badge with monospace uppercase text (`5px 10px` padding, `#24214455` background, `#45415e` border, `#c5b9e9` text).
- **Hover**: Smooth transition to Nebula Lavender border (`#b8a5ff`).

### Cards & Containers

- **Distribution Card**: `14px` radius, `34px 18px 28px` padding, `linear-gradient(130deg, #24214470, #17152f55)` background, `1px solid #35344f` border. On hover: lifts `-4px` and border brightens to `#b8a5ff99`.
- **Technology Card**: `9px` radius, `23px 6px 18px` padding, `#24214445` background, `1px solid #35344f` border. On hover: background shifts to `#242144`.
- **Featured Social Card**: `12px` radius, `26px` padding, `linear-gradient(125deg, #242144a0, #17152f70)` background, `1px solid #514667` border. On hover: lifts `-3px` and border brightens to `#b8a5ff`.

### Navigation

- **Masthead**: Height `110px` (`88px` mobile), anchored by the giant `2.9rem` violet/cyan `ai.` symbol.
- **Links**: Interstellar Ash (`#aaaec7`) text, transitioning to Starlight White (`#f1f0fa`) on hover.
- **Beacon Action**: "Hello, World!" contact beacon with persistent lavender arrow indicator.

### Signature Component: The Constellation Word Cloud

A deterministic dynamic cluster of interest tags rendered within the organic cloud shell. Tags are distributed across 4 font sizes (`0.82rem` to `1.7rem`) and 4 celestial color tones (ash, lavender, cyan, gold). Hovering illuminates the tag with Starlight White text and a diffused lavender text-shadow (`0 0 15px #b8a5ff99`).

## Do's and Don'ts

### Do:

- **Do** strictly maintain the Tripartite typographic hierarchy (Inter for structure, Georgia for literary passages, SFMono for telemetry).
- **Do** preserve the deep space `#0b1026` background and atmospheric radial nebula gradients.
- **Do** reserve `#f6d365` (Starlight Gold) for high-significance landmarks (≤5% surface area).
- **Do** ensure 100% accessible navigation and contrast without requiring client-side JavaScript.
- **Do** use `ExternalLink.svelte` for external targets with visible and screen-reader new-tab notices.

### Don't:

- **Don't** introduce generic corporate SaaS aesthetics, stark white cards, or harsh drop shadows.
- **Don't** use Electric Cyan (`#74dff6`) as broad container fills; keep it strictly as an active telemetry signal or focus ring.
- **Don't** add ungrounded, hyperactive animations that violate `prefers-reduced-motion`.
- **Don't** clutter content areas with unnecessary planetary orbits; reserve signature organic silhouettes for key anchoring landmarks.
- **Don't** load remote font CDNs; keep all typography native and local system-backed.
