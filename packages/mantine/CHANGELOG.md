# @coveord/plasma-mantine

## 61.3.0

### Minor Changes

- Clear `Table` row selections with Escape [#4591](https://github.com/coveo/plasma/pull/4591)

  Press Escape to clear selected rows when row selection is enabled. Tables with `forceSelection` enabled preserve their selection.

- Improve `Table` row-selection controls [#4590](https://github.com/coveo/plasma/pull/4590)

  `Table` row and card layouts now share consistent row-selection checkbox behavior. Forced selections cannot be
  cleared through a checkbox, row checkboxes remain hidden until their row is hovered, focused, or selected, and the
  row-selection column uses less horizontal space.

- Select ranges of `Table` rows with Shift-click [#4593](https://github.com/coveo/plasma/pull/4593)

  With multi-row selection enabled, click a row, card, or its checkbox and then Shift-click another selection target to
  select every selectable row between them on the displayed page. Existing selections outside the range are preserved.

### Patch Changes

- Let horizontal `Collection` rows inherit their container background [#4599](https://github.com/coveo/plasma/pull/4599)

## 61.2.0

### Minor Changes

- Add the `MantineTable` component export [#4585](https://github.com/coveo/plasma/pull/4585)

  Import `MantineTable` to use Mantine's table component when the Plasma `Table` component is not appropriate.

- Add `readOnly` support to `CodeEditor` [#4588](https://github.com/coveo/plasma/pull/4588)

  The `readOnly` prop prevents users from changing the editor content while displaying it with read-only styling.

- Add component namespace type aliases [#4568](https://github.com/coveo/plasma/pull/4568)

  Components expose type-only `Props`, `StylesNames`, `CssVariables`, and `Factory` aliases for public, resolvable types. Compound component aliases are available only through their parent namespace paths and add no runtime properties.

- Display validation feedback with `RadioCard.error` [#4572](https://github.com/coveo/plasma/pull/4572)

  `RadioCard` now accepts an `error` prop that renders validation feedback below the card, marks it invalid, and adds an error outline when it is unselected. Pass an actionable validation message to `error` when a radio option needs attention.

### Patch Changes

- Add missing `Table` exports [#4565](https://github.com/coveo/plasma/pull/4565)

  Some `Table` interfaces were missing from the public API. This commit adds them and exports them from `@coveord/plasma-mantine` for external use.

- Fix `Table` column types for inferred cell values [#4584](https://github.com/coveo/plasma/pull/4584)

- Restore read-only Checkbox styling [#4579](https://github.com/coveo/plasma/pull/4579)

  Correct styling for read-only Checkbox inputs so they receive the appropriate read-only appearance.

## 61.1.0

### Minor Changes

- Add `Navigation` component for collapsible sidebar navigation [#4491](https://github.com/coveo/plasma/pull/4491)

  The `Navigation` compound component provides a collapsible sidebar navigation system. `Navigation.SideBar` wraps Mantine's `AppShell.Navbar` with a scrollable content area and a built-in toggle. `Navigation.Section` renders a collapsible group of links that automatically hides when empty. `Navigation.Link` supports nesting levels, badges, and custom router components. `Navigation.Toggle` provides a chevron button to collapse or expand the sidebar. `Navigation.Badge` displays a status badge (Beta, WIP, or New) on links.

  The `useNavigation()` hook exposes `collapsed` state and `toggleCollapsed` for integrating with `AppShell`.

- Add `Table.Toolbar` sub-component for rendering filters outside the header grid [#4481](https://github.com/coveo/plasma/pull/4481)

  `Table.Toolbar` is a new opt-in container that renders above the table. Place `Table.Filter`, `Table.Predicate`, or `Table.DateRangePicker` inside it to display them outside the `Table.Header`. Components inside the toolbar skip the `Grid.Col` wrapper and render as plain flex items instead.

  The toolbar accepts standard Box props and supports `renderRoot` and `className` for full customization. Existing tables are unaffected — the toolbar is entirely additive.

### Patch Changes

- Improve `Table` row click interactions for selection and expand/collapse [#4554](https://github.com/coveo/plasma/pull/4554)

  Clicking anywhere on a `Table` row now consistently toggles selection in both single-select and multi-select modes. Previously, only single-select rows responded to row clicks while multi-select mode required clicking the checkbox directly.

  Rows with expandable content no longer expand or collapse on row click regardless of selection mode. Users must click the dedicated toggle icon to expand or collapse a row. This prevents accidental expansion when the intent is to select.

  When `enableRowSelection` is `false`, the user can no longer change the selection. With `enableMultiRowSelection: true`, existing selected rows are still shown with read-only checkboxes, while the checkboxes are hidden entirely when nothing is selected.

## 61.0.2

### Patch Changes

- Fix `CodeEditor` crashing when hidden and shown again by React's `Activity` [#4550](https://github.com/coveo/plasma/pull/4550)

  When a `CodeEditor` was placed inside a component that hides inactive content with React's `Activity` (such as `Tabs`, `Collapse`, or `Accordion` with `keepMountedMode="activity"`), switching away and back disposed the underlying Monaco editor and left it in a broken state. The editor now recreates itself when it is disposed while still mounted, so it keeps working across visibility changes.

## 61.0.1

### Patch Changes

- Publish the `dist` folder by declaring it in the package `files` field

  Newer pnpm versions honor the repository `.gitignore` when packing, which excluded the gitignored `dist` folder from the published tarball and caused `publint` to fail during release. Declaring `files: ["dist"]` (matching the other Plasma packages) ensures the built output is included. [#4543](https://github.com/coveo/plasma/pull/4543)

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
