---
name: InfoToken
description: Inline token for displaying semantic metadata with a predefined icon.
---

# Usage guidance

## What problem does it solve?

The `InfoToken` gives users a compact semantic icon that can reinforce the tone or type of nearby information without adding a full message.

## When to use it

Use `InfoToken` when:

- a small semantic marker helps users recognize information type
- the surrounding text already explains the meaning
- the interface needs a compact icon for information, advice, warning, error, question, or success
- the token is decorative support rather than the only message

## When not to use it

Do not use `InfoToken` when:

- users need a full status label; use `Badge`
- the state needs to be represented as a standalone status indicator; use `StatusToken`
- the message needs explanatory text or actions; use `Alert`
- the icon would be the only way to understand the meaning

## Decision-making guidance

- Use `InfoToken` as an inline semantic cue next to text.
- Use `StatusToken` for object state or lifecycle status.
- Use `Alert` when users need to read a persistent message.

## Variants

- Use semantic sub-components to choose the token type.
- Use `outline` for the default compact token treatment.
- Use `light` when the token needs a filled background treatment.

## Accessibility expectations

- Do not rely on color or icon shape alone to communicate critical meaning.
- Pair the token with nearby text that names the state or message.

## Common anti-patterns

- Using an `InfoToken` as the only label for an error or warning.
- Mixing token semantics inconsistently in the same interface.
- Using decorative tokens where no semantic cue is needed.

## What an AI agent should understand

- `InfoToken` is a compact supporting semantic icon.
- Use semantic sub-components because the public props do not expose `type`.
- Use `Alert`, `Badge`, or `StatusToken` when users need more than a supporting cue.

# API reference

## Props

> Extends: `BoxProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`variant`** `InfoTokenVariant` · optional · default: `'outline'` — The variant of the token MAY be set to control its visual treatment.
**`size`** `InfoTokenSizes` · optional · default: `'xs'` — The size of the info token MAY be set to control its rendered size.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers, and you MUST use these wrappers to select the semantic type because `type` is not part of the public `InfoTokenProps` API.

- `InfoToken.Information`
- `InfoToken.Advice`
- `InfoToken.Warning`
- `InfoToken.Error`
- `InfoToken.Question`
- `InfoToken.Success`

## Usage

Use the semantic sub-components to render the most common token types.

```tsx
import {InfoToken} from '@coveord/plasma-mantine';

function Example() {
    return (
        <>
            <InfoToken.Information />
            <InfoToken.Advice />
            <InfoToken.Success />
            <InfoToken.Warning />
            <InfoToken.Error />
            <InfoToken.Question />
        </>
    );
}
```

Use `variant` to switch between the default outlined appearance and the light style.

```tsx
import {InfoToken} from '@coveord/plasma-mantine';

function Variants() {
    return (
        <>
            <InfoToken.Information variant="outline" />
            <InfoToken.Information variant="light" />
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
