---
name: CloseButton
description: Icon-only button for dismissing or closing an overlaying element such as a modal, drawer, or tag.
---

# Usage guidance

## What problem does it solve?

`CloseButton` provides a standardised dismiss affordance — a small × icon button — for components that can be closed or removed by the user, keeping the action visually lightweight and consistent across the product.

## When to use it

- Dismissing modals, drawers, popovers, or notifications.
- Removing a tag, chip, or filter pill from a selection.
- Closing an inline alert or banner that the user can opt out of.

## When not to use it

- When the dismissal action needs a text label for clarity — use a `Button.Tertiary` with a "Close" or "Dismiss" label instead.
- As a primary or destructive action — `CloseButton` communicates cancellation and closure, not data deletion.
- When a full-width or prominent cancel action is needed in a form footer — use `Button.Secondary` labelled "Cancel".

## Decision-making guidance

- Use `size="md"` (default) for standalone overlays such as modals and drawers.
- Use `size="sm"` for compact contexts such as chips, tags, and inline alerts where a full-size button would overpower the surrounding element.
- Do not use `CloseButton` as the sole means of closing a modal — always pair it with an alternative (a "Cancel" button, pressing Escape, or clicking the backdrop) to ensure keyboard and assistive technology users can close the overlay.

## States

- Normal
- Hover
- Focus (keyboard)
- Disabled — pass `disabled` to prevent dismissal (e.g. while a save is in progress).

## Accessibility expectations

- `CloseButton` renders a `<button>` element and is keyboard-accessible by default.
- The button MUST have an accessible label. Mantine renders an `aria-label` of "Close" by default; override with `aria-label` when a more specific label is needed (e.g. "Close notification" or "Remove tag: Sales").
- When used to close a modal, the focus SHOULD return to the element that triggered the modal after dismissal.

## Common anti-patterns

- Using `CloseButton` without an associated overlay or dismissible element — if nothing is being closed, use `ActionIcon` with an appropriate icon and label.
- Placing `CloseButton` inside interactive elements that already have click handlers without stopping event propagation.
- Relying solely on `CloseButton` to close a modal without also handling the Escape key.

## What an AI agent should understand

- `CloseButton` is a thin Plasma wrapper around Mantine's `CloseButton`. All `CloseButtonProps` are available.
- Plasma constrains the SVG icon sizes via CSS: `sm` renders a 12 × 12 px icon, `md` renders a 16 × 16 px icon.
- The available sizes in Plasma are `sm` and `md` only; do not pass other Mantine size tokens.

# API reference

## Props

> Extends: `CloseButtonProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

**`size`** `'sm' | 'md'` · optional · default: `'md'` — Controls the icon size. `sm` renders a 12 px icon; `md` renders a 16 px icon.

## Usage

```tsx
import {CloseButton} from '@coveord/plasma-mantine';

// Standard modal close button
function ModalHeader({onClose}: {onClose: () => void}) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2>Modal title</h2>
            <CloseButton aria-label="Close modal" onClick={onClose} />
        </div>
    );
}

// Compact close on a chip/tag
function RemovableTag({label, onRemove}: {label: string; onRemove: () => void}) {
    return (
        <span>
            {label}
            <CloseButton size="sm" aria-label={`Remove tag: ${label}`} onClick={onRemove} />
        </span>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
