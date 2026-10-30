---
name: InlineMessage
description: Short text-level message with an optional semantic icon, placed next to the element it describes.
---

# Usage guidance

## What problem does it solve?

The `InlineMessage` gives users a short contextual message that is more visible than a tooltip but lighter than an `Alert`: no background, no border, no title bar, no close button.

## When to use it

Use `InlineMessage` when:

- a short message stands on its own or sits next to a control, a button, a value, or inside a table cell
- the message is more important than on-demand help but does not justify an `Alert`
- a status line or caption needs a consistent icon and color treatment
- the message fits in one or two lines, or one longer sentence

## When not to use it

Do not use `InlineMessage` when:

- the help concerns another element and is revealed on hover; use `Tooltip` on that element
- the hint or validation is owned by a single field; use the input `description` or `error` props
- the message is a persistent callout about a page, form, or section; use `Alert`
- the feedback is transient; use `Notification`
- only a compact status label is needed; use `Badge` or `StatusToken`

## Decision-making guidance

- Use `InlineMessage` over `Alert` when the message is tied to one element and does not need a box.
- Use `InlineMessage` over `Tooltip` when the message should always be visible.
- Use `Notification` instead when the message reports the outcome of an action the user just took and can disappear after a few seconds.
- Use `Prompt` instead when the user must acknowledge or decide before continuing.
- Keep the default icon; it carries the intent at a glance. Remove it only for captions and secondary hints, never on warning, critical, or success messages.
- When the explanation is longer than the state itself, the visible message SHOULD name the state and the explanation SHOULD go in `tooltip`, which is revealed on hover and keyboard focus.
- A single link MAY follow the message as the next step. The component styles any `Anchor` inside it to inherit the message color with an underline (removed on hover); no extra props are needed.
- Place it on its own line, or beside the element it describes with a `Group`.
- Use a `StatusToken` in the `icon` slot when the text describes the state of an object rather than a message.

## Variants

- Use `InlineMessage.Subtle` for captions and secondary hints; it renders a gray information icon and gray text.
- Use `InlineMessage.Information` for contextual information that deserves the blue icon.
- Use `InlineMessage.Advice` for recommendations.
- Use `InlineMessage.Warning` when users can proceed but should be careful; the text is colored.
- Use `InlineMessage.Critical` for errors or blocking issues; the text is colored.
- Use `InlineMessage.Success` for confirmed results that remain relevant in context; the text is colored.

## Accessibility expectations

- Color is never the only carrier of meaning: the text MUST state the state or consequence on its own.
- `role="alert"` SHOULD be passed only when a critical message appears dynamically and must be announced.

## Content guidance

- Messages SHOULD be one short sentence, around 20 words. A longer single sentence is acceptable; several sentences belong in an `Alert`.
- The consequence or state SHOULD come first, then the next step.

## Common anti-patterns

- Putting several sentences, several links, or an action button in an inline message instead of using an `Alert`.
- Removing the icon from a warning, critical, or success message.
- Using the critical variant for neutral information.
- Relying on the icon color alone to convey the meaning.

# API reference

## Props

> Extends: `BoxProps`, `StylesApiProps<InlineMessageFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`variant`** `'subtle' | 'information' | 'advice' | 'warning' | 'critical' | 'success'` · optional · default: `'subtle'` — The semantic intent of the message. You SHOULD use the `InlineMessage.*` sub-components over setting it manually.
**`icon`** `ReactNode | null` · optional · default: `undefined` — The leading element. Defaults to the `InfoToken` matching the variant (a gray information token for `subtle`). You MAY pass `null` to remove it, or any node (for example a `StatusToken`) to replace it.
**`tooltip`** `ReactNode` · optional · default: `undefined` — Additional detail revealed on hover and on keyboard focus. The message becomes focusable.
**`children`** `ReactNode` · optional · default: `undefined` — The message content. It SHOULD stay around one or two lines and MAY end with a link.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `InlineMessage.Subtle`
- `InlineMessage.Information`
- `InlineMessage.Advice`
- `InlineMessage.Warning`
- `InlineMessage.Critical`
- `InlineMessage.Success`

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `InlineMessage.Props`
- `InlineMessage.StylesNames`
- `InlineMessage.CssVariables`
- `InlineMessage.Factory`
- `InlineMessage.{Subtle, Information, Advice, Warning, Critical, Success}.Props`

## Usage

```tsx
import {Anchor, Button, Group, InlineMessage, Stack, StatusToken, Text, Title} from '@coveord/plasma-mantine';

// On its own
<InlineMessage.Warning>Renaming triggers a full rebuild.</InlineMessage.Warning>

// Beside a button
<Group>
    <Button.Secondary>Rebuild index</Button.Secondary>
    <InlineMessage.Information>Last rebuild took 14 minutes.</InlineMessage.Information>
</Group>

// Status line with a StatusToken instead of the semantic icon
<InlineMessage.Subtle icon={<StatusToken variant="waiting" />}>Indexing in progress</InlineMessage.Subtle>

// Caption under a metric value, without an icon
<Stack gap={0}>
    <Text fw={500}>Attributed revenue</Text>
    <Title order={3}>$1.2M</Title>
    <InlineMessage.Subtle icon={null}>Last 30 days, all merchandising solutions</InlineMessage.Subtle>
</Stack>

// Same slot carrying a state: the caption becomes a warning and keeps its icon
<Stack gap={0}>
    <Text fw={500}>Conversion rate</Text>
    <Title order={3}>3.8%</Title>
    <InlineMessage.Warning tooltip="3 of the last 30 days have no data because tracking was interrupted.">
        Based on partial data
    </InlineMessage.Warning>
</Stack>

// With a link as the next step
<InlineMessage.Critical>
    The index could not be rebuilt. <Anchor href="/logs">View the log</Anchor>
</InlineMessage.Critical>
```

---

[Full Plasma documentation]({{BASE_URL}})
