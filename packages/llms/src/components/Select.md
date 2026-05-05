---
name: Select
description: Select input that SHOULD be used to choose a single option and can render a read-only visual state.
---

## Props

> Extends: `SelectProps`. Only Plasma-specific props MUST be listed below; inherited props SHOULD be referenced in Mantine documentation.

| Prop       | Type      | Required | Default | Description                                                                                                                                                |
| ---------- | --------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `readOnly` | `boolean` |          | `false` | When `true` and `disabled` is not set to `true`, the component renders with Plasma read-only styles and remains visually distinct from the disabled state. |

## Usage

```tsx
import {Select} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [value, setValue] = useState<string | null>('apple');

    return (
        <Select
            label="Favorite fruit"
            data={[
                {value: 'apple', label: 'Apple'},
                {value: 'orange', label: 'Orange'},
                {value: 'banana', label: 'Banana'},
            ]}
            value={value}
            onChange={setValue}
            placeholder="Pick a fruit"
            readOnly
        />
    );
}
```

---

[Full Plasma documentation](https://plasma.coveo.com)
