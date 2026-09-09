---
'@coveord/plasma-mantine': patch
'@coveord/plasma-llms': patch
---

Distinguish rows unavailable for selection in the Table component

Rows rejected by the `enableRowSelection` predicate now appear at 50% opacity, do not display a selection checkbox, and do not trigger `onRowDoubleClick`.
