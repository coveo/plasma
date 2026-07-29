---
name: Pill
description: Compact tag-style element used to display a selected value or token, optionally with a remove button for multi-value inputs.
---

# Usage guidance

## What problem does it solve?

`Pill` represents a discrete selected value within a multi-value input or a tag list. It provides a contained, visually distinct token that can optionally be removed by the user, making it the correct building block for tag inputs, multiselect fields, and filter chips within an input field.

## When to use it

Use `Pill` when:

- rendering selected values inside a `PillsInput` or multiselect field
- displaying removable tags or tokens where each item represents a discrete selection
- building a custom multi-value input that requires individual item removal

## When not to use it

Do not use `Pill` when:

- the value is a read-only label or category indicator not associated with an input; use `Badge` instead
- the user is choosing between options (not removing them); use `Chip` or `Select`
- a single selected value is sufficient; a plain `Select` or `TextInput` is simpler

## Decision-making guidance

- Use `withRemoveButton` only when the user can remove the value. Do not show the remove button on read-only or display-only contexts.
- Prefer `size="sm"` (the default) for inline use within `PillsInput`. Use `size="md"` when `Pill` is displayed outside of a dense input context.
- `Pill` is intentionally minimal. If you need rich styling (colour, icon) per tag, consider whether `Badge` or `Chip` better fits the use case.

## Variants

`Pill` does not expose semantic variants. It inherits Mantine's theming and displays consistently as a neutral tag. For colour-coded tags, use `Badge`.

## States

- **Default** — read-only token display
- **With remove button** — adds an `×` button the user can click to deselect the value

## Interaction notes

When `withRemoveButton` is set, clicking the `×` triggers the `onRemove` callback. The remove action SHOULD immediately remove the item from the selection and return focus to the surrounding input.

## Accessibility expectations

- When `withRemoveButton` is used, the remove button MUST have an accessible label — Mantine sets this via `removeButtonProps`. Override it when the default label is not descriptive enough (e.g. use "Remove Python" instead of just "Remove").
- `Pill` elements within an input SHOULD be keyboard-reachable, typically via `Tab` or focus management handled by the parent `PillsInput`.

## Common anti-patterns

- Using `Pill` as a status badge or category label outside an input context — use `Badge` instead.
- Rendering a `Pill` with `withRemoveButton` but no `onRemove` handler, making the button a no-op.
- Using `Pill` for navigation or action triggers — use `Chip` or `Button`.

## What an AI agent should understand

- `Pill` is a thin Plasma re-export of Mantine's `Pill` with no additional props.
- It is primarily intended as a child of `PillsInput.Field` for custom multiselect implementations.
- `withRemoveButton` controls the visible `×`; wire `onRemove` to remove the item from state.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `PillProps` from `@mantine/core`. Refer to [Mantine Pill documentation](https://mantine.dev/core/pill/) for the full prop list.

Key props in practice:

- **`children`** `ReactNode` · required — The value label displayed inside the pill
- **`withRemoveButton`** `boolean` · optional · default: `false` — Shows the remove (`×`) button
- **`onRemove`** `() => void` · optional — Callback fired when the remove button is clicked
- **`size`** `'sm' | 'md'` · optional · default: `'sm'` — Controls the pill's overall size

## Usage

```tsx
import {Pill} from '@coveord/plasma-mantine/components/Pill';
import {useState} from 'react';

function TagList() {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Python']);

    return (
        <div style={{display: 'flex', gap: 4, flexWrap: 'wrap'}}>
            {tags.map((tag) => (
                <Pill key={tag} withRemoveButton onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
                    {tag}
                </Pill>
            ))}
        </div>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
