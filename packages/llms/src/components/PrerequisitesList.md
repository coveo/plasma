---
name: PrerequisitesList
description: Displays a list of prerequisites with status indicators (complete, incomplete).
---

## Props

> Extends: `BoxProps`, `StylesApiProps`, `ElementProps<'ul'>`. Only Plasma-specific props are listed below; inherited props MUST be referenced in Mantine documentation.

**`children`** `ReactNode` · required — The `PrerequisitesList.Item` elements to render.

## Sub-components

- `PrerequisitesList.Item` — A single prerequisite entry with a status icon and label.

### PrerequisitesList.Item Props

**`status`** `'complete' | 'incomplete'` · required — Determines the icon and color displayed. `complete` shows a green checkmark, `incomplete` shows a grey dot.
**`label`** `string` · required — The text content of the prerequisite.
**`description`** `string` · optional · default: `undefined` — Optional description text displayed below the label in a smaller, dimmed font.

## Usage

```tsx
import {PrerequisitesList} from '@coveord/plasma-mantine';

<PrerequisitesList>
    <PrerequisitesList.Item
        label="Completed Prerequisite"
        status="complete"
        description="Optional description of the item."
    />
    <PrerequisitesList.Item
        label="Incomplete Prerequisite"
        status="incomplete"
        description="Optional description of the item."
    />
</PrerequisitesList>;
```

---

[Full Plasma documentation]({{BASE_URL}})
