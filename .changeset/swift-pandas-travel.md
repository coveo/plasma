---
'@coveord/plasma-mantine': minor
---

Allow conditional row selection with `useTable`

`enableRowSelection` now accepts a predicate in addition to a boolean. Return `false` for rows that users must not be able to select. Rejected rows are skipped by row and card interactions, checkboxes, select-all, and Shift-click range selection.
