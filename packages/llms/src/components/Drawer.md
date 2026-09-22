---
name: Drawer
description: Side panel for contextual content and tasks with optional sticky footer actions.
---

# Usage guidance

## What problem does it solve?

The `Drawer` presents contextual content or a task without navigating away from the current page.

It opens from an edge of the viewport and provides more space than a popover while keeping the page in context.

## When to use it

Use `Drawer` when:

- users need to review or edit contextual information without leaving the current page
- a focused task needs more space than a popover
- supporting content needs to remain available until users dismiss it

## When not to use it

Do not use `Drawer` when:

- a complex or multi-step workflow needs its own page
- a short, interruptive task needs centered attention; use `Modal`
- a simple confirmation needs a clear decision; use `Prompt`

## Decision-making guidance

- Use `Drawer.Footer` for actions that apply to the entire drawer.
- Use `Drawer.Stack` when a workflow requires multiple drawers so focus and layering remain coordinated.
- Open related drawers from the same side to create a predictable experience.

## Accessibility expectations

- Drawers SHOULD have a clear title.
- Focus trapping, Escape handling, and focus return SHOULD remain enabled unless an accessible alternative is provided.
- Closing behavior SHOULD preserve or intentionally discard user input according to the workflow.

## Common anti-patterns

- Putting complex multi-page workflows inside a drawer.
- Opening related drawers from inconsistent sides.
- Placing drawer-wide actions in scrolling content instead of `Drawer.Footer`.

# API reference

## Props

> Extends: `MantineDrawerProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`description`** `HeaderProps['description']` · optional · default: `undefined` — Description of the drawer, displayed below the title.
**`help`** `HeaderDocAnchorProps` · optional · default: `undefined` — Help link for the drawer, displayed in the header. Usually provides a link to external documentation or help resources.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Drawer.Root`
- `Drawer.Overlay`
- `Drawer.Content`
- `Drawer.Body`
- `Drawer.Header`
- `Drawer.Title`
- `Drawer.CloseButton`
- `Drawer.Stack`
- `Drawer.Footer`

`Drawer.Footer` uses `StickyFooter` and displays a top border by default. It accepts `StickyFooter` props except `variant`.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Drawer.Props`
- `Drawer.StylesNames`
- `Drawer.CssVariables`
- `Drawer.Factory`
- `Drawer.Footer.{Props, StylesNames, Factory}`

## Usage

```tsx
import {Button, Drawer, Stack, TextInput} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button.Primary onClick={() => setOpened(true)}>Edit source</Button.Primary>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Edit source"
                description="Update the source details."
                help={{href: '/docs/sources', label: 'Open source documentation'}}
            >
                <Stack>
                    <TextInput label="Name" />
                    <TextInput label="Description" />
                </Stack>
                <Drawer.Footer>
                    <Button.Tertiary onClick={() => setOpened(false)}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={() => setOpened(false)}>Save</Button.Primary>
                </Drawer.Footer>
            </Drawer>
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
