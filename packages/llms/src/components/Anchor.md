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
- Providing secondary navigation options such as "View documentation" or "See all results" beside descriptive text.

## When not to use it

- When the action triggers a mutation, submission, or workflow step — use `Button` instead.
- When the link stands alone as a primary call-to-action with enough prominence to warrant a button shape.
- When breadcrumb-style navigation is needed — use `Header.Breadcrumbs` with `Header.BreadcrumbAnchor` rather than bare `Anchor` elements.

## Decision-making guidance

- Prefer `Anchor` over a plain `<a>` element so that Plasma theming, focus styles, and size tokens are applied consistently.
- Open links in a new tab only when leaving the current context would interrupt the user's task.
- Use `size="xs"` for compact contexts such as table cells or captions; use `size="sm"` for body text.
- Pass `inherit` when the anchor sits inside a `Text` or other typographic container so its font size and font-weight inherit from the parent rather than resetting.

## Variants

`Anchor` is a straight re-export of Mantine's `Anchor`, so the full Mantine `size` scale (`xs`–`xl`) is available. In practice, prefer:

- `sm` — standard body-text links.
- `xs` — compact areas such as table cells or captions.

## Accessibility expectations

- Link text MUST describe the destination or action, not just "click here" or "read more".
- When opening a new tab, the link SHOULD signal this to screen-reader users, either through visible text or an `aria-label`.

## Content guidance

- Keep link labels short and descriptive.
- Avoid punctuation at the end of a link label unless it is part of a sentence.

## Common anti-patterns

- Using `Anchor` to trigger an `onClick` action with no `href` — use `Button.Tertiary` or an `ActionIcon` instead.
- Wrapping large blocks of content in an `Anchor`; links SHOULD target meaningful, concise labels.
- Omitting `inherit` when placing an `Anchor` inside a typographic component, causing a size mismatch.

# API reference

## Props

> Extends: `AnchorProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

## Usage

```tsx
import {Alert, Anchor} from '@coveord/plasma-mantine';

// Standalone link
function ExternalLink() {
    return (
        <Anchor href="https://plasma.coveo.com" target="_blank" rel="noopener noreferrer" size="sm">
            Plasma Design System
        </Anchor>
    );
}

// Inside an Alert description — inherit the parent font size and weight
function SomeAlert() {
    return (
        <Alert.Information title="Alert title">
            Read the{' '}
            <Anchor inherit href="#details">
                setup details
            </Anchor>{' '}
            before continuing.
        </Alert.Information>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
