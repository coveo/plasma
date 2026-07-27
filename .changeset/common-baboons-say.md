---
'@coveord/plasma-mantine': major
---

Upgrade to Mantine 9

All `@mantine/*` peer dependencies now require `^9.0.0`, and `react`/`react-dom` now require `>= 19.2.0 < 20.0.0`.

# Migration

## Peer dependencies

- Upgrade all `@mantine/*` packages to `^9.0.0`.
- Upgrade `react` and `react-dom` to `>= 19.2.0 < 20.0.0`.

## ChildForm

The `in` prop is now `expanded` (inherited from Mantine's `Collapse` component):

```diff
-<ChildForm in={true} title="Settings">
+<ChildForm expanded={true} title="Settings">
```

## Upstream changes

For the full list of Mantine 9 breaking changes (renamed props, hook changes, etc.), see the [Mantine 8.x → 9.x migration guide](https://mantine.dev/guides/8x-to-9x/).
