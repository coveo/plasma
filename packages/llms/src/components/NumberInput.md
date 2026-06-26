---
name: NumberInput
description: Numeric text field with increment/decrement controls, configurable formatting, and optional prefix, suffix, and range constraints.
---

# Usage guidance

## What problem does it solve?

`NumberInput` provides a purpose-built field for numeric values. Unlike a plain text input, it enforces numeric-only entry, exposes stepper controls, and handles locale-aware formatting (thousand separators, decimal separators, prefix/suffix) so products do not need to implement custom number parsing.

## When to use it

Use `NumberInput` when:

- the user must enter a number (quantity, threshold, percentage, page count, etc.)
- the value has a defined minimum and/or maximum that should be enforced at the input level
- the user may need to increment or decrement the value in small steps
- the value requires display formatting such as currency, units, or large-number separators

## When not to use it

Do not use `NumberInput` when:

- the "number" is not arithmetic — use a plain `TextInput` with appropriate `inputMode`
- the range of valid values is small and discrete — use a `Select` or `Slider` instead
- free-form text alongside a number is expected in the same field

## Decision-making guidance

- Set minimum and maximum values when the field has hard limits — this prevents users from entering something invalid before they submit.
- If the value can't be negative (like a quantity or a count), restrict the field to positive numbers only.
- If only whole numbers make sense, prevent decimal entry.
- Use a prefix or suffix to show the unit directly inside the field (e.g. `$` before a price, `%` after a percentage) — don't place it as separate text next to the field.
- For large numbers like financial amounts, use a thousands separator to make them easier to read at a glance.

## States

- **Default** — editable with stepper buttons
- **Disabled** — field and steppers non-interactive
- **Error** — validation message shown below the field via `error` prop
- **Loading / read-only** — not built-in; implement via form-level state

## Interaction notes

Users can type directly into the field or use the `+`/`−` stepper buttons. The field clamps the value to `min`/`max` on blur. Pressing the up/down arrow keys also increments/decrements by `step`.

## Accessibility expectations

- MUST include a visible `label` — use `InputWrapper` label or the `label` prop.
- `description` SHOULD explain units or constraints when they are not self-evident from context.
- `error` MUST describe what is wrong and what the valid range is when the constraint is violated.

## Common anti-patterns

- Using `NumberInput` for non-arithmetic identifiers (phone numbers, ZIP codes).
- Omitting `min={0}` for fields that cannot logically be negative (quantity, duration, price).
- Relying on `placeholder` to communicate constraints instead of `description`.
- Using a plain `TextInput` with manual number validation when `NumberInput` handles it natively.

## What an AI agent should understand

- `NumberInput` is a thin Plasma re-export of Mantine's `NumberInput` with no additional props.
- Formatting props (`prefix`, `suffix`, `thousandSeparator`, `decimalSeparator`) affect display only, not the underlying numeric value passed to `onChange`.
- `defaultValue` sets an uncontrolled starting value; use `value` + `onChange` for controlled usage.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `NumberInputProps` from `@mantine/core`. Refer to [Mantine NumberInput documentation](https://mantine.dev/core/number-input/) for the full prop list.

Key props in practice:

- **`min`** `number` · optional — Minimum allowed value
- **`max`** `number` · optional — Maximum allowed value
- **`step`** `number` · optional · default: `1` — Step size for stepper controls and arrow keys
- **`allowNegative`** `boolean` · optional · default: `true` — When `false`, negative values are rejected
- **`allowDecimal`** `boolean` · optional · default: `true` — When `false`, decimal entry is blocked
- **`prefix`** `string` · optional — Text displayed before the value (e.g. `"$"`)
- **`suffix`** `string` · optional — Text displayed after the value (e.g. `" %"`)
- **`thousandSeparator`** `string` · optional · default: `","` — Character used to group thousands
- **`decimalSeparator`** `string` · optional · default: `"."` — Character used for the decimal point
- **`leftSection`** `ReactNode` · optional — Icon or element placed inside the left side of the field

## Usage

```tsx
import {NumberInput} from '@coveord/plasma-mantine/components/NumberInput';
import {IconCoins} from '@coveord/plasma-react-icons';

function BudgetField() {
    return (
        <NumberInput
            label="Monthly budget"
            description="Enter the maximum spend in USD"
            prefix="$"
            thousandSeparator=","
            allowNegative={false}
            allowDecimal={false}
            min={0}
            max={1000000}
            leftSection={<IconCoins size={16} />}
            defaultValue={0}
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
