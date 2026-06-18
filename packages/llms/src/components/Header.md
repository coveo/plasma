---
name: Header
description: Page-level header with a title and optional breadcrumbs, actions, and a documentation link.
---

# Usage guidance

## What problem does it solve?

The `Header` gives a page or major section a clear title area with optional breadcrumbs, description, documentation link, and right-aligned actions.

## When to use it

Use `Header` when:

- a page or major section needs a clear title
- users need breadcrumb context or a documentation link
- primary page actions should align with the title area
- a description helps users understand the scope of the view

## When not to use it

Do not use `Header` when:

- a small card or form group only needs a local heading
- the heading does not need page-level spacing or action placement
- actions belong in a sticky footer or modal footer instead
- the surrounding page already provides the header structure

## Decision-making guidance

- Use the `primary` variant for page headers.
- Use the `secondary` variant for lower-level sections when the component is still appropriate.
- Use `Header.Right` for actions that apply to the page or section as a whole.
- Use `Header.DocAnchor` when there is relevant external documentation.

## Content guidance

- Header titles SHOULD be specific and scannable.
- Descriptions SHOULD explain the page purpose, not repeat the title.
- Breadcrumb text SHOULD reflect the current hierarchy.
- Actions SHOULD be limited to the most relevant page-level commands.

## Common anti-patterns

- Filling the header with too many actions.
- Using page headers inside repeated cards.
- Hiding important workflow actions in the header when they belong near the form or footer.

## What an AI agent should understand

- `Header` is for page or major-section framing.
- Use its sub-components for breadcrumbs, right actions, and documentation links.
- Do not use it as a generic text heading.

# API reference

## Props

> Extends: `GroupProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`description`** `ReactNode` · optional · default: `undefined` — Optional description text displayed inside the header underneath the title.
**`borderBottom`** `boolean` · optional · default: `undefined` — Adds a bottom border to the header when set.
**`variant`** `'primary' | 'secondary'` · optional · default: `'primary'` — You SHOULD use the `primary` variant for page headers and the `secondary` variant elsewhere.
**`children`** `ReactNode` · required · default: `undefined` — The title of the header MUST be provided.
**`titleComponent`** `ElementType` · optional · default: `Title` — The component used to render the title MAY be customized.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these instead of setting props manually.

- `Header.Breadcrumbs`
- `Header.BreadcrumbAnchor`
- `Header.BreadcrumbText`
- `Header.Right`
- `Header.DocAnchor`

## Usage

```tsx
import {Button, Header} from '@coveord/plasma-mantine';

function SearchPageHeader() {
    return (
        <Header description="Review search performance, analytics, and recent query trends." borderBottom>
            <Header.Breadcrumbs>
                <Header.BreadcrumbAnchor href="/admin">Administration</Header.BreadcrumbAnchor>
                <Header.BreadcrumbText>Search</Header.BreadcrumbText>
            </Header.Breadcrumbs>
            Query dashboard
            <Header.Right>
                <Button.Secondary>Share</Button.Secondary>
                <Button.Primary>Create report</Button.Primary>
            </Header.Right>
        </Header>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
