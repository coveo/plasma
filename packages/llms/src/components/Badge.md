---
name: Badge
description: Status label that can display short text, counts, or metadata tags.
---

## Props

> Extends: `BadgeProps` (sub-components use `SemanticBadgeProps`, a restricted subset). Only Plasma-specific props are listed below; inherited props MUST be referenced in Mantine documentation.

**`size`** `'small' | 'large'` · optional · default: `'small'` — Controls the badge height and text size.
**`on`** `'light' | 'dark'` · optional · default: current colour scheme — Forces the light or dark colour variant.

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

[Full Plasma documentation]({{BASE_URL}})
