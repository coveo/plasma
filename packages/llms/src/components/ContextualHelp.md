---
name: ContextualHelp
description: Question icon that reveals extra explanation about nearby content in a tooltip or, for content with links, a hover card.
---

# Usage guidance

## What problem does it solve?

`ContextualHelp` gives users optional details about a label, table header, card title or value without adding text to the page. It replaces hand-built `Tooltip` + `InfoToken` combinations, so icon, size, color and spacing stay consistent.

## When to use it

Use `ContextualHelp` when:

- a term, metric or column needs a short definition
- the explanation is optional and supplementary
- the explanation links to documentation (use the `interactive` variant)

## When not to use it

Do not use `ContextualHelp` when:

- the information is required to complete a task; show it as visible text
- the message is a warning or an error; use `Alert` or error text

## Decision-making guidance

- Inside an interactive container (e.g. a card rendered as a button), you MUST set `focusable={false}` and SHOULD repeat essential information in the container's own description, since keyboard users can't reach the help. `RadioCard` sets it automatically in its label.
- Place it right after the term it explains, with `xxs` spacing: `ml="xxs"` inside the `label` prop of a form field, or a `Group` with `gap="xxs"` next to a table header, card title, or value. It replaces the deprecated `Input.LabelInfo`.
- Use `variant="text"` (default) for plain text.
- Use `variant="interactive"` when the content contains links or other interactive elements. Tooltips cannot be interacted with.
- Documentation links in the `interactive` variant MUST open in a new tab and SHOULD tell screen reader users so.

## Accessibility expectations

- The icon is a focusable button; its content opens on hover and on keyboard focus.
- `aria-label` SHOULD name what the help is about when several `ContextualHelp` appear on the same page (e.g. `"About clickthrough rate"`).
- Required information MUST NOT be hidden in `ContextualHelp`.

## Common anti-patterns

- Putting links in the `text` variant.
- Using it for long documentation.
- Rebuilding it with `Tooltip` and `InfoToken.Question`.

# API reference

## Props

> Extends: `BoxProps`, `StylesApiProps`, `ElementProps<'button'>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`children`** `ReactNode` · required · default: `undefined` — The help content. Use the `interactive` variant when it contains links or other interactive elements.
**`variant`** `'text' | 'interactive'` · optional · default: `'text'` — How the help content is displayed: `text` for short, plain text content, shown in a tooltip; `interactive` for content with links or other interactive elements, shown in a hover card.
**`size`** `InfoTokenSizes` · optional · default: `'xs'` — The size of the question icon.
**`position`** `FloatingPosition` · optional · default: `'top'` — The position of the help content relative to the icon.
**`focusable`** `boolean` · optional · default: `true` — Whether the icon is a focusable button. Set it to `false` only inside an interactive container (e.g. a card rendered as a button), where a nested button is invalid; the help then opens on hover only. Inside a `RadioCard` label, it defaults to `false`.
**`aria-label`** `string` · optional · default: `'More information'` — The accessible name of the icon button.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `ContextualHelp.Props`
- `ContextualHelp.StylesNames`
- `ContextualHelp.Factory`

## Usage

```tsx
import {Anchor, ContextualHelp, Group, Text, VisuallyHidden} from '@coveord/plasma-mantine';

// Short definition next to a table header
<Group gap="xxs">
    Clickthrough rate
    <ContextualHelp aria-label="About clickthrough rate">
        The percentage of times a View is followed by a click on a product.
    </ContextualHelp>
</Group>

// Content with a link
<Group gap="xxs">
    <Text fw={500}>Attributed revenue</Text>
    <ContextualHelp variant="interactive" aria-label="About attributed revenue">
        Total gross revenue attributed to Coveo. Based on{' '}
        <Anchor href="https://docs.coveo.com" target="_blank" rel="noopener noreferrer">
            Coveo's attribution model
            <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
        </Anchor>
        .
    </ContextualHelp>
</Group>
```

---

[Full Plasma documentation]({{BASE_URL}})
