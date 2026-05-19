---
name: Header
description: Page-level header with a title and optional breadcrumbs, actions, and a documentation link.
---

## Props

> Extends: `GroupProps`, `StylesApiProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

| Prop             | Type                       | Required | Default     | Description                                                                                  |
| ---------------- | -------------------------- | :------: | ----------- | -------------------------------------------------------------------------------------------- |
| `description`    | `ReactNode`                |          | —           | Optional description text displayed inside the header underneath the title.                  |
| `borderBottom`   | `boolean`                  |          | —           | Adds a bottom border to the header when set.                                                 |
| `variant`        | `'primary' \| 'secondary'` |          | `'primary'` | You SHOULD use the `primary` variant for page headers and the `secondary` variant elsewhere. |
| `children`       | `ReactNode`                |    ✓     | —           | The title of the header MUST be provided.                                                    |
| `titleComponent` | `ElementType`              |          | `Title`     | The component used to render the title MAY be customized.                                    |

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
