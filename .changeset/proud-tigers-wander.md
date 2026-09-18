---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': patch
---

Allow conditional bulk row selection with `useTable`

`enableMultiRowSelection` now accepts a predicate in addition to a boolean. Return `false` for rows that should remain single-selectable but must be excluded from checkboxes, select-all, and Shift-click range selection. These rows are always selected exclusively.

When multi-row selection is enabled, the selection checkboxes stay hidden until a bulk-eligible row is selected, at which point every checkbox is revealed. Selecting a row rejected by the predicate selects it exclusively, like single selection, without revealing the checkboxes, and the `Table.Header` selected-count control stays hidden while only such rows are selected.
