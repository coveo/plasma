---
'@coveord/plasma-mantine': major
---

Remove the `info` variant from `StatusToken` and make `variant` required

The `variant` prop no longer defaults to `info` — it is now required.

# Migration

1. **If you used the `info` variant**, replace it with the variant that best matches your intent (e.g., `waiting` or `disabled`).
2. **If you relied on the default variant**, explicitly pass `variant="success"` to every `<StatusToken />` that did not already specify one.

```diff
- <StatusToken />
+ <StatusToken variant="success" />

- <StatusToken variant="info" />
+ <StatusToken variant="waiting" />
```
