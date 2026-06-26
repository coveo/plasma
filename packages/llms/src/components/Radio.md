---
name: Radio
description: Single-selection control that lets users pick exactly one option from a visible set.
---

# Usage guidance

## What problem does it solve?

`Radio` makes mutually exclusive choices explicit by keeping all options visible simultaneously. Users can compare every option before committing, which reduces errors in high-stakes selections.

## When to use it

Use `Radio` / `Radio.Group` when:

- the user must choose exactly one value from a small, fixed set (typically 2–6 options)
- all options should remain visible so the user can compare them before deciding
- the options do not have enough complexity to warrant `RadioCard`

## When not to use it

Do not use `Radio` when:

- users can select more than one option; use `Checkbox`
- there are more than ~6–8 options; use `Select` to keep the UI compact
- each option needs a detailed description, icon, or supporting content; use `RadioCard`
- there is only one option to toggle on or off; use `Checkbox` or a `Switch`

## Decision-making guidance

- Always wrap individual `Radio` items in a `Radio.Group` to get group-level labelling, validation, and keyboard navigation.
- Lay out options horizontally when they are short and there are few of them; switch to vertical layout when labels are longer or there are more options.
- Mark a group as `required` at the `Radio.Group` level, not on individual items.
- Use `readOnly` on individual `Radio` items when the current selection should be visible but not editable.

## States

- unchecked
- checked
- disabled (whole group or individual item)
- read-only
- error (applied via `Radio.Group` validation)

## Accessibility expectations

- `Radio.Group` MUST have a `label` (or `aria-label`) that describes the group decision.
- Individual `Radio` items MUST have a `label` prop; icon-only radios are not acceptable.
- Keyboard users MUST be able to move between options using arrow keys within the group.

## Content guidance

- Group labels SHOULD name the decision being made, not the concept (e.g. "Notification frequency", not "Notifications").
- Individual labels SHOULD be short, parallel, and in sentence case.
- Avoid double negatives or technical jargon in option labels.

## Common anti-patterns

- Rendering `Radio` items without a wrapping `Radio.Group` — this breaks keyboard navigation and label association.
- Using radio buttons for settings that take effect immediately without a submit action; use `SegmentedControl` or a `Switch` instead.
- Having more than one pre-selected option in a group (the data model only allows one).

## What an AI agent should understand

- Always use `Radio.Group` as the parent container; individual `Radio` renders one option.
- The `value` prop on `Radio.Group` (or `defaultValue`) controls which item is selected.
- `readOnly` is available on individual items but not natively on the group; apply it to each child when the whole group should be read-only.
- For richer option content, reach for `RadioCard` instead.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `RadioProps` and `RadioGroupProps` from `@mantine/core`. `Radio.Group` is the sub-component for grouping. Refer to Mantine documentation for all available props.

## Sub-components

- `Radio.Group` — wraps multiple `Radio` items, providing a shared `value`, label, description, and error.

## Usage

```tsx
import {Radio} from '@coveord/plasma-mantine';
import {Group} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [value, setValue] = useState<string>('1');

    return (
        <Radio.Group
            label="Preferred contact method"
            description="We will only use this for account alerts."
            value={value}
            onChange={setValue}
            required
        >
            <Group mt="xs">
                <Radio value="1" label="Email" />
                <Radio value="2" label="SMS" />
                <Radio value="3" label="Phone" />
            </Group>
        </Radio.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
