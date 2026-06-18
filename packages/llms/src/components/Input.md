---
name: Input
description: Base input wrapper extended with a LabelInfo tooltip sub-component for contextual help.
---

# Usage guidance

## What problem does it solve?

The `Input` family provides shared form-field structure and small contextual help patterns for labels, descriptions, placeholders, and errors.

`Input.LabelInfo` helps users understand a field without adding long explanatory text to the form surface.

## When to use it

Use `Input` sub-components when:

- composing custom form fields that should follow Plasma input structure
- a label needs short optional clarification through `Input.LabelInfo`
- descriptions, errors, or placeholders need to align with Mantine input patterns
- a custom field should remain consistent with Plasma form styling

## When not to use it

Do not use `Input.LabelInfo` when:

- the information is required to complete the field; use visible description text
- the message is a warning or validation issue; use error text or an alert
- the explanation is too long for a tooltip
- the field already has enough visible context

## Decision-making guidance

- Use field descriptions for guidance users should read before entering a value.
- Use `Input.LabelInfo` for optional clarifying context.
- Use `Alert` for broader form-level guidance or warnings.
- Use component-specific inputs such as `TextInput`, `Select`, or `PasswordInput` when they already provide the needed structure.

## Accessibility expectations

- Labels MUST clearly identify the field.
- Required guidance SHOULD remain visible instead of hidden in a tooltip.
- Error text SHOULD be associated with the field through the input component.

## Content guidance

- Label info text SHOULD be concise and supplementary.
- Descriptions SHOULD explain expected input, constraints, or consequences.
- Error text SHOULD explain what is wrong and how to fix it.

## Common anti-patterns

- Hiding required instructions inside `Input.LabelInfo`.
- Using label info for long documentation.
- Composing custom fields when a dedicated input component exists.

## What an AI agent should understand

- `Input` is mostly a composition layer for consistent form-field structure.
- `Input.LabelInfo` is for optional field clarification, not required instructions.
- Prefer dedicated input components when possible.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Input.Label`
- `Input.Description`
- `Input.Error`
- `Input.Wrapper`
- `Input.Placeholder`
- `Input.LabelInfo`

`Input.LabelInfo` renders an info icon next to an input label that displays a tooltip on hover. You SHOULD use it to provide additional context about a field without cluttering the label.

### Input.LabelInfo props

> Extends: `Omit<TooltipProps, 'label' | 'classNames' | 'attributes' | 'styles' | 'vars'>`, `StylesApiProps<InputLabelInfoFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`children`** `ReactNode` · required · default: `undefined` — The tooltip content to display.

## Usage

```tsx
import {Input, TextInput} from '@coveord/plasma-mantine';

function Example() {
    return (
        <TextInput
            label={
                <>
                    API key <Input.LabelInfo>The secret key used to authenticate API requests.</Input.LabelInfo>
                </>
            }
            placeholder="sk_live_..."
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
