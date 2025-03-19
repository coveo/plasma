# Best Practices

- Only include information that is relevant to the performed action.
- Toasts may contain actions or links, preferably only one.
- Toasts should not prevent users from interacting with the page content. However, if it is unavoidable, consider using a [prompt modal](https://plasma.coveo.com/layout/ModalWindow) instead.

# Variations

The result of the operation triggering the toast determines the type of toast to display.

| **Type**    | **Purpose**                                                                                                                                                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Success** | Confirms if operation was successfully executed. When the toast contains a link or action, it must be dismissed manually by the user. If not, it disappears automatically.                                                                          |
| **Warning** | Notifies users when the operation they launched may have not yet be completed, or may not have had the expected result. When the toast contains a link or action, it has to be manually dismissed by the user. If not, it disappears automatically. |
| **Error**   | Notifies users about an unsuccessful operation. The toast **must** be manually dismissed by users so that they don't miss this critical information.                                                                                                |

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

- [Prompt modal](https://plasma.coveo.com/layout/ModalWindow) - When users shouldn't be able to interact with the page content while the message is displayed.
- [Info box](https://plasma.coveo.com/layout/InfoBox) - When the message isn't related to an action the user has performed.
- [Tooltip](https://plasma.coveo.com/feedback/Tooltip) - When you want to provide additional information about an element on screen.
