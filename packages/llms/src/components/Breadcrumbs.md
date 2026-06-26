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

- When there are two ancestors, use two `Anchor` links followed by the current page as a `Text` element.
- When there are three or more ancestors, show up to three `Anchor` links — avoid going deeper as it becomes unreadable.
- The last item in the trail represents the current page and MUST be a non-interactive `Text` element, not an `Anchor`.
- All ancestor items MUST be `Anchor` elements so they are keyboard-focusable and screen-reader navigable.
- Pass `inherit` on each `Anchor` child so its font size matches the `Breadcrumbs` container styling.

## Interaction notes

The separator between items is rendered automatically by the component. Do not place separator characters manually between children.

## Accessibility expectations

- The current page item MUST NOT be a link; wrapping it in `Text` satisfies this requirement.
- Consider wrapping the `Breadcrumbs` in a `<nav aria-label="Breadcrumb">` landmark when the page does not already have a dedicated navigation region for it.
- Each ancestor link MUST have descriptive text that matches or summarises the target page title.

## Common anti-patterns

- Making the current-page item a link — it is a location indicator, not a navigation target.
- Nesting more than three levels; deeply nested breadcrumbs become unreadable and suggest that the information architecture needs rethinking.
- Using plain `<a>` tags instead of `Anchor` children, which bypasses Plasma theming and focus styles.

## What an AI agent should understand

- `Breadcrumbs` is a thin Plasma wrapper around Mantine's `Breadcrumbs`. All `BreadcrumbsProps` are available.
- Children are typically a mix of `Anchor` (ancestors) and `Text` (current page).
- The level 1 pattern uses an `Anchor` containing a `Flex` with an `IconChevronLeft` icon alongside the parent label — this is a design convention, not a prop.

# API reference

## Props

> Extends: `BreadcrumbsProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

## Usage

```tsx
import {Anchor} from '@coveord/plasma-mantine';
import {Breadcrumbs} from '@coveord/plasma-mantine';
import {Flex} from '@coveord/plasma-mantine';
import {Text} from '@coveord/plasma-mantine';
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
            <Text inherit>Product detail</Text>
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
            <Text inherit>Product detail</Text>
        </Breadcrumbs>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
