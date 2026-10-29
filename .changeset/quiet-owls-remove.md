---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': patch
---

Add `allowRemove`, `removeDisabledTooltip` and `removeLabel` props to `Collection`

`allowRemove` accepts a boolean, or a function that receives each item and its index. The remove button of an item that cannot be removed is hidden. When `removeDisabledTooltip` is given, a disabled remove button is displayed instead, with the message in a tooltip. `removeDisabledTooltip` also accepts a function, to give a different message for each item.

`removeLabel` sets the accessible label of the remove buttons, as `addLabel` does for the add button. It defaults to `"Remove"`.

```tsx
<Collection
    {...form.getInputProps('contacts')}
    newItem={{name: '', email: ''}}
    allowRemove={(item) => !item.isOwner}
    removeDisabledTooltip="The account owner cannot be removed"
    removeLabel="Remove contact"
    columns={columns}
/>
```
