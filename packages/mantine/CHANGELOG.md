# @coveord/plasma-mantine

## 61.0.0

### Major Changes

#### Upgrade to Mantine 9 [#4528](https://github.com/coveo/plasma/pull/4528)

All `@mantine/*` peer dependencies now require `^9.0.0`, and `react`/`react-dom` now require `>= 19.2.0 < 20.0.0`.

##### Migration

###### Peer dependencies

- Upgrade all `@mantine/*` packages to `^9.0.0`.
- Upgrade `react` and `react-dom` to `>= 19.2.0 < 20.0.0`.

###### ChildForm

The `in` prop is now `expanded` (inherited from Mantine's `Collapse` component):

```diff
-<ChildForm in={true} title="Settings">
+<ChildForm expanded={true} title="Settings">
```

###### Upstream changes

For the full list of Mantine 9 breaking changes (renamed props, hook changes, etc.), see the [Mantine 8.x → 9.x migration guide](https://mantine.dev/guides/8x-to-9x/).

#### Remove the `info` variant from `StatusToken` and make `variant` required [#4528](https://github.com/coveo/plasma/pull/4528)

The `variant` prop no longer defaults to `info` — it is now required.

##### Migration

1. **If you used the `info` variant**, replace it with the variant that best matches your intent (e.g., `waiting` or `disabled`).
2. **If you relied on the default variant**, explicitly pass `variant="success"` to every `<StatusToken />` that did not already specify one.

```diff
- <StatusToken />
+ <StatusToken variant="success" />

- <StatusToken variant="info" />
+ <StatusToken variant="waiting" />
```

#### Remove the `borderTop` prop on `Table.Header` [#4528](https://github.com/coveo/plasma/pull/4528)

The table border is now handled automatically, so the prop is no longer needed.

##### Migration

Remove `borderTop` from any `Table.Header` usage:

```diff
- <Table.Header borderTop>
+ <Table.Header>
```

### Minor Changes

- Add `Table.Layouts.Cards` — a card-based layout for the Table component

  The new layout renders table data as a responsive grid of cards instead of rows. It supports single and multi-row selection (with a "Select all" checkbox), double-click handling, and integrates with the existing Table store (`forceSelection`, `enableMultiRowSelection`). Collapsible row content is intentionally excluded from this layout.

  Also extracts `TableSelectAllCheckbox` into a shared component reused by both the row layout selectable column and the card layout header. [#4493](https://github.com/coveo/plasma/pull/4493)

- Add `Table.Cell` for controlling text overflow in table cells

  Supports single-line ellipsis (default), multi-line clamping with `lineClamp`, word wrapping with `wrap`, and an expandable "Show more"/"Show less" toggle with `expandable`. [#4499](https://github.com/coveo/plasma/pull/4499)

### Patch Changes

- Hide `Table.Pagination` and `Table.PerPage` when there is nothing to paginate

  `Table.Pagination` is now hidden when there is only one page or fewer. `Table.PerPage` is now hidden when the total number of rows is smaller than or equal to the smallest page size option. [#4520](https://github.com/coveo/plasma/pull/4520)

- Fix table header inner grid min height [#4528](https://github.com/coveo/plasma/pull/4528)

- Set `keepMountedMode: 'display-none'` as the default for Tabs in the Plasma theme

  Mantine's default (`'activity'`) hides inactive panels using React's `Activity` component. This caused unexpected rendering issues in components that don't handle being suspended/hidden well, such as code editors: switching away from and back to a tab could leave the editor in a broken or stale state. Defaulting to `'display-none'` avoids this by hiding inactive panels with `display: none` styles instead, while still keeping their content mounted. [#4528](https://github.com/coveo/plasma/pull/4528)

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

##### Pure ESM Packages

All Plasma packages are now shipped as **ESM only**. CommonJS (CJS) builds are no longer included.

**What this means for consumers:**

- Your bundler or runtime must support ES module imports.
- If you use Node.js directly (e.g. in scripts or tests), ensure you're running Node 18+ with ESM support or use a loader that handles it.
- If your project uses `"type": "module"` in `package.json`, no changes are needed.
- If you rely on `require()` to import Plasma packages, you'll need to migrate those imports to `import` statements or use dynamic `import()`.

For more details on ESM migration, see [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

##### TypeScript 7 (Preview)

The monorepo now uses the [TypeScript 7 preview](https://devblogs.microsoft.com/typescript/announcing-typescript-7-beta/) via `tsgo`. This is an internal toolchain change — **no action required from consumers**. Published type definitions remain compatible with TypeScript 5.x and above.

##### Strict TypeScript

Strict type checking (`"strict": true`) is now enabled across the entire monorepo. This improves the reliability of exported types. In rare cases, you may notice more precise types (e.g., narrower unions, stricter nullability) in your IDE — but no intentional runtime behavior changes were introduced.

##### Changesets for Versioning

Plasma now uses [Changesets](https://github.com/changesets/changesets) for versioning and changelog generation. This replaces the previous custom publishing workflow and makes version history clearer for contributors and consumers.

##### Removed Legacy Website

The `packages/website` documentation site has been removed. All component documentation now lives in [Storybook](https://plasma.coveo.com).

##### Internal: Developer Tooling Overhaul

These changes affect **contributors** to the Plasma monorepo, not consumers of the published packages.

| Before   | After                                              |
| -------- | -------------------------------------------------- |
| ESLint   | [Oxlint](https://oxc.rs/docs/guide/usage/linter)   |
| Prettier | [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) |

The linting and formatting experience is significantly faster. If you contribute to Plasma, update your editor extensions accordingly.

### Patch Changes

- Switched transpiler from swc to tsgo for all packages [#4412](https://github.com/coveo/plasma/pull/4412)
