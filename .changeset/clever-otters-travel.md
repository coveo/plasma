---
'@coveord/plasma-mantine': major
---

Lay out `Table.Footer` in a grid and add `Table.Summary`

`Table.Footer` now places its content in fixed areas regardless of the order of its children: the new `Table.Summary` on the left, `Table.Pagination` in the center and `Table.PerPage` on the right. `Table.Summary` displays the range of rows displayed ("Showing 1-25 out of 250") and the time of the last data update. Use `rangeLabel` to customize the range text and `withLastUpdated={false}` to hide the last update time.

# Migration

`Table.Footer` no longer extends `Group`, so `Group` props such as `justify` or `gap` are ignored. Use the `footerRoot`, `footerStart`, `footerCenter` and `footerEnd` style names to customize the layout.

`Table.PerPage` no longer displays its `label`, it is now used as the accessible name of the control.

To display the last update time in the footer, replace `Table.LastUpdated` with `Table.Summary`.

```diff
  <Table.Footer>
-     <Table.PerPage />
+     <Table.Summary />
      <Table.Pagination />
-     <Table.LastUpdated />
+     <Table.PerPage />
  </Table.Footer>
```
