# Ahmed's Intranet | A.I. Personal Cloud 🌐

The personal website of Ahmed Almadhoob. A space-and-robotics corner of the web, featuring a personal introduction, technical interests, a popular quotation with Spotify soundtrack, and social profiles.

## Stack and architecture

- **SvelteKit 3 and Svelte 5**, with strict TypeScript and runes-based components.
- **Tailwind CSS 4 and daisyUI 5**, with a custom dark navy, purple, cyan, and yellow theme.
- **Bun** for dependency management and project commands.
- **Static generation** with `@sveltejs/adapter-static`: all pages are prerendered, client-side rendering is disabled, and no backend is required.
- **Lightweight assets**: local SVG icons, responsive WebP portraits with the original JPEG fallback, system fonts, and CSS-based decoration.
- **Accessible by design**: semantic sections, labelled links, keyboard focus styles, reduced-motion support, and content that works without first-party JavaScript. The Spotify iframe runs independently.

## Getting started

Use Bun and Node.js 24 or later. Node.js is used by the production verification script.

```sh
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed by Vite. To launch the browser automatically, use `bun run dev -- --open`.

## Build and preview

```sh
bun run build
bun run preview
```

The production site is written to `build/`. Deploy that directory to a static host; no Node.js server is needed in production.

The configured canonical origin is `https://www.ai-personal.cloud/`. The build includes the custom-domain `CNAME`, `robots.txt`, and sitemap. Hosting, DNS, and HTTPS configuration are managed separately. If the domain changes, update the origin in `src/lib/data/site.ts` and the matching files in `static/`.

## Checks and tests

Install the browser used by the test suites once:

```sh
bunx playwright install chromium
```

Run the project checks:

```sh
bun run check
bun run lint
bun run test
bun run test:static
```

- `check`: Svelte and TypeScript diagnostics.
- `lint`: Prettier and ESLint checks for application code and configuration.
- `test`: Vitest unit tests and Svelte component tests in headless Chromium.
- `test:static`: builds the site, serves the generated files locally, and checks responsive layouts, no-JavaScript rendering, local assets, metadata, external-link attributes, keyboard navigation, 200% text zoom, and reduced motion. It also runs automated WCAG A/AA checks on the first-party page, excluding the third-party Spotify iframe's contents, and writes review screenshots to a temporary directory.

Use `bun run format` to format application files. The application formatting scripts intentionally exclude documentation and installed agent skills; format these two project documents explicitly when editing them:

```sh
bunx prettier --write AGENTS.md README.md
```

## Where to make changes

- `src/routes/+page.svelte`: page composition, introduction markup, section order, metadata, Spotify embed, and footer.
- `src/lib/data/site.ts`: site identity, email, canonical origin, license URL, technology links, social profiles, structured data, and deterministic word-cloud data.
- `src/lib/components/`: shared external links, technology lists, word cloud, and social links.
- `src/routes/layout.css`: custom daisyUI theme, typography, decorations, and responsive styles. Tailwind scans application sources rather than the installed skill documentation.
- `src/routes/+layout.ts`: prerendering, disabled client-side rendering, and trailing-slash policy.
- `vite.config.ts`: static adapter, Svelte compiler options, and Vitest browser/server projects.
- `static/`: original portrait, optimized images, icons, favicon, domain files, sitemap, and [third-party credits](./static/credits.txt).
- `scripts/verify-static.mjs`: production-output and browser verification.
- [AGENTS.md](./AGENTS.md): project conventions and instructions for coding agents.

Keep the rendered copy, shared data, and relevant tests synchronized when changing content. Preserve local logo attribution and update the credits when replacing or adding third-party artwork.

## Credits and license

See [third-party artwork and content credits](./static/credits.txt) for icon sources, artwork provenance, and separate rights notices. The website footer links to the same file at `/credits.txt`; SvelteKit serves files from `static/` without the directory prefix.

[Copyleft](https://en.wikipedia.org/wiki/Copyleft) © 2026 Ahmed Almadhoob. Some rights reserved. Except where otherwise noted, content on this site is licensed under [Creative Commons BY-SA 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

Third-party logos, trademarks, the film quotation, and Spotify content retain their respective rights and are not relicensed by this notice.
