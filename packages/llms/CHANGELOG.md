# @coveord/plasma-llms

## 60.2.1

### Patch Changes

- Prefer MCP tools in Plasma agent guidance [#4586](https://github.com/coveo/plasma/pull/4586)

- Add `readOnly` support to `CodeEditor` [#4588](https://github.com/coveo/plasma/pull/4588)

  The `readOnly` prop prevents users from changing the editor content while displaying it with read-only styling.

- Add component namespace type aliases [#4568](https://github.com/coveo/plasma/pull/4568)

  Components expose type-only `Props`, `StylesNames`, `CssVariables`, and `Factory` aliases for public, resolvable types. Compound component aliases are available only through their parent namespace paths and add no runtime properties.

- Display validation feedback with `RadioCard.error` [#4572](https://github.com/coveo/plasma/pull/4572)

  `RadioCard` now accepts an `error` prop that renders validation feedback below the card, marks it invalid, and adds an error outline when it is unselected. Pass an actionable validation message to `error` when a radio option needs attention.

## 60.2.0

### Minor Changes

- Add `Navigation` component for collapsible sidebar navigation [#4491](https://github.com/coveo/plasma/pull/4491)

  The `Navigation` compound component provides a collapsible sidebar navigation system. `Navigation.SideBar` wraps Mantine's `AppShell.Navbar` with a scrollable content area and a built-in toggle. `Navigation.Section` renders a collapsible group of links that automatically hides when empty. `Navigation.Link` supports nesting levels, badges, and custom router components. `Navigation.Toggle` provides a chevron button to collapse or expand the sidebar. `Navigation.Badge` displays a status badge (Beta, WIP, or New) on links.

  The `useNavigation()` hook exposes `collapsed` state and `toggleCollapsed` for integrating with `AppShell`.

- Add `Table.Toolbar` sub-component for rendering filters outside the header grid [#4481](https://github.com/coveo/plasma/pull/4481)

  `Table.Toolbar` is a new opt-in container that renders above the table. Place `Table.Filter`, `Table.Predicate`, or `Table.DateRangePicker` inside it to display them outside the `Table.Header`. Components inside the toolbar skip the `Grid.Col` wrapper and render as plain flex items instead.

  The toolbar accepts standard Box props and supports `renderRoot` and `className` for full customization. Existing tables are unaffected — the toolbar is entirely additive.

- Publish component guidance, catalog, and glossary to AI agents [#4564](https://github.com/coveo/plasma/pull/4564)

  Published agent-ready component usage guidance, including APIs and implementation patterns throughout Plasma. `ComponentsOverview` now lets agents discover Plasma and Mantine components before they retrieve detailed guidance. The LLM documentation and MCP server now also publish the Plasma glossary as a content guideline, enabling agents to reference design-system terminology.

## 60.1.0

### Minor Changes

- Add content guidelines to LLM documentation outputs and MCP server

  - Include content guideline files (Voice, Writing Mechanics, Product Vocabulary, Target Audience) in `llms.txt` and `llms-full.txt`
  - Component docs have moved from `plasma.coveo.com/llms/<Component>.md` to `plasma.coveo.com/llms/components/<Component>.md`
  - Content guidelines are available at `plasma.coveo.com/llms/content/<Guideline>.md`
  - Add `list_content_guidelines` and `get_content_guideline` MCP tools
  - Extend `search_docs` to search across both components and content guidelines
  - Update `plasma-skill.md` to reference content guidelines [#4522](https://github.com/coveo/plasma/pull/4522)

## 60.0.0

### Major Changes

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
