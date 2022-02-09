## Best Practices

-   Only include information that is relevant to the performed action.

-   Toasts may contain actions or links. Try to include no more than one.

-   Toasts do not prevent users from interacting with the page content. If preventing users from interacting with page content is unavoidable, consider using [Prompt modals](#/layout/ModalWindow) instead.

## Variations

The toast type choice depends on the status of the operation to which the toast refers.

| **Type**    | **Purpose**                                                                                                                                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Success** | Used to confirm that an operation was successfully executed. If the toast contains a link or action, it has to be manually dismissed by the user. If not, it is self-dismissible.                                                                  |
| **Warning** | Used to notify users that the operation they have launched may not yet be completed, or may not have had the expected result. If the toast contains a link or action, it has to be manually dismissed by the user. If not, it is self-dismissible. |
| **Error**   | Used to notify users about an operation that was not successful. Users **must** dismiss the toast manually to ensure they do not miss critical information.                                              |

---

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

- [Prompt modals](#/layout/ModalWindow) if the user must not interact with the page content while the message is displayed.

- [Info Box](#/layout/InfoBox) if the message is not related to an action the user has performed.

- [Tooltip](#/feedback/Tooltip) if you want to provide additional information about an element on screen.
