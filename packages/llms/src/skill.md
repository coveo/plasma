---
name: plasma
description: Plasma design system setup, conventions, and component documentation for `@coveord/plasma-mantine` — Coveo's Mantine-based React component library. Use when building or modifying UI in a project that uses Plasma, looking up component props or usage patterns, setting up a new Plasma project, or any task involving `@coveord/plasma-mantine` components.
---

Plasma is Coveo's design system built on top of [Mantine](https://mantine.dev/). It provides React components, a custom theme, design tokens, and icons for Coveo Cloud products.

## Install

```bash
pnpm add @coveord/plasma-mantine @mantine/core @mantine/hooks @mantine/notifications react react-dom
```

## Setup

Wrap your application with the `Plasmantine` provider:

```tsx
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

function App() {
    return <Plasmantine>{/* your app */}</Plasmantine>;
}
```

## Key Conventions

- **Always import from `@coveord/plasma-mantine`**, not directly from `@mantine/core`. Plasma components wrap Mantine with Coveo-specific styling and behaviour.
- **Prefer Plasma sub-components** over passing raw props. For example, use `Button.Primary` instead of `<Button variant="filled">`.
- **Theme is already applied** via `Plasmantine`. Do not create a separate `MantineProvider` unless you have a specific reason.

## Finding Component Docs

Plasma documents its wrapped components. Query Plasma first; fall back to Mantine for everything else.

**Step 1 — Plasma (authoritative for Plasma-specific behaviour):**

Fetch the component index to see what Plasma documents:

```
{{BASE_URL}}/llms.txt
```

Fetch full docs for all Plasma-wrapped components (props, sub-components, usage examples):

```
{{BASE_URL}}/llms-full.txt
```

**Step 2 — Mantine fallback (for re-exported components and inherited props):**

If a component isn't listed in the Plasma index, fetch Mantine's full documentation:

```
https://mantine.dev/llms-full.txt
```

## Import invariant

**Always import from `@coveord/plasma-mantine`**, even when using Mantine docs as the API reference. `@coveord/plasma-mantine` re-exports all Mantine components with Coveo's theme and any Plasma overrides applied.

```tsx
// ✓ Always — even for components only documented by Mantine
import {TextInput, Select, Checkbox} from '@coveord/plasma-mantine';

// ✗ Never
import {TextInput} from '@mantine/core';
```
