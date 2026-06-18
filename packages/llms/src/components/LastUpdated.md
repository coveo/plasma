---
name: LastUpdated
description: Component that displays a human-readable last-updated timestamp with default or custom formatting.
---

# Usage guidance

## What problem does it solve?

The `LastUpdated` component tells users how fresh the displayed information is.

It is useful in dashboards, tables, monitoring views, and async data surfaces where recency affects trust.

## When to use it

Use `LastUpdated` when:

- users need to know when data was last refreshed
- the view depends on background polling or asynchronous updates
- stale data could change user interpretation
- the timestamp should be shown consistently across views

## When not to use it

Do not use `LastUpdated` when:

- the timestamp refers to a business event, not UI data freshness
- the data is static or recency does not affect decisions
- the timestamp needs a richer audit trail
- the value belongs in a table column or metadata field instead

## Decision-making guidance

- Use `LastUpdated` for data freshness.
- Use ordinary text or table columns for domain timestamps such as "Created at" or "Modified by."
- Customize `label` and `formatter` when the default wording or format does not match the context.

## Content guidance

- Labels SHOULD clarify what was updated.
- Timestamp format SHOULD match the precision users need.

## Common anti-patterns

- Showing last updated timestamps that do not actually reflect the visible data.
- Using overly precise timestamps when relative freshness is enough.
- Confusing data freshness with object modification history.

## What an AI agent should understand

- `LastUpdated` is for communicating data freshness.
- Use it when recency affects user trust in the current view.
- Use other metadata patterns for business event timestamps.

# API reference

## Props

> Extends: `BoxProps`, `Pick<GroupProps, 'justify'>`, `StylesApiProps<LastUpdatedFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`formatter`** `(time: dayjs.ConfigType) => string` · optional · default: `(time) => dayjs(time).format('h:mm:ss A')` — Optional formatter function to format the time value. Receives the `time` prop and MUST return a string.
**`time`** `dayjs.ConfigType` · optional · default: `dayjs().valueOf()` — The unformatted time to display, parsed by dayjs when possible.
**`label`** `string` · optional · default: `'Last update:'` — Label that SHOULD contextualize the time.

## Usage

```tsx
import {LastUpdated} from '@coveord/plasma-mantine';

export function Example() {
    return <LastUpdated time={Date.now()} />;
}
```

---

[Full Plasma documentation]({{BASE_URL}})
