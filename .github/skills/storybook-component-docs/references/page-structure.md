# Component page structure

Use this structure for human-facing component pages under `packages/storybook/src/components/`.
The Button page at `packages/storybook/src/components/call-to-action/Button.mdx` is the canonical example.

## Canonical template

```mdx
import {Canvas, Controls, Meta} from '@storybook/addon-docs/blocks';
import * as ComponentStories from './ComponentName.stories';

<Meta of={ComponentStories} />

# ComponentName

One-sentence description of the component.

## Overview

Explain what the component does and its role in an interface.

## Usage

<Canvas of={ComponentStories.Demo} />
<Controls of={ComponentStories.Demo} />

## Guidelines

### When to use

- Describe appropriate contexts and selection criteria.

### When not to use

- Identify likely misuses and better alternatives.

### Best practices

- Give the most consequential decision, hierarchy, layout, and behavior guidance.

### Content guidelines

- Explain how to write labels, titles, messages, or other user-facing text.
```

Replace `ComponentStories.Demo` with the best representative exported story.
Omit Controls when the story has no useful controllable arguments.

## Required elements

Normal interactive component pages require:

- A story namespace import
- `<Meta of={...} />`
- An H1 component name
- A one-sentence description
- `Overview`
- `Usage`
- A representative Canvas
- `Guidelines`
- `When to use`
- `When not to use`
- `Best practices`

Do not repeat the component description word for word in Overview.
Use Overview to explain the role of the component and the problem it solves.

## Optional elements

### Controls

Include Controls when the representative story exposes useful arguments.
Omit Controls when the panel would be empty, misleading, or dominated by implementation-only values.
For every exposed argument, provide a clear description, documented type, correct default, and compatible control.
Use component metadata for public props and story metadata for clearly named synthetic arguments.
See [arg-types.md](arg-types.md) for the required metadata and source rules.

### Content guidelines

Include Content guidelines when developers provide meaningful user-facing copy, such as:

- Button and link labels
- Input labels and placeholders
- Error and validation messages
- Empty-state titles and descriptions
- Alert and notification messages
- Tooltip text
- Navigation labels

A short bullet list is enough when the component has only one meaningful text surface.
Do not invent subheadings or content categories to fill space.

### Component-specific sections

Add a specific section only when essential guidance does not fit Best practices.
Examples include selection behavior, grouping, layout, or loading behavior.

Variants, states, and accessibility sections are not standard.
Usage should communicate visible options and states whenever possible.
Place essential nonvisual requirements under Best practices when a demo cannot communicate them.

## Mapping from the component specification

Synthesize the read-only specification instead of copying it.

| Specification content            | Storybook destination                       |
| -------------------------------- | ------------------------------------------- |
| `What problem does it solve?`    | Description and Overview                    |
| `When to use it`                 | When to use                                 |
| `When not to use it`             | When not to use                             |
| `Decision-making guidance`       | Best practices                              |
| `Common anti-patterns`           | Best practices or When not to use           |
| `Content guidance`               | Content guidelines                          |
| Non-obvious interaction guidance | Best practices or an exceptional section    |
| Variants and visible states      | Usage                                       |
| Props and sub-components         | Story controls or generated API information |
| Code examples                    | Stories                                     |
| TypeScript aliases               | Omit                                        |

Merge duplicated positive and negative rules.
Prefer one direct recommendation over separate decision and anti-pattern bullets that say the same thing.

## Create and update rules

### Creating a page

- Place the MDX beside the corresponding story.
- Inherit sidebar title and ID through `<Meta of={ComponentStories} />`.
- Reuse or create one representative story for Usage.
- Use the specification frontmatter description as source material, then edit it for human readers if needed.

### Updating a page

- Preserve accurate custom demos, examples, and JSX.
- Preserve the story binding unless the story itself changed.
- Add missing common sections without deleting useful component-specific guidance.
- Remove exhaustive API material only when a better story, control, or generated reference already exists.
- Keep the page concise enough to scan while retaining consequential decisions.

## Button example

The Button page demonstrates the intended balance:

- Overview explains the role of the component.
- Usage owns visual variants and states through Canvas and Controls.
- When to use identifies explicit commands and visible labels.
- When not to use points to icons, settings controls, and links.
- Best practices explains action hierarchy and destructive emphasis.
- Content guidelines covers concise, specific labels.

Do not turn the Button-specific guidance into requirements for components that solve different problems.
Only the page shape is canonical.
