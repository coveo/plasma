# @coveord/plasma-figma-code-connect

## 60.0.0

### Major Changes

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
