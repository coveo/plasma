---
name: DateRangePicker
description: Deprecated date range picker with an input trigger, inline calendar, presets, and optional URL synchronization; do not use it in new implementations.
---

## Deprecation

`DateRangePicker` is deprecated and MUST NOT be used in new implementations. Existing usages SHOULD be migrated away from it.

# Usage guidance

## What problem does it solve?

`DateRangePicker` lets users select a start and end date from a popover calendar while retaining optional presets and controlled or uncontrolled state.

## Props

> Extends: `BoxProps`, selected `DateRangePickerInlineCalendarProps`, selected `PopoverProps`, and `StylesApiProps<DateRangePickerFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`onClick`** `() => void` · optional · default: `undefined` — Called when the target input is clicked.
**`onCancel`** `() => void` · optional · default: `undefined` — Called when the cancel button is clicked.
**`onChange`** `(dates: DatesRangeValue<string>) => void` · optional · default: `undefined` — Called when the date range changes.
**`onOpenedChange`** `(opened: boolean) => void` · optional · default: `undefined` — Called when the popover open state changes.
**`formatter`** `(time: dayjs.ConfigType) => string` · optional · default: `(time) => dayjs(time).format('MMM D, YYYY')` — Formats the displayed date values.
**`placeholder`** `string` · optional · default: `'Select date range'` — Label displayed when no date range is selected.
**`defaultValue`** `DatesRangeValue<string>` · optional · default: `undefined` — Initial value for uncontrolled usage.
**`value`** `DatesRangeValue<string>` · optional · default: `undefined` — Controlled date range value.
**`syncWithUrl`** `boolean` · optional · default: `undefined` — Syncs selected dates to URL query parameters.
**`error`** `string` · optional · default: `undefined` — Error message displayed with the input.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `DateRangePicker.Props`
- `DateRangePicker.StylesNames`
- `DateRangePicker.Factory`

## Usage

```tsx
import {DateRangePicker} from '@coveord/plasma-mantine';
import {useState} from 'react';

export function Example() {
    const [value, setValue] = useState<[string | null, string | null]>([null, null]);

    return <DateRangePicker value={value} onChange={setValue} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
