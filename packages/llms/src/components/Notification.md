---
name: Notification
description: Toast notification that communicates the outcome of an action with info, success, warning, or error severity.
---

# Usage guidance

## What problem does it solve?

`Notification` gives users timely feedback about the outcome of an action — without interrupting their flow. It appears briefly as a toast in the corner of the screen, then disappears on its own. Because it's transient, it's best for low-priority feedback the user should see but doesn't need to act on immediately.

## When to use it

- Confirming that an action completed successfully (e.g. "Changes saved").
- Letting the user know a background task finished or failed.
- Surfacing a non-blocking warning the user should be aware of.
- Showing a loading state while an async operation is in progress.

## When not to use it

- When the message is critical and the user must act on it — use a `Prompt` or `Alert` instead. Toasts auto-dismiss and can be missed.
- When the error blocks the user from continuing — a toast is not enough for blocking errors.
- When the feedback belongs to a specific form field — use inline field validation instead.
- When the message needs to stay visible until the user dismisses it — use a persistent `Alert` in the page content.
- When many notifications would stack at once for bulk operations — batch them into a single notification.

## Decision-making guidance

- Prefer the `notifications` system API for transient toasts so they are managed consistently — queued, auto-dismissed, and accessible.
- When the message must persist in the document flow until the user acts on it, use `Alert` instead.
- Choose the variant based on severity:
    - `info` — neutral information, no action required
    - `success` — positive confirmation
    - `warning` — something may go wrong; user should review
    - `error` — something went wrong; user may need to act
- Always pair the variant with a matching icon so the meaning is communicated by both colour and shape, not colour alone.

## Variants

- Use `info` for general information or updates.
- Use `success` to confirm an operation completed successfully.
- Use `warning` for a potential issue that is non-blocking.
- Use `error` when an operation failed and the user may need to act.

## States

- **Default** — shows icon, optional title, and message body
- **Loading** — set `loading` to `true` to replace the icon with a spinner; use while awaiting an async result

## Interaction notes

- Toasts shown via `notifications.show()` auto-dismiss after a configurable timeout. Do not rely on the user seeing them for critical error recovery.

## Accessibility expectations

- MUST include a descriptive `title` and a `children` message body so both sighted and screen-reader users understand the context.
- Icon SHOULD complement, not replace, the text message — do not rely solely on colour.
- `loading` notifications SHOULD not disappear abruptly; transition to a resolved state (success or error) after the operation settles.

## Content guidance

- Titles SHOULD be short (3–6 words) and outcome-focused — say what happened, not what to do.
- Body text SHOULD be kept to 2 lines maximum — toasts are glanceable, not detailed.
- For errors and warnings, always include what the user can do next — avoid vague messages like "Something went wrong" with no recovery path.

## Common anti-patterns

- Using `error` variant for informational messages just to draw attention.
- Showing a notification without an icon, leaving the severity ambiguous.
- Stacking many toasts at once for bulk operations — batch them into a single notification.
- Using `Notification` in place of form validation errors — use inline field validation instead.

## What an AI agent should understand

- `Notification` is a thin Plasma re-export of Mantine's `Notification` with no additional props.
- For programmatic toasts, import `notifications` from `@coveord/plasma-mantine/notifications` and call `notifications.show()`.
- Icons are not automatic — always pass the correct icon element to the `icon` prop to match the intended `variant`.

# API reference

## Props

_No additional props beyond the Mantine base component._

> Extends: `NotificationProps` from `@mantine/core`. Refer to [Mantine Notification documentation](https://mantine.dev/core/notification/) for the full prop list.

Key props in practice:

- **`title`** `ReactNode` — Notification heading
- **`children`** `ReactNode` — Notification message body
- **`icon`** `ReactNode` — Icon displayed on the left; SHOULD match the intended severity
- **`loading`** `boolean` — Replaces the icon with a spinner
- **`withCloseButton`** `boolean` — Shows or hides the dismiss button (default `true`)

## Usage

```tsx
import {Notification} from '@coveord/plasma-mantine/components/Notification';
import {notifications} from '@coveord/plasma-mantine/notifications';
import {IconCircleCheckFilled, IconAlertSquareFilled} from '@coveord/plasma-react-icons';

// Toast via notifications system
function showError() {
    notifications.show({
        title: 'Export failed',
        message: 'The file could not be generated. Try again or contact support.',
        icon: <IconAlertSquareFilled size={20} color="var(--mantine-color-red-4)" />,
    });
}
```

---

[Full Plasma documentation]({{BASE_URL}})
