---
'@coveord/plasma-mantine': major
---

Render `Table` row actions in a column and bulk actions in an `ActionBar`

When `getRowActions` is provided, `Table` now adds `Table.ActionsColumn` automatically (at the end, before the collapsible column if any) and renders the actions of each row in a menu (top-right corner of each card in the card layout). With multi-row selection, the actions for the selected rows are rendered in a new `Table.BulkActions` bar at the bottom of the screen, along with the selection count and a button that clears the selection.

All actions are now menu items behind a 3-dots `ActionIcon`. `$$primary` actions are rendered first. Menus with more than 7 actions display a search input that matches the action label, or the new `searchValue` prop of `Table.ActionItem`.

# Migration

Actions are no longer rendered in `Table.Header`. Remove the `showActions` prop, and move `unselectAllLabel` and `selectedCountLabel` to `Table.BulkActions`.

```diff
- <Table.Header showActions selectedCountLabel={(count) => `${count} users`} />
+ <Table.Header />
+ <Table.BulkActions selectedCountLabel={(count) => `${count} users`} />
```

`getRowActions` is now called once per row with `[row]`, and with the selected rows for bulk actions. Return only the actions that apply to the number of rows received. Remove `Table.ActionsColumn` from your columns unless you want to control its position.

`$$primary` actions are no longer rendered as buttons, and `Table.ActionItem` always renders a `Menu.Item`. The `variant` prop of the actions list and the `TableComponentsOrder.Actions` and `TableComponentsOrder.MultiSelectInfo` values were removed.
