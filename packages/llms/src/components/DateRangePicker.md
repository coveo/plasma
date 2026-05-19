---
name: DateRangePicker
description: Date range picker with separate start-date and end-date inputs in a popover calendar.
---

## Props

> Extends: `BoxProps`, `PopoverProps`, `StylesApiProps<DateRangePickerFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop                 | Type                                                                                                                                                                       | Required | Default                                       | Description                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `onClick`            | `() => void`                                                                                                                                                               |          | —                                             | This callback is invoked when the target input is clicked.                                                        |
| `onCancel`           | `() => void`                                                                                                                                                               |          | —                                             | This callback is invoked when the cancel button is clicked.                                                       |
| `onChange`           | `(dates: DatesRangeValue<string>) => void`                                                                                                                                 |          | —                                             | This callback is invoked when the date range value changes.                                                       |
| `onOpenedChange`     | `(opened: boolean) => void`                                                                                                                                                |          | —                                             | This callback is invoked when the popover opened state changes.                                                   |
| `formatter`          | `(time: dayjs.ConfigType) => string`                                                                                                                                       |          | `(time) => dayjs(time).format('MMM D, YYYY')` | This optional formatter MAY be used to format the date value. It receives the date prop and MUST return a string. |
| `placeholder`        | `string`                                                                                                                                                                   |          | `"Select date range"`                         | This placeholder label is displayed when no date range is selected.                                               |
| `defaultValue`       | `DatesRangeValue<string>`                                                                                                                                                  |          | —                                             | This value is used as the initial value for uncontrolled input.                                                   |
| `value`              | `DatesRangeValue<string>`                                                                                                                                                  |          | —                                             | This value is used for controlled input.                                                                          |
| `syncWithUrl`        | `boolean`                                                                                                                                                                  |          | `false`                                       | When `true`, the component syncs the selected dates to URL query parameters.                                      |
| `error`              | `string`                                                                                                                                                                   |          | —                                             | This error message is displayed.                                                                                  |
| `presets`            | `Record<string, DateRangePickerPreset>`                                                                                                                                    |          | —                                             | These presets MAY be provided for display in the picker.                                                          |
| `rangeCalendarProps` | `Omit<DatePickerBaseProps, 'value' \| 'onChange' \| 'isDateInRange' \| 'isDateFirstInRange' \| 'isDateLastInRange' \| 'presets' \| '__onPresetSelect' \| 'allowDeselect'>` |          | —                                             | These props MAY be used to configure the range calendar displayed in the popover.                                 |
| `startProps`         | `Omit<Partial<DatePickerProps>, 'value' \| 'onChange' \| 'onFocus'>`                                                                                                       |          | —                                             | These props MAY be used to configure the start input.                                                             |
| `endProps`           | `Omit<Partial<DatePickerProps>, 'value' \| 'onChange' \| 'onFocus'>`                                                                                                       |          | —                                             | These props MAY be used to configure the end input.                                                               |

## Usage

Use `DateRangePicker` as a controlled component by storing the selected range in state and updating it with `onChange`.

```tsx
import {useState} from 'react';
import {DateRangePicker} from '@coveord/plasma-mantine';

function Example() {
    const [value, setValue] = useState<[string | null, string | null]>([null, null]);

    return <DateRangePicker value={value} onChange={setValue} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
