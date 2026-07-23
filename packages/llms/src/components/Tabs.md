---
name: Tabs
description: Navigation pattern that organises related content into labelled panels, showing one at a time.
---

# Usage guidance

## What problem does it solve?

`Tabs` divides a page section into peer content categories so users can switch between them without leaving the page or losing scroll position in the rest of the layout.

## When to use it

- Content belongs to parallel, peer categories of roughly equal importance (e.g., Overview / Settings / History).
- All panels are part of the same conceptual entity (e.g., a resource's detail view).
- The number of tabs is between two and roughly six.

## When not to use it

- The categories are sequential steps; use `Stepper`.
- Only one panel exists; the tab bar adds noise without value.
- The panels represent separate destinations or pages; use router-level navigation (`Link`, `NavLink`) instead.
- More than six or seven tabs are needed; consider a secondary sidebar navigation or a `Select`-driven panel switcher.

## Decision-making guidance

- Prefer `defaultValue` (uncontrolled) unless the active tab must be driven by external state (URL hash, router).
- Use `orientation="vertical"` when the tab list and panels sit side by side, typically in a two-column layout.
- Tab labels MUST be short (one to three words). Do not use icons without accompanying text unless there is very limited space.

## Variants

- **Horizontal** (default): tab list appears above the panels.
- **Vertical**: tab list appears to the left of the panels; set `orientation="vertical"`.

## Interaction notes

- Keyboard: arrow keys move focus between tabs; `Enter` or `Space` activates the focused tab.
- Tabs activate on focus by default in Mantine; set `activateTabWithKeyboard` to `false` if panels have expensive loading cost.

## Accessibility expectations

- The component renders a `role="tablist"` with `role="tab"` items and associated `role="tabpanel"` elements, satisfying the ARIA Tabs pattern automatically.
- Tab labels MUST be unique within the tab list.
- Panels MUST not be empty; if a panel has no content yet, show a loading indicator or a placeholder message.

## Common anti-patterns

- Using tabs for navigation that changes the URL without wiring the `value` to the router, causing the active tab to reset on refresh.
- Mixing tab-level and page-level navigation in the same `Tabs.List`.
- Nesting tab sets inside tab panels (deeply nested tabs are disorienting).

## What an AI agent should understand

- `Tabs` is a thin re-export of Mantine's `Tabs` with sub-components `Tabs.List`, `Tabs.Tab`, and `Tabs.Panel` exposed.
- The `value` on each `Tabs.Tab` and `Tabs.Panel` MUST match; mismatches silently hide panels.
- Use `defaultValue` for uncontrolled usage and `value` + `onChange` for controlled.
- No Plasma-specific props are added; the full Mantine `TabsProps` API applies.

# API reference

## Props

> Extends: Mantine `TabsProps`. No additional Plasma-specific props — refer to [Mantine Tabs docs](https://mantine.dev/core/tabs/) for the full API.

_No additional props beyond the Mantine base component._

## Sub-components

- `Tabs.List` — container for `Tabs.Tab` elements; renders as `role="tablist"`.
- `Tabs.Tab` — individual tab button; requires a unique `value` prop.
- `Tabs.Panel` — content area shown when its `value` matches the active tab.

## Usage

```tsx
import {Tabs} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Tabs defaultValue="overview">
            <Tabs.List>
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="settings">Settings</Tabs.Tab>
                <Tabs.Tab value="history">History</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="overview">Overview content</Tabs.Panel>
            <Tabs.Panel value="settings">Settings content</Tabs.Panel>
            <Tabs.Panel value="history">History content</Tabs.Panel>
        </Tabs>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
