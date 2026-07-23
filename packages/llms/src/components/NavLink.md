---
name: NavLink
description: Navigation link component for sidebars and menus that supports active state, icons, badges, and nested child links.
---

# Usage guidance

## What problem does it solve?

`NavLink` renders a styled navigation item that communicates the current location within an application. It supports left icons, right sections (such as badges), active highlighting, disabled state, and nesting — all in a consistent interactive target.

## When to use it

Use `NavLink` when:

- building a sidebar or vertical navigation menu
- you need to indicate which section of the application the user is currently viewing
- a navigation item has child items that expand beneath it
- you want to decorate a navigation entry with a status badge or icon

## When not to use it

Do not use `NavLink` when:

- the link is inline within prose; use `Anchor` instead
- the action triggers a command rather than navigation; use `Button`
- a flat, horizontal navigation structure is needed; use tabs or a custom nav bar

## Decision-making guidance

- Use `active` only on the item that exactly matches the current route; do not apply it to parent items when a child is active.
- Use `leftSection` for route-identifying icons so users can scan the menu quickly.
- Use `rightSection` for contextual badges (e.g. unread count, "New") — do not overload both sections simultaneously without a clear purpose.
- For nested menus, keep the nesting depth to one level. Deeper hierarchies become hard to navigate.

## Variants

Mantine's `NavLink` supports `variant` values (`filled`, `light`, `subtle`). Plasma does not restrict the available variants; use the design token–compatible variant that fits the application shell.

## States

- **Default** — unvisited, not active
- **Active** — current page; apply `active` prop
- **Hover** — automatic via CSS
- **Disabled** — prevents interaction and dims the link
- **With children (collapsed/expanded)** — chevron indicates toggleable children; defaults to collapsed

## Interaction notes

Clicking a NavLink with children toggles its expanded state rather than navigating. Navigation only occurs when `href` resolves to a real destination. If using a client-side router, pass the router's `Link` component via the `component` prop.

## Accessibility expectations

- `NavLink` renders as an anchor (`<a>`) by default. Ensure `href` is always set when used for navigation.
- The `active` state SHOULD correspond to the current page so screen-reader users receive correct `aria-current` semantics (Mantine sets this automatically).
- Disabled nav links MUST NOT be the only way to reach a destination; remove them from the tree if the route is genuinely unavailable.

## Common anti-patterns

- Marking multiple items `active` at the same time.
- Using `NavLink` for form submission or destructive actions.
- Nesting more than one level deep in a sidebar.
- Omitting `href` when the link is expected to be keyboard- or right-click-navigable.

## What an AI agent should understand

- `NavLink` is a thin Plasma re-export of Mantine's `NavLink` with no additional props.
- Nest `NavLink` components as children to create collapsible sub-menus.
- Use `Badge.Primary` (or other `Badge` sub-components) in `rightSection` for status annotations.
- Pass a router's `Link` component to `component` for client-side navigation.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `NavLinkProps` from `@mantine/core`. Refer to [Mantine NavLink documentation](https://mantine.dev/core/nav-link/) for the full prop list.

## Sub-components

Mantine exposes `NavLink` only as a single component; sub-items are created by rendering `NavLink` as children.

## Usage

```tsx
import {Badge} from '@coveord/plasma-mantine';
import {NavLink} from '@coveord/plasma-mantine/components/NavLink';
import {IconHome2} from '@coveord/plasma-react-icons';

function SidebarNav() {
    return (
        <>
            <NavLink
                label="Home"
                href="/home"
                active
                leftSection={<IconHome2 size={16} />}
                rightSection={<Badge.Primary>New</Badge.Primary>}
            />
            <NavLink label="Reports" href="#">
                <NavLink label="Overview" href="#" />
                <NavLink label="Details" href="#" />
            </NavLink>
        </>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
