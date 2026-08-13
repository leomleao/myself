# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> The release history and tags were reconstructed retrospectively from every
> repository commit. Dates reflect the final commit in each major generation.

## [Unreleased]

### Added

- Open Graph, canonical, and X/Twitter card metadata for consistent link previews.
- A dedicated social-preview image supplied by Leo.
- A website-styled LinkedIn profile banner at LinkedIn's recommended 1584 × 396 dimensions.
- Shared repository guidance for Claude, Codex, and other coding agents in `CLAUDE.md` and `AGENTS.md`.

### Changed

- Replaced the outdated vCard title and system-analyst description with current SAP consulting, development, and AI-engineering positioning.
- Refined the English and Portuguese experience and education copy, including ABAP and software-development details.

## [3.0.0] - 2026-05-11

### Added

- Added initial Vite tooling and a modernized source/build structure, removing much of the legacy application footprint ([`f696712`](https://github.com/leomleao/myself/commit/f696712)).
- Added foundational dark and light theme styles and refreshed the primary profile image ([`d9c6b71`](https://github.com/leomleao/myself/commit/d9c6b71)).
- Added an Astro 5 static portfolio with a responsive single-page layout, vanilla-JavaScript English/Portuguese switching, saved theme preferences, an animated signature, and a generative background ([`b83555d`](https://github.com/leomleao/myself/commit/b83555d)).
- Added automated GitHub Pages builds and deployment from the `dev` branch ([`90456a0`](https://github.com/leomleao/myself/commit/90456a0)).
- Added expanded visual tokens, backgrounds, card treatments, an About portrait, richer portfolio content, and Astro environment types ([`12d501e`](https://github.com/leomleao/myself/commit/12d501e)).
- Added a larger experience timeline with icons, new professional milestones, expandable detail panels, smooth animations, and a broader skills presentation ([`ae69b81`](https://github.com/leomleao/myself/commit/ae69b81)).

### Changed

- Replaced the React/Webpack implementation and its legacy vendored asset bundle with a lightweight Astro architecture ([`b83555d`](https://github.com/leomleao/myself/commit/b83555d)).
- Adjusted the signature animation selectors and timing so its elements draw in the intended sequence ([`6ad2843`](https://github.com/leomleao/myself/commit/6ad2843)).

### Fixed

- Corrected and expanded Portuguese translations, aligned localized experience content, and improved the responsive experience and skills layouts ([`989182a`](https://github.com/leomleao/myself/commit/989182a)).

## [2.0.0] - 2018-05-15

### Added

- Added the project README and moved the public profile image into a deployable public-assets directory ([`b9ef16d`](https://github.com/leomleao/myself/commit/b9ef16d)).
- Refined the README and replaced its referenced profile image ([`7c78da0`](https://github.com/leomleao/myself/commit/7c78da0)).
- Replaced the public portrait with a PNG asset and updated its documentation reference ([`f3780af`](https://github.com/leomleao/myself/commit/f3780af)).
- Added Webpack, Babel, the React application shell, localized content files, and public build assets ([`c6dc2cd`](https://github.com/leomleao/myself/commit/c6dc2cd)).

### Changed

- Began the version 2 React rebuild while preserving the bilingual portfolio content ([`c6dc2cd`](https://github.com/leomleao/myself/commit/c6dc2cd)).
- Completed the working React translation flow, expanded the component structure, restored the portfolio styling/assets, and removed the Angular implementation ([`a12d508`](https://github.com/leomleao/myself/commit/a12d508)).

## [1.0.0] - 2016-05-26

### Added

- Added the initial personal portfolio and résumé, with English and Portuguese pages, responsive styling, photography, skill icons, and contact content ([`f228bfa`](https://github.com/leomleao/myself/commit/f228bfa)).
- Added Angular Translate and consolidated the site into a single-page implementation ([`b3c568f`](https://github.com/leomleao/myself/commit/b3c568f)).
- Completed dynamic English/Portuguese translations and removed the redundant language-specific pages ([`ac24418`](https://github.com/leomleao/myself/commit/ac24418)).

[Unreleased]: https://github.com/leomleao/myself/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/leomleao/myself/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/leomleao/myself/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/leomleao/myself/tree/v1.0.0
