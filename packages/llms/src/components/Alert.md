---
name: Alert
description: Alert callout for contextual information, advice, warnings, critical errors, and success states.
---

# Usage guidance

## What problem does it solve?

The `Alert` makes contextual information visible in the page layout so users can notice, read, and act on it without relying on hover or transient feedback.

## When to use it

Use `Alert` when:

- a message should remain visible until the user has had a chance to read it
- the message affects the current page, form, or workflow
- users need context, advice, warning, error, or success feedback near related content
- the message is more important than helper text but does not require a modal interruption

## When not to use it

Do not use `Alert` when:

- feedback is lightweight and transient; use `Notification`
- information is optional clarification for one field; use helper text or `Input.LabelInfo`
- the user must confirm a blocking decision; use `Prompt` or `Modal`
- the message is only a compact status label; use `Badge` or `StatusToken`

## Decision-making guidance

- Use `Alert` over `Notification` when the message must remain visible in the page layout.
- Use `Alert` over `Tooltip` when the information is important and should not depend on hover or focus.
- Use `Prompt` for confirmation flows where the user must choose before continuing.

## Variants

- Use `Alert.Information` for neutral contextual information.
- Use `Alert.Advice` for recommendations or next-best-action guidance.
- Use `Alert.Warning` when users can proceed but should be careful.
- Use `Alert.Critical` for errors, failures, or blocking issues.
- Use `Alert.Success` for persistent success states that remain relevant in context.

## Content guidance

- Titles SHOULD be short and state the message purpose.
- Body text SHOULD explain the impact or next step.
- Critical alerts SHOULD make the consequence and recovery path clear.

## Common anti-patterns

- Stacking several alerts instead of grouping related messages.
- Using critical alerts for neutral information.
- Putting long documentation inside an alert instead of linking to supporting content.

## What an AI agent should understand

- `Alert` is for persistent contextual messaging inside a layout.
- It is not the right choice for transient notifications or optional hints.
- Choose semantic sub-components according to message intent.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Alert.Information`
- `Alert.Advice`
- `Alert.Warning`
- `Alert.Critical`
- `Alert.Success`

## Usage

```tsx
import {Alert} from '@coveord/plasma-mantine';

<Alert.Information title="Note">This is an informational message.</Alert.Information>
<Alert.Warning title="Warning">Proceed with caution.</Alert.Warning>
<Alert.Critical title="Error">Something went wrong.</Alert.Critical>
```

---

[Full Plasma documentation]({{BASE_URL}})
