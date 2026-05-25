---
name: Prompt
description: Confirmation modal with semantic variants and optional footer actions.
---

## Props

> Extends: `Omit<ModalRootProps, 'classNames' | 'styles' | 'vars' | 'attributes' | 'variant'>`, `Omit<StylesApiProps<PromptFactory>, 'variant'>`. Only Plasma-specific props are listed below; you SHOULD refer to Mantine documentation for inherited props.

**`children`** `ReactNode` · required · default: `undefined` — Prompt body content MUST be provided. It MAY include `Prompt.Footer` for action buttons.
**`title`** `ReactNode` · required · default: `undefined` — Prompt title content MUST be provided and is rendered in the header.

## Sub-components

Plasma provides the following pre-configured sub-components as convenience wrappers. Consumers SHOULD use the semantic variant wrappers instead of setting a variant prop manually.

- `Prompt.Information`
- `Prompt.Success`
- `Prompt.Warning`
- `Prompt.Critical`
- `Prompt.Footer`
- `Prompt.CancelButton`
- `Prompt.ConfirmButton`

## Usage

```tsx
import {Prompt} from '@coveord/plasma-mantine';

function DeleteSourcePrompt({opened, onClose, onConfirm}) {
    return (
        <Prompt.Warning opened={opened} onClose={onClose} title="Delete this source?">
            Deleting this source permanently removes its configuration and stops all scheduled crawls. This action
            cannot be undone.
            <Prompt.Footer>
                <Prompt.CancelButton onClick={onClose}>Keep source</Prompt.CancelButton>
                <Prompt.ConfirmButton onClick={onConfirm}>Delete source</Prompt.ConfirmButton>
            </Prompt.Footer>
        </Prompt.Warning>
    );
}
```

---

[Full Plasma documentation](https://plasma.coveo.com)
