---
name: Card
description: Container that groups related content into a visually distinct surface, optionally interactive with hover and selection states.
---

> **Note:** This component is currently will be redesigned. Usage guidance will be updated once the initiative concludes. In the meantime, use this as a general reference only.

# Usage guidance

## What problem does it solve?

`Card` lets users scan a collection of related items at a glance — each card summarises one subject and gives enough information to identify it without reading everything. It also works as a static container when content needs visual separation from the rest of the page.

## When to use it

- Showing a collection of related items users need to browse and compare — results, resources, options, or feature summaries.
- Building a grid or list of selectable tiles where the user clicks to choose one.
- Wrapping a self-contained block of content — like an onboarding step or a settings panel — that should feel visually distinct from surrounding content.

## When not to use it

- When the content is part of a large structured dataset — use `Table` instead; cards don't scale to many rows of comparable data.
- When dynamic content is inserted in response to a user action — use `Alert` instead.
- When selection carries form semantics — use `RadioCard` or `Checkbox`, which have the correct native behaviour.
- When the content is meant to be read sequentially as continuous text — cards imply independent, scannable units.
- When the content does not need visual grouping — use layout primitives like `Stack`, `Flex`, or `Grid` without a card shell.

## Decision-making guidance

- Use the default variant for static, non-interactive content containers.
- Use `variant="hover"` only when the entire card is a clickable target — for example, a results tile that navigates or toggles a selection.
- When `variant="hover"` is combined with `mod={{selected: true}}`, the card gains a primary-colour border indicating the active selection. Manage this state externally via `mod`.
- When `variant="hover"` is combined with `mod={{disabled: true}}`, `pointer-events` are suppressed and the card becomes non-interactive.

## Variants

- **Default** — static bordered surface with no hover behaviour. Use for informational containers.
- **`hover`** — adds a box-shadow on hover, a selection border when `data-selected` is set, and pointer-cursor. Use for clickable tiles.

## States

Relevant to `variant="hover"` only:

- **Normal** — no shadow.
- **Hover** — elevated box-shadow signals interactivity.
- **Selected** — primary-colour border communicates active selection.
- **Disabled** — pointer events removed; visually inert.

## Interaction notes

When `variant="hover"`, attach an `onClick` handler to toggle selection. Plasma does not manage the selected state internally — pass the current value through `mod={{selected: boolean}}`.

## Accessibility expectations

- When `variant="hover"` is used as a selectable tile, the `Card` SHOULD carry an appropriate ARIA role (e.g. `role="radio"` within a `role="radiogroup"`, or `role="option"`) and `aria-selected` so that its state is communicated to assistive technology.
- Keyboard users MUST be able to activate the card with the Enter or Space key when it is interactive; add `tabIndex={0}` and a `onKeyDown` handler if needed alongside `onClick`.
- Disabled cards SHOULD communicate their state via `aria-disabled="true"` rather than relying solely on visual styling.

## Content guidance

- Each card should represent a single subject — avoid mixing unrelated content in one card.
- Keep card content concise; users should be able to identify the item at a glance without reading everything.
- Cards within the same collection SHOULD follow a consistent content structure — the same types of information in the same positions.
- Avoid more than one or two actions per card; if more are needed, reconsider the layout.

## Common anti-patterns

- Using `variant="hover"` without an `onClick` handler — the pointer cursor implies interactivity that is not present.
- Passing `selected` and `disabled` as top-level props — these are not direct `CardProps`; they MUST be passed through the `mod` prop as `mod={{selected: true, disabled: true}}`.
- Nesting interactive elements (buttons, links) inside a `variant="hover"` card without careful event management — clicks on inner elements will also trigger the card's `onClick`.

## What an AI agent should understand

- `Card` is a thin Plasma wrapper around Mantine's `Card`. All `CardProps` are available.
- The `hover` variant and selection/disabled states are driven by Plasma's CSS module via the `mod` prop and `data-*` attributes — not by dedicated props named `selected` or `disabled` on `Card`.
- For purely static containers, omit `variant`; for clickable tiles manage selection state in the parent and pass it through `mod`.

# API reference

## Props

> Extends: `CardProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component; interactive behaviour is controlled via `variant` and `mod`.

**`variant`** `'hover' | undefined` · optional · default: `undefined` — When set to `'hover'`, the card gains hover shadow and supports selected/disabled data attributes.

**`mod`** `{selected?: boolean; disabled?: boolean}` · optional — Data attributes used to apply selection border (`data-selected`) and disable pointer events (`data-disabled`). Only meaningful when `variant="hover"`.

## Usage

```tsx
import {Card} from '@coveord/plasma-mantine';
import {useState} from 'react';

// Static content container
function InfoCard() {
    return (
        <Card>
            <p>Some grouped content here.</p>
        </Card>
    );
}

// Selectable tile
function SelectableTile() {
    const [selected, setSelected] = useState(false);
    return (
        <Card variant="hover" mod={{selected}} onClick={() => setSelected((prev) => !prev)}>
            <p>Click to select this tile.</p>
        </Card>
    );
}

// Disabled tile
function DisabledTile() {
    return (
        <Card variant="hover" mod={{disabled: true}}>
            <p>This option is unavailable.</p>
        </Card>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
