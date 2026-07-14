# @coveord/plasma-mantine

## 61.0.0-next.0

### Major Changes

- [#4509](https://github.com/coveo/plasma/pull/4509) [`f98660d`](https://github.com/coveo/plasma/commit/f98660da12f7fb514465ec073c94a73e95f16893) Thanks [@GermainBergeron](https://github.com/GermainBergeron)! - Upgrade to Mantine 9

  ## Breaking changes

  ### Peer dependencies

  - All `@mantine/*` peer dependencies now require `^9.0.0`
  - `react` and `react-dom` peer dependencies now require `>= 19.2.0 < 20.0.0`

  ### ChildForm

  The `in` prop is now `expanded` (inherited from Mantine's `Collapse` component):

  ```diff
  -<ChildForm in={true} title="Settings">
  +<ChildForm expanded={true} title="Settings">
  ```

  ## Internal changes

  - All `factory()` and `polymorphicFactory()` callbacks updated to receive `ref` via props instead of as a second argument (Mantine 9 dropped `forwardRef` internally).
  - `Collapse` usage in `Table` row layout updated from `in` to `expanded`.
  - `enhanceWithCollectionProps` type extraction updated to work with `@mantine/form` v9 exports.

  ## Mantine 9 upstream changes

  For the full list of Mantine 9 breaking changes (renamed props, hook changes, etc.), see the [Mantine 8.x → 9.x migration guide](https://mantine.dev/guides/8x-to-9x/).

## 60.0.1

### Patch Changes

- [#4505](https://github.com/coveo/plasma/pull/4505) [`9223822`](https://github.com/coveo/plasma/commit/92238225dba236cfff8e19855b419694b7a0ca40) Thanks [@gdostie](https://github.com/gdostie)! - Fixed CSS cascade ordering in production builds by setting sideEffects to true

## 60.0.0

### Major Changes

- [#4412](https://github.com/coveo/plasma/pull/4412) [`26b88b1`](https://github.com/coveo/plasma/commit/26b88b150e2583087ae72ab9b83fe9bd19bb82d1) Thanks [@gdostie](https://github.com/gdostie)! - **BREAKING:** Renamed pagination state attributes to match Coveo API standards for pagination (RFC 0002).

  - `pageIndex` → `page` (zero-based page index)
  - `pageSize` → `perPage` (number of items per page)

  This affects `PaginationState`, `TableState.pagination`, and all components that read/write pagination state (`Table.Pagination`, `Table.PerPage`, `Table.Filter`, `Table.Predicate`, `Table.DateRangePicker`).

  The URL parameter for items per page also changed from `pageSize` to `perPage`.

  ### Migration

  ```diff
   const store = useTable({
     initialState: {
  -    pagination: {pageIndex: 0, pageSize: 25},
  +    pagination: {page: 0, perPage: 25},
     },
   });

  -store.state.pagination.pageIndex
  +store.state.pagination.page

  -store.state.pagination.pageSize
  +store.state.pagination.perPage
  ```

- [#4412](https://github.com/coveo/plasma/pull/4412) [`26b88b1`](https://github.com/coveo/plasma/commit/26b88b150e2583087ae72ab9b83fe9bd19bb82d1) Thanks [@gdostie](https://github.com/gdostie)! - ## What's Changed

  ### ⚡ Pure ESM Packages

  All Plasma packages are now shipped as **ESM only**. CommonJS (CJS) builds are no longer included.

  **What this means for consumers:**

  - Your bundler or runtime must support ES module imports.
  - If you use Node.js directly (e.g. in scripts or tests), ensure you're running Node 18+ with ESM support or use a loader that handles it.
  - If your project uses `"type": "module"` in `package.json`, no changes are needed.
  - If you rely on `require()` to import Plasma packages, you'll need to migrate those imports to `import` statements or use dynamic `import()`.

  For more details on ESM migration, see [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

  ***

  ### 🛠️ TypeScript 7 (Preview)

  The monorepo now uses the [TypeScript 7 preview](https://devblogs.microsoft.com/typescript/announcing-typescript-7-beta/) via `tsgo`. This is an internal toolchain change — **no action required from consumers**. Published type definitions remain compatible with TypeScript 5.x and above.

  ***

  ### 🔒 Strict TypeScript

  Strict type checking (`"strict": true`) is now enabled across the entire monorepo. This improves the reliability of exported types. In rare cases, you may notice more precise types (e.g., narrower unions, stricter nullability) in your IDE — but no intentional runtime behavior changes were introduced.

  ***

  ### 📦 Changesets for Versioning

  Plasma now uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation. This replaces the previous custom publishing workflow and makes version history clearer for contributors and consumers.

  ***

  ### 🗑️ Removed Legacy Website

  The `packages/website` documentation site has been removed. All component documentation now lives in [Storybook](https://plasma.coveo.com).

  ***

  ### 🔧 Internal: Developer Tooling Overhaul

  These changes affect **contributors** to the Plasma monorepo, not consumers of the published packages.

  | Before   | After                                              |
  | -------- | -------------------------------------------------- |
  | ESLint   | [Oxlint](https://oxc.rs/docs/guide/usage/linter)   |
  | Prettier | [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) |

  The linting and formatting experience is significantly faster. If you contribute to Plasma, update your editor extensions accordingly.

### Patch Changes

- [#4412](https://github.com/coveo/plasma/pull/4412) [`26b88b1`](https://github.com/coveo/plasma/commit/26b88b150e2583087ae72ab9b83fe9bd19bb82d1) Thanks [@gdostie](https://github.com/gdostie)! - Switched transpiler from swc to tsgo for all packages

- Updated dependencies [[`26b88b1`](https://github.com/coveo/plasma/commit/26b88b150e2583087ae72ab9b83fe9bd19bb82d1), [`26b88b1`](https://github.com/coveo/plasma/commit/26b88b150e2583087ae72ab9b83fe9bd19bb82d1)]:
  - @coveord/plasma-react-icons@60.0.0
  - @coveord/plasma-tokens@60.0.0

## 60.0.0-next.0

### Major Changes

- [#4418](https://github.com/coveo/plasma/pull/4418) [`1355591`](https://github.com/coveo/plasma/commit/135559124b77f7d3e6579b6c909e3eb3e68cafbf) Thanks [@GermainBergeron](https://github.com/GermainBergeron)! - ## What's Changed

  ### ⚡ Pure ESM Packages

  All Plasma packages are now shipped as **ESM only**. CommonJS (CJS) builds are no longer included.

  **What this means for consumers:**

  - Your bundler or runtime must support ES module imports.
  - If you use Node.js directly (e.g. in scripts or tests), ensure you're running Node 18+ with ESM support or use a loader that handles it.
  - If your project uses `"type": "module"` in `package.json`, no changes are needed.
  - If you rely on `require()` to import Plasma packages, you'll need to migrate those imports to `import` statements or use dynamic `import()`.

  For more details on ESM migration, see [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

  ***

  ### 🛠️ TypeScript 7 (Preview)

  The monorepo now uses the [TypeScript 7 preview](https://devblogs.microsoft.com/typescript/announcing-typescript-7-beta/) via `tsgo`. This is an internal toolchain change — **no action required from consumers**. Published type definitions remain compatible with TypeScript 5.x and above.

  ***

  ### 🔒 Strict TypeScript

  Strict type checking (`"strict": true`) is now enabled across the entire monorepo. This improves the reliability of exported types. In rare cases, you may notice more precise types (e.g., narrower unions, stricter nullability) in your IDE — but no intentional runtime behavior changes were introduced.

  ***

  ### 📦 Changesets for Versioning

  Plasma now uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation. This replaces the previous custom publishing workflow and makes version history clearer for contributors and consumers.

  ***

  ### 🗑️ Removed Legacy Website

  The `packages/website` documentation site has been removed. All component documentation now lives in [Storybook](https://plasma.coveo.com).

  ***

  ### 🔧 Internal: Developer Tooling Overhaul

  These changes affect **contributors** to the Plasma monorepo, not consumers of the published packages.

  | Before   | After                                              |
  | -------- | -------------------------------------------------- |
  | ESLint   | [Oxlint](https://oxc.rs/docs/guide/usage/linter)   |
  | Prettier | [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) |

  The linting and formatting experience is significantly faster. If you contribute to Plasma, update your editor extensions accordingly.

### Patch Changes

- Updated dependencies [[`1355591`](https://github.com/coveo/plasma/commit/135559124b77f7d3e6579b6c909e3eb3e68cafbf)]:
  - @coveord/plasma-react-icons@60.0.0-next.0
  - @coveord/plasma-tokens@60.0.0-next.0
