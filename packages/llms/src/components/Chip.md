---
name: Chip
description: Selectable pill-shaped control that strips the Mantine variant prop to enforce Plasma styling.
---

## Props

_No additional props beyond the Mantine base component. The `variant` prop is stripped and has no effect._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Chip.Group`

## Usage

```tsx
import {Chip} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Chip.Group multiple defaultValue={['react']}>
            <Chip value="react">React</Chip>
            <Chip value="vue">Vue</Chip>
            <Chip value="angular">Angular</Chip>
        </Chip.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
