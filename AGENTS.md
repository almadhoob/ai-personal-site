# Agent Guide

## Project Overview

Ahmed's Intranet | A.I. Personal Cloud is Ahmed Almadhoob's personal landing page. It is a fully prerendered, responsive website with a space-and-robotics visual identity. Keep changes focused and preserve the owner's existing content and edits.

## Project Configuration

- **Language**: strict TypeScript
- **Framework**: SvelteKit 3 and Svelte 5, with runes mode enabled for application components
- **Package Manager**: Bun; keep `bun.lock` synchronized and do not introduce another lockfile
- **Styling**: Tailwind CSS 4 and daisyUI 5, configured in CSS
- **Build**: `@sveltejs/adapter-static`, configured in `vite.config.ts`
- **Quality Tools**: Prettier, ESLint, Vitest, Playwright Chromium, and axe-core

## Code and Content Map

- `src/routes/+page.svelte` owns page composition, rendered copy, metadata, the Spotify embed, and the footer.
- `src/lib/data/site.ts` owns shared identity, destinations, profiles, license URL, structured data, and deterministic word-cloud generation.
- `src/lib/components/` contains reusable external links, technology lists, the word cloud, and social links.
- `src/routes/layout.css` owns the custom daisyUI theme, global styling, decoration, and responsive rules.
- `src/routes/+layout.ts` declares the static rendering policy.
- `static/` contains public assets, domain files, and [third-party credits](./static/credits.txt). Assets are served without the `static/` prefix.
- `scripts/verify-static.mjs` validates the generated site using a local static server and Chromium.

## Implementation Constraints

- Preserve `prerender = true`, `csr = false`, and `trailingSlash = 'always'` unless the user explicitly requests an architectural change. Keep SSR enabled so the build contains the page's actual content.
- Prefer CSS and native HTML behavior over browser JavaScript. Do not add a backend, hydration requirement, analytics, remote font service, or animation framework without a clear requirement.
- Use modern Svelte 5 patterns: typed props, keyed each blocks, snippets, and runes only where reactivity is needed. Static content does not need reactive state.
- Use the existing custom daisyUI theme and semantic color tokens. Keep Tailwind's source scan limited to application files, not `.agents/` documentation.
- Keep portraits, logos, and icons local and optimized. Preserve the original portrait and maintain appropriate dimensions, alternative text, and loading behavior.
- Use the shared `ExternalLink.svelte` component for external HTTP(S) links. It adds `target="_blank"`, `rel="noopener noreferrer"`, and an accessible new-tab notice.
- Use the SvelteKit asset helper for links to static documents. The footer credits link must resolve to `/credits.txt`, never `/static/credits.txt`; the README uses the repository-relative link `./static/credits.txt`.
- Preserve multilingual content, the owner's wording, and intentional labels. Keep shared data, rendered markup, metadata, and tests synchronized when changing them.
- Maintain semantic headings, keyboard navigation, visible focus states, readable contrast, responsive layouts, and reduced-motion behavior.
- Keep generated JSON-LD serialized and HTML-sensitive characters escaped before inserting it into the document.

## Credits and Licensing

The current content license is **Creative Commons BY-SA 4.0 International**. Keep its name and URL consistent across `src/lib/data/site.ts`, the footer, README, tests, and `static/credits.txt`. Do not change licensing without an explicit request.

Third-party artwork, trademarks, quotations, and embedded media retain their own rights. Update `static/credits.txt` whenever adding or replacing third-party material, preserve required license notices, and retain the README and website footer links to those credits.

## Development and Validation

Use the existing Bun scripts rather than inventing parallel workflows:

- `bun install --frozen-lockfile` installs the locked dependencies.
- `bun run dev` starts local development.
- `bun run check` runs Svelte and TypeScript checks.
- `bun run lint` checks application formatting and ESLint rules.
- `bun run test` runs unit and Chromium component tests.
- `bun run test:static` builds and audits the production output.
- `bun run build` writes the deployable static site to `build/`.
- `bun run preview` previews the production build.
- `bun run format` formats application code and configuration.

Install the test browser with `bunx playwright install chromium` if it is missing. Use Node.js 24 or later for the static verification script.

The application lint and format scripts exclude documentation and installed skills. When changing these project documents, run `bunx prettier --check AGENTS.md README.md` or format them with `bunx prettier --write AGENTS.md README.md`.

For page or style changes, check 320px, 375px, 768px, 1024px, and 1440px layouts, no-JavaScript rendering, reduced motion, and 200% text zoom. The static audit excludes Spotify's third-party contents; retain its accessible title and normal-link fallback.

Never commit, publish, or modify DNS unless requested.

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
