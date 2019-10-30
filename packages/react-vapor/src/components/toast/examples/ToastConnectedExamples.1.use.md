## Guidelines

### Content

-   Only include information that is related to the performed action.

-   Toasts may contain action buttons. Try to provide no more than one action besides the ability to dismiss the Toast.

### Behavior

-   Only one Toast should be displayed at a time. If two consecutive Toasts have to be shown, the first one needs to disappear before the second one is shown.

-   Toasts should not prevent users from interacting with the page content. If blocking the interaction with the page is required, consider using a [Prompt](#/components/ModalPrompt) instead.

## Variations

The toast type choice depends on the status of the operation which the toast refers to.

| Type    | Purpose                                                                                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Success | Used to confirm that an operation was successfully executed. If it contains a link or action, an interaction is required to dismiss it. If not, it is self dismissible.                                                               |
| Warning | Used to give notice to users that the operation they've launched might not have completed or had the full expected result. If it contains a link or action, an interaction is required to dismiss it. If not, it is self dismissible. |
| Error   | Used to inform users of an operation that was not successful. Users must interact with is to dismiss it (it is not self dismissible) to avoid missing critical information.                                                           |

---

## Related Components

[Prompt](#/components/ModalPrompt)

[Info Box](#/components/InfoBox)

[Popover](#/components/Popover)

[Tooltip](#/components/Tooltip)
