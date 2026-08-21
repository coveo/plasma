---
name: plasma
description: Plasma design system setup, conventions, and component documentation for `@coveord/plasma-mantine`, Coveo's Mantine-based React component library. Use when building or modifying UI in a project that uses Plasma, looking up component props or usage patterns, setting up a new Plasma project, or any task involving `@coveord/plasma-mantine` components.
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

- **Always import from `@coveord/plasma-mantine`**, not directly from `@mantine/*` packages. Plasma components wrap Mantine with Coveo-specific styling and behaviour.
- **Prefer Plasma sub-components** over passing raw props. For example, use `Button.Primary` instead of `<Button variant="filled">`.
- **Theme is already applied** via `Plasmantine`. Do not create a separate `MantineProvider` unless you have a specific reason.

## Finding Component Docs

Use the Plasma and Mantine MCP servers for on-demand documentation. MCP clients may prefix the tool names with the server name.

**Step 1: Query Plasma first.** Plasma is authoritative for Plasma-specific behaviour, props, sub-components, and usage patterns.

- Use `list_components` to discover which components Plasma documents.
- Use `get_component_doc` for complete documentation about a known component.
- Use `get_component_props` when only the props table is needed.
- Use `search_docs` to find components or guidance by topic.

**Step 2: Fall back to Mantine.** If Plasma does not document a component or inherited API, use the Mantine MCP server's `list_items`, `get_item_doc`, `get_item_props`, or `search_docs` tool.

Even when Mantine supplies the API reference, import the component from `@coveord/plasma-mantine`.

## Content Guidelines

Plasma provides content guidelines for writing UX copy in Coveo products. Always follow these when writing user-facing text such as labels, errors, tooltips, and descriptions.

- Use `list_content_guidelines` to discover the available guidelines.
- Use `get_content_guideline` to retrieve `Voice`, `WritingMechanics`, `ProductVocabulary`, or `TargetAudience`.
- Use `search_docs` to find relevant component or content guidance by topic.

## Fallback When MCP Is Unavailable

If the Plasma or Mantine MCP tools are not configured, use the static LLM documentation instead.

Start with the Plasma index, then fetch only the component or content guideline needed:

```
{{BASE_URL}}/llms.txt
{{BASE_URL}}/llms/components/ComponentName.md
{{BASE_URL}}/llms/content/GuidelineName.md
```

Use the full documentation only when a task genuinely requires bulk context:

```
{{BASE_URL}}/llms-full.txt
```

For Mantine fallback documentation, use:

```
https://mantine.dev/llms.txt
```

## Import invariant

**Always import from `@coveord/plasma-mantine`**, even when using Mantine docs as the API reference. `@coveord/plasma-mantine` re-exports all Mantine components with Coveo's theme and any Plasma overrides applied.

```tsx
// ✓ Always — even for components only documented by Mantine
import {TextInput, Select, Checkbox} from '@coveord/plasma-mantine';

// ✗ Never
import {TextInput} from '@mantine/core';
```
