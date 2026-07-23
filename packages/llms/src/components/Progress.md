---
name: Progress
description: Horizontal bar that communicates how far along a task or process has advanced.
---

# Usage guidance

## What problem does it solve?

The `Progress` bar gives users a quick, at-a-glance sense of completion for a task with a known end point. It replaces vague "loading…" text with a concrete, proportional signal.

## When to use it

Use `Progress` when:

- a task has a measurable, bounded completion percentage (0–100)
- you want to reinforce confidence that work is proceeding (file upload, onboarding steps, form completion)
- colour coding is needed to convey the quality or status of a result alongside its magnitude

## When not to use it

Do not use `Progress` when:

- the duration or completion percentage is unknown; use `Skeleton` or a spinner instead
- you need a circular representation; consider Mantine's `RingProgress` or `SemiCircleProgress` available in Plasma
- the value is not about progress but about a distribution or proportion; consider a different data visualisation

## Decision-making guidance

- Choose a `variant` colour to communicate semantic meaning: `info` for neutral progress, `success` for completed or healthy, `caution` for warnings, `error` for failures or risk.
- Keep the bar width wide enough to be readable; the story default of 300 px is a useful minimum.
- Pair the bar with a visible label or percentage when the exact value matters to the user.

## Variants

Plasma maps four semantic intents onto Mantine colour tokens:

| Variant          | Colour token   |
| ---------------- | -------------- |
| `info` (default) | primary colour |
| `success`        | `success`      |
| `caution`        | `yellow`       |
| `error`          | `red`          |

Pass the resolved colour string to Mantine's `color` prop using the mapping from the story rather than the variant name directly.

## Accessibility expectations

- A `Progress` bar SHOULD be accompanied by a visible text label or an `aria-label` so screen-reader users understand what is being measured.
- When the value changes dynamically, the wrapping region SHOULD have `role="status"` or `aria-live` so assistive technology announces updates.

## What an AI agent should understand

- `Progress` is for bounded, percentage-based task feedback.
- Semantic colour is communicated through Mantine's `color` prop mapped from four intent names (`info`, `success`, `caution`, `error`).
- For unknown durations, prefer `Skeleton` or an indeterminate spinner.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `ProgressProps` from `@mantine/core`. Refer to Mantine documentation for all available props.

## Usage

```tsx
import {Progress} from '@coveord/plasma-mantine';

const colorMapping = {
    info: 'var(--mantine-primary-color-filled)',
    success: 'success',
    caution: 'yellow',
    error: 'red',
} as const;

function Example() {
    return <Progress value={65} w={300} color={colorMapping['success']} aria-label="Profile completion" />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
