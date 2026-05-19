---
name: EllipsisText
description: Text component that truncates overflowing content and can show the full value in a tooltip.
---

## Props

> Extends: `BoxProps`, `StylesApiProps<EllipsisTextFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop           | Type                                                             | Required | Default | Description                                                                                                            |
| -------------- | ---------------------------------------------------------------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `children`     | `ReactNode`                                                      |    ✓     | —       | MUST be provided. The content rendered inside the truncated text, also used as the tooltip label when overflow occurs. |
| `variant`      | `TextProps['variant']`                                           |          | —       | MAY be used to align the truncated content with surrounding typography.                                                |
| `lineClamp`    | `TextProps['lineClamp']`                                         |          | —       | MAY be set for multi-line truncation; when omitted, the component uses single-line ellipsis behavior.                  |
| `tooltipProps` | `Partial<Omit<TooltipProps, 'label' \| 'opened' \| 'children'>>` |          | `{}`    | MAY be used to customize the internal Mantine `Tooltip`. You MUST NOT provide `label`, `opened`, or `children`.        |

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
