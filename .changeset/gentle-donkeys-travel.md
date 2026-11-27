---
'@coveord/plasma-mantine': major
---

Lay out `Table.Header` with the filter on the left and remove `Table.Toolbar`

`Table.Header` is now a flex container instead of a Mantine `Grid`. `Table.Filter` is always rendered on the left, wherever it appears in the children. Every other child (`Table.Predicate`, `Table.DateRangePicker`, custom elements) is rendered on the right in the order you give it, followed by the layout switch. `Table.Filter`, `Table.Predicate` and `Table.DateRangePicker` no longer render a `Grid.Col`.

`Table.Toolbar` and its `TableToolbarProps`, `TableToolbarStylesNames` and `TableToolbarFactory` types are removed, as well as the `TableComponentsOrder` export. The `Table.Header` styles names `headerGrid`, `headerGridInner` and `headerCol` are replaced by `headerFilter` (left slot) and `headerControls` (right slot).

# Migration

Move the content of `Table.Toolbar` into `Table.Header`. You no longer need a spacer to push controls apart.

```diff
 <Table store={store} columns={columns} data={data}>
-    <Table.Toolbar renderRoot={(props) => <Group {...props} />}>
-        <Table.Predicate id="status" label="Status" data={statuses} />
-        <Box flex={1} />
-        <Table.Filter />
-    </Table.Toolbar>
+    <Table.Header>
+        <Table.Filter />
+        <Table.Predicate id="status" label="Status" data={statuses} />
+    </Table.Header>
 </Table>
```

Order the right-side children in JSX instead of relying on the former fixed order, and replace custom `Grid.Col` children with plain elements.

```diff
 <Table.Header>
-    <Grid.Col span="content" order={TableComponentsOrder.Predicate}>
-        <MyControl />
-    </Grid.Col>
+    <MyControl />
 </Table.Header>
```

Rename the styles names you target in `classNames` or `styles`.

```diff
-<Table classNames={{headerGridInner: classes.header, headerCol: classes.col}} />
+<Table classNames={{headerControls: classes.header}} />
```
