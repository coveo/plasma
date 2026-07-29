---
name: ActionIcon
description: Icon-only button that can trigger actions and can show a disabled-state tooltip.
---

# Usage guidance

## What problem does it solve?

The `ActionIcon` gives users a compact way to trigger an action when the action can be represented clearly by an icon.

It is useful in dense interfaces where a full text button would add visual noise, such as tables, cards, toolbars, or repeated item actions.

## When to use it

Use `ActionIcon` when:

- the action is short, familiar, and icon-recognizable
- space is limited or the action appears in a repeated row or card
- the action supplements nearby content rather than carrying the primary page task alone
- disabled actions need a tooltip explaining why they are unavailable

## When not to use it

Do not use `ActionIcon` when:

- the action is primary, high-stakes, or unfamiliar enough to need visible text
- the icon would be ambiguous without a label
- several adjacent icon-only actions would be hard to scan or distinguish
- the user needs to compare choices by reading command names

## Decision-making guidance

- Use `Button` when the action label should remain visible.
- Use `ActionIcon` for compact utility actions such as edit, remove, copy, open, or refresh.
- Use destructive variants only for actions that can remove, delete, revoke, or otherwise negatively affect data.
- Use lower-emphasis variants for repeated row actions so they do not compete with page-level actions.

## Variants

- Use `Primary` for the most important compact action in a local context.
- Use `Secondary`, `Tertiary`, or `Quaternary` as emphasis decreases.
- Use destructive variants when the action is destructive; match the emphasis to the action's importance.
- Use `ActionIcon.Group` when related icon actions need to be visually grouped.

## Accessibility expectations

- Icon-only actions MUST provide an accessible name through the icon or button.
- Disabled icon actions SHOULD explain why they are unavailable with `disabledTooltip`.
- The icon MUST NOT be the only source of meaning when the action is ambiguous.

## Common anti-patterns

- Replacing important text buttons with icon-only actions just to save space.
- Using destructive styling for non-destructive actions.
- Placing many unlabeled icons together without enough distinction.

## What an AI agent should understand

- `ActionIcon` is for compact icon-only actions, not for primary page commands that need visible labels.
- Choose semantic sub-components instead of manually setting visual variants.
- Pair `disabled` with `disabledTooltip` when the reason is not obvious.

# API reference

## Props

> Extends: `MantineActionIconProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`onClick`** `ClickHandler<HTMLButtonElement>` · optional · default: `undefined` — Handler executed on click. Supports standard, async, and parameterless handlers. Async handlers MAY be provided; the button shows a loading state while the promise resolves.
**`disabledTooltip`** `string` · optional · default: `undefined` — Tooltip message displayed when `disabled` is `true`.
**`disabledTooltipProps`** `Omit<TooltipProps, 'disabled' | 'label' | 'children'>` · optional · default: `undefined` — Additional tooltip props that MAY be set on the disabled button tooltip.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `ActionIcon.Group`
- `ActionIcon.Primary`
- `ActionIcon.Secondary`
- `ActionIcon.Tertiary`
- `ActionIcon.Quaternary`
- `ActionIcon.DestructivePrimary`
- `ActionIcon.DestructiveSecondary`
- `ActionIcon.DestructiveTertiary`
- `ActionIcon.DestructiveQuaternary`

## Usage

```tsx
import {ActionIcon} from '@coveord/plasma-mantine';
import {IconTrash} from '@coveord/plasma-react-icons';

const removeItem = () => {};
const deleteItem = async () => {};

// Common pattern: use a sub-component for the intended emphasis.
<ActionIcon.Quaternary onClick={removeItem}>
    <IconTrash aria-label="Remove" />
</ActionIcon.Quaternary>;

// Async handlers automatically show a loading state while pending.
<ActionIcon.DestructivePrimary onClick={deleteItem}>
    <IconTrash aria-label="Delete" />
</ActionIcon.DestructivePrimary>;

// Disabled actions MAY explain why they are unavailable.
<ActionIcon.Primary disabled disabledTooltip="You do not have permission to remove this item">
    <IconTrash aria-label="Remove" />
</ActionIcon.Primary>;
```

---

[Full Plasma documentation]({{BASE_URL}})
