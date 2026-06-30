---
name: PrerequisitesList
description: Displays a list of prerequisites with status indicators (completed, current, next).
---

## Props

> Extends: `BoxProps`, `ElementProps<'ul'>`. Only Plasma-specific props are listed below; inherited props MUST be referenced in Mantine documentation.

**`children`** `ReactNode` · required — The `PrerequisitesList.Item` elements to render.

## Sub-components

- `PrerequisitesList.Item` — A single prerequisite entry with a status icon and label.

### PrerequisitesList.Item Props

**`status`** `'completed' | 'current' | 'next'` · required — Determines the icon and color displayed.
**`label`** `string` · required — The text content of the prerequisite.

## Usage

```tsx
import {PrerequisitesList} from '@coveord/plasma-mantine';

<PrerequisitesList>
    <PrerequisitesList.Item label="Completed prerequisite" status="completed" />
    <PrerequisitesList.Item label="Current prerequisite" status="current" />
    <PrerequisitesList.Item label="Next prerequisite" status="next" />
</PrerequisitesList>;
```

---

[Full Plasma documentation]({{BASE_URL}})
