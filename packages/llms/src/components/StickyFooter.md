---
name: StickyFooter
description: Action footer that remains fixed to the bottom of the viewport.
---

# Usage guidance

## What problem does it solve?

The `StickyFooter` keeps save and cancel actions visible when a user is actively editing a page or going through a creation flow — so they don't have to scroll to find them.

## When to use it

Use `StickyFooter` when:

- a user has entered an edit mode and needs to confirm or discard their changes
- a user is going through a creation flow and needs to submit or cancel
- the page content is long enough that actions at the bottom would scroll out of view

## When not to use it

Do not use `StickyFooter` when:

- the page is not in an edit or creation state
- actions apply only to a small local section of the page
- the content is short enough that actions remain naturally visible without scrolling
- the footer is inside a modal; use `Modal.Footer` instead

## Decision-making guidance

- Use `StickyFooter` for edit mode and creation flows where the user needs persistent access to Save and Cancel.
- Use `Modal.Footer` for actions inside a modal.
- Use inline buttons when the action belongs to a specific section or component, not the whole page.
- Keep primary and secondary actions ordered consistently across the product.

## Content guidance

- The primary action should represent the main commitment — typically Save or Create.
- Always pair a primary action with a Cancel option so users can exit without consequences.
- Avoid adding unrelated utility actions to the sticky footer.

## Common anti-patterns

- Showing a sticky footer on pages where the user is not in an edit or creation state.
- Putting local row or card actions in a page-level footer.
- Using the deprecated modal variant instead of `Modal.Footer`.

## What an AI agent should understand

- `StickyFooter` is for edit mode and creation flows, not general page-level actions.
- It should appear when the user has entered a state where they need to commit or discard changes.
- Do not use it inside modals; use `Modal.Footer`.

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
