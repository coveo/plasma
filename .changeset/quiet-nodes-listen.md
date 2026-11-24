---
'@coveord/plasma-mantine': patch
---

Fix `Table` click outside when `additionalRootNodes` contains `null`

An unmounted prompt (a `null` ref) in `additionalRootNodes` prevented clicks outside the table from resetting the row selection. `null` and `undefined` entries are now ignored.
