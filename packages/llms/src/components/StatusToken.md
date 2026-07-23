---
name: StatusToken
description: Status indicator with semantic color coding.
---

# Usage guidance

## What problem does it solve?

The `StatusToken` gives users a compact visual indicator for an object's state, health, progress, or recency.

## When to use it

Use `StatusToken` when:

- a small status marker is enough to support nearby text
- space is constrained, such as in tables or dense lists
- the status has a known semantic category
- users can understand the status from adjacent labels, columns, or legends

## When not to use it

Do not use `StatusToken` when:

- the status text itself must be visible; use `Badge`
- users need an explanation or recovery action; use `Alert`
- the status is the main content of the item and needs a full label
- the meaning would be unclear without a legend or nearby text

## Decision-making guidance

- Use `StatusToken` for compact status marking.
- Use `Badge` for readable status labels.
- Use `InfoToken` for semantic cues attached to explanatory text.

## Variants

- Use `success` for healthy or completed states.
- Use `caution` for warning or attention states.
- Use `error` for failure or critical states.
- Use `waiting` for pending or in-progress states.
- Use `disabled` for unavailable states.
- Use `edited` or `new` for recently changed or newly created items.

## Accessibility expectations

- Status meaning SHOULD be available through adjacent text, table headers, or accessible labels.
- Do not communicate critical status through color alone.

## Common anti-patterns

- Using a token without any text context.
- Treating `StatusToken` as an interactive control.
- Using similar colors for different meanings in the same view.

## What an AI agent should understand

- `StatusToken` is a compact non-interactive status marker.
- Use it with surrounding text or structure that names the status.
- Use `Badge` when the status label itself needs to be read.

# API reference

## Props

> Extends: `BoxProps`, `StylesApiProps<StatusTokenFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`size`** `'sm' | 'lg'` · optional · default: `'lg'` — The size of the token MAY be set to control the rendered icon dimensions.
**`variant`** `'info' | 'success' | 'caution' | 'error' | 'disabled' | 'waiting' | 'edited' | 'new'` · optional · default: `'info'` — The variant of the token MUST match the status semantics you need to communicate.

## Usage

Use `success` for healthy or completed states, `caution` for warnings, `error` for failures, `waiting` for in-progress work, and `edited` or `new` for recently changed items.

```tsx
import {StatusToken} from '@coveord/plasma-mantine';

<StatusToken variant="success" />
<StatusToken variant="caution" />
<StatusToken variant="error" />
<StatusToken variant="waiting" />
<StatusToken variant="edited" />
<StatusToken variant="new" />
```

---

[Full Plasma documentation]({{BASE_URL}})
