---
name: Prompt
description: Confirmation modal with semantic variants and optional footer actions.
---

# Usage guidance

## What problem does it solve?

The `Prompt` asks users to confirm or acknowledge an important decision in a focused modal with semantic intent.

It is useful when the user must make a clear choice before continuing.

## When to use it

Use `Prompt` when:

- the user must confirm a meaningful action
- the decision has risk, consequence, or important feedback
- semantic tone helps communicate information, success, warning, or critical impact
- footer actions should clearly separate cancel and confirm choices

## When not to use it

Do not use `Prompt` when:

- the overlay contains a larger form or custom task; use `Modal`
- the message can remain inline; use `Alert`
- the action is low-risk and does not need confirmation
- users need to compare information on the underlying page while deciding

## Decision-making guidance

- Use `Prompt.Warning` when the action needs caution.
- Use `Prompt.Critical` for destructive or high-risk confirmation.
- Use `Prompt.Information` for neutral acknowledgment.
- Use `Prompt.Success` for positive confirmation or completion messaging.
- Use `Modal` when the content is more than a confirmation decision.

## Content guidance

- Titles SHOULD name the decision.
- Body text SHOULD explain consequences and reversibility.
- Confirm button text SHOULD describe the action, not say "OK."
- Cancel button text SHOULD make the safe alternative clear.

## Common anti-patterns

- Asking for confirmation on routine low-risk actions.
- Using vague button labels for destructive actions.
- Putting complex forms inside a prompt.

## What an AI agent should understand

- `Prompt` is a semantic confirmation modal.
- Use it for decisions, not general overlay content.
- Use the semantic sub-component that matches the consequence.

# API reference

## Props

> Extends: `Omit<ModalRootProps, 'classNames' | 'styles' | 'vars' | 'attributes' | 'variant'>`, `Omit<StylesApiProps<PromptFactory>, 'variant'>`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`children`** `ReactNode` · required · default: `undefined` — Prompt body content MUST be provided. It MAY include `Prompt.Footer` for action buttons.
**`title`** `ReactNode` · required · default: `undefined` — Prompt title content MUST be provided and is rendered in the header.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

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

[Full Plasma documentation]({{BASE_URL}})
