---
name: Input
description: Base input wrapper extended with a LabelInfo tooltip sub-component for contextual help.
---

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Input.Label`
- `Input.Description`
- `Input.Error`
- `Input.Wrapper`
- `Input.Placeholder`
- `Input.LabelInfo`

`Input.LabelInfo` renders an info icon next to an input label that displays a tooltip on hover. You SHOULD use it to provide additional context about a field without cluttering the label.

### Input.LabelInfo props

> Extends: `Omit<TooltipProps, 'label' | 'classNames' | 'attributes' | 'styles' | 'vars'>`, `StylesApiProps<InputLabelInfoFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop       | Type        | Required | Default | Description                                       |
| ---------- | ----------- | :------: | ------- | ------------------------------------------------- |
| `children` | `ReactNode` |    ✓     | —       | MUST be provided. The tooltip content to display. |

## Usage

```tsx
import {Input, TextInput} from '@coveord/plasma-mantine';

function Example() {
    return (
        <TextInput
            label={
                <>
                    API key <Input.LabelInfo>The secret key used to authenticate API requests.</Input.LabelInfo>
                </>
            }
            placeholder="sk_live_..."
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
