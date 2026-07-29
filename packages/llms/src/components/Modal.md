---
name: Modal
description: Overlay dialog that focuses user attention and can render a description, help link, and footer actions.
---

# Usage guidance

## What problem does it solve?

The `Modal` focuses users on a contained task or information surface without navigating away from the current page.

It is useful when users need to complete, review, or inspect something in a temporary overlay.

## When to use it

Use `Modal` when:

- a contained task should interrupt the current page without replacing it
- users need focused context, actions, and a clear way to close
- the content is related to the current page but needs temporary prominence
- a footer should group modal-specific actions

## When not to use it

Do not use `Modal` when:

- the task is large enough to deserve its own page or step
- users need to compare modal content with the underlying page
- the overlay is only a simple confirmation; use `Prompt`
- the content is contextual and lightweight enough for inline disclosure or a menu

## Decision-making guidance

- Use `Modal` for focused temporary tasks.
- Use `Prompt` for confirmation decisions with semantic intent.
- Use page navigation for complex flows with several steps or deep editing.
- Use `Modal.Footer` for modal actions.

## Accessibility expectations

- Modals SHOULD have clear titles.
- Descriptions SHOULD explain impact when the task is risky or complex.
- Closing behavior SHOULD preserve or intentionally discard user input according to the workflow.

## Common anti-patterns

- Putting multi-page workflows inside a modal.
- Opening a modal for information that could be inline.
- Using modal footers outside modal contexts.

## What an AI agent should understand

- `Modal` is for focused temporary overlay tasks.
- Use `Prompt` for confirmation flows.
- Use `Modal.Footer` for modal action groups.

# API reference

## Props

> Extends: `MantineModalProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`description`** `HeaderProps['description']` · optional · default: `undefined` — Description of the modal, displayed below the title, MAY be provided.
**`help`** `HeaderDocAnchorProps` · optional · default: `undefined` — Help link for the modal, displayed in the header, MAY be provided. It SHOULD provide a link to external documentation or help resources.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Modal.Root`
- `Modal.Body`
- `Modal.Overlay`
- `Modal.Content`
- `Modal.Header`
- `Modal.Title`
- `Modal.CloseButton`
- `Modal.Stack`
- `Modal.Footer`

## Usage

```tsx
import {Button, Modal, Text} from '@coveord/plasma-mantine';
import {useState} from 'react';

function Example() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button.Primary onClick={() => setOpened(true)}>Archive project</Button.Primary>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Archive project"
                description="Review the impact before confirming this change."
            >
                <Text>
                    Archiving this project removes it from active dashboards and prevents new content from being added.
                </Text>
                <Text>You can restore it later from project settings if needed.</Text>
                <Modal.Footer>
                    <Button.Tertiary onClick={() => setOpened(false)}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={() => setOpened(false)}>Archive project</Button.Primary>
                </Modal.Footer>
            </Modal>
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
