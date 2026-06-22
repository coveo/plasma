---
name: writing-component-content-guidance
description: Writes or updates the Content guidance section in LLM-facing component usage files under plasma/packages/llms/src/components/. Researches authoritative design system sources to produce specific, executable copy rules for each component type. Use when adding or improving Content guidance sections in component .md files.
license: Apache-2.0
metadata:
    author: coveo
    version: '1.0'
---

# Writing Component Content Guidance

## Context

Component files at `plasma/packages/llms/src/components/{ComponentName}.md` are consumed by LLMs, not humans. The `## Content guidance` section in each file must give an agent rules specific enough to produce acceptable content every time—no vague guidance.

## Process

### Step 1: Read the component file

Read the target component file in full. Note:

- The component's sub-parts and their prop/sub-component names
- What's already in `## Content guidance` (if anything)
- The writing style of the rest of the file

### Step 2: Research external best practices

Search at least two authoritative sources for content and copy guidelines specific to this component type. Prioritize:

- Nielsen Norman Group (nngroup.com)
- Carbon Design System (carbondesignsystem.com)
- eBay Playbook (playbook.ebay.com)
- Red Hat Design System (ux.redhat.com)
- Material Design (m3.material.io)
- Other major enterprise design systems

Fetch the actual pages—don't rely on search snippets alone. Look specifically for:

- Label/title character limits
- Casing and punctuation rules
- Syntax patterns (noun phrase, sentence, etc.)
- Parallel structure requirements
- Panel/content body rules
- Ordering and grouping rules
- Icon usage with labels
- Prohibited patterns with counter-examples

### Step 3: Write the Content guidance section

Write or replace `## Content guidance` in the file. Place it after `## Accessibility expectations` if creating it fresh.

**Rules for the section:**

- Write for LLM consumption. Be direct and brief. No filler phrases.
- Use bullet points only under each subheading. No prose paragraphs.
- Organize bullets under bold subheadings that map to the component's actual sub-parts. Use real prop or sub-component names in the subheadings where applicable (for example `**Control labels (\`Accordion.Control\`)\*\*`).
- Every rule must be specific and executable. Include:
    - Concrete character or word limits where sources provide them
    - Casing rules (sentence case, title case)
    - Punctuation rules (ending punctuation yes/no)
    - Syntax pattern with a counter-example where it helps (for example "Use a noun phrase. 'Project settings' not 'Configure your project settings'")
    - Explicit prohibitions with the "not" form
- Fold in research findings that go beyond what's already in the file.
- Don't cite sources inline.
- Don't alter any other section in the file.

**Section format:**

```markdown
## Content guidance

**[Sub-part label and prop name]**

- [rule]
- [rule]

**[Sub-part label and prop name]**

- [rule]
- [rule]
```

### Step 4: Stop and wait

Work on one component file at a time. After writing the section, stop and wait for the user to review before moving to the next component.

## Iteration order

Go alphabetically through `plasma/packages/llms/src/components/`.

## Reference documentation

| Reference                                                     | When to load                                                                                |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [expected-format.md](references/expected-format.md)           | Section structure, subheading rules, bullet formatting, minimum required coverage           |
| [plasma-writing-rules.md](references/plasma-writing-rules.md) | Capitalization, punctuation, grammar, voice, and jargon rules that apply to all Plasma copy |

Always consult both reference files before writing. The expected-format defines structure; plasma-writing-rules defines the content standards every bullet must conform to.

## Example output

See `packages/llms/src/components/Accordion.md` for a completed reference implementation of this section.
