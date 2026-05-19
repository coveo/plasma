---
name: AppShell
description: Application layout shell with a scrollable main content area.
---

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `AppShell.Header`
- `AppShell.Navbar`
- `AppShell.Main`
- `AppShell.Aside`
- `AppShell.Footer`
- `AppShell.Section`

`AppShell.Main` wraps its children in a scrollable container that fills the available height. This ensures the main content area scrolls independently from the rest of the shell.

## Usage

```tsx
import {AppShell} from '@coveord/plasma-mantine';

function Example() {
    return (
        <AppShell header={{height: 60}} navbar={{width: 250, breakpoint: 'sm'}}>
            <AppShell.Header>Header</AppShell.Header>
            <AppShell.Navbar>Navigation</AppShell.Navbar>
            <AppShell.Main>Main content scrolls independently within this area.</AppShell.Main>
        </AppShell>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
