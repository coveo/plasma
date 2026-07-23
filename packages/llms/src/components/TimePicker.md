---
name: TimePicker
description: Form input for selecting a specific time of day in 12-hour or 24-hour format, with optional seconds.
---

# Usage guidance

## What problem does it solve?

`TimePicker` provides a structured, keyboard-friendly way to enter a time value, removing the ambiguity and format errors that come from a plain text field (e.g. "2pm", "14:00", "2:00 PM") while keeping the interaction lightweight compared to a full clock widget.

## When to use it

- Collecting a specific time from the user (e.g. meeting start time, scheduled job time, alarm time).
- Forms where a `DatePickerInput` captures the date portion separately and `TimePicker` captures the time portion.
- Cases where the user likely knows the exact time they want to enter rather than needing to browse a visual representation.

## When not to use it

- When the user needs to select a time range — compose two `TimePicker` instances (start/end) and validate that start precedes end.
- When precision below the minute level is never required in practice — hide seconds to reduce cognitive load.
- When a relative time expression ("in 2 hours", "tomorrow morning") is more useful than an absolute time — use a `Select` with predefined options instead.

## Decision-making guidance

- Choose `format="12h"` (the default) for consumer-facing products and locales that use 12-hour time; choose `format="24h"` for technical, scientific, or international contexts.
- Enable `withSeconds` only when seconds are actually meaningful to the use case (e.g. scheduling a precise cron job, recording a timestamp) — the additional segment adds cognitive overhead for everyday time selection.
- Enable `clearable` whenever the time field is optional so users can remove a previously set value without reloading.

## States

- **Default** — editable, showing `placeholder` when empty.
- **Disabled** — interaction blocked; use when the time field is not applicable given other form state.
- **Read-only** — value visible but not editable.
- **Error** — validation message shown below the field.

## Interaction notes

- The input uses segmented editing: clicking or tabbing into the field places the cursor in the hours, minutes, AM/PM, or seconds segment. Typing a number advances through segments automatically.
- Arrow keys increment or decrement the value of the focused segment.
- The clear button (when `clearable` is enabled) appears inside the input whenever a value is present.

## Accessibility expectations

- The field MUST have a visible label via `label` or an external element connected with `aria-labelledby`.
- `description` SHOULD be used to communicate the expected time format if it is not obvious from context.
- `error` SHOULD be used for validation messages so they are announced by screen readers in context.

## Content guidance

- Labels SHOULD be noun phrases ("Start time", "Scheduled time") rather than instructions ("Choose a start time").
- If both date and time are collected, place `DatePickerInput` before `TimePicker` and group them under a common fieldset label to make the relationship clear.

## What an AI agent should understand

- `TimePicker` is a thin Plasma re-export of `@mantine/dates` `TimePicker`. All Mantine props are available.
- Plasma adds only a `displayName` for tooling; there is no additional logic.
- `TimePicker` outputs a time string, not a `Date` object; coordinate with the date input separately when a full datetime value is needed.

# API reference

## Props

> Extends: `TimePickerProps` from `@mantine/dates`. No additional Plasma-specific props.

Key props relevant to Plasma usage patterns:

**`format`** `'12h' | '24h'` · optional · default: `'12h'` — Whether to show a 12-hour clock with AM/PM or a 24-hour clock.

**`withSeconds`** `boolean` · optional · default: `false` — Adds a seconds segment to the picker.

**`clearable`** `boolean` · optional · default: `false` — Renders a clear button inside the input when a value is present.

**`label`** `ReactNode` · optional — Visible field label rendered above the input.

**`description`** `ReactNode` · optional — Helper text rendered below the label.

**`error`** `ReactNode` · optional — Validation message rendered below the input in an error state.

**`required`** `boolean` · optional · default: `false` — Marks the field as required with a visual indicator and `aria-required`.

**`disabled`** `boolean` · optional · default: `false` — Prevents interaction and dims the field.

**`readOnly`** `boolean` · optional · default: `false` — Displays the value without allowing edits.

## Usage

```tsx
import {TimePicker} from '@coveord/plasma-mantine';

// 12-hour time picker (default)
function MeetingTimeField() {
    return <TimePicker label="Meeting time" description="Select the start time" format="12h" clearable />;
}

// 24-hour time picker with seconds
function ScheduledJobField() {
    return <TimePicker label="Scheduled time" format="24h" withSeconds required />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
