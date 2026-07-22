---
'@coveord/plasma-mantine': minor
---

Add `Table.Layouts.Cards` — a card-based layout for the Table component

The new layout renders table data as a responsive grid of cards instead of rows. It supports single and multi-row selection (with a "Select all" checkbox), double-click handling, and integrates with the existing Table store (`forceSelection`, `enableMultiRowSelection`). Collapsible row content is intentionally excluded from this layout.

Also extracts `TableSelectAllCheckbox` into a shared component reused by both the row layout selectable column and the card layout header.
