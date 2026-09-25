---
name: SliderInput
description: Labeled slider that displays supporting descriptions and validation feedback.
---

# Usage guidance

## What problem does it solve?

`SliderInput` combines a numeric slider with the label, description, and error content expected in a form field.

## When to use it

- The slider needs a visible field label.
- Supporting guidance helps users understand the range or its effect.
- Validation feedback needs to remain associated with the slider.

## When not to use it

- The surrounding interface already provides an accessible label and context; use `Slider` instead.
- Users need to enter a precise value; use `NumberInput` instead.
- The value represents an on or off choice; use `Switch` instead.

## Decision-making guidance

- Use `inputLabel` to name the value being changed.
- Use `description` for guidance that applies before interaction.
- Use `error` for actionable validation feedback.

# API reference

## Props

> Extends: `MantineSliderProps` and selected `InputWrapperProps` (`description`, `error`, and `required`). Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`inputLabel`** `ReactNode` · optional · default: `undefined` — Label displayed above the slider.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `SliderInput.Props`
- `SliderInput.StylesNames`
- `SliderInput.CssVariables`
- `SliderInput.Factory`

## Usage

```tsx
import {SliderInput} from '@coveord/plasma-mantine';

function Example() {
    return (
        <SliderInput
            inputLabel="Percentage"
            description="Select a value between 0 and 100."
            min={0}
            max={100}
            thumbLabel="Percentage"
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
