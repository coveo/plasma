---
name: Card
description: Container that groups related content into a visually distinct surface, optionally interactive with hover and selection states.
---

# Usage guidance

## What problem does it solve?

`Card` lets users scan a collection of related items at a glance — each card summarises one subject and gives enough information to identify it without reading everything. It also works as a static container when content needs visual separation from the rest of the page.

## When to use it

- Showing a collection of related items users need to browse and compare — results, resources, options, or feature summaries.
- Building a grid or list of selectable tiles where the user clicks to choose one.
- Wrapping a self-contained block of content — like an onboarding step or a settings panel — that should feel visually distinct from surrounding content.

## When not to use it

- When the content is part of a large structured dataset — use `Table` instead; cards don't scale to many rows of comparable data.
- When the content is an in-page message or notification — use `Alert` instead; cards group content, they do not convey alerts or status messages.
- When selection carries form semantics — use `RadioCard` or `Checkbox`, which have the correct native behaviour.
- When the content is meant to be read sequentially as continuous text — cards imply independent, scannable units.
- When the content does not need visual grouping — use layout primitives like `Stack`, `Flex`, or `Grid` without a card shell.

## Decision-making guidance

- `Card` MUST use `variant="hover"` only when the whole card is a click target with an `onClick` handler; use the default variant for static content.
- When `variant="hover"` is combined with `mod={{selected: true}}`, the card gains a primary-colour border indicating the active selection. Manage this state externally via `mod`.
- When `variant="hover"` is combined with `mod={{disabled: true}}`, `pointer-events` are suppressed and the card becomes non-interactive.
- A `Card` SHOULD NOT be nested in another `Card`; use `Card.Section` or layout primitives such as `Stack` inside one `Card`.
- `Card` MUST use `Card.Section` to embed a `Table`, so the table runs edge to edge.
- `Card.Section` SHOULD default to full-bleed, overriding the `Card` padding, for media, tables and dividers.
- `Card.Section` SHOULD use `inheritPadding` when it creates sections of text within the `Card`.
- A `Card` SHOULD have its `Tabs` in a full-bleed `Card.Section`, so the tab list runs edge to edge, with each panel padded like the card.

## Variants

- **`undefined`** (default) — static bordered surface with no hover behaviour. Use for informational containers.
- **`hover`** — adds a box-shadow on hover, a selection border when `data-selected` is set, and pointer-cursor. Use for clickable tiles.
- A `Card` SHOULD use the theme's border and `xs` shadow, not a custom `withBorder` or `shadow`; interactivity shows through `variant="hover"`, not a different surface.

## States

- An empty `Card` SHOULD use an `EmptyState` with `align="center"`, `size="sm"` and no `variant`, inside the card's padding.

Relevant to `variant="hover"` only:

- **Normal** — no shadow.
- **Hover** — elevated box-shadow signals interactivity.
- **Selected** — primary-colour border communicates active selection.
- **Disabled** — pointer events removed; visually inert.

## Interaction notes

When `variant="hover"`, attach an `onClick` handler to toggle selection. Plasma does not manage the selected state internally — pass the current value through `mod={{selected: boolean}}`.

- A `Card` with `variant="hover"` MUST NOT include buttons or links; use the default variant and give each action its own `Button`.

## Accessibility expectations

- When `variant="hover"` is used as a selectable tile, the `Card` SHOULD carry an appropriate ARIA role (e.g. `role="radio"` within a `role="radiogroup"`, or `role="option"`) and `aria-selected` so that its state is communicated to assistive technology.
- Keyboard users MUST be able to activate the card with the Enter or Space key when it is interactive; add `tabIndex={0}` and a `onKeyDown` handler if needed alongside `onClick`.
- Disabled cards SHOULD communicate their state via `aria-disabled="true"` rather than relying solely on visual styling.

## Content guidance

- Each card should represent a single subject — avoid mixing unrelated content in one card.
- Keep card content concise; users should be able to identify the item at a glance without reading everything.
- Cards within the same collection SHOULD follow a consistent content structure — the same types of information in the same positions.
- A `Card` SHOULD have its content in the order title, supporting content, metadata, actions.
- A `Card` header with a description or actions SHOULD use `Header` with `variant="secondary"`, with `Header.Right` for those actions; a title alone uses `Title`.
- `Card` content SHOULD use a `Stack` with `gap="sm"` between groups and `gap="xs"` within a group, not margins on each element.
- A `Card` SHOULD have at most 2 actions; with more, put them in a `Menu`.

## Common anti-patterns

- Using `variant="hover"` without an `onClick` handler — the pointer cursor implies interactivity that is not present.
- Passing `selected` and `disabled` as top-level props — these are not direct `CardProps`; they MUST be passed through the `mod` prop as `mod={{selected: true, disabled: true}}`.
- Nesting buttons or links inside a `variant="hover"` card — clicks on inner elements also trigger the card's `onClick`.
- Nesting a `Card` inside another `Card` — flatten the hierarchy or use layout primitives instead.

# API reference

## Props

> Extends: `CardProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component; interactive behaviour is controlled via `variant` and `mod`.

**`variant`** `'hover' | undefined` · optional · default: `undefined` — When set to `'hover'`, the card gains hover shadow and supports selected/disabled data attributes.

**`mod`** `{selected?: boolean; disabled?: boolean}` · optional — Data attributes used to apply selection border (`data-selected`) and disable pointer events (`data-disabled`). Only meaningful when `variant="hover"`.

## Usage

```tsx
import {Card, Text} from '@coveord/plasma-mantine';

// Static content container
function InfoCard() {
    return (
        <Card>
            <Text>Some grouped content here.</Text>
        </Card>
    );
}

// Disabled tile
function DisabledTile({onSelect}: {onSelect: () => void}) {
    return (
        <Card variant="hover" mod={{disabled: true}} aria-disabled="true" onClick={onSelect}>
            <Text>This option is unavailable.</Text>
        </Card>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
