---
name: CopyToClipboard
description: Action icon that copies a string value to the clipboard and shows tooltip feedback.
---

## Props

> Extends: `ActionIconProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop                 | Type                                   | Required | Default             | Description                                                                                                                                                                                     |
| -------------------- | -------------------------------------- | :------: | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`              | `string`                               |    ✓     | `—`                 | The value copied to the clipboard.                                                                                                                                                              |
| `withLabel`          | `boolean`                              |          | `false`             | Deprecated. You SHOULD place the `CopyToClipboard` component inside the `rightSection` of input components instead. When used, this prop displays the string to be copied alongside the button. |
| `onCopy`             | `MouseEventHandler<HTMLButtonElement>` |          | `—`                 | If provided, this callback is called each time the value is copied to the clipboard.                                                                                                            |
| `color`              | `MantineColor \| (string & {})`        |          | `gray`              | The icon uses this color when idle.                                                                                                                                                             |
| `tooltipLabelCopy`   | `string`                               |          | `Copy to clipboard` | The tooltip displays this text when hovering over the button.                                                                                                                                   |
| `tooltipLabelCopied` | `string`                               |          | `Copied`            | The tooltip displays this text when the value is copied to the clipboard.                                                                                                                       |

## Usage

Use `CopyToClipboard` in the `rightSection` of a read-only input when users need to quickly copy values like API keys, tokens, or IDs.

```tsx
import {CopyToClipboard, TextInput} from '@coveord/plasma-mantine';

export function ApiKeyField() {
    const apiKey = 'sk_live_1234567890abcdef';

    return <TextInput label="API key" value={apiKey} readOnly rightSection={<CopyToClipboard value={apiKey} />} />;
}
```

---

[Full Plasma documentation](https://plasma.coveo.com)
