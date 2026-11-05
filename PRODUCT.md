# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary Audience**: Collaborators, peers, and technologist/creative networks discovering Ahmed's multifaceted identity, technical philosophies, and verified destinations.
- **Secondary Audience**: Potential engineering colleagues, open-source maintainers, and fellow netizens exploring his work in systems, electronic literature, and digital transformation.

## Product Purpose

- Serves as the personal landing page and digital sanctuary ("intranet") for Ahmed Almadhoob.
- Communicates his intellectual world: blending techno-preneurial systems thinking, electronic literature, and transnational citizenship.
- Acts as a high-integrity, authentic personal portal directing visitors to his verified social profiles, public email, distributions, and open-source tech advocacies. Success means visitors clearly grasp who Ahmed is, understand his perspective, and find legitimate paths to connect or read his work.

## Positioning

- A synthesis of a space-and-robotics cyber-world aesthetic, multilingual poetry (English, Arabic, German, Chinese), FOSS/Linux advocacy, and a static zero-JS accessibility guarantee.
- Unlike generic developer portfolios or corporate resumes, it is a personal statement of identity ("part wordsmith, part technologist, entirely cyborg") built with strict static web craftsmanship and deep humanist substance.

## Operating Context

- Modern desktop and mobile browsers across viewport sizes (responsive down to 320px).
- Visitors evaluate Ahmed's profile in diverse connectivity conditions, including privacy-conscious environments where client-side JavaScript may be disabled or blocked.
- Runs without any backend dependencies; served entirely as prerendered static assets from canonical origin `https://www.ai-personal.cloud/`.

## Capabilities and Constraints

- **Architecture**: Strict TypeScript, SvelteKit 3 and Svelte 5 (runes mode), Tailwind CSS 4, daisyUI 5, Bun, `@sveltejs/adapter-static`.
- **Static First**: All routes must prerender (`prerender = true`, `csr = false`, `trailingSlash = 'always'`). No client-side hydration, client JavaScript requirement, backend, or dynamic server components. SSR remains enabled for prerendering page content.
- **Asset Integrity**: System fonts, local SVG icons, responsive WebP/JPEG portraits (`/ai_personal.jpg`, `/images/ahmed-480.webp`, `/images/ahmed-800.webp`), and local static verification. External links use `ExternalLink.svelte` (`rel="noopener noreferrer"`, `target="_blank"`, accessible new-tab indicator).
- **Embedded Media**: Embedded Spotify player (`Interstellar - Main Theme`) with accessible fallback link.
- **Licensing**: Creative Commons BY-SA 4.0 International for site content; third-party assets and trademarks retain original rights documented in `/credits.txt`.

## Brand Commitments

- **Identity & Name**: Ahmed Almadhoob (transnational netizen, also known as ēn quán / 恩全).
- **Title & Tagline**: "Ahmed's Intranet | A.I. Personal Cloud 🌐" — "Technopreneural Thoughts, Electronic Literature, and Netizenship Issues!".
- **Voice & Tone**: Poetic, intellectual, cosmic, playful yet precise ("A mind in the clouds. Feet on Earth.", "PART WORDSMITH. PART TECHNOLOGIST. ENTIRELY CYBORG.", "hello, human!").
- **Visual Soul**: Space-and-robotics motif (starfield, orbit, cyber-world, robot sticker), deep space palette (dark navy, electric cyan, purple, warm starlight yellow).
- **Multilingual Elements**: Preserves authentic multilingual phrases and scripts (Chinese 恩全, German "auf einer Wolke am Main, mit ganzen ℤ⁺ und NULL!").

## Evidence on Hand

- Illustrated portrait and responsive variants: `/static/ai_personal.jpg`, `/static/images/ahmed-480.webp`, `/static/images/ahmed-800.webp`.
- Verified external social accounts: LinkedIn (`@almadhoob`), GitHub (`@almadhoob`), Mastodon (`@ahmedintra`), Instagram, Threads, and Bluesky in `src/lib/data/site.ts`.
- Technical stack preferences, curated Linux distributions, and open-source advocacy list in `src/lib/data/site.ts`.
- Structured Person JSON-LD markup embedded statically in head.
- Third-party credits and licenses listed in `static/credits.txt`.

## Product Principles

- **Identity Leads Over Conventional Templates**: Celebrate individuality, poetry, and technical rigor rather than flattening into a sterile, cookie-cutter tech resume.
- **Static Simplicity & Zero-JS Resilience**: Deliver full content, visual richness, and navigation purely with prerendered semantic HTML and CSS. The site must be completely usable with JavaScript turned off.
- **Radical Transparency & Provenance**: Local assets, clear third-party licensing (`/credits.txt`), deterministic content generation, and verified outgoing destination links.
- **Respectful & Focused Experience**: No trackers, no unsolicited popups, no telemetry, no remote font CDNs; instant loading and fast static delivery.

## Accessibility & Inclusion

- Strict semantic HTML (nav, main, section, header, footer, landmarks, skip link).
- Automated and manual WCAG 2.1 A/AA compliance verified via `@axe-core/playwright`.
- Full keyboard navigation with distinct, visible focus rings.
- Explicit support for `prefers-reduced-motion` and 200% text zoom.
- High color contrast across light/dark surfaces and readable typography without relying on client-side JS.
