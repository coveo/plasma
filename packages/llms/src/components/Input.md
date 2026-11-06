---
name: Input
description: Base input wrapper and sub-components for building custom form fields.
---

# Usage guidance

## What problem does it solve?

The `Input` family provides shared form-field structure and small contextual help patterns for labels, descriptions, placeholders, and errors.

To add short optional help next to a label, use `ContextualHelp` inside the `label` prop.

## When to use it

Use `Input` sub-components when:

- composing custom form fields that should follow Plasma input structure
- descriptions, errors, or placeholders need to align with Mantine input patterns
- a custom field should remain consistent with Plasma form styling

## When not to use it

Do not use `Input.LabelInfo`: it is deprecated. Use `ContextualHelp` with `ml="xxs"` inside the `label` prop instead.

## Decision-making guidance

- Use field descriptions for guidance users should read before entering a value.
- Use `ContextualHelp` inside the `label` prop for optional clarifying context.
- Use `Alert` for broader form-level guidance or warnings.
- Use component-specific inputs such as `TextInput`, `Select`, or `PasswordInput` when they already provide the needed structure.

## Accessibility expectations

- Labels MUST clearly identify the field.
- Required guidance SHOULD remain visible instead of hidden in a tooltip.
- Error text SHOULD be associated with the field through the input component.

## Content guidance

- Descriptions SHOULD explain expected input, constraints, or consequences.
- Error text SHOULD start with the verb that fixes the field, then name what's needed: "Enter a name for this source."
- Error text SHOULD use "Enter" for typed values, "Select" for choices, and "Add" for list items.
- When the format is wrong, error text SHOULD show the expected one: "Enter an email address in this format: name@example.com."
- When there's a limit or a range, error text SHOULD state it: "Enter a name of up to 50 characters."
- When the fix isn't obvious from the value, error text SHOULD say what happened, then what to do: "This name already exists. Enter a different one."
- Error text SHOULD be a full sentence that ends with a period.

## Common anti-patterns

- Composing custom fields when a dedicated input component exists.
- Writing generic errors such as "This field is required." or "Invalid input."
- Stating only the rule that was broken, such as "Name must be 50 characters or fewer.", instead of what to enter.

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
- `Input.LabelInfo` (deprecated)

`Input.LabelInfo` is deprecated and MUST NOT be used in new code. Use `ContextualHelp` with `ml="xxs"` instead. It renders a `ContextualHelp` (text variant) with that spacing.

### Input.LabelInfo props

> Extends: `StylesApiProps<InputLabelInfoFactory>`, plus `className` and `style`. Other `TooltipProps` are still accepted for backward compatibility but are deprecated and ignored; you MUST NOT pass them.

**`children`** `ReactNode` · required · default: `undefined` — The tooltip content to display.
**`position`** `FloatingPosition` · optional · default: `'top'` — The position of the tooltip relative to the icon.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Input.Props`
- `Input.Factory`
- `Input.LabelInfo.Props`
- `Input.LabelInfo.StylesNames`
- `Input.LabelInfo.Factory`

## Usage

```tsx
import {ContextualHelp, TextInput} from '@coveord/plasma-mantine';

function Example() {
    return (
        <TextInput
            label={
                <>
                    API key
                    <ContextualHelp ml="xxs">The secret key used to authenticate API requests.</ContextualHelp>
                </>
            }
            placeholder="sk_live_..."
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
