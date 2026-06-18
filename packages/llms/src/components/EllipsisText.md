---
name: EllipsisText
description: Text component that truncates overflowing content and can show the full value in a tooltip.
---

# Usage guidance

## What problem does it solve?

The `EllipsisText` keeps long text from breaking dense layouts while still letting users access the full value when it overflows.

## When to use it

Use `EllipsisText` when:

- text appears in a constrained area such as a table cell, card, or compact panel
- the full value is useful but does not need to be visible all the time
- truncation prevents layout wrapping, overflow, or visual imbalance
- a tooltip should reveal the full value only when truncation occurs

## When not to use it

Do not use `EllipsisText` when:

- the full text is essential for the primary task
- truncation would hide errors, warnings, or required decisions
- the content is already short enough to fit
- the tooltip would contain long-form documentation

## Decision-making guidance

- Use `EllipsisText` for compact display of long labels or names.
- Use normal text when content should be read directly.
- Use multi-line text or layout changes when the full content is central to the task.

## Accessibility expectations

- Truncated text SHOULD remain understandable from visible context.
- Do not hide critical information only in a hover tooltip.

## Common anti-patterns

- Truncating every label by default.
- Hiding key differentiators between similar items.
- Using ellipsis to avoid designing a layout that supports expected content length.

## What an AI agent should understand

- `EllipsisText` is for overflow management in constrained layouts.
- Use it only when truncated text is acceptable and the full value is supplemental.
- Do not use it to hide critical content.

# API reference

## Props

> Extends: `BoxProps`, `StylesApiProps<EllipsisTextFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`children`** `ReactNode` · required · default: `undefined` — Consumers MUST provide the content rendered inside the truncated text, and that value can also be used as the tooltip label when overflow occurs.
**`variant`** `TextProps['variant']` · optional · default: `undefined` — Consumers MAY use this text variant to align the truncated content with surrounding typography.
**`lineClamp`** `TextProps['lineClamp']` · optional · default: `undefined` — Consumers MAY set this line clamp for multi-line truncation; when omitted, the component uses single-line ellipsis behavior.
**`tooltipProps`** `Partial<Omit<TooltipProps, 'label' | 'opened' | 'children'>>` · optional · default: `{}` — Consumers MAY customize the internal Mantine `Tooltip`, but MUST NOT provide `label`, `opened`, or `children`.

## Usage

Use `EllipsisText` to truncate long text inside a constrained container. The most common use case is a single-line label that shows the full value on hover when it overflows.

```tsx
import {EllipsisText} from '@coveord/plasma-mantine';

function Example() {
    return <EllipsisText maw={250}>This is a very long text that is truncated with an ellipsis.</EllipsisText>;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
