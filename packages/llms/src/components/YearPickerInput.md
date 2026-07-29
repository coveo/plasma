---
name: YearPickerInput
description: Form input that opens a year-grid popover for selecting one year, multiple years, or a year range.
---

# Usage guidance

## What problem does it solve?

`YearPickerInput` lets users pick a year (or span of years) from a structured grid rather than typing a number, preventing out-of-range entries and reducing the cognitive overhead of remembering valid year values in a given context.

## When to use it

- Filtering or scoping data to a fiscal or calendar year (e.g. "Show results from 2023").
- Collecting a graduation year, a founding year, or any other single year value.
- Defining a year range for a report or comparison (e.g. "Compare 2020–2024") — use `type="range"`.

## When not to use it

- When the user needs a specific date, not just a year — use `DatePickerInput` instead.
- When the year is always the current year or is derived from another field — remove the field and compute the value programmatically.
- When the set of valid years is small and well-known (e.g. four specific years) — a `Select` is simpler and does not introduce a popover interaction.

## Decision-making guidance

- Use `type="default"` for a single year selection and `type="range"` for a contiguous year span.
- Enable `clearable` whenever the year is optional so users can remove a previously selected value without workarounds.
- Provide `minDate` and `maxDate` (Mantine props) to bound the selectable range and prevent logically invalid values (e.g. a birth year in the future).

## Variants

`type` controls selection behaviour:

- `'default'` — single year.
- `'multiple'` — multiple individual years.
- `'range'` — contiguous year range with start and end.

## Interaction notes

- Clicking the input opens a popover showing a grid of years.
- In `type="range"` mode, the first click sets the start year and the second click sets the end year. Hovering previews the potential range.
- The clear button (when `clearable` is enabled) appears inside the input once a value is selected.
- Keyboard navigation within the popover uses arrow keys; Enter confirms, Escape closes.

## Accessibility expectations

- The field MUST have a visible label via `label` or an external element connected with `aria-labelledby`.
- `description` and `error` SHOULD be used for supplementary guidance and validation feedback respectively.
- `required` adds a visual indicator and the `aria-required` attribute.

## Content guidance

- Use a `placeholder` that reflects the selection mode (e.g. `"Pick a year"` or `"Pick a year range"`).
- Labels SHOULD be noun phrases ("Report year", "Founding year") rather than instructions.
- Error messages SHOULD be specific (e.g. "End year must be after start year") rather than generic ("Invalid selection").

## Common anti-patterns

- Using `YearPickerInput` when `DatePickerInput` is needed — if users must also specify month or day, `YearPickerInput` is the wrong component.
- Omitting `clearable` on an optional year field, leaving users unable to remove a selection.
- Leaving the year range unbounded when the domain clearly constrains it (e.g. no fiscal years before the company was founded) — always set `minDate`/`maxDate` to enforce valid ranges.

## What an AI agent should understand

- `YearPickerInput` is a thin Plasma re-export of `@mantine/dates` `YearPickerInput`. All Mantine props are available.
- Plasma adds only a `displayName` for tooling; there is no additional logic.
- The value type changes with `type`: a single `Date | null` for `'default'`, `Date[]` for `'multiple'`, and `[Date | null, Date | null]` for `'range'`.

# API reference

## Props

> Extends: `YearPickerInputProps` from `@mantine/dates`. No additional Plasma-specific props.

Key props relevant to Plasma usage patterns:

**`type`** `'default' | 'multiple' | 'range'` · optional · default: `'default'` — Controls whether one year, many years, or a year range can be selected.

**`clearable`** `boolean` · optional · default: `false` — Renders a clear button inside the input when a value is present.

**`placeholder`** `string` · optional — Hint text shown when no year is selected.

**`label`** `ReactNode` · optional — Visible field label rendered above the input.

**`description`** `ReactNode` · optional — Helper text rendered below the label.

**`error`** `ReactNode` · optional — Validation message rendered below the input in an error state.

**`required`** `boolean` · optional · default: `false` — Marks the field as required.

**`disabled`** `boolean` · optional · default: `false` — Prevents interaction and dims the field.

**`readOnly`** `boolean` · optional · default: `false` — Displays the value without allowing edits.

## Usage

```tsx
import {YearPickerInput} from '@coveord/plasma-mantine';

// Single year selection
function ReportYearField() {
    return <YearPickerInput label="Report year" placeholder="Pick a year" clearable />;
}

// Year range selection
function ComparisonRangeField() {
    return (
        <YearPickerInput type="range" label="Comparison period" placeholder="Pick a year range" clearable required />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
