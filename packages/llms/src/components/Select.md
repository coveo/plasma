---
name: Select
description: Select input for choosing a single option with support for a read-only visual state.
---

# Usage guidance

## What problem does it solve?

The `Select` lets users choose one value from a list while keeping the form compact.

It is useful when options are known, mutually exclusive, and do not all need to remain visible at once.

## When to use it

Use `Select` when:

- the user can choose exactly one option
- the available options are known ahead of time
- the option list is too long or too secondary for radio-style visible choices
- a read-only selected value needs to be shown in a form layout

## When not to use it

Do not use `Select` when:

- users can choose multiple values
- all options should remain visible for comparison
- options need rich descriptions to make the decision
- the value is only informational and does not need a field affordance

## Decision-making guidance

- Use `Select` for compact single selection.
- Use `RadioCard` or radio controls when choices need descriptions or stronger comparison.
- Use `Checkbox` for zero-to-many selection.
- Use `readOnly` instead of `disabled` when the value is informational but should remain legible as a field.

## States

Important states include:

- empty
- selected
- opened
- disabled
- read-only
- error, when used inside validation

## Content guidance

- Labels SHOULD describe the decision being made.
- Placeholder text SHOULD explain what to choose, not repeat the label.
- Option labels SHOULD be concise and parallel.

## Common anti-patterns

- Using `Select` for a list that needs multi-selection.
- Hiding a very small, important choice set in a dropdown.
- Using `disabled` when the value should be read-only and readable.

## What an AI agent should understand

- `Select` is for compact single-choice form selection.
- Use read-only styling for informational values that should not be changed.
- Choose a visible choice pattern when comparison matters more than compactness.

# API reference

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

[Full Plasma documentation]({{BASE_URL}})
