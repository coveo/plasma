---
name: Modal
description: Overlay dialog that focuses user attention and can render a description, help link, and footer actions.
---

## Props

> Extends: `MantineModalProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop          | Type                         | Required | Default | Description                                                                                                                              |
| ------------- | ---------------------------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `description` | `HeaderProps['description']` |          | —       | Description of the modal, displayed below the title, MAY be provided.                                                                    |
| `help`        | `HeaderDocAnchorProps`       |          | —       | Help link for the modal, displayed in the header, MAY be provided. It SHOULD provide a link to external documentation or help resources. |

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
import {Button, Modal} from '@coveord/plasma-mantine';
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
                <p>
                    Archiving this project removes it from active dashboards and prevents new content from being added.
                </p>
                <p>You can restore it later from project settings if needed.</p>
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
