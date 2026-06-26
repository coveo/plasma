---
name: MultiSelect
description: Dropdown input that allows users to select multiple values from a predefined list, with optional search and clear capabilities.
---

# Usage guidance

## What problem does it solve?

`MultiSelect` lets users pick any number of values from a fixed list in a single compact form field, displaying selections as removable pills inside the input — without requiring a visible list of checkboxes that would consume vertical space.

## When to use it

- Form fields where users need to select multiple values from a known list (e.g. assigning labels, selecting product categories, choosing permissions).
- When the option list is long enough that a flat checkbox list would be unwieldy (more than ~6 options).
- When users may want to search through options — enable `searchable` for large lists.

## When not to use it

- When only a single value can be selected — use `Select` instead.
- When the list of options is very small (2–4 items) and all options benefit from being visible simultaneously — use `Checkbox.Group` or `Chip.Group` for better scannability.
- When the user needs to enter free-form values that are not constrained to a predefined list — `TagsInput` is more appropriate.

## Decision-making guidance

- Enable `searchable` whenever the option list exceeds ~8 items, so users can filter by typing rather than scrolling.
- Enable `clearable` whenever the field is optional, providing a single-action way to reset all selections.
- Keep `data` items as short, scan-friendly labels. If items need descriptions or icons, consider a custom `renderOption` or a different pattern entirely.
- Use `w` (width) to constrain the component to a sensible size — the default width expands to its container, which can be too wide in some layouts.

## Interaction notes

- Selected values appear as dismissible pills inside the input field.
- Clicking the input opens the dropdown; typing filters the list when `searchable` is enabled.
- Each pill has an individual remove button. The clear button (when `clearable` is enabled) removes all selections at once.
- The dropdown closes when the user clicks outside or presses Escape.

## Accessibility expectations

- The input MUST have a visible label via the `label` prop or an external label connected with `aria-labelledby`.
- `description` and `error` props SHOULD be used to provide guidance and validation feedback — these are rendered in accessible positions.
- The component is keyboard navigable: Tab focuses the input, arrow keys navigate options, Enter/Space toggles selection, Escape closes the dropdown, Backspace removes the last selected pill.

## Content guidance

- Use a `placeholder` that describes the expected action, such as `"Pick values"` or `"Select categories"`.
- Labels SHOULD be noun phrases: "Assigned labels" rather than "Select labels to assign".
- Error messages SHOULD be specific: "Select at least one category" rather than "Invalid selection".
- Keep individual option labels concise — truncation inside the pill is visually jarring.

## Common anti-patterns

- Using `MultiSelect` for a small fixed set of 2–3 options where checkboxes or chips would be more scannable.
- Omitting `searchable` on a long list, forcing users to scroll through many options.
- Omitting `clearable` on an optional field, leaving users with no bulk-reset affordance.
- Providing very long option labels that truncate awkwardly when rendered as pills.

## What an AI agent should understand

- `MultiSelect` is a direct re-export of `@mantine/core` `MultiSelect` with a `displayName` set. All Mantine props are available.
- Plasma adds no additional props or behaviour beyond the Mantine base component.
- `data` accepts `string[]`, `{value: string; label: string}[]`, or grouped options `{group: string; items: ...}[]`.
- `labelInfo` (from `withLabelInfoProps` in Storybook) passes tooltip content into `Input.LabelInfo` — use this pattern in forms where supplementary guidance is needed alongside the label.
- The distinction from `TagsInput`: `MultiSelect` constrains selections to predefined `data`; `TagsInput` allows arbitrary user-entered values.

# API reference

## Props

> Extends: `MultiSelectProps` from `@mantine/core`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`data`** `string[] | {value: string; label: string}[] | {group: string; items: ...}[]` · required — The list of options users can choose from.

**`searchable`** `boolean` · optional · default: `false` — Allows users to filter options by typing in the input.

**`clearable`** `boolean` · optional · default: `false` — Shows a clear button to remove all selected values at once.

**`placeholder`** `string` · optional — Placeholder text shown when no values are selected.

**`label`** `string` · optional — Visible label for the input.

**`description`** `string` · optional — Helper text displayed below the label.

**`error`** `string` · optional — Validation error message displayed below the input.

**`required`** `boolean` · optional · default: `false` — Marks the field as required and shows a required indicator.

**`disabled`** `boolean` · optional · default: `false` — Disables the input.

**`readOnly`** `boolean` · optional · default: `false` — Makes the input read-only (selections cannot be changed).

## Usage

```tsx
import {MultiSelect} from '@coveord/plasma-mantine';

// Basic multi-select with search
function LabelAssignment() {
    return (
        <MultiSelect
            label="Assigned labels"
            placeholder="Pick values"
            data={['Bug', 'Feature', 'Enhancement', 'Documentation', 'Testing', 'Security', 'Performance']}
            searchable
            clearable
            w={300}
        />
    );
}

// Grouped options
function CategoryFilter() {
    return (
        <MultiSelect
            label="Categories"
            placeholder="Select categories"
            data={[
                {group: 'Fruits', items: ['Apple', 'Orange', 'Banana']},
                {group: 'Vegetables', items: ['Carrot', 'Broccoli']},
            ]}
            searchable
            clearable
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
