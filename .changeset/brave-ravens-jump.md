---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': minor
---

Add `Navigation` component for collapsible sidebar navigation

The `Navigation` compound component provides a collapsible sidebar navigation system. `Navigation.SideBar` wraps Mantine's `AppShell.Navbar` with a scrollable content area and a built-in toggle. `Navigation.Section` renders a collapsible group of links that automatically hides when empty. `Navigation.Link` supports nesting levels, badges, and custom router components. `Navigation.Toggle` provides a chevron button to collapse or expand the sidebar. `Navigation.Badge` displays a status badge (Beta, WIP, or New) on links.

The `useNavigation()` hook exposes `collapsed` state and `toggleCollapsed` for integrating with `AppShell`.
