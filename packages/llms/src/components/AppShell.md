---
name: AppShell
description: Application layout shell with a scrollable main content area.
---

# Usage guidance

## What problem does it solve?

The `AppShell` provides the structural frame for application pages, including persistent regions such as header, navigation, main content, aside, and footer.

Plasma's `AppShell.Main` keeps main content scrolling independently so the shell structure remains stable.

## When to use it

Use `AppShell` when:

- building a full application or product area layout
- the page needs persistent navigation, header, footer, or aside regions
- main content should scroll inside a stable shell
- responsive shell behavior is needed around the main content

## When not to use it

Do not use `AppShell` when:

- only a local panel, card, or form section needs layout
- a modal or embedded preview needs its own smaller structure
- the layout does not need persistent shell regions

## Decision-making guidance

- Use `AppShell` at the application or page-frame level.
- Use `Header` for page-level title/action structure inside a shell.
- Use regular layout primitives for local section layout.
- Use `BrowserPreview` when the goal is to preview content inside simulated browser chrome, not structure the application.

## Accessibility expectations

- Shell regions SHOULD preserve a logical page structure.
- Main content SHOULD remain reachable without trapping keyboard users in persistent regions.
- Navigation and header areas SHOULD have clear landmarks or labels when appropriate.

## Common anti-patterns

- Nesting multiple application shells inside each other.
- Using `AppShell` for a single card or local page section.
- Making both shell and inner content compete for scrolling in a way that hides actions.

## What an AI agent should understand

- `AppShell` is for high-level application structure.
- `AppShell.Main` provides Plasma's scrollable main content behavior.
- Use smaller layout components for local composition.

# API reference

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
