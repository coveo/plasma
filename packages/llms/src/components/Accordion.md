---
name: Accordion
description: Collapsible content panels with an additional disabled control variant.
---

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Accordion.Control`
- `Accordion.ControlDisabled`
- `Accordion.Panel`
- `Accordion.Item`

`Accordion.ControlDisabled` renders a control with no chevron and disabled pointer events. You SHOULD use it for accordion items that are always expanded and cannot be collapsed by the user.

## Usage

```tsx
import {Accordion} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Accordion defaultValue="details">
            <Accordion.Item value="details">
                <Accordion.Control>Project details</Accordion.Control>
                <Accordion.Panel>Configure the project name, description, and visibility settings.</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="readonly">
                <Accordion.ControlDisabled>Always visible section</Accordion.ControlDisabled>
                <Accordion.Panel>This content is always visible and cannot be collapsed.</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
