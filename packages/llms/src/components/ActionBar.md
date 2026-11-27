---
name: ActionBar
description: Floating bar, fixed to the bottom of the viewport, that shows the selection count and the actions available for the current selection.
---

# Usage guidance

## What problem does it solve?

`ActionBar` keeps bulk actions within reach while users select items, for example rows of a table. It appears when a selection exists and lets users act on it or clear it without scrolling back to a toolbar.

## When to use it

- Users select one or more items and need actions that apply to the whole selection.
- The list is long enough that a toolbar at the top would scroll out of view.

## When not to use it

- Actions apply to a single item only; use row or card actions instead.
- Actions apply to the whole page and confirm or discard edits; use `StickyFooter` instead.
- Nothing is selected; the bar SHOULD be hidden (`opened={false}`).

## Decision-making guidance

- Start the bar with the selection count as `Text size="sm" fw={500} px="xs"`, followed by `ActionBar.Divider`.
- Show the most frequent actions as `Button.Tertiary`. Destructive actions SHOULD use `Button.DestructiveTertiary`.
- When there are more than three or four actions, move the less frequent ones into an overflow `Menu` with an `ActionIcon.Quaternary size="lg"` target using `IconDots` and `position="top-end"`.
- End the bar with `ActionBar.Divider` and `ActionBar.CloseButton`. The close button calls `onClose`, which SHOULD clear the selection.
- `withBorder` MAY be set to `false` when the bar sits on a surface where the shadow alone is enough.

## Content guidance

- The selection count SHOULD read "{count} selected".
- Action labels SHOULD be short verbs, such as "Delete" or "Export".
- `ActionBar.CloseButton` SHOULD have an `aria-label` describing the result, such as "Clear selection".

## Common anti-patterns

- Keeping the bar open when the selection is empty.
- Putting every action in the bar instead of using an overflow menu.
- Using the bar for page-level save and cancel actions.

# API reference

## Props

> Extends: `ActionBarProps` from `@mantine/core`. Plasma sets the theme defaults below; refer to Mantine documentation for the full API.

**`opened`** `boolean` · required · default: `undefined` — Controls visibility.
**`onClose`** `() => void` · optional · default: `undefined` — Called when the close button is clicked or Escape is pressed.
**`withBorder`** `boolean` · optional · default: `true` — Adds a border around the bar.
**`radius`** `MantineRadius` · optional · default: `'md'` — Border radius of the bar.
**`shadow`** `MantineShadow` · optional · default: `'md'` — Shadow of the bar.
**`closeOnEscape`** `boolean` · optional · default: `false` — Closes the bar when Escape is pressed.
**`withinPortal`** `boolean` · optional · default: `true` — Renders the bar in a portal, fixed to the viewport.

## Sub-components

- `ActionBar.Divider`: vertical divider between groups of content.
- `ActionBar.CloseButton`: 36 px close button that calls the bar's `onClose`.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `ActionBar.Props`
- `ActionBar.StylesNames`
- `ActionBar.Factory`
- `ActionBar.Divider.Props`
- `ActionBar.CloseButton.Props`

## Usage

```tsx
import {ActionBar, ActionIcon, Button, Menu, Text} from '@coveord/plasma-mantine';
import {IconDots} from '@coveord/plasma-react-icons';

<ActionBar opened={selected.length > 0} onClose={clearSelection}>
    <Text size="sm" fw={500} px="xs">
        {selected.length} selected
    </Text>
    <ActionBar.Divider />
    <Button.Tertiary onClick={selectAll}>Select all</Button.Tertiary>
    <Button.DestructiveTertiary onClick={deleteSelected}>Delete</Button.DestructiveTertiary>
    <Menu position="top-end">
        <Menu.Target>
            <ActionIcon.Quaternary size="lg" aria-label="More actions">
                <IconDots />
            </ActionIcon.Quaternary>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item onClick={exportSelected}>Export</Menu.Item>
        </Menu.Dropdown>
    </Menu>
    <ActionBar.Divider />
    <ActionBar.CloseButton aria-label="Clear selection" />
</ActionBar>;
```

---

[Full Plasma documentation]({{BASE_URL}})
