---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': minor
---

Style `ActionBar` to match the Plasma design

Mantine's `ActionBar` now uses Plasma spacing, a medium radius and shadow, and a 36 px `ActionBar.CloseButton`. Use it to show the selection count and bulk actions while users select items, and compose the overflow actions with `Menu`.

```tsx
<ActionBar opened={selected.length > 0} onClose={clearSelection}>
    <Text size="sm" fw={500} px="xs">
        {selected.length} selected
    </Text>
    <ActionBar.Divider />
    <Button.Tertiary onClick={selectAll}>Select all</Button.Tertiary>
    <Button.DestructiveTertiary onClick={deleteSelected}>Delete</Button.DestructiveTertiary>
    <ActionBar.Divider />
    <ActionBar.CloseButton aria-label="Clear selection" />
</ActionBar>
```

The LLM specs include a new `ActionBar` spec.
