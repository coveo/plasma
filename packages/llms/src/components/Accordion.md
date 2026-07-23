---
name: Accordion
description: Collapsible content group for progressively revealing related sections without leaving the current page.
---

# Usage guidance

## What problem does it solve?

The `Accordion` lets users scan a set of related section headings and open the content they need without showing every detail at once.

It is useful when content is secondary to the main task, grouped into clear sections, and worth keeping on the same page.

## When to use it

Use `Accordion` when:

- related content can be organized into short, meaningful section labels
- users benefit from scanning section headings before reading details
- the content is useful in context but does not need to be visible all at once
- one or many sections MAY be open depending on the task

Use `multiple` when users commonly compare information across several sections or need more than one section open while working.

## When not to use it

Do not use `Accordion` when:

- the content is required for completing the current task and should be visible without disclosure
- the sections represent navigation destinations rather than expandable content
- users need to compare large amounts of content side by side
- there are only one or two very short details that could be shown inline
- hiding the content would make errors, warnings, or required decisions easier to miss

## Decision-making guidance

- Use `Accordion` for progressive disclosure inside a page, not for moving between pages or major views.
- Use `Tabs` when each section is a peer view and users choose one view at a time.
- Use inline helper text or an `Alert` when the information is important enough to remain visible.
- Use a table, list, or cards when users need to compare many items rather than open panels one by one.
- Use `Accordion.ControlDisabled` when a section heading should appear in the accordion structure but should not be interactive.

## Variants

- Use `default` for the standard accordion treatment.
- Use `contained` when the accordion needs a clearer boundary from surrounding page content.
- Use `separated` when each item should read as an independent expandable section.
- Use `filled` when the accordion needs stronger visual weight.
- Use `unstyled` only when a composed layout supplies its own visual treatment.

## States

Important states include:

- collapsed
- expanded
- multiple expanded items, when `multiple` is enabled
- disabled control, through `Accordion.ControlDisabled`

## Interaction notes

- Each section needs a unique, consistent identifier so the accordion can track which panels are open or closed.
- One or more sections can be open by default when the page loads — use this when a section is most likely relevant to the user's task.
- If only one section can be open at a time, the default can only be one section. If multiple can be open, the default can be several.
- Icons next to section labels can help users recognize content faster, but the label text must always be clear enough on its own.
- A section heading can be made non-interactive — it appears in the accordion structure but cannot be expanded or collapsed.

## Accessibility expectations

- Each control MUST have clear text that describes the panel content.
- Panel content SHOULD remain logically related to its control.
- Do not put required instructions or blocking errors only inside a collapsed panel.
- Interactive content inside panels MUST remain keyboard reachable when the panel is open.

## Content guidance

- Control labels SHOULD be short and specific.
- Labels SHOULD describe the content inside the panel, not the action of expanding it.
- Keep panel content focused on one section topic.
- If every panel label needs a long sentence to be understandable, the content likely needs another structure.

## Common anti-patterns

- Using accordions as primary navigation.
- Hiding required form fields or critical warnings inside collapsed panels.
- Creating many vague sections such as "Details" or "More information."
- Using an accordion to avoid designing a clearer content hierarchy.
- Nesting accordions unless the relationship between levels is unmistakable.

## What an AI agent should understand

- `Accordion` is for progressive disclosure of related in-page content.
- It is a poor choice when the content is required, critical, or needs direct comparison.
- Use `Accordion.Item`, `Accordion.Control`, and `Accordion.Panel` together to compose each section.
- `Accordion.ControlDisabled` is Plasma-specific and should be used for non-interactive controls inside an accordion structure.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma exposes Mantine's compound accordion API and adds a disabled control convenience wrapper.

- `Accordion.Item`
- `Accordion.Control`
- `Accordion.Panel`
- `Accordion.ControlDisabled`

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
