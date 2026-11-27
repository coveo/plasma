---
name: Alert
description: Alert callout for contextual information, advice, warnings, critical errors, and success states.
---

# Usage guidance

## What problem does it solve?

The `Alert` makes contextual information visible in the page layout so users can notice, read, and act on it without relying on hover or transient feedback.

## When to use it

Use `Alert` when:

- a message should remain visible until the user has had a chance to read it
- the message affects the current page, form, or workflow
- users need context, advice, warning, error, or success feedback near related content
- the message is more important than helper text but does not require a modal interruption

## When not to use it

Do not use `Alert` when:

- feedback is lightweight and transient; use `Notification`
- information is optional clarification for one field; use helper text or `ContextualHelp`
- the user must confirm a blocking decision; use `Prompt` or `Modal`
- the message is only a compact status label; use `Badge` or `StatusToken`

## Decision-making guidance

- Use `Alert` over `Notification` when the message must remain visible in the page layout.
- Use `Alert` over `Tooltip` when the information is important and should not depend on hover or focus.
- Use `Prompt` for confirmation flows where the user must choose before continuing.

## Variants

- Ignore Mantine's `color`/`variant` props for choosing intent; select the message type through the Plasma sub-components below.
- Use `Alert.Information` for neutral contextual information.
- Use `Alert.Advice` for recommendations or next-best-action guidance.
- Use `Alert.Warning` when users can proceed but should be careful.
- Use `Alert.Critical` for errors, failures, or blocking issues.
- Use `Alert.Success` for persistent success states that remain relevant in context.

## Close button

The close button (`withCloseButton`) lets users hide an alert once they have read it. Offer it only when hiding the message has no consequence.

- `Alert.Information`, `Alert.Advice`, and `Alert.Success` MAY have a close button when the message is useful once and stops being relevant after it is read.
- `Alert.Warning` SHOULD NOT have a close button. Add one only if the risk is acknowledged once and stays visible somewhere else, such as a status or field message.
- `Alert.Critical` MUST NOT have a close button. Remove the alert when the underlying problem is fixed, not when the user dismisses it.
- An alert MUST NOT require closing to unblock the user; closing only hides the message.
- When `withCloseButton` is set, you MUST provide `onClose` to remove the alert and `closeButtonLabel` (for example `"Close"`) so the button has an accessible name.
- Alerts MUST NOT close on their own after a delay; use `Notification` for transient feedback.
- Use the same closing behavior for the same kind of alert across the product.

## Content guidance

- Titles SHOULD be short and state the message purpose.
- Body text SHOULD explain the impact or next step.
- Critical alerts SHOULD make the consequence and recovery path clear.

## Common anti-patterns

- Stacking several alerts instead of grouping related messages.
- Using critical alerts for neutral information.
- Putting long documentation inside an alert instead of linking to supporting content.
- Letting users close a critical alert while the problem it describes is still unresolved.
- Adding a close button without `onClose` or `closeButtonLabel`.

# API reference

## Props

_No additional props beyond the Mantine base component._

## Sub-components

Plasma provides pre-configured sub-components as convenience wrappers. You SHOULD use these over setting props manually.

- `Alert.Information`
- `Alert.Advice`
- `Alert.Warning`
- `Alert.Critical`
- `Alert.Success`

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Alert.Props`
- `Alert.StylesNames`
- `Alert.CssVariables`
- `Alert.Factory`
- `Alert.{Information, Advice, Warning, Critical, Success}.Props`

## Usage

```tsx
import {Alert} from '@coveord/plasma-mantine';

<Alert.Information title="Note">This is an informational message.</Alert.Information>
<Alert.Warning title="Warning">Proceed with caution.</Alert.Warning>
<Alert.Critical title="Error">Something went wrong.</Alert.Critical>
```

```tsx
import {Alert} from '@coveord/plasma-mantine';
import {useState} from 'react';

// Closable alert: low-impact information the user only needs once
function NewFeatureAlert() {
    const [visible, setVisible] = useState(true);

    if (!visible) {
        return null;
    }

    return (
        <Alert.Information
            title="New filters available"
            withCloseButton
            closeButtonLabel="Close"
            onClose={() => setVisible(false)}
        >
            You can now filter results by source type.
        </Alert.Information>
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
