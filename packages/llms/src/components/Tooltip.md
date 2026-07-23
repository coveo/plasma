---
name: Tooltip
description: Non-interactive popover that reveals supplementary text when a user hovers or focuses its trigger element.
---

# Usage guidance

## What problem does it solve?

`Tooltip` surfaces contextual information on demand without cluttering the UI with persistent explanatory text, keeping layouts clean while still making details available to users who need them.

## When to use it

- Labelling icon-only buttons where a text label would take too much space (e.g. toolbar actions, `ActionIcon` controls).
- Providing additional contextual information about a UI element without cluttering the interface.
- Providing a short elaboration on a truncated label or an abbreviation.
- Showing a full value when an `EllipsisText` component has truncated content.

## When not to use it

- When the information is critical for the user to complete their task — critical guidance MUST be visible at all times; use `description` on the form field or inline text instead.
- When the content requires interaction (links, buttons, form elements) — a tooltip dismisses on mouse-out, making interactive content inside it inaccessible. Use a `Popover` instead.
- When the content is longer than two short sentences — tooltips are for brief labels, not paragraphs. Use a `Popover` or a drawer for richer content.
- On mobile touch targets where hover is unavailable — consider `Popover` with a tap trigger.

## Decision-making guidance

- Keep `label` to a single short phrase or sentence; if you need more space, reconsider whether a `Popover` or adjacent text is more appropriate.
- Use `position` to avoid clipping against viewport edges or overlapping nearby UI; prefer `"top"` by default and override as needed.
- The `freezeOpen` story prop (keeping the tooltip visible without hover) is a development/debugging affordance — do not use `opened={true}` as a permanent substitute for visible text in production.

## Interaction notes

- The tooltip appears on hover (pointer devices) and on keyboard focus of the trigger element.
- It disappears when the pointer leaves the trigger or focus moves away.
- The tooltip is non-interactive: users cannot move the pointer into the tooltip itself to click a link. Use `Popover` if any interaction inside the floating content is needed.
- Setting `opened` to `true` pins the tooltip visible regardless of hover state, useful during development to inspect styling.

## Accessibility expectations

- The trigger element MUST be focusable (e.g. a `button`, an `a`, or an element with `tabIndex={0}`) so keyboard users can access the tooltip.
- Mantine's `Tooltip` uses `aria-describedby` to associate the tooltip text with the trigger, ensuring screen readers announce it on focus.
- Do not place the only label for an unlabelled icon entirely inside a tooltip for screen readers — the trigger element itself MUST have an accessible name (e.g. `aria-label`) independently of the tooltip.
- Custom trigger components MUST use `forwardRef` to pass the ref required for tooltip positioning.

## Common anti-patterns

- Wrapping a non-focusable element (e.g. a plain `<div>` or `<span>`) without adding `tabIndex={0}` — keyboard users will never see the tooltip.
- Putting actionable content (links, buttons) inside `label` — the tooltip hides before users can interact with it.
- Using a tooltip to show required information that only some users will discover — if everyone needs it, show it inline.
- Nesting a tooltip inside another tooltip — this creates confusing layering; redesign the interaction.

## What an AI agent should understand

- `Tooltip` is a thin Plasma re-export of `@mantine/core` `Tooltip`. All Mantine props are available.
- Plasma adds only a `displayName` for tooling; there is no additional logic.
- The trigger MUST be a single child element that can receive a `ref`. Wrap functional components that do not forward refs with `forwardRef`.
- `Tooltip.Floating` (a Mantine sub-component) is available for tooltips that follow the cursor; this is an advanced use case.

# API reference

## Props

> Extends: `TooltipProps` from `@mantine/core`. No additional Plasma-specific props.

Key props relevant to Plasma usage patterns:

**`label`** `ReactNode` · required — The content rendered inside the tooltip bubble.

**`position`** `'top' | 'bottom' | 'left' | 'right' | ...` · optional — Preferred placement of the tooltip relative to the trigger. Mantine supports full compass positions and their `-start`/`-end` variants.

**`opened`** `boolean` · optional — When `true`, forces the tooltip to stay visible regardless of hover state. Useful for debugging; avoid in production.

**`children`** `ReactElement` · required — The trigger element. MUST be a single ref-forwarding element.

## Sub-components

**`Tooltip.Floating`** — A variant that positions the tooltip at the cursor location rather than relative to the trigger element. Use for large interactive surfaces (e.g. a chart canvas) where a fixed anchor is not meaningful.

## Usage

```tsx
import {Tooltip, ActionIcon} from '@coveord/plasma-mantine';

// Labelling an icon-only button
function DeleteButton() {
    return (
        <Tooltip label="Delete item">
            <ActionIcon aria-label="Delete item" color="red">
                <DeleteIcon />
            </ActionIcon>
        </Tooltip>
    );
}

// Showing a keyboard shortcut hint
function SaveButton() {
    return (
        <Tooltip label="Save (Ctrl+S)" position="bottom">
            <button>Save</button>
        </Tooltip>
    );
}

// Custom component as trigger — must use forwardRef
import {forwardRef} from 'react';

const TriggerCard = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => (
    <div ref={ref} {...props} tabIndex={0}>
        Hover me
    </div>
));
TriggerCard.displayName = 'TriggerCard';

function TooltipOnCustomElement() {
    return (
        <Tooltip label="More information about this card">
            <TriggerCard />
        </Tooltip>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
