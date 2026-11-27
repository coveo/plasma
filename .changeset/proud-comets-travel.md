---
'@coveord/plasma-mantine': major
'@coveord/plasma-llms': patch
---

Restyle `Table` rows, cells and column headers, and add a `variant` prop for row density

`Table` rows, cells and column headers follow the new Plasma design. Cells and headers use 8px horizontal padding, so the first column is no longer indented by 40px. Column headers are 40px tall on a light gray background. Every row highlights on hover, except rows rejected by the `enableRowSelection` predicate. Selected rows no longer get a background color, the checked checkbox shows the selection. Expanded content sits on a gray background and shares one bottom border with its row. The selection, collapsible and actions columns are narrower to match the new padding.

The new `variant` prop sets the row density: `compact` (40px rows), `normal` (56px rows, the default and the previous height) or `large` (72px rows with content aligned to the top). The `TableVariant` type is exported.

```tsx
<Table variant="compact" store={store} data={data} columns={columns} />
```

# Migration

No code change is required. Review tables that relied on the previous look: remove custom styles that compensated for the 40px first-column indent or for the selected row background. Use `variant="compact"` for dense tables instead of overriding the cell height.
