---
name: ScrollArea
description: Container that clips overflowing content and adds a styled scrollbar within a fixed-height region.
---

# Usage guidance

## What problem does it solve?

`ScrollArea` constrains a region to a fixed height (or width) and provides a consistent, theme-aware scrollbar instead of the browser's native one. It keeps surrounding layout stable when the inner content is variable in length.

## When to use it

Use `ScrollArea` when:

- a panel, sidebar, list, or log needs to stay within a fixed viewport area while allowing the content inside to grow
- you need fine-grained control over scroll behaviour (offset, scroll-into-view, type)

## When not to use it

Do not use `ScrollArea` when:

- the full page should scroll; rely on normal document flow instead
- the content is short enough to always fit in the allocated space
- you only need to truncate a single line of text; use `EllipsisText`

## Decision-making guidance

- Set `h` (height) explicitly on `ScrollArea` to establish the clipping boundary; without it the area will grow with the content and never scroll.
- Use `type="auto"` (Mantine default) to show the scrollbar only on hover/focus, keeping the UI clean.
- Use `type="always"` when the presence of scrollable content must always be communicated, such as in long lists or logs.

## Interaction notes

The scrollbar appears within the component's own bounds and does not affect the surrounding layout. Scrolling is keyboard-accessible; the focused element inside scrolls into view automatically.

## Accessibility expectations

- Content inside `ScrollArea` MUST remain keyboard-navigable; do not trap focus.
- When the scroll region conveys a meaningful boundary (e.g. a message thread), wrap it with an appropriate landmark or `aria-label` so screen-reader users understand the context.

## What an AI agent should understand

- `ScrollArea` is a layout primitive; it clips and scrolls, it does not provide any visual chrome of its own.
- Always pair it with an explicit height constraint (`h`, `mah`, or a CSS class); otherwise it renders as a transparent pass-through.
- It does not paginate or virtualise — for very large lists, consider a virtualised list component.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `ScrollAreaProps` from `@mantine/core`. Refer to Mantine documentation for all available props including `type`, `offsetScrollbars`, `scrollbarSize`, and `onScrollPositionChange`.

## Sub-components

- `ScrollArea.Autosize` — variant that grows up to a `mah` (max-height) before enabling scroll, rather than requiring a fixed height.

## Usage

```tsx
import {ScrollArea} from '@coveord/plasma-mantine';

function Example() {
    return (
        <ScrollArea h={250} w={300}>
            {/* Content that may exceed 250px in height */}
            <p>Long content goes here…</p>
        </ScrollArea>
    );
}

// Grows to content, then scrolls beyond 300px
function AutosizeExample() {
    return (
        <ScrollArea.Autosize mah={300} w={300}>
            <p>Adaptive content goes here…</p>
        </ScrollArea.Autosize>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
