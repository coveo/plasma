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
- Links that leave the application (documentation, third-party services) SHOULD use `Anchor.External` rather than an `Anchor` with `target="_blank"`, so the new tab behavior is signalled visually and to screen readers.
- Use `size="xs"` for compact contexts such as table cells or captions; use `size="sm"` for body text.
- Pass `inherit` when the anchor sits inside a `Text` or other typographic container so its font size and font-weight inherit from the parent rather than resetting.

## Variants

`Anchor` wraps Mantine's `Anchor`, so the full Mantine `size` scale (`xs`–`xl`) is available. In practice, prefer:

- `sm` — standard body-text links.
- `xs` — compact areas such as table cells or captions.

## Accessibility expectations

- Link text MUST describe the destination or action, not just "click here" or "read more".
- When opening a new tab, the link SHOULD signal this to screen-reader users. `Anchor.External` does this with visually hidden text; `newTabLabel` MUST be translated in non-English interfaces.

## Content guidance

- Keep link labels short and descriptive.
- Avoid punctuation at the end of a link label unless it is part of a sentence.

## Common anti-patterns

- Using `Anchor` to trigger an `onClick` action with no `href` — use `Button.Tertiary` or an `ActionIcon` instead.
- Wrapping large blocks of content in an `Anchor`; links SHOULD target meaningful, concise labels.
- Omitting `inherit` when placing an `Anchor` inside a typographic component, causing a size mismatch.
- Setting `target="_blank"` on a plain `Anchor` for external destinations; use `Anchor.External` instead.

# API reference

## Props

> Extends: `AnchorProps` from `@mantine/core`. No additional Plasma-specific props beyond the Mantine base component.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Anchor.External` — link to a destination outside the application. Opens in a new tab with `rel="noopener noreferrer"`, renders an external link icon after the content, and appends visually hidden text announcing the new tab. `target` and `rel` MAY be overridden; the announcement is only rendered when `target` is `_blank`.

### `Anchor.External` props

> Extends: `AnchorProps` from `@mantine/core`. Only Plasma-specific props are listed below. Styles API selectors: `root`, `icon`.

**`showIcon`** `boolean` · optional · default: `true` — Whether to display the external link icon after the link content.
**`newTabLabel`** `string` · optional · default: `'(opens in a new tab)'` — Text announced to screen readers when the link opens in a new tab.

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Anchor.Props`
- `Anchor.StylesNames`
- `Anchor.CssVariables`
- `Anchor.Factory`
- `Anchor.External.Props`
- `Anchor.External.StylesNames`

## Usage

```tsx
import {Alert, Anchor} from '@coveord/plasma-mantine';

// Standalone link within the application
function InternalLink() {
    return (
        <Anchor href="/settings" size="sm">
            Organization settings
        </Anchor>
    );
}

// Link outside the application — opens in a new tab with an external icon
function ExternalLink() {
    return (
        <Anchor.External href="https://docs.coveo.com" size="sm">
            Coveo documentation
        </Anchor.External>
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
