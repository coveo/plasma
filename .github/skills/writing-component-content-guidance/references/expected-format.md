# Expected format: Content guidance section

The `## Content guidance` section must follow this exact structure.

## Section placement

Place `## Content guidance` after `## Accessibility expectations` and before `## Common anti-patterns`.

## Structure

```markdown
## Content guidance

**[Sub-part label (PropName or SubComponent.Name)]:**

- [rule]
- [rule]
- [rule]

**[Sub-part label (PropName or SubComponent.Name)]:**

- [rule]
- [rule]
- [rule]
```

## Rules for subheadings

- Use bold (`**...**`), not a heading element (`###`)
- Include the prop or sub-component name in backticks where one exists
- Name the UI part, not the concept (for example **Control labels (`\Accordion.Control\`)** not **`Heading text`**)
- Every component must have at least two subheadings

## Rules for bullets

- One rule per bullet. Never combine two rules into one bullet.
- Start each bullet with an imperative verb or "Don't"
- Include a counter-example inline when the rule is about syntax or phrasing:
  `"Project settings" not "Configure your project settings"`
- No prose paragraphs. No introductory sentences before the bullets.
- No ending period on bullets that are fragments; add a period on bullets that are full sentences.

## Minimum required subheadings by component type

Every content guidance section must cover at minimum:

- The primary interactive label or title element (button text, control label, tab label, etc.)
- The primary body/content area (panel content, description, body copy, etc.)
- Ordering or grouping logic (where the component contains multiple items)

Add additional subheadings for any component-specific elements that have distinct copy rules (for example: placeholder text, helper text, badge labels, empty state copy).

## Reference example

See `packages/llms/src/components/Accordion.md` for a completed implementation.
