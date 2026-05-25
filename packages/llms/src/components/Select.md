---
name: Select
description: Select input that SHOULD be used to choose a single option and can render a read-only visual state.
---

## Props

_No additional props beyond the Mantine base component._

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
        />
    );
}
```

When `readOnly` is set (and `disabled` is not), Plasma applies a distinct read-only visual style — use this instead of `disabled` when the value is informational and not interactive.

---

[Full Plasma documentation](https://plasma.coveo.com)
