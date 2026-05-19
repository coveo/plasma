---
name: Badge
description: Status label that can display short text, counts, or metadata tags.
---

## Props

> The sub-components (`Badge.Primary`, `Badge.Success`, etc.) use `SemanticBadgeProps` instead of the full `BadgeProps`. Only Plasma-specific props are listed below.

| Prop           | Type                 | Required | Default   | Description                                                                     |
| -------------- | -------------------- | :------: | --------- | ------------------------------------------------------------------------------- |
| `size`         | `'small' \| 'large'` |          | `'small'` | Controls the badge height and text size.                                        |
| `on`           | `'light' \| 'dark'`  |          | —         | Forces the light or dark colour variant. Defaults to the current colour scheme. |
| `leftSection`  | `ReactNode`          |          | —         | Content rendered before the badge label.                                        |
| `rightSection` | `ReactNode`          |          | —         | Content rendered after the badge label.                                         |
| `fullWidth`    | `boolean`            |          | —         | Makes the badge span the full width of its container.                           |
| `circle`       | `boolean`            |          | —         | Renders the badge as a circle (for single-character or count labels).           |

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Badge.Primary`
- `Badge.Secondary`
- `Badge.Success`
- `Badge.Warning`
- `Badge.Critical`
- `Badge.Disabled`

## Usage

```tsx
import {Badge} from '@coveord/plasma-mantine';

<Badge.Primary>Active</Badge.Primary>
<Badge.Success>Enabled</Badge.Success>
<Badge.Critical>Error</Badge.Critical>
```

---

[Full Plasma documentation](https://plasma.coveo.com)
