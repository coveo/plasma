---
'@coveord/plasma-mantine': patch
---

Improve `Table` row click interactions for selection and expand/collapse

Clicking anywhere on a `Table` row now consistently toggles selection in both single-select and multi-select modes. Previously, only single-select rows responded to row clicks while multi-select mode required clicking the checkbox directly.

Rows with expandable content no longer expand or collapse on row click regardless of selection mode. Users must click the dedicated toggle icon to expand or collapse a row. This prevents accidental expansion when the intent is to select.

When `enableRowSelection` is `false`, the user can no longer change the selection. With `enableMultiRowSelection: true`, existing selected rows are still shown with read-only checkboxes, while the checkboxes are hidden entirely when nothing is selected.
