# @coveord/plasma-mantine

## 60.1.0

### Minor Changes

- Add `Table.Layouts.Cards` — a card-based layout for the Table component

  The new layout renders table data as a responsive grid of cards instead of rows. It supports single and multi-row selection (with a "Select all" checkbox), double-click handling, and integrates with the existing Table store (`forceSelection`, `enableMultiRowSelection`). Collapsible row content is intentionally excluded from this layout.

  Also extracts `TableSelectAllCheckbox` into a shared component reused by both the row layout selectable column and the card layout header. [#4493](https://github.com/coveo/plasma/pull/4493)

- **Table.Cell**: New component for controlling text overflow in table cells. Supports single-line ellipsis (default), multi-line clamping with `lineClamp`, word wrapping with `wrap`, and an expandable "Show more"/"Show less" toggle with `expandable`. [#4499](https://github.com/coveo/plasma/pull/4499)

### Patch Changes

- **Table.Pagination** is now hidden when there is only one page or fewer. **Table.PerPage** is now hidden when the total number of rows is smaller than or equal to the smallest page size option. [#4520](https://github.com/coveo/plasma/pull/4520)

## 60.0.1

### Patch Changes

- Fixed CSS cascade ordering in production builds by setting sideEffects to true [#4505](https://github.com/coveo/plasma/pull/4505)

## 60.0.0

### Major Changes

#### Renamed pagination attributes [#4412](https://github.com/coveo/plasma/pull/4412)

Renamed pagination state attributes to match Coveo API standards for pagination (RFC 0002).

- `pageIndex` → `page` (zero-based page index)
- `pageSize` → `perPage` (number of items per page)

This affects `PaginationState`, `TableState.pagination`, and all components that read/write pagination state (`Table.Pagination`, `Table.PerPage`, `Table.Filter`, `Table.Predicate`, `Table.DateRangePicker`).

The URL parameter for items per page also changed from `pageSize` to `perPage`.

##### Migration

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

#### Plasma 60 — internal modernization overhaul [#4412](https://github.com/coveo/plasma/pull/4412)

##### ⚡ Pure ESM Packages

All Plasma packages are now shipped as **ESM only**. CommonJS (CJS) builds are no longer included.

**What this means for consumers:**

- Your bundler or runtime must support ES module imports.
- If you use Node.js directly (e.g. in scripts or tests), ensure you're running Node 18+ with ESM support or use a loader that handles it.
- If your project uses `"type": "module"` in `package.json`, no changes are needed.
- If you rely on `require()` to import Plasma packages, you'll need to migrate those imports to `import` statements or use dynamic `import()`.

For more details on ESM migration, see [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

##### 🛠️ TypeScript 7 (Preview)

The monorepo now uses the [TypeScript 7 preview](https://devblogs.microsoft.com/typescript/announcing-typescript-7-beta/) via `tsgo`. This is an internal toolchain change — **no action required from consumers**. Published type definitions remain compatible with TypeScript 5.x and above.

##### 🔒 Strict TypeScript

Strict type checking (`"strict": true`) is now enabled across the entire monorepo. This improves the reliability of exported types. In rare cases, you may notice more precise types (e.g., narrower unions, stricter nullability) in your IDE — but no intentional runtime behavior changes were introduced.

##### 📦 Changesets for Versioning

Plasma now uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation. This replaces the previous custom publishing workflow and makes version history clearer for contributors and consumers.

##### 🗑️ Removed Legacy Website

The `packages/website` documentation site has been removed. All component documentation now lives in [Storybook](https://plasma.coveo.com).

##### 🔧 Internal: Developer Tooling Overhaul

These changes affect **contributors** to the Plasma monorepo, not consumers of the published packages.

| Before   | After                                              |
| -------- | -------------------------------------------------- |
| ESLint   | [Oxlint](https://oxc.rs/docs/guide/usage/linter)   |
| Prettier | [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) |

The linting and formatting experience is significantly faster. If you contribute to Plasma, update your editor extensions accordingly.

### Patch Changes

- Switched transpiler from swc to tsgo for all packages [#4412](https://github.com/coveo/plasma/pull/4412)
