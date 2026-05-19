---
name: InfoToken
description: Inline token for displaying semantic metadata with a predefined icon.
---

## Props

> Extends: `BoxProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop      | Type               | Required | Default     | Description                                                          |
| --------- | ------------------ | :------: | ----------- | -------------------------------------------------------------------- |
| `variant` | `InfoTokenVariant` |          | `'outline'` | The variant of the token MAY be set to control its visual treatment. |
| `size`    | `InfoTokenSizes`   |          | `'xs'`      | The size of the info token MAY be set to control its rendered size.  |

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers, and you MUST use these wrappers to select the semantic type because `type` is not part of the public `InfoTokenProps` API.

- `InfoToken.Information`
- `InfoToken.Advice`
- `InfoToken.Warning`
- `InfoToken.Error`
- `InfoToken.Question`
- `InfoToken.Success`

## Usage

Use the semantic sub-components to render the most common token types.

```tsx
import {InfoToken} from '@coveord/plasma-mantine';

function Example() {
    return (
        <>
            <InfoToken.Information />
            <InfoToken.Advice />
            <InfoToken.Success />
            <InfoToken.Warning />
            <InfoToken.Error />
            <InfoToken.Question />
        </>
    );
}
```

Use `variant` to switch between the default outlined appearance and the light style.

```tsx
import {InfoToken} from '@coveord/plasma-mantine';

function Variants() {
    return (
        <>
            <InfoToken.Information variant="outline" />
            <InfoToken.Information variant="light" />
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
