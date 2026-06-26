---
name: Anchor
description: Inline text link that navigates the user to another page or section.
---

# Usage guidance

## What problem does it solve?

`Anchor` lets users navigate to another page, section, or resource directly from within text — without breaking the reading flow or pulling attention away from the content with a button. A plain `<a>` tag would be unstyled and inconsistent; a `Button` would be too heavy for in-context navigation. `Anchor` is the right weight when the navigation action lives inside prose.

## When to use it

- Navigating to an external URL or a different route within the application.
- Embedding a navigation action inline within a sentence or paragraph.
- Providing secondary navigation options such as "Learn more" or "See all results" beside descriptive text.

## When not to use it

- When the action triggers a mutation, submission, or workflow step — use `Button` instead.
- When the link stands alone as a primary call-to-action with enough prominence to warrant a button shape.
- When breadcrumb-style navigation is needed — use `Breadcrumbs` with `Anchor` children rather than bare `Anchor` elements.

## Decision-making guidance

- Prefer `Anchor` over a plain `<a>` element so that Plasma theming, focus styles, and size tokens are applied consistently.
- If the link opens in a new tab, set `target="_blank"`. Always pair it with `rel="noopener noreferrer"` for security.
- Use `size="xs"` for compact contexts such as table cells or captions; use `size="sm"` (default) for body text.
- Pass `inherit` when the anchor sits inside a `Text`, `Breadcrumbs`, or other typographic container so its font size inherits from the parent rather than resetting.

## Variants

Plasma exposes two size options:

- `sm` (default) — standard body-text size.
- `xs` — smaller, suited to dense UI areas.

## Accessibility expectations

- Link text MUST describe the destination or action, not just "click here" or "read more".
- When opening a new tab, the link SHOULD signal this to screen-reader users, either through visible text or an `aria-label`.
- `Anchor` renders a native `<a>` element and inherits correct keyboard focus behaviour by default.

## Content guidance

- Keep link labels short and descriptive.
- Avoid punctuation at the end of a link label unless it is part of a sentence.

## Common anti-patterns

- Using `Anchor` to trigger an `onClick` action with no `href` — use `Button.Tertiary` or an `ActionIcon` instead.
- Wrapping large blocks of content in an `Anchor`; links SHOULD target meaningful, concise labels.
- Omitting `inherit` when placing an `Anchor` inside a typographic component, causing a size mismatch.

## What an AI agent should understand

- `Anchor` is a thin Plasma wrapper around Mantine's `Anchor`, registering the display name for tooling. All Mantine `AnchorProps` are available.
- Use `inherit` when nesting inside `Text` or `Breadcrumbs` to avoid font-size conflicts.
- For pure navigation links, `Anchor` is always preferable to a `Button` styled as a link.

# API reference

## Props

> Extends: `AnchorProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

## Usage

```tsx
import {Anchor} from '@coveord/plasma-mantine';

// Standalone link
function ExternalLink() {
    return (
        <Anchor href="https://plasma.coveo.com" target="_blank" rel="noopener noreferrer" size="sm">
            Plasma Design System
        </Anchor>
    );
}

// Inside a Breadcrumbs trail — inherit parent font size
import {Breadcrumbs} from '@coveord/plasma-mantine';
import {Text} from '@coveord/plasma-mantine';

function BreadcrumbTrail() {
    return (
        <Breadcrumbs>
            <Anchor href="/home" inherit>
                Home
            </Anchor>
            <Text inherit>Current page</Text>
        </Breadcrumbs>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
