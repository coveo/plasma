---
name: CopyToClipboard
description: Action icon that copies a string value to the clipboard and shows tooltip feedback.
---

# Usage guidance

## What problem does it solve?

The `CopyToClipboard` gives users a fast, low-friction way to copy exact values that are difficult or error-prone to select manually.

It is useful for technical identifiers, API keys, tokens, URLs, generated IDs, and other read-only values that users need elsewhere.

## When to use it

Use `CopyToClipboard` when:

- users need to copy an exact string value
- the value is displayed as read-only or otherwise not meant to be edited in place
- copying is a secondary utility action attached to a field or value
- tooltip feedback should confirm the copy action

## When not to use it

Do not use `CopyToClipboard` when:

- the user needs to edit the value before using it
- the value is short and copying is not a meaningful task
- copying is the primary action of the page and needs a visible button label
- the copied value is sensitive and should not be exposed without confirmation

## Decision-making guidance

- Prefer placing `CopyToClipboard` in an input `rightSection` for read-only field values.
- Use a regular `Button` when copy is a primary or explanatory action.
- Use clear nearby labels so users know exactly what value will be copied.

## Accessibility expectations

- The copied value MUST be clear from the surrounding label or context.
- Tooltip copy feedback SHOULD be concise.
- Do not rely on the icon alone when several copy actions appear near each other.

## Common anti-patterns

- Showing copy actions for every minor label on a page.
- Copying hidden or ambiguous values.
- Using the deprecated label mode instead of placing the action near the value.

## What an AI agent should understand

- `CopyToClipboard` is a utility action for exact read-only values.
- Prefer it inside input `rightSection` or next to the value it copies.
- Use tooltip labels to describe and confirm the copy behavior.

# API reference

## Props

> Extends: `ActionIconProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`value`** `string` · required · default: `undefined` — The value copied to the clipboard.
**`withLabel`** `boolean` · optional · default: `false` — Deprecated. You SHOULD place the `CopyToClipboard` component inside the `rightSection` of input components instead. When used, this prop displays the string to be copied alongside the button.
**`onCopy`** `MouseEventHandler<HTMLButtonElement>` · optional · default: `undefined` — If provided, this callback is called each time the value is copied to the clipboard.
**`color`** `MantineColor | (string & {})` · optional · default: `gray` — The icon uses this color when idle.
**`tooltipLabelCopy`** `string` · optional · default: `Copy to clipboard` — The tooltip displays this text when hovering over the button.
**`tooltipLabelCopied`** `string` · optional · default: `Copied` — The tooltip displays this text when the value is copied to the clipboard.

## Usage

Use `CopyToClipboard` in the `rightSection` of a read-only input when users need to quickly copy values like API keys, tokens, or IDs.

```tsx
import {CopyToClipboard, TextInput} from '@coveord/plasma-mantine';

export function ApiKeyField() {
    const apiKey = 'sk_live_1234567890abcdef';

    return <TextInput label="API key" value={apiKey} readOnly rightSection={<CopyToClipboard value={apiKey} />} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
