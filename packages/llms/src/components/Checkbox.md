---
name: Checkbox
description: Boolean selection control for choosing zero, one, or many visible options, including stand-alone opt-in choices.
---

# Usage guidance

## What problem does it solve?

The `Checkbox` lets users select zero, one, or many options from a visible set.

It is useful when users need to compare options directly and the list remains short enough to scan comfortably.

## When to use it

Use `Checkbox` when:

- users can choose any number of options, from none to many
- options SHOULD remain visible for comparison
- a stand-alone optional commitment or confirmation is needed

`Checkbox.Group` SHOULD be used when multiple related checkboxes form a single field or choice set.

## When not to use it

Do not use `Checkbox` when:

- only one option can be selected
- the user is choosing between immediate view modes or display states
- the list is so long that scanning individual options becomes inefficient

## Decision-making guidance

- Use `Checkbox` when direct visibility of options matters
- Prefer a stand-alone checkbox for an optional commitment or confirmation
- If the result applies immediately, another control such as a toggle-like option MAY be more appropriate
- If the list grows too long, a searchable multi-select pattern is often a better fit than simply adding more checkboxes
- As a starting product guideline, forms SHOULD avoid showing more than about 8 checkboxes together unless there is a strong reason to keep the full list visible

## States

Important states include:

- unchecked
- checked
- indeterminate
- disabled
- read-only, when provided by the consumer

## Interaction notes

- `Checkbox.Group` SHOULD be used to keep related checkbox values grouped consistently
- The indeterminate state SHOULD only be used when it reflects a meaningful partial-selection relationship
- Grouped checkboxes MAY be laid out inline or stacked depending on scanability and available space

## Accessibility expectations

- Each checkbox MUST have a clear, programmatically associated label
- Related checkbox groups SHOULD have a group label or legend
- Indeterminate state SHOULD only be used when it has a real parent-child meaning
- Keyboard users MUST be able to move through and toggle options predictably

## Content guidance

- Labels SHOULD be short, self-explanatory, and consistent across a group
- For a stand-alone checkbox, the label SHOULD describe what happens if the checkbox is selected
- Group titles SHOULD describe the type of options available rather than instructing the user with an action phrase

## Common anti-patterns

- Using checkboxes for mutually exclusive choices
- Showing long checkbox lists that are hard to scan
- Using an indeterminate state without a real parent-child relationship

## What an AI agent should understand

- `Checkbox` is for zero, one, or many selections from a visible set
- A stand-alone checkbox can represent an optional commitment or confirmation, but not an immediate switch-like control
- If only one option is allowed or the list is too long to scan comfortably, another pattern is likely a better choice

## Open questions for our system

- Is `8` the right starting threshold for when a checkbox list in a form should be reconsidered in favour of a more compact or searchable pattern?

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma re-exports Mantine's grouped checkbox API.

- `Checkbox.Group`

## Usage

```tsx
import {Checkbox, Group} from '@coveord/plasma-mantine';

// Stand-alone checkbox
<Checkbox label="Send me a text notification" />;

// Grouped options
<Checkbox.Group label="Options">
    <Group mt="xs">
        <Checkbox value="1" label="Option 1" />
        <Checkbox value="2" label="Option 2" />
        <Checkbox value="3" label="Option 3" />
    </Group>
</Checkbox.Group>;

// Indeterminate state when a parent option is only partially selected
<Checkbox label="Select all" indeterminate />;
```

---

[Full Plasma documentation]({{BASE_URL}})
