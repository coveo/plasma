---
name: Badge
description: Status label that can display short text, counts, or metadata tags.
---

# Usage guidance

## What problem does it solve?

The `Badge` gives users a compact text label for status, category, count, or metadata that needs to be visible near an object.

## When to use it

Use `Badge` when:

- a short label adds scannable metadata to an item
- a state or category should be visible but not interruptive
- the value is textual and needs more context than an icon alone
- a list, card, or header needs compact status information

## When not to use it

Do not use `Badge` when:

- the message needs explanation or action; use `Alert` or inline text
- only a small semantic marker is needed; use `StatusToken`
- the value is interactive; use a button or link pattern
- the label is too long to scan as metadata

## Decision-making guidance

- Use `Badge` for readable status or metadata text.
- Use `StatusToken` when an icon-like status marker is enough or space is very constrained.
- Keep the default `small` size for dense lists and inline metadata; use `large` only when the badge must read as a standalone status indicator.

## Variants

- Ignore Mantine's `color`/`variant` props for choosing status; select meaning through the Plasma sub-components below.
- Use `Badge.Primary` for the most prominent neutral label on an item.
- Use `Badge.Secondary` for lower-emphasis neutral metadata.
- Use `Badge.Success` for healthy, enabled, or completed states.
- Use `Badge.Warning` for cautionary states.
- Use `Badge.Critical` for error or failure states.
- Use `Badge.Disabled` for unavailable or inactive states.

## Content guidance

- Badge text SHOULD be short, usually one to three words.
- Use nouns or concise state labels rather than full sentences.
- Keep wording consistent across badges in the same set.

## Common anti-patterns

- Using badges as buttons.
- Writing long explanatory messages inside badges.
- Using semantic colors inconsistently across similar statuses.

# API reference

## Props

> Extends: `BadgeProps` (sub-components use `SemanticBadgeProps`, a restricted subset). Only Plasma-specific props are listed below; inherited props MUST be referenced in Mantine documentation.

**`size`** `'small' | 'large'` · optional · default: `'small'` — Controls the badge height and text size.
**`on`** `'light' | 'dark'` · optional · default: current colour scheme — Forces the light or dark colour variant.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Badge.Primary`
- `Badge.Secondary`
- `Badge.Success`
- `Badge.Warning`
- `Badge.Critical`
- `Badge.Disabled`

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Badge.Props`
- `Badge.StylesNames`
- `Badge.CssVariables`
- `Badge.{Primary, Secondary, Success, Warning, Critical, Disabled}.Props`

## Usage

```tsx
import {Badge} from '@coveord/plasma-mantine';

<Badge.Primary>Active</Badge.Primary>
<Badge.Success>Enabled</Badge.Success>
<Badge.Critical>Error</Badge.Critical>
```

---

[Full Plasma documentation]({{BASE_URL}})
