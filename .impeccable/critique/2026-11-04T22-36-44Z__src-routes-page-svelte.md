---
target: src/routes/+page.svelte
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/ams/Apps/ai-personal-site/src/routes/+page.svelte"
target_fingerprint: "sha256:d5d18c1914c7944bc6bc74b741bd01216e5d9425a96485998068441ec9b5ea5b"
target_path: /home/ams/Apps/ai-personal-site/src/routes/+page.svelte
timestamp: 2026-11-04T22-36-44Z
slug: src-routes-page-svelte
closed: true
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|:---:|---|
| 1 | Visibility of System Status | 3 | Clear telemetry markers ("01", "END OF TRANSMISSION") and accessible link labels; lacks in-page scroll indicator or Spotify playback state. |
| 2 | Match System / Real World | 3 | Domain-authentic cosmic and amateur radio metaphors; linking ordinary prose words ("Wolke", "NULL") to third-party tech docs violates narrative conventions. |
| 3 | User Control and Freedom | 3 | External destinations safely open in new tabs preserving session; mobile masthead strips section jump links, reducing navigational freedom. |
| 4 | Consistency and Standards | 3 | Cohesive tripartite typography and unified card tokens; minor syntax corruption in `layout.css:629` (`ry:focus-visible`). |
| 5 | Error Prevention | 3 | Robust static prerendering and Spotify fallback; 55 links in `WordCloud.svelte` declare `aria-describedby` pointing to missing element IDs. |
| 6 | Recognition Rather Than Recall | 2 | Core technologies feature clear SVG brand marks, but the 55-item word cloud presents bare text tags without categorizing cues or context. |
| 7 | Flexibility and Efficiency | n/a | *Not applicable to an Experience/Persuade personal landing page; keyboard accelerators and bulk actions are not relevant.* |
| 8 | Aesthetic and Minimalist Design | 3 | Exceptional cosmic atmosphere with disciplined gold accents (<5%); diluted by word-cloud choice overload and hyperlinked intro copy. |
| 9 | Error Recovery | 3 | Graceful zero-JS static fallback; explicit backup link provided for third-party Spotify player. |
| 10 | Help and Documentation | n/a | *Not applicable to a personal landing page; formal help manuals or user documentation are not relevant.* |
| **Total** | | **23/32** | **Good (71.9%)** |

---

## Design Specificity Verdict

**LLM Assessment:** Highly specific, deeply grounded, and impossible to mistake for an off-the-shelf developer template. The "Orbital Observatory" aesthetic is expressed with genuine craft: a deep midnight abyss (`#0b1026`), delicate radial nebulae, a tilted asymmetric cyber-pod portrait frame (`border-radius: 44% 44% 26px 26px; transform: rotate(3deg)`), tactile robot sticker ("hello, human!"), and rigorous telemetry metadata coordinates ("HUMAN_001 / AHMED", "TRANSMITTING FROM PLANET EARTH", "END OF TRANSMISSION"). Two content tensions pull against this coherence: embedding 7 third-party reference links into a single biographical sentence (treating poetry like Wikipedia), and an isolated Bavarian football crest ("Mia San Mia!") sitting abruptly between cosmic constellations and cinematic *Interstellar* quotations.

**Deterministic Scan:** Direct scanning of raw Svelte templates produced 0 regex findings. Scanning the compiled DOM (`build/index.html`) surfaced 81 findings across 12 rules (60 warnings, 21 advisories). Analysis against `DESIGN.md` confirms that the majority of detector "slop" warnings are **false positives** against intentional design tokens:
- `italic-serif-display` (6 warnings): Georgia serif italic is mandated by *The Tripartite Typographic Harmony Rule* to provide humanist warmth for Ahmed's poetic identity.
- `dark-glow` (3 warnings): Zero-offset cyan glows (`box-shadow: 0 0 12px rgba(116, 223, 246, 0.47)`) are strictly reserved as radio telemetry signal indicators under *The Beacon Signal Rule*.
- `hero-eyebrow-chip` (1 warning) & `numbered-section-labels` (4 advisories): Numbered transmissions (`01 / THE HUMAN...`) and tracking chips belong to the amateur radio / telemetry narrative.
- `overused-font` (1 warning): Inter is intentional under the zero-external-CDN policy for performance and privacy.
- **Genuine Detector Findings:** Flagged 55 repeated `(opens in a new tab)` screen-reader announcements inside the cloud shell container (`repeated-container-text`), severe micro-text shrinkage (`undersized-ui-text` down to 6.4px on `.destination-label` at mobile viewports), and wide tracking on non-label elements (`wide-tracking`).

**Visual Overlays:** Static build and Chromium verification confirmed 0 Axe-core WCAG A/AA violations, zero client-side JavaScript emitted, and flawless 200% text zoom.

---

## Overall Impression

Ahmed's Intranet is an exceptional, atmospheric personal artifact with genuine soul, disciplined color restraint, and superb typography. It completely avoids the bland sameness of modern portfolio templates. Its primary challenges are not aesthetic, but cognitive and architectural: the 55-item constellation tag cloud creates extreme choice overload and auditory screen-reader clutter, while biographical prose gets fragmented by hyperlinked dictionary citations.

---

## What's Working

1. **Singular Visual World ("The Orbital Observatory"):** Rejects generic developer portfolio clichés. The combination of deep space darks (`#0b1026`), radial nebulae, tilted asymmetric framing, and playful robot stickers crafts a genuine digital sanctuary with an unmistakable point of view.
2. **Tripartite Typographic Discipline:** Strict separation between structural Inter headers, literary Georgia serif italics, and scientific SFMono telemetry tags creates rich editorial rhythm while preserving 100% WCAG AAA contrast and high readability.
3. **Flawless Zero-JS Static Resilience:** Prerendered static architecture with zero client-side hydration dependencies. Delivers fast load times, semantic HTML landmarks, full keyboard focusability (`#74dff6`), and screen-reader awareness natively.

---

## Priority Issues

### [P1] Broken ARIA References & Auditory Clutter in Word Cloud
- **What:** In `src/lib/components/WordCloud.svelte:13`, every link declares `aria-describedby={word.name}`, referencing non-existent DOM element IDs. Furthermore, `ExternalLink.svelte` injects 55 identical `<span class="sr-only"> (opens in a new tab)</span>` spans inside a single container.
- **Why it matters:** Screen readers attempt to resolve 55 missing element IDs, generating accessibility errors while creating severe repetitive noise for assistive technology users.
- **Fix:** Remove `aria-describedby` and redundant `title` attributes from `WordCloud.svelte`; consolidate the new-tab notice once on the parent container.
- **Suggested command:** `$impeccable harden`

### [P1] Cognitive Overload & Uncategorized Sprawl in Constellation Word Cloud
- **What:** Section 03 exposes 55 clickable links simultaneously in an unstructured cluster, violating the Cowan working memory limit (≤4 items). It also contains a content typo (`MircoOS` instead of `MicroOS` in `site.ts:71`).
- **Why it matters:** Visitors experience scanning fatigue and decision paralysis; what should be a window into Ahmed's curiosities becomes an intimidating wall of links.
- **Fix:** Group the 55 items into 4–5 thematic semantic constellations (e.g., "Systems & Distros", "Languages & Runtimes", "Cloud & Infrastructure", "Hardware & Tools") or provide category filter pills. Correct typo to `MicroOS`.
- **Suggested command:** `$impeccable distill`

### [P2] Severe Mobile Font Shrinkage on Technology Destination Labels
- **What:** In `src/routes/layout.css:1137`, at viewports ≤700px, `.destination-label` shrinks to `0.4rem` (**6.4px**). Additionally, `layout.css:629` contains an orphaned CSS selector fragment (`ry:focus-visible {`).
- **Why it matters:** 6.4px is physically illegible on mobile devices without pinching/zooming, violating human legibility thresholds.
- **Fix:** Floor mobile destination labels at `0.62rem`–`0.65rem` (10–10.4px) and delete the corrupted CSS fragment at line 629.
- **Suggested command:** `$impeccable adapt`

### [P2] Disruptive External Link Density in Biographical Introduction
- **What:** Section 01 embeds 7 external hyperlinks within a single 40-word biographical sentence ("Social thoughts", "techno-preneurial", "transnational netizen", "Wolke", "Main", "ℤ⁺", "NULL").
- **Why it matters:** Clicking poetic words like "Wolke" or "NULL" abruptly eights visitors out to commercial OVHcloud or MDN reference pages, fragmenting the literary narrative.
- **Fix:** Retain core philosophical links (Social Ecology, Transnational Netizen) and convert linguistic/poetic terms into styled typographic spans (`.serif-accent` or `.mono-chip`).
- **Suggested command:** `$impeccable clarify`

### [P3] Confusing Masthead CTA Destination & Mobile Nav Pruning
- **What:** The header nav link "Hello, World! ↗" uses an external arrow icon but jumps internally to `#follow` (social cards) rather than the primary email block. On mobile (≤700px), all other navigation anchors are completely stripped from view.
- **Why it matters:** Sends conflicting mental signals about whether the link is internal or external, while leaving mobile visitors with no navigation waypoints.
- **Fix:** Point the contact link directly to the primary email beacon and preserve compact anchor links on mobile.
- **Suggested command:** `$impeccable clarify`

---

## Persona Red Flags

- **Jordan (Confused First-Timer):**
  - Clicks "Hello, World! ↗" in the masthead expecting a contact form or email; gets thrown down to `#follow` past Ahmed's bio, skills, and background.
  - Sees topic badges (`#DigitalTransformation`, `#GeneretiveAI` [with typo]) in the hero and clicks them expecting internal blog posts; gets abruptly ejected to external Red Hat marketing articles in new tabs.
  - Gets bewildered by 7 external dictionary links embedded inside a German sentence in Section 01.
- **Riley (Deliberate Stress Tester):**
  - Audits accessibility tree on `.word-cloud` and immediately flags 55 invalid `aria-describedby` references pointing to phantom IDs.
  - Resizes viewport to 360px and catches `.destination-label` collapsing to an unreadable 6.4px (`0.4rem`).
  - Discovers the invalid syntax error `ry:focus-visible {` at `layout.css:629`.
  - Spots content typos in `src/lib/data/site.ts`: `MircoOS` (line 71) and `#GeneretiveAI` (line 60).
- **Casey (Distracted Mobile User):**
  - Header navigation strips "The human" and "The orbit", removing quick anchor jumping on mobile.
  - Encounters the 55-item word cloud as a tall vertical scroll trap where accidental thumb taps trigger unwanted external new-tab launches.
  - In `.social-orbit`, tiny icon buttons with `gap: 0` (line 1250) lead to thumb mis-clicks between adjacent platforms.
- **Devon (Tech Peer / Engineering Collaborator - Project-Specific):**
  - Arrives eager to see Ahmed's code, open-source projects, and architectural philosophy.
  - Clicks technology cards (C++, Rust, Go, Python, Svelte) and finds they link to generic language homepages (`isocpp.org`, `rust-lang.org`) rather than Ahmed's GitHub repositories, dotfiles, or technical articles.
  - Wonders why "DistroWatch ↗" is the primary CTA on the Linux cards instead of showing Ahmed's actual system configs or installations.

---

## Minor Observations

1. **Typo in Data (`site.ts:60`):** `#GeneretiveAI` is misspelled (should be `#GenerativeAI`).
2. **Typo in Data (`site.ts:71`):** `MircoOS` is misspelled (should be `MicroOS`).
3. **Corrupted CSS (`layout.css:629`):** Orphaned string `ry:focus-visible {` appears directly above `.word-cloud`.
4. **FC Bayern Red Accent Isolation:** The Bayern crest is the sole instance of crimson `#e32a4b` on the page, sitting isolated without a grounding transition.
5. **DNS CNAME Assertion:** `static/CNAME` contains `https://www.ai-personal.cloud` with protocol; standard DNS RFC / GitHub Pages requires the bare FQDN (`www.ai-personal.cloud`).

---

## Questions to Consider

1. *"What if the 55-item word cloud were curated into an interactive planetary radar or categorized constellations (Kernel, Runtimes, Hardware, Cloud), turning an intimidating wall of links into an inviting map of curiosity?"*
2. *"Why link foundational identity concepts like 'techno-preneurial' or 'Wolke' to third-party dictionaries and corporate hosting pages, when those terms could link to Ahmed's own essays or expand into poetic inline tooltips?"*
3. *"What would happen if the 'Tools of the Trade' section linked to Ahmed's actual dotfiles, GitHub repositories, or architectural experiments instead of external project homepages like isocpp.org and rust-lang.org?"*
