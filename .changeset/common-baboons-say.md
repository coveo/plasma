---
'@coveord/plasma-mantine': major
---

Upgrade to Mantine 9

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
