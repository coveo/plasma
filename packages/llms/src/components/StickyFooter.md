---
name: StickyFooter
description: Action footer that remains fixed to the bottom of the viewport.
---

## Props

> Extends: `Omit<GroupProps, 'classNames' | 'styles' | 'vars' | 'variant'>`, `StylesApiProps<StickyFooterFactory>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`borderTop`** `boolean` | optional | default: `undefined` -- When `true`, a border is rendered on top of the footer.
**`children`** `ReactNode` | optional | default: `undefined` -- Footer children SHOULD usually be buttons.
**`variant`** `'default' | 'modal-footer'` | optional | default: `undefined` -- The `modal-footer` variant SHOULD be used when rendering the `StickyFooter` inside `Modal`. The `modal-footer` variant removes the modal's default padding so that the footer properly hugs the bottom of the modal. It also adds a border on top of the footer. Deprecated: You SHOULD use `Modal.Footer` from `@coveord/plasma-mantine/Modal` for modal footers. For other cases, the `default` variant SHOULD suffice.

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
