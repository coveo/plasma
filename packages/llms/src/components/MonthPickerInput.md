---
name: MonthPickerInput
description: Form input that opens a calendar popover for selecting a single month, multiple months, or a month range.
---

# Usage guidance

## What problem does it solve?

`MonthPickerInput` lets users select a month (or range of months) without typing, eliminating format ambiguity and invalid-date errors in contexts where day-level precision is unnecessary.

## When to use it

- Collecting a single month (e.g. "Report month", "Billing period").
- Collecting multiple individual months that are not necessarily consecutive.
- Collecting a month range (e.g. a subscription period, a fiscal window).
- Any scenario where a user needs to select at the month level rather than a specific date — this is less granular and less cognitively demanding than `DatePickerInput`.

## When not to use it

- When day-level precision is required — use `DatePickerInput` instead.
- When only a year is needed and not a month — use `YearPickerInput` instead.

## Decision-making guidance

- Use `type="default"` (single month) for point-in-time selections such as a report month.
- Use `type="range"` for interval selections such as a date range filter over months; this covers the most common multi-month use case.
- Use `type="multiple"` when users need to pick specific, non-contiguous months (unusual — validate this is truly needed before using it).
- Enable `clearable` whenever the field is optional, so users can remove a previously set value without workarounds.

## Variants

**`type`** controls selection behaviour:

- `'default'` — single month selection.
- `'multiple'` — multiple individual months.
- `'range'` — continuous month range with start and end.

## Interaction notes

- The popover opens when the user focuses or clicks the input.
- In `type="range"` mode, the first click sets the start month and the second click sets the end month.
- When `clearable` is enabled, a clear button appears inside the input when a value is set.

## Accessibility expectations

- The input MUST have a visible label; use the `label` prop or connect an external label with `aria-labelledby`.
- `description` and `error` props SHOULD be used to provide supplementary guidance and validation feedback — these are rendered in accessible positions.
- The popover calendar is keyboard-navigable: arrow keys move between months, Enter confirms selection, Escape closes the popover.

## Content guidance

- Use a `placeholder` that signals what kind of value is expected (e.g. `"Pick a month"`).
- Labels SHOULD be noun phrases: "Report month" rather than "Select a report month".
- Error messages SHOULD be specific: "End month must be after start month" rather than "Invalid selection".

## Common anti-patterns

- Using `MonthPickerInput` when day-level precision is needed — use `DatePickerInput` in that case.
- Omitting `clearable` on optional fields, forcing users to reload or use workarounds to unset a value.
- Using `type="multiple"` without a clear rationale — multi-select month patterns are rare and often better served by checkboxes or a `MultiSelect` with month options.

## What an AI agent should understand

- `MonthPickerInput` is a direct re-export of `@mantine/dates` `MonthPickerInput` with a `displayName` set. All Mantine props are available.
- Plasma adds no additional props or behaviour beyond the Mantine base component.
- The component shares the same `type`, `clearable`, and `placeholder` patterns used by `DatePickerInput` — the key difference is that the calendar only shows month-level granularity.
- `labelInfo` (from `withLabelInfoProps`) is used in Storybook to pass tooltip content into `Input.LabelInfo` — wire this up in forms where supplementary guidance is needed.

# API reference

## Props

> Extends: `MonthPickerInputProps` from `@mantine/dates`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`type`** `'default' | 'multiple' | 'range'` · optional · default: `'default'` — Controls selection mode.

**`clearable`** `boolean` · optional · default: `false` — Shows a clear button inside the input when a value is present.

**`placeholder`** `string` · optional — Placeholder text shown when no month is selected.

**`label`** `string` · optional — Visible label for the input.

**`description`** `string` · optional — Helper text displayed below the label.

**`error`** `string` · optional — Validation error message displayed below the input.

**`required`** `boolean` · optional · default: `false` — Marks the field as required and shows a required indicator.

**`disabled`** `boolean` · optional · default: `false` — Disables the input.

**`readOnly`** `boolean` · optional · default: `false` — Makes the input read-only.

## Usage

```tsx
import {MonthPickerInput} from '@coveord/plasma-mantine';

// Single month selection
function ReportMonthPicker() {
    return <MonthPickerInput label="Report month" placeholder="Pick a month" clearable />;
}

// Month range selection
function BillingPeriodPicker() {
    return <MonthPickerInput type="range" label="Billing period" placeholder="Pick a month range" clearable required />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
