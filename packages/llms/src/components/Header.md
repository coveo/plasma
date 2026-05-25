---
name: Header
description: Page-level header with a title and optional breadcrumbs, actions, and a documentation link.
---

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

[Full Plasma documentation](https://plasma.coveo.com)
