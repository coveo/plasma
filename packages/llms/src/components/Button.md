---
name: Button
description: Action button that triggers tasks and provides async loading and disabled-tooltip feedback.
---

# Usage guidance

## What problem does it solve?

The `Button` lets users intentionally trigger an action, submit a decision, or move a workflow forward.

It provides clear visual hierarchy for actions and supports async loading and disabled-state explanations.

## When to use it

Use `Button` when:

- the user triggers an explicit command
- the action label should be visible
- the action participates in a form, modal, footer, toolbar, or page-level command area
- the interface needs a clear primary, secondary, tertiary, or destructive action

## When not to use it

Do not use `Button` when:

- the action is compact and familiar enough to be icon-only; use `ActionIcon`
- the control represents an immediate persistent setting; use a selection or boolean control
- too many buttons would make the decision hierarchy unclear

## Decision-making guidance

- Use one primary button per decision area when possible.
- Use secondary or tertiary buttons for supporting actions such as cancel, preview, or back.
- Use destructive variants only when the action can delete, revoke, archive, or otherwise negatively affect data.
- Use `Button.Group` to keep related actions aligned and ordered.

## Variants

- Use `Button.Primary` for the main action.
- Use `Button.Secondary` for important alternatives.
- Use `Button.Tertiary` or `Button.Quaternary` for low-emphasis actions.
- Use destructive variants for destructive actions, with the emphasis matching the risk and prominence.

## States

Important states include:

- normal
- loading during async `onClick`
- disabled with optional tooltip explanation
- full width when the surrounding layout requires it

## Accessibility expectations

- Button text MUST describe the action that will happen.
- Disabled buttons SHOULD explain the missing requirement when the reason is not visible nearby.
- Destructive buttons SHOULD use wording that makes the consequence clear.

## Common anti-patterns

- Using multiple primary buttons in one decision area.
- Using a button for navigation.
- Disabling a button without explaining how the user can enable it.
- Hiding destructive consequences behind vague labels such as "OK".

## What an AI agent should understand

- `Button` is for explicit user-triggered actions with visible labels.
- Prefer semantic sub-components over manual variants.
- Async `onClick` handlers can be used directly; the button shows loading while pending.

# API reference

## Props

> Extends: `ButtonProps`, `ButtonWithDisabledTooltipProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`onClick`** `ClickHandler<HTMLButtonElement>` · optional · default: `undefined` — Handler executed on click. Async handlers MAY be used; the button shows a loading state while the promise resolves.
**`disabledTooltip`** `string` · optional · default: `undefined` — The tooltip message displayed when the button is disabled.
**`disabled`** `boolean` · optional · default: `undefined` — Indicates whether the button underneath the tooltip is disabled.
**`disabledTooltipProps`** `Omit<TooltipProps, 'disabled' | 'label' | 'children'>` · optional · default: `undefined` — Additional tooltip props MAY be set on the disabled button tooltip.
**`fullWidth`** `boolean` · optional · default: `undefined` — When provided, sets the button width to 100% of the parent element.

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Button.Group`
- `Button.Primary`
- `Button.Secondary`
- `Button.Tertiary`
- `Button.Quaternary`
- `Button.DestructivePrimary`
- `Button.DestructiveSecondary`
- `Button.DestructiveTertiary`
- `Button.DestructiveQuaternary`

## Usage

```tsx
import {Button} from '@coveord/plasma-mantine';

function Example() {
    return (
        <Button.Group>
            <Button.Secondary>Cancel</Button.Secondary>
            <Button.Primary>Save</Button.Primary>
        </Button.Group>
    );
}

async function handlePublish() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
}

function AsyncExample() {
    return <Button.Primary onClick={handlePublish}>Publish</Button.Primary>;
}

function DisabledExample() {
    return (
        <Button.Primary disabled disabledTooltip="You need edit permission to publish">
            Publish
        </Button.Primary>
    );
}
```

- Use sub-components (`Button.Primary`, `Button.Secondary`, etc.) for semantic variants instead of passing `variant` manually.
- Async `onClick` handlers automatically show a loading state until the promise settles.
- Pair `disabled` with `disabledTooltip` to explain why an action is unavailable.

---

[Full Plasma documentation]({{BASE_URL}})
