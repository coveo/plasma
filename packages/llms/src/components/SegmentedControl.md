---
name: SegmentedControl
description: Compact toggle bar for switching between a small, fixed set of mutually exclusive views or modes.
---

# Usage guidance

## What problem does it solve?

`SegmentedControl` presents a small set of mutually exclusive options in a compact pill-style bar, making it easy to switch between modes, views, or filters without a dropdown or full page navigation.

## When to use it

Use `SegmentedControl` when:

- the user switches between 2–5 mutually exclusive views or modes (e.g. List / Grid, Day / Week / Month)
- every option should always be visible and one is always active
- the selection takes effect immediately without a separate submit step

## When not to use it

Do not use `SegmentedControl` when:

- switching between options reveals different content panels below — use `Tabs` instead. `SegmentedControl` changes a mode or setting; `Tabs` navigates between content areas.
- the control represents a form input that is submitted as part of a form; use `Radio.Group` instead
- there are more than ~5 options; the bar becomes too wide and individual segments too small
- options have descriptions or icons that need more space; use `Radio.Group` or `RadioCard`
- a null/empty state (no selection) is a valid choice; `SegmentedControl` always has an active segment

## Decision-making guidance

- `SegmentedControl` is a view/mode switcher, not a form field. If the chosen value is being saved as data, reconsider whether `Radio.Group` is more semantically appropriate.
- Keep labels short — single words or very short phrases — to avoid wrapping.
- Individual options can be `disabled` to indicate unavailability without removing them from view.

## States

- default (one segment active)
- individual segment disabled
- whole control disabled

## Accessibility expectations

- `SegmentedControl` renders with `role="radiogroup"` semantics internally; individual segments behave as radio buttons.
- The `data` labels MUST be descriptive enough to be meaningful in isolation for screen-reader users.

## Content guidance

- Labels SHOULD be short, parallel, and consistent in grammatical form (all nouns or all verbs, not mixed).
- Avoid labels that depend on surrounding context to be understood.

## Common anti-patterns

- Using `SegmentedControl` in place of `Tabs` when the options correspond to distinct content panels — `Tabs` is the right pattern when each option has its own section of content beneath it.
- Using `SegmentedControl` inside a form where the selected value is submitted; use `Radio.Group` for that.
- More than 5 segments — the visual metaphor breaks down and usability drops.
- Long labels that cause the bar to overflow or wrap awkwardly.

## What an AI agent should understand

- `SegmentedControl` is for immediate mode/view switching; it always has an active selection.
- Pass options via the `data` prop as an array of `{label, value, disabled?}` objects.
- Use `Radio.Group` when the selection is part of a form submission.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `SegmentedControlProps` from `@mantine/core`. Refer to Mantine documentation for all available props including `data`, `value`, `defaultValue`, `onChange`, `orientation`, `fullWidth`, and `disabled`.

## Usage

```tsx
import {SegmentedControl} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [view, setView] = useState('list');

    return (
        <SegmentedControl
            value={view}
            onChange={setView}
            data={[
                {label: 'List', value: 'list'},
                {label: 'Grid', value: 'grid'},
                {label: 'Table', value: 'table'},
            ]}
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
