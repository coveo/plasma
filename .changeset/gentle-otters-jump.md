---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': minor
---

Add `Table.Toolbar` sub-component for rendering filters outside the header grid

`Table.Toolbar` is a new opt-in container that renders above the table. Place `Table.Filter`, `Table.Predicate`, or `Table.DateRangePicker` inside it to display them outside the `Table.Header`. Components inside the toolbar skip the `Grid.Col` wrapper and render as plain flex items instead.

The toolbar accepts standard Box props and supports `renderRoot` and `className` for full customization. Existing tables are unaffected — the toolbar is entirely additive.
