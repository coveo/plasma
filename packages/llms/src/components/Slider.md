---
name: Slider
description: Range input that lets users select a numeric value by dragging a thumb along a track.
---

# Usage guidance

## What problem does it solve?

`Slider` gives users a direct-manipulation way to pick a value within a bounded numeric range, making the relative position of the value immediately visible.

## When to use it

- The value has a continuous or stepped numeric range with a clear minimum and maximum.
- The exact number matters less than the relative position (e.g., volume, confidence threshold, budget allocation).
- Marks on the track help orient users to meaningful points in the range.

## When not to use it

- The user needs to type an exact value; use `NumberInput` instead.
- The range is unbounded or very large (thousands of discrete steps); a `NumberInput` is more precise.
- The interface is touch-only with very tight vertical space; the thumb target may be hard to hit.

## Decision-making guidance

- Use `marks` to annotate meaningful breakpoints (e.g., 25 %, 50 %, 75 %) so users can land on them intentionally.
- Keep `showLabelOnHover` at its default `true` unless a surrounding label already makes the current value obvious.
- Use `labelAlwaysOn` only when the value must be visible at all times, such as in a settings panel where the current value is the focal point.

## States

- **Default**: thumb is draggable, label appears on hover.
- **Label always on**: label floats above the thumb at all times.
- **Disabled**: track and thumb are non-interactive and visually muted.

## Interaction notes

- Keyboard: arrow keys move the thumb by one step; `Home`/`End` jump to min/max.
- The tooltip label appears above the thumb while hovering or dragging.

## Accessibility expectations

- The underlying `<input type="range">` receives focus and is keyboard-navigable out of the box.
- You SHOULD provide a visible label via the Mantine `label` prop or an associated `<label>` so screen readers announce the field name.
- Marks with labels improve landmark orientation for low-vision users but are decorative for assistive technology.

## Common anti-patterns

- Omitting `min`/`max` when the implicit 0–100 default does not match the domain.
- Using a slider for binary choices (on/off); use `Switch` instead.
- Using a slider when the user needs to type a precise value with many decimal places.

## What an AI agent should understand

- `Slider` is a thin re-export of Mantine's `Slider` with no Plasma-specific props.
- All configuration (marks, label behaviour, step, min, max, disabled) comes from Mantine's `SliderProps`.
- The component is in the `form/number` category, meaning it should live inside a form and expose a numeric value.

# API reference

## Props

> Extends: Mantine `SliderProps`. No additional Plasma-specific props — refer to [Mantine Slider docs](https://mantine.dev/core/slider/) for the full API.

_No additional props beyond the Mantine base component._

## Usage

```tsx
import {Slider} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Slider
            min={0}
            max={100}
            step={1}
            marks={[
                {value: 25, label: '25%'},
                {value: 50, label: '50%'},
                {value: 75, label: '75%'},
            ]}
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
