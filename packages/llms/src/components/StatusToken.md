---
name: StatusToken
description: Status indicator with semantic color coding.
---

## Props

> Extends: `BoxProps`, `StylesApiProps<StatusTokenFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop      | Type                                                                                          | Required | Default  | Description                                                                       |
| --------- | --------------------------------------------------------------------------------------------- | :------: | -------- | --------------------------------------------------------------------------------- |
| `size`    | `'sm' \| 'lg'`                                                                                |          | `'lg'`   | The size of the token MAY be set to control the rendered icon dimensions.         |
| `variant` | `'info' \| 'success' \| 'caution' \| 'error' \| 'disabled' \| 'waiting' \| 'edited' \| 'new'` |          | `'info'` | The variant of the token MUST match the status semantics you need to communicate. |

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
