---
name: DateTimeRangePicker
description: Date and time range picker for selecting a precise time window with optional preset ranges.
---

## Props

> Extends: `DatePickerProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop               | Type                                                                 | Required | Default | Description                                                                 |
| ------------------ | -------------------------------------------------------------------- | :------: | ------- | --------------------------------------------------------------------------- |
| `dateFormat`       | `string`                                                             |          | `—`     | The date in the input uses this format.                                     |
| `timePickerFormat` | `'12h' \| '24h'`                                                     |          | `'12h'` | The time in the time picker uses this format, either `12h` or `24h`.        |
| `startProps`       | `Omit<Partial<DatePickerProps>, 'value' \| 'onChange' \| 'onFocus'>` |          | `{}`    | These props are applied to the start input.                                 |
| `endProps`         | `Omit<Partial<DatePickerProps>, 'value' \| 'onChange' \| 'onFocus'>` |          | `{}`    | These props are applied to the end input.                                   |
| `defaultValue`     | `DatesRangeValue<DateStringValue \| null>`                           |          | `—`     | When provided, the uncontrolled input uses this value as its initial value. |
| `value`            | `DatesRangeValue<DateStringValue \| null>`                           |          | `—`     | When provided, the controlled input uses this value.                        |
| `onChange`         | `(value: DatesRangeValue<DateStringValue \| null>) => void`          |          | `—`     | When the controlled input changes, this callback receives the next value.   |
| `presets`          | `Record<string, DateRangePickerPreset>`                              |          | `{}`    | These presets are displayed.                                                |

## Usage

Use `DateTimeRangePicker` as a controlled component by storing the selected range in state and updating it with `onChange`.

```tsx
import {useState} from 'react';
import {DateTimeRangePicker} from '@coveord/plasma-mantine';

function Example() {
    const [value, setValue] = useState<[string | null, string | null]>([null, null]);

    return <DateTimeRangePicker value={value} onChange={setValue} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
