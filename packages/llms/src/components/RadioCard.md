---
name: RadioCard
description: Selectable card control that presents a radio option with a label and can include supporting text.
---

## Props

> Extends: `RadioCardProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop              | Type        | Required | Default | Description                                                                                                    |
| ----------------- | ----------- | :------: | ------- | -------------------------------------------------------------------------------------------------------------- |
| `label`           | `ReactNode` |    ✓     | —       | Content rendered as the primary label next to the radio indicator.                                             |
| `description`     | `ReactNode` |          | —       | Content rendered below the label as supporting text.                                                           |
| `readOnly`        | `boolean`   |          | —       | When `true`, the card appears read-only and prevents users from changing its value through direct interaction. |
| `disabledTooltip` | `string`    |          | —       | When the card is disabled, this message can be shown in a tooltip to explain why selection is unavailable.     |

## Usage

```tsx
import {Radio, RadioCard} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Radio.Group defaultValue="team" label="Visibility">
            <RadioCard value="team" label="Team access" description="All team members can use this configuration." />
            <RadioCard
                value="private"
                label="Private access"
                description="Only you can use this configuration."
                disabled
                disabledTooltip="You MUST upgrade your plan to use private access."
            />
        </Radio.Group>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
