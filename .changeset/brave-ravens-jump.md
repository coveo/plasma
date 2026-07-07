---
'@coveord/plasma-mantine': minor
---

Add `Navigation` component for collapsible sidebar navigation

Provides a compound component for building sidebar navigation menus with collapsible sections, active link tracking, and animated expand/collapse.

- `Navigation` — root provider managing collapsed state via context
- `Navigation.SideBar` — sidebar container wrapping Mantine's `AppShell.Navbar` with a scrollable content area and built-in toggle
- `NavigationSection` — collapsible group of links that auto-hides when empty
- `NavigationLink` — nav item supporting nesting levels, badges, and custom router components
- `NavigationToggle` — chevron button to collapse/expand the sidebar
- `NavigationBadge` — status badge (`beta`, `wip`, `new`) displayed on links
- `useNavigation()` — hook exposing `collapsed` state and `toggleCollapsed`
