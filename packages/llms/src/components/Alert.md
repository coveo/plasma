---
name: Alert
description: Alert callout for contextual information, advice, warnings, critical errors, and success states.
---

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. Consumers SHOULD use these instead of setting props manually.

- `Alert.Information`
- `Alert.Advice`
- `Alert.Warning`
- `Alert.Critical`
- `Alert.Success`

## Usage

```tsx
import {Alert} from '@coveord/plasma-mantine';

<Alert.Information title="Note">This is an informational message.</Alert.Information>
<Alert.Warning title="Warning">Proceed with caution.</Alert.Warning>
<Alert.Critical title="Error">Something went wrong.</Alert.Critical>
```

---

[Full Plasma documentation](https://plasma.coveo.com)
