---
name: Navigate with links
description: How to move users to another page, section, or resource with links, and when to use a standalone, inline, external, or documentation link instead of a button.
---

# Navigate with links

## Summary

Users need to move to another page, section, or resource, such as the documentation site, without losing track of where they are or whether they're leaving the product. Links handle navigation only; they never perform an action.

## When to use

- Moving users to another page, section, or external resource, such as another Coveo app or the documentation site.
- Showing a URL.

## When not to use

- For any action, use `Button`.
- To show the user's location in a hierarchy, use `Breadcrumbs`.
- To send users into another app where they would land with no context, such as an empty list or the first step of a creation flow, link to the feature's documentation instead.

## Decision guide

| Situation                                                                                            | Approach                                                                                    | Why                                                          |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| The destination is in the current product, and the link stands on its own                            | Standalone `Anchor`                                                                         | Easy to scan, outside the reading flow                       |
| The destination is mentioned within a sentence                                                       | Inline `Anchor` with `inherit`, no icon, even when the destination is external              | Keeps the reading flow; icons inside text add visual noise   |
| The destination is in another Coveo app, such as the Administration Console or the Merchandising Hub | `Anchor`, no ↗ icon                                                                         | Other Coveo apps are not external destinations               |
| The destination is outside the Coveo apps, such as the documentation site                            | `ExternalAnchor` (until it ships: `Anchor`, `target="_blank"`, trailing `IconExternalLink`) | Users keep their place; the ↗ icon confirms they are leaving |
| Documentation for the current panel or page                                                          | `Header.DocAnchor`, the documentation action icon in the `Header`                           | Documentation is always in the same place, next to the title |
| The link would drop users into another app with no context, such as an empty list                    | Link to the feature's documentation instead                                                 | Users learn what the feature is before they land on it       |
| The control performs an action                                                                       | `Button`                                                                                    | Links are for navigation only                                |

## How it works

1. **Link text** describes the destination.
2. **External icon (↗)** trails the text, on external links only. A link is external when its destination is outside the Coveo apps, such as the documentation site; links to another Coveo app aren't external. Icon-only links with this icon, such as `Header.DocAnchor`, are styled as action icons and follow their own component guidance.
3. **Target**: destinations in the product open in the same tab; external destinations open in a new tab. Links to another Coveo app MAY open in either, depending on the user's task.

Activating a link navigates to its destination. The pattern has no loading, error, or disabled state. Because external links open in a new tab, the current page stays where the user left it.

`ExternalAnchor` is coming soon. It will render the ↗ icon and open a new tab by itself. Until it ships, build external links with `Anchor`, `target="_blank"`, `rel="noopener noreferrer"`, and a trailing `IconExternalLink`.

## Rules

- You MUST use a `Button`, not a link, for any action.
- You MUST open external links in a new tab.
- You MUST include a trailing ↗ icon on standalone external links. Inline links MUST NOT include it.
- You MUST NOT include the ↗ icon on links to another Coveo app.
- You MUST NOT add any other icon to a link.
- You SHOULD link to the feature's documentation instead of sending users to an empty state or the first step of a creation flow in another app.

## Content

- Link text SHOULD describe what users will find at the destination.
- Inline links SHOULD read naturally within the sentence.
- Do not use "Read more" when the label is already descriptive. Use labels like "View ranking documentation", "View operator definitions", or "Read implementation guidelines".
- Standalone link text SHOULD be short; do not use a full sentence as link text.

## Accessibility

- Link text MUST make sense out of context, since screen reader users often browse a list of links.
- The ↗ icon is decorative and MUST be hidden from screen readers (`aria-hidden`). Links that open in a new tab MUST tell screen reader users so, for example with visually hidden text such as "(opens in a new tab)".
- Links are activated with Enter, not Space. Using a link for an action breaks keyboard users' expectations.

## Common anti-patterns

- Using `Anchor` for an action such as "Delete" or "Save".
- Adding the ↗ icon to an inline link or to a link to another Coveo app.
- Opening an external link in the same tab.
- Using "Read more" or "Click here" as link text.
- Linking to an empty list or the first step of a creation flow in another app instead of the feature's documentation.

## Examples

```tsx
import {Anchor, Header, Text, VisuallyHidden} from '@coveord/plasma-mantine';
import {IconExternalLink} from '@coveord/plasma-react-icons';

// Standalone link in the current product
<Anchor href="/search/query-pipelines" size="sm">
    View query pipelines
</Anchor>;

// Inline link: inherits the text style, no icon
<Text size="sm">
    Each pipeline can include{' '}
    <Anchor href="/search/ranking-rules" inherit>
        ranking rules
    </Anchor>{' '}
    that change the order of results.
</Text>;

// Link to another Coveo app: no ↗ icon
<Anchor href="https://platform.cloud.coveo.com" size="sm">
    View query pipelines in the Administration Console
</Anchor>;

// External link (until ExternalAnchor ships)
<Anchor
    href="https://docs.coveo.com"
    target="_blank"
    rel="noopener noreferrer"
    size="sm"
    style={{display: 'inline-flex', alignItems: 'center', gap: 4}}
>
    View ranking documentation
    <IconExternalLink size={14} aria-hidden />
    <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
</Anchor>;

// Documentation for the current panel or page
<Header variant="secondary">
    Query pipelines
    <Header.DocAnchor
        label="Learn about query pipelines"
        aria-label="Learn about query pipelines (opens in a new tab)"
        href="https://docs.coveo.com"
    />
</Header>;
```

## Related

- Components: `Anchor`, `ExternalAnchor` (coming soon), `Header.DocAnchor`, `Button`, `Breadcrumbs`.

---

[Full Plasma documentation]({{BASE_URL}}/?path=/docs/patterns-navigate-with-links--docs)
