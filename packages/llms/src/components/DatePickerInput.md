---
name: DatePickerInput
description: Form input that opens a calendar popover for selecting a single date, multiple dates, or a date range.
---

# Usage guidance

## What problem does it solve?

`DatePickerInput` lets users pick a date or date range from a calendar — so they don't have to type it manually and risk entering the wrong format.

## When to use it

- Collecting a single date from the user (e.g. event date, due date, birth date).
- Collecting multiple individual dates that are not necessarily consecutive.
- Collecting a date range (e.g. a report period, a booking window, a filter interval).
- Providing common range shortcuts (last week, last 7 days, this week) via presets alongside the calendar.

## When not to use it

- When the user only needs to select a month — use `MonthPickerInput` instead.
- When the user only needs to select a year — use `YearPickerInput` instead.
- When the date is relative rather than absolute (e.g. "last 30 days") and the user doesn't need to pick exact dates — use a `Select` with predefined options.

## Decision-making guidance

- Use `type="default"` (single date) for point-in-time selections.
- Use `type="range"`c for interval selections; pair it with `numberOfColumns={2}` to show two months side-by-side, making range selection easier.
- Supply `presets` when users frequently choose well-known intervals (last week, this month); this reduces interaction cost significantly for power users.
- Use `columnsToScroll={1}` with `type="range"` so users can step one month at a time while keeping the two-month view.
- `clearable` SHOULD be enabled whenever the date is optional so users can remove a previously set value.

## Variants

`type` controls selection behaviour:

- `'default'` — single date selection.
- `'multiple'` — multiple individual dates.
- `'range'` — continuous date range with start and end.

## Interaction notes

- The calendar popover opens when the user focuses or clicks the input.
- In `type="range"` mode, the first click sets the start date and the second click sets the end date. Hovering between clicks previews the potential range.
- Preset buttons (when provided) appear beside the calendar and fill the range on click.
- The clear button appears inside the input when a value is set and `clearable` is enabled.

## Accessibility expectations

- The input MUST have a visible label; use `label` or connect an external label with `aria-labelledby`.
- `description` and `error` props SHOULD be used to communicate supplementary information and validation feedback respectively — these are rendered in accessible positions relative to the input.
- The calendar popover is keyboard-navigable: arrow keys move between days, Enter confirms selection, Escape closes the popover.

## Content guidance

- Use a `placeholder` that indicates the expected format (e.g. `"Pick a date"`) so users understand what the field expects before interacting.
- Labels SHOULD use noun phrases rather than instructions (e.g. "Start date" not "Select a start date").
- Error messages SHOULD be specific: "Start date must be before end date" rather than "Invalid date".

## Common anti-patterns

- Showing `presets` with `type="default"` — presets are only meaningful in range mode.
- Setting `numberOfColumns` without `type="range"` — the multi-column layout is only useful when selecting a range.
- Omitting `clearable` on an optional date field, forcing users to reload or use workarounds to remove a value.

## What an AI agent should understand

- `DatePickerInput` is a thin Plasma wrapper around `@mantine/dates` `DatePickerInput`. All Mantine props are available.
- `presets`, `numberOfColumns`, and `columnsToScroll` are only meaningful with `type="range"`.
- The `presets` prop accepts an array of `{label: string; value: [string, string]}` objects where values are ISO date strings (`YYYY-MM-DD`).
- Plasma registers a `displayName` for tooling but adds no additional logic beyond the Mantine base component.

# API reference

## Props

> Extends: `DatePickerInputProps` from `@mantine/dates`. No additional Plasma-specific props beyond the Mantine base component.

Key props relevant to Plasma usage patterns:

**`type`** `'default' | 'multiple' | 'range'` · optional · default: `'default'` — Controls selection mode.

**`presets`** `Array<{label: string; value: [string, string]}>` · optional — Shortcut range buttons displayed beside the calendar. Only meaningful with `type="range"`.

**`numberOfColumns`** `number` · optional · default: `1` — Number of calendar months shown simultaneously. Set to `2` with `type="range"` for a better range-selection experience.

**`columnsToScroll`** `number` · optional · default: `1` — Number of months to advance per navigation arrow click.

**`clearable`** `boolean` · optional · default: `false` — Shows a clear button inside the input when a value is present.

**`placeholder`** `string` · optional — Placeholder text shown when no date is selected.

## Usage

```tsx
import {DatePickerInput} from '@coveord/plasma-mantine';
import dayjs from 'dayjs';

// Single date
function SingleDateExample() {
    return <DatePickerInput label="Due date" placeholder="Pick a date" clearable />;
}

// Date range with presets
function DateRangeExample() {
    return (
        <DatePickerInput
            type="range"
            label="Report period"
            placeholder="Pick a date range"
            numberOfColumns={2}
            columnsToScroll={1}
            clearable
            presets={[
                {
                    label: 'Last week',
                    value: [
                        dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
                        dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
                    ],
                },
                {
                    label: 'Last 7 days',
                    value: [dayjs().subtract(7, 'day').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
                },
                {
                    label: 'This week',
                    value: [dayjs().startOf('week').format('YYYY-MM-DD'), dayjs().endOf('week').format('YYYY-MM-DD')],
                },
            ]}
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
