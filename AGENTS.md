# Repository Coding Standards & AI Guidelines

This document defines the shared development standards for **Leo Leão's personal portfolio**. Claude, Codex, and other coding agents must follow these guidelines when suggesting or implementing changes.

`AGENTS.md` and `CLAUDE.md` intentionally contain the same rules. Keep them synchronized whenever these standards change.

---

## 0. Project Purpose & Deployment Context

- This repository contains Leo Leão's public personal site: a bilingual portfolio, résumé, and contact page.
- The site is deployed from the `dev` branch to GitHub Pages by `.github/workflows/astro.yml`.
- The deployment build supplies Astro's `site` and `base` values. URLs used in metadata and public-facing links must continue to work when the site is hosted below a GitHub Pages base path.
- The English and Portuguese experiences are two views of the same profile. Keep their facts, dates, roles, services, skills, and calls to action aligned whenever content changes.
- Preserve the site's established identity: its animated signature, generative background, dark/light themes, responsive single-page layout, and direct professional tone.

---

## 1. Project Tech Stack & Structure

- **Framework:** Astro 5, producing a static site.
- **Language:** Astro components, semantic HTML, CSS, and vanilla browser JavaScript. The package uses ESM (`"type": "module"`); do not introduce CommonJS `require` or `module.exports`.
- **Page source:** `src/pages/index.astro` contains the page markup, bilingual content, and client-side interactions.
- **Styles:** `src/styles/global.css` contains the shared responsive theme and component styles.
- **Static assets:** Put images, icons, and other files that must be copied unchanged into `public/`.
- **Generated output:** `dist/` is produced by `npm run build`. Never edit generated files by hand; if tracked output needs refreshing, regenerate it from the source.
- Keep the implementation lightweight. Do not add a client framework, state library, or dependency for behaviour that can be expressed clearly with the existing Astro and vanilla-JavaScript structure.

---

## 2. Release & Versioning Standards

- Follow [Semantic Versioning](https://semver.org/):
  - **Patch (`x.y.Z`):** backward-compatible fixes, copy corrections, metadata, styling refinements, documentation, or maintenance.
  - **Minor (`x.Y.0`):** backward-compatible sections, interactions, or meaningful new portfolio features.
  - **Major (`X.0.0`):** a substantial redesign, framework migration, or breaking change to published URLs or expected behaviour.
- During normal development, record changes under `## [Unreleased]` without inventing a release. When a release is explicitly prepared, move those entries into a dated version section.
- Whenever the version changes, update both `package.json` and the root package records in `package-lock.json` so they match.
- Every notable change must be documented in `CHANGELOG.md` using [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) headings:
  - `### Added` for new features or assets.
  - `### Changed` for changes to existing content or behaviour.
  - `### Deprecated` for functionality planned for removal.
  - `### Removed` for removed functionality.
  - `### Fixed` for bug fixes.
  - `### Security` for vulnerability fixes or security hardening.

---

## 3. Content, Metadata & Accessibility Standards

- Keep visible claims accurate and supported by Leo's supplied information. Do not invent employers, dates, qualifications, technologies, metrics, or contact details.
- When changing professional content, update both English and Portuguese copy in the same change unless the difference is deliberate and documented.
- Keep the document title, meta description, canonical URL, Open Graph tags, X/Twitter card tags, and the visible hero positioning consistent.
- Open Graph and X image URLs must be absolute in the production build. If the image changes, update its declared dimensions and alternative text to match the real asset.
- Maintain semantic landmarks, logical heading order, keyboard-operable controls, useful alternative text, visible focus states, and reduced-motion support.
- External links opened in a new tab must retain `rel="noopener noreferrer"`. Do not expose private contact or personal information beyond what is intentionally published on the site.
- Preserve comments and structural context unless they are obsolete because of the requested change.

---

## 4. Testing & Verification Standards

Before declaring a change complete:

```bash
npm run build
```

- Fix real build failures and rerun the build.
- The project currently has no automated test or lint script; do not claim either was run.
- For metadata changes, inspect the generated `dist/index.html` and confirm the expected title, description, canonical URL, social tags, and image URL. Confirm the referenced social image exists and its declared dimensions match the file.
- For content changes, check English and Portuguese parity.
- For interaction or layout changes, verify the affected flow at representative desktop and mobile widths when browser testing is requested or the change carries meaningful visual risk.

---

## 5. Change Hygiene

- Preserve unrelated user changes in a dirty worktree.
- Keep commits and changelog entries focused on observable outcomes.
- Update `README.md` when setup, deployment, structure, or user-visible capabilities change.
- Do not commit secrets, local environment files, temporary screenshots, or tool output.
