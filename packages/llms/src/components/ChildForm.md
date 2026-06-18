---
name: ChildForm
description: Expandable nested sub-form within a parent form context.
---

# Usage guidance

## What problem does it solve?

The `ChildForm` reveals optional nested fields inside a larger form while keeping those related fields visually grouped.

## When to use it

Use `ChildForm` when:

- a parent form has optional or conditional fields
- fields should appear only after a user opts into a related configuration
- nested fields belong to the same parent entity
- title and description help explain the conditional section

## When not to use it

Do not use `ChildForm` when:

- the section is always required and should be visible
- the nested flow is large enough to need a separate step or page
- the relationship between parent and child fields is unclear
- hiding fields would make validation errors hard to understand

## Decision-making guidance

- Use `ChildForm` for conditional nested form sections.
- Use a separate page, step, or modal when the child workflow is complex.
- Pair it with the control that reveals the section, such as a checkbox or switch.

## Interaction notes

- The opening control SHOULD make it clear what fields will appear.
- Collapsing a child form SHOULD NOT silently discard user-entered data unless the product explicitly confirms that behavior.
- Validation errors inside a collapsed child form SHOULD remain discoverable.

## Content guidance

- Titles SHOULD name the nested object or configuration.
- Descriptions SHOULD explain why the extra fields are needed.

## Common anti-patterns

- Hiding required fields behind an optional-looking control.
- Nesting several child forms deeply.
- Using `ChildForm` as a general layout card.

## What an AI agent should understand

- `ChildForm` is for conditional nested fields in a parent form.
- It should be tied to a clear opt-in or condition.
- Use larger flow patterns when the nested content becomes complex.

# API reference

## Props

> Extends: `CollapseProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`title`** `string` · optional · default: `undefined` — MAY define the title of the child form.
**`description`** `ReactNode` · optional · default: `undefined` — MAY define the description of the child form.

## Usage

```tsx
import {Checkbox, ChildForm, Stack, TextInput} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [hasSecondaryContact, setHasSecondaryContact] = useState(false);

    return (
        <Stack>
            <Checkbox
                label="Add a secondary contact"
                checked={hasSecondaryContact}
                onChange={(event) => setHasSecondaryContact(event.currentTarget.checked)}
            />
            <ChildForm
                in={hasSecondaryContact}
                title="Secondary contact"
                description="Collect backup contact details only when they are needed."
            >
                <TextInput label="Full name" placeholder="Taylor Smith" />
                <TextInput label="Email" placeholder="taylor@example.com" />
            </ChildForm>
        </Stack>
    );
}
```

`ChildForm` SHOULD be used to reveal optional nested fields within a larger parent form while keeping related inputs visually grouped.

---

[Full Plasma documentation]({{BASE_URL}})
