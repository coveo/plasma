---
name: ActionIcon
description: Icon-only button that can trigger actions and can show a disabled-state tooltip.
---

## Props

> Extends: `MantineActionIconProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop                   | Type                                                      | Required | Default | Description                                                                                                             |
| ---------------------- | --------------------------------------------------------- | :------: | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `onClick`              | `ClickHandler<HTMLButtonElement>`                         |          | —       | Handler executed on click. Async handlers MAY be provided; the button shows a loading state while the promise resolves. |
| `disabledTooltip`      | `string`                                                  |          | —       | Tooltip message displayed when `disabled` is `true`.                                                                    |
| `disabledTooltipProps` | `Omit<TooltipProps, 'disabled' \| 'label' \| 'children'>` |          | —       | Additional tooltip props that MAY be set on the disabled button tooltip.                                                |

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `ActionIcon.Group`
- `ActionIcon.Primary`
- `ActionIcon.Secondary`
- `ActionIcon.Tertiary`
- `ActionIcon.Quaternary`
- `ActionIcon.DestructivePrimary`
- `ActionIcon.DestructiveSecondary`
- `ActionIcon.DestructiveTertiary`
- `ActionIcon.DestructiveQuaternary`

## Usage

```tsx
import {ActionIcon} from '@coveord/plasma-mantine';
import {IconTrash} from '@coveord/plasma-react-icons';

const removeItem = () => {};
const deleteItem = async () => {};

// Common pattern: use a sub-component for the intended emphasis.
<ActionIcon.Quaternary onClick={removeItem}>
    <IconTrash aria-label="Remove" />
</ActionIcon.Quaternary>;

// Async handlers automatically show a loading state while pending.
<ActionIcon.DestructivePrimary onClick={deleteItem}>
    <IconTrash />
</ActionIcon.DestructivePrimary>;

// Disabled actions MAY explain why they are unavailable.
<ActionIcon.Primary disabled disabledTooltip="You do not have permission to remove this item">
    <IconTrash />
</ActionIcon.Primary>;
```

---

[Full Plasma documentation](https://plasma.coveo.com)
