---
name: PasswordInput
description: Password input with support for a read-only visual state.
---

## Props

> Extends: `PasswordInputProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop       | Type      | Required | Default | Description                                                                                                                                                |
| ---------- | --------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `readOnly` | `boolean` |          | `false` | When `true` and `disabled` is not set to `true`, the component renders with Plasma read-only styles and remains visually distinct from the disabled state. |

## Usage

```tsx
import {PasswordInput} from '@coveord/plasma-mantine';

function Example() {
    return <PasswordInput label="Database password" value="s3cr3t-value" readOnly />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
