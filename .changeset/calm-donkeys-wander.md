---
'@coveord/plasma-mantine': major
---

Restyle `Table.Footer` as a sticky three-column grid

`Table.Footer` now places `Table.LastUpdated` on the left, `Table.Pagination` in the center and `Table.PerPage` on the right, whatever their order in the JSX. It stays pinned to the bottom of the nearest scroll container (or the viewport) while the table scrolls. `Table.PerPage` now has a smaller label, and the label names the segmented control for assistive technologies.

`Table.Footer` no longer renders a Mantine `Group`, so it no longer accepts `Group` props such as `justify`, `gap`, `wrap` and `grow`. `Table.LastUpdated` only renders inside `Table.Footer`, and its label is now dimmed. `Table.Footer` now has the `footer` styles name, and `Table.Pagination` and `Table.PerPage` add the `pagination`, `perPage` and `perPageLabel` styles names.

# Migration

Remove `Group` props from `Table.Footer`. Move `Table.LastUpdated` inside `Table.Footer`, otherwise it is no longer displayed.

```diff
 <Table store={store} data={data} columns={columns}>
-    <Table.Footer justify="space-between">
+    <Table.Footer>
         <Table.PerPage />
         <Table.Pagination />
+        <Table.LastUpdated />
     </Table.Footer>
-    <Table.LastUpdated />
 </Table>
```

If you placed custom content in `Table.Footer`, give it a `grid-area` of `start`, `center` or `end` through the `footer` styles name or your own class.
