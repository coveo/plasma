---
name: StickyFooter
description: Action footer that remains fixed to the bottom of the viewport.
---

# Usage guidance

## What problem does it solve?

The `StickyFooter` keeps important page-level actions visible while users work through long content or forms.

## When to use it

Use `StickyFooter` when:

- actions apply to the whole page or long form
- users may scroll away from the natural end of the content
- save, cancel, preview, or submit actions need persistent access
- the footer should remain visually separated from the content

## When not to use it

Do not use `StickyFooter` when:

- actions apply only to a small local section
- the content is short enough that actions remain naturally visible
- the footer is inside a modal; use `Modal.Footer`
- persistent actions would cover important content or create duplicate controls

## Decision-making guidance

- Use `StickyFooter` for page-level persistent actions.
- Use `Modal.Footer` for modal actions.
- Use inline buttons when actions belong to a local component or section.
- Keep primary and secondary actions ordered consistently.

## Content guidance

- Footer actions SHOULD be concise and decision-oriented.
- The primary action SHOULD represent the main page outcome.
- Avoid adding unrelated utility actions to the sticky footer.

## Common anti-patterns

- Using a sticky footer for every page regardless of content length.
- Putting local row or card actions in a page-level footer.
- Using the deprecated modal variant instead of `Modal.Footer`.

## What an AI agent should understand

- `StickyFooter` is for persistent page-level action groups.
- Do not use it inside modals; use `Modal.Footer`.
- It should help users complete a long workflow without hunting for actions.

# API reference

## Props

> Extends: `Omit<GroupProps, 'classNames' | 'styles' | 'vars' | 'variant'>`, `StylesApiProps<StickyFooterFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`borderTop`** `boolean` · optional · default: `undefined` — When `true`, a border is rendered on top of the footer.
**`children`** `ReactNode` · optional · default: `undefined` — Footer children SHOULD usually be buttons.
**`variant`** `'default' | 'modal-footer'` · optional · default: `undefined` — The `modal-footer` variant SHOULD be used when rendering the `StickyFooter` inside `Modal`. The `modal-footer` variant removes the modal's default padding so that the footer properly hugs the bottom of the modal. It also adds a border on top of the footer. Deprecated: You SHOULD use `Modal.Footer` from `@coveord/plasma-mantine/Modal` for modal footers. For other cases, the `default` variant SHOULD suffice.

## Usage

```tsx
import {Button, StickyFooter} from '@coveord/plasma-mantine';

export const SettingsPage = () => (
    <>
        <main>{/* Form fields and page content */}</main>

        <StickyFooter borderTop>
            <Button.Secondary>Cancel</Button.Secondary>
            <Button.Secondary>Preview</Button.Secondary>
            <Button.Primary>Save changes</Button.Primary>
        </StickyFooter>
    </>
);
```

---

[Full Plasma documentation]({{BASE_URL}})
