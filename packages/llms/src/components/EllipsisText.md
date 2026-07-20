---
name: EllipsisText
description: Text component that truncates overflowing content and can show the full value in a tooltip.
---

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
