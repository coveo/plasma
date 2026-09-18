---
'@coveord/plasma-mantine': patch
---

Fix `Table` rendering every row at 50% opacity when `enableRowSelection` is `false`

The reduced opacity is now reserved for rows rejected by an `enableRowSelection` predicate. A `Table` with selection disabled through the boolean `false` value renders its rows at full opacity.
