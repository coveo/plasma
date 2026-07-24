---
'@coveord/plasma-mantine': major
---

Remove the `borderTop` prop on `Table.Header`

The table border is now handled automatically, so the prop is no longer needed.

# Migration

Remove `borderTop` from any `Table.Header` usage:

```diff
- <Table.Header borderTop>
+ <Table.Header>
```
