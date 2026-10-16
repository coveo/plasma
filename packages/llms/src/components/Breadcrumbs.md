---
name: Breadcrumbs
description: Horizontal trail of navigation links showing the user's position within a page hierarchy.
---

# Usage guidance

## What problem does it solve?

`Breadcrumbs` shows users where they are within a multi-level information hierarchy and lets them navigate back to ancestor pages without using the browser back button.

## When to use it

- Pages that sit two or more levels deep in a navigation tree.
- Drill-down workflows such as an item detail page reached from a list.
- Contexts where the user may want to jump directly to a grandparent level rather than navigating step-by-step.

## When not to use it

- Flat, single-level applications where there is no meaningful hierarchy.
- Inside modals or drawers where the user is expected to close rather than navigate away.

## Decision-making guidance

- In Plasma products, breadcrumbs are normally placed inside a page `Header` via `Header.Breadcrumbs` / `Header.BreadcrumbAnchor`; use standalone `Breadcrumbs` only outside a `Header` context.
- Tabs are not pages. A tab MUST NOT be a level in the breadcrumb trail. A page opened from a tab points to the page that contains the tab. For example, editing a ranking rule opened from the Ranking rules tab of Product listing shows `< Product listing`, not `< Ranking rules`.
- When there is one ancestor, show a single breadcrumb with a back arrow. Inside a `Header`, you MUST set `single` on the `Header.BreadcrumbAnchor`; the arrow is not added automatically.
- When there are two ancestors, use two `Anchor` links.
- When there are three or more ancestors, show up to three `Anchor` links — avoid going deeper as it becomes unreadable.
- Do not include the current page in the trail — the page header already shows the current page name.
- All items MUST be `Anchor` elements so they are keyboard-focusable and screen-reader navigable. Every item is a link; you MUST NOT use `Header.BreadcrumbText`.
- Each link MUST point to a fixed parent route, never to the browser history (`history.back()`).
- When the parent page has tabs, the link MUST open the parent page on the tab the user came from. For example, `< Product listing` opens Product listing on the Ranking rules tab.
- Pass `inherit` on each `Anchor` child so its font size matches the `Breadcrumbs` container styling.

## Interaction notes

The separator between items is rendered automatically by the component. Do not place separator characters manually between children.

Only the links are clickable. You MUST NOT add a click handler (`onClick`) to the `Breadcrumbs` or `Header.Breadcrumbs` container.

## Accessibility expectations

- Consider wrapping the `Breadcrumbs` in a `<nav aria-label="Breadcrumb">` landmark when the page does not already have a dedicated navigation region for it.
- Each ancestor link MUST have descriptive text that matches or summarises the target page title. You MUST use the parent page's name, never generic labels such as "Back", "Go back", or "Previous".

## Common anti-patterns

- Including the current page in the trail — the page header already communicates where the user is.
- Using a tab name as a level, or combining the page and tab names (e.g. `< Product listing - Ranking rules`).
- Using generic labels such as "Back", "Go back", "Previous", or "Back to Answers" instead of the parent page's name.
- Nesting more than three levels; deeply nested breadcrumbs become unreadable and suggest that the information architecture needs rethinking.
- Using plain `<a>` tags instead of `Anchor` children, which bypasses Plasma theming and focus styles.

# API reference

## Props

> Extends: `BreadcrumbsProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

## Usage

```tsx
import {Anchor, Breadcrumbs, Flex} from '@coveord/plasma-mantine';
import {IconChevronLeft} from '@coveord/plasma-react-icons';

// Level 1: single parent with back-arrow affordance
function Level1() {
    return (
        <Breadcrumbs>
            <Anchor href="/catalog" inherit>
                <Flex align="center">
                    <IconChevronLeft aria-label="arrow pointing back" size={16} />
                    Catalog
                </Flex>
            </Anchor>
        </Breadcrumbs>
    );
}

// Level 2: two ancestors
function Level2() {
    return (
        <Breadcrumbs>
            <Anchor href="/home" inherit>
                Home
            </Anchor>
            <Anchor href="/catalog" inherit>
                Catalog
            </Anchor>
        </Breadcrumbs>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
