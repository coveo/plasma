---
name: PasswordInput
description: Password input with support for a read-only visual state.
---

## Props

_No additional props beyond the Mantine base component._

## Usage

```tsx
import {PasswordInput} from '@coveord/plasma-mantine';

function Example() {
    return <PasswordInput label="Database password" />;
}
```

When `readOnly` is set (and `disabled` is not), Plasma applies a distinct read-only visual style — use this instead of `disabled` when the value is informational and not interactive.

---

[Full Plasma documentation]({{BASE_URL}})
