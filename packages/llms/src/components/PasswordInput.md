---
name: PasswordInput
description: Password input with support for a read-only visual state.
---

# Usage guidance

## What problem does it solve?

The `PasswordInput` lets users enter or review secret values while hiding the characters by default.

It is useful for credentials, tokens, and other sensitive values that should not be displayed as plain text during entry.

## When to use it

Use `PasswordInput` when:

- users enter a password, secret, token, or credential-like value
- the value should be masked by default
- users may need to reveal the value temporarily to verify it
- a read-only secret field should keep field styling while preventing edits

## When not to use it

Do not use `PasswordInput` when:

- the value is not sensitive
- users need to scan or compare the full value frequently
- the value should be copied rather than edited; pair a read-only input with `CopyToClipboard`
- masking would make the task harder without protecting anything meaningful

## Decision-making guidance

- Use `PasswordInput` for secret entry.
- Use `TextInput` for non-secret values.
- Use read-only styling when the value is shown for reference and should not be edited.
- Consider `CopyToClipboard` for read-only generated secrets users need elsewhere.

## Accessibility expectations

- Labels MUST identify what secret value is expected.
- Helper text SHOULD state format or rotation requirements when relevant.
- Do not rely on placeholder text as the only instruction.

## Common anti-patterns

- Masking non-sensitive values.
- Showing generated secrets without a copy affordance.
- Using disabled state for a value that should be readable but not editable.

## What an AI agent should understand

- `PasswordInput` is for masked secret values.
- Use `readOnly` for non-editable values that still need field readability.
- Pair with copy behavior when users need to transfer generated secrets.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Usage

```tsx
import {PasswordInput} from '@coveord/plasma-mantine';

function Example() {
    return <PasswordInput label="Database password" />;
}
```

When `readOnly` is set (and `disabled` is not), Plasma applies a distinct read-only visual style — use this instead of `disabled` when the value is informational and not interactive.

---

[Full Plasma documentation]({{BASE_URL}})
