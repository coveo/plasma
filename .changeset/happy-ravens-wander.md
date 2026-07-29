---
'@coveord/plasma-mantine': patch
---

Fix `Table` row selection and expand-on-click interaction

`enableRowSelection` is now the single switch that determines whether the user can select rows, and `enableMultiRowSelection` only applies when `enableRowSelection` is `true`.

Rows no longer expand on click when row selection is enabled; clicking a row selects it instead.

When `enableRowSelection` is `false`, the user can no longer change the selection. With `enableMultiRowSelection: true`, existing selected rows are still shown with read-only checkboxes, while the checkboxes are hidden entirely when nothing is selected. Rows expand on click as they do when selection is off.
