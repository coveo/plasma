---
name: Chip
description: Selectable pill-shaped control that strips the Mantine variant prop to enforce Plasma styling.
---

# Usage guidance

## What problem does it solve?

The `Chip` lets users select compact options in a pill-shaped control when the choices are short and benefit from being visible together.

## When to use it

Use `Chip` when:

- users choose from a small set of short options
- the choices can fit comfortably in the available space
- the selection should feel lighter than a full form field
- single or multiple selection can be represented as selectable pills

## When not to use it

Do not use `Chip` when:

- choices are long, numerous, or need search
- the option descriptions are important to the decision
- the control is only displaying metadata; use `Badge`
- the choice is a primary form field that needs stronger labeling or validation

## Decision-making guidance

- Use `Chip` for compact selectable options.
- Use `Checkbox` for visible multi-select choices that need labels, descriptions, or standard form behavior.
- Use `Select` when only one option can be chosen from a larger list.
- Use `Badge` for non-interactive labels.

## States

Important states include:

- selected
- unselected
- disabled
- grouped single-selection or multiple-selection

## Content guidance

- Chip labels SHOULD be short and parallel.
- Do not use chips when labels wrap or require explanation.
- Group labels SHOULD explain what the chip set controls.

## Common anti-patterns

- Using chips for long lists that need search.
- Using chips as decorative tags when the user cannot select them.
- Mixing unrelated choices in one chip group.

## What an AI agent should understand

- `Chip` is for compact selectable options, not passive metadata.
- Use `Chip.Group` when chips work together as a choice set.
- Do not pass visual variants manually; Plasma strips the Mantine variant prop.

# API reference

## Props

_No additional props beyond the Mantine base component. The `variant` prop is stripped and has no effect._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Chip.Group`

## Usage

```tsx
import {Chip} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Chip.Group multiple defaultValue={['react']}>
            <Chip value="react">React</Chip>
            <Chip value="vue">Vue</Chip>
            <Chip value="angular">Angular</Chip>
        </Chip.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
