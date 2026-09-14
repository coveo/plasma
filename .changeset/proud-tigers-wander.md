---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': patch
---

Allow conditional bulk row selection with `useTable`

`enableMultiRowSelection` now accepts a predicate in addition to a boolean. Return `false` for rows that should remain single-selectable but must be excluded from checkboxes, select-all, and Shift-click range selection. These rows appear at 50% opacity and are always selected exclusively.
