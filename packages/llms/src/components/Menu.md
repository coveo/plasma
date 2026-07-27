---
name: Menu
description: Dropdown menu with transparent support for disabled-state tooltips on `Menu.Item`.
---

# Usage guidance

## What problem does it solve?

The `Menu` presents a compact list of contextual commands without permanently taking space in the layout.

It is useful for secondary actions, overflow actions, row actions, and command groups that should stay close to their trigger.

## When to use it

Use `Menu` when:

- actions are contextual to a nearby trigger or selected item
- actions are secondary or overflow commands
- a compact command list is easier to scan than several visible buttons
- disabled menu items need tooltip explanations

## When not to use it

Do not use `Menu` when:

- the action is primary and should always be visible
- the user needs to compare complex options or fill out inputs
- the content is navigation between major sections
- hiding the available actions would make the workflow hard to discover

## Decision-making guidance

- Use `Button` or `ActionIcon` for visible high-frequency actions.
- Use `Menu` for grouped contextual commands such as bulk actions or row actions.
- Use labels and dividers to separate distinct action groups.
- Use disabled tooltips only when they help users understand a requirement or permission boundary.

## Accessibility expectations

- Menu triggers MUST have clear labels or accessible names.
- Menu item labels SHOULD be action-oriented and specific.
- Disabled menu items SHOULD explain the missing condition when the reason is not obvious.

## Common anti-patterns

- Hiding the only path to an important action inside a menu.
- Mixing unrelated commands in one menu without grouping.
- Using a menu as a replacement for form controls or navigation structure.

## What an AI agent should understand

- `Menu` is for compact contextual command lists.
- `Menu.Item` supports Plasma disabled tooltips.
- Use visible buttons for primary actions and menus for secondary or overflow actions.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma overrides `Menu.Item` transparently to add disabled tooltip support. All other sub-components are standard Mantine.

- `Menu.Item` — extends Mantine's `Menu.Item` with `disabledTooltip` and `disabledTooltipProps`

### Menu.Item additional props

**`disabledTooltip`** `string` · optional · default: `undefined` — Tooltip text MAY be provided to explain why a disabled item cannot be activated.
**`disabledTooltipProps`** `TooltipProps` · optional · default: `undefined` — Additional tooltip configuration MAY be provided for the disabled-state tooltip and SHOULD complement Plasma-managed fields.

## Usage

```tsx
import {Button, Menu} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Menu shadow="md" width={220}>
            <Menu.Target>
                <Button.Secondary>Bulk actions</Button.Secondary>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Records</Menu.Label>
                <Menu.Item onClick={() => {}}>Archive selected</Menu.Item>
                <Menu.Item
                    disabled
                    disabledTooltip="You MUST select at least one record before exporting"
                    disabledTooltipProps={{multiline: true, w: 240}}
                >
                    Export selected
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" onClick={() => {}}>
                    Delete selected
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
