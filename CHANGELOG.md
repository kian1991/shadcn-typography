# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-09-03

### Breaking

- The package no longer imports or ships a prebuilt `style.css`. Register the package as a
  Tailwind source instead: `@source '../node_modules/shadcn-typography/dist';`.
- Package is now `"type": "module"` with an `exports` map providing ESM and CommonJS builds.
  Deep imports into `dist/` are no longer supported.
- `react` (`^18 || ^19`) is a declared peer dependency.
- Class names follow the current shadcn/ui typography examples 1:1:
  - `H1` drops `lg:text-5xl`, adds `text-balance`
  - `H2` uses `pb-2` instead of `py-2`
  - `Small` renders `<small>` (was `<p>`)
  - `Muted` renders `<p>` (was `<span>`)
  - `Quote` drops `text-muted-foreground`
  - `InlineCode` and `MultilineCode` use `rounded` (was `rounded-sm`, same radius in v4)
- Props are typed per element via `ComponentPropsWithoutRef<Tag>`.

### Added

- `Table`, `Tr`, `Th` and `Td` components matching the shadcn/ui table example.
- `cn` helper is exported from the package root.
- Sourcemaps and CommonJS type declarations (`index.d.cts`).
- Test suite (Vitest + Testing Library), ESLint 10 flat config, Prettier.
- GitHub Actions: CI on push and pull request, npm publish on GitHub Release via
  Trusted Publishing with provenance.

### Changed

- Build via `tsup` instead of `tsc` plus the Tailwind CLI.
- `license` field corrected to MIT (was `ISC` while the bundled license was MIT).
- Tarball only contains `dist`, `LICENSE.md` and `README.md` (240 KB screenshot, sources and
  configs are no longer published).
- Tooling updated: TypeScript 5.9, `@types/react` 19.2, `tailwind-merge` 3.6.

### Removed

- `postcss.config.js` (Tailwind v3 leftover), `src/styles.css`, `.npmignore`.

## [1.1.2] - 2025-07-03

- Dependency updates (`clsx`, `tailwind-merge`).

## [1.1.0] - 2025-07-02

- Upgraded to Tailwind CSS v4.
- `rounded` replaced with `rounded-sm` in code components.
