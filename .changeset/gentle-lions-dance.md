---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': minor
---

Add `ContextualHelp` component to explain nearby content behind a question icon

`ContextualHelp` renders a question icon that reveals help content on hover or keyboard focus. Use `variant="text"` (default) for plain text and `variant="interactive"` when the content contains links.

```tsx
<ContextualHelp aria-label="About clickthrough rate">
    The percentage of times a View is followed by a click.
</ContextualHelp>
```

`Input.LabelInfo` is deprecated in favor of `ContextualHelp`. It now renders a `ContextualHelp`, so it can be reached with the keyboard, and existing queries for the image named "question" keep working. Its `ref` now points to the button, and `Tooltip` props other than `position` are still accepted but ignored.

To migrate, replace `Input.LabelInfo` with `ContextualHelp`, keep the label spacing with `ml="xxs"`, and query the icon as a button.

```diff
- <Input.LabelInfo>Helpful tooltip</Input.LabelInfo>
+ <ContextualHelp ml="xxs">Helpful tooltip</ContextualHelp>
```

```diff
- screen.getByRole('img', {name: 'question'});
+ screen.getByRole('button', {name: 'More information'});
```
