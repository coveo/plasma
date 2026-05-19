---
name: LastUpdated
description: Component that displays a human-readable last-updated timestamp with default or custom formatting.
---

## Props

> Extends: `BoxProps`, `Pick<GroupProps, 'justify'>`, `StylesApiProps<LastUpdatedFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop        | Type                                 | Required | Default                                     | Description                                                                                              |
| ----------- | ------------------------------------ | :------: | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `formatter` | `(time: dayjs.ConfigType) => string` |          | `(time) => dayjs(time).format('h:mm:ss A')` | Optional formatter function to format the time value. Receives the `time` prop and MUST return a string. |
| `time`      | `dayjs.ConfigType`                   |          | `dayjs().valueOf()`                         | The unformatted time to display, parsed by dayjs when possible.                                          |
| `label`     | `string`                             |          | `'Last update:'`                            | Label that SHOULD contextualize the time.                                                                |

## Usage

```tsx
import {LastUpdated} from '@coveord/plasma-mantine';

export function Example() {
    return <LastUpdated time={Date.now()} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
