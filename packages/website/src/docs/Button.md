# Best Practices

The button label should allow users to **foresee what will happen** when clicking them.

Avoid multiplying buttons within a page. A page should have **only one primary action button**. If several secondary action buttons are required, consider using [actionable items](https://plasma.coveo.com/form/ActionableItem) instead.

# Labeling

Keep labels short, preferably **under three words**.
Use **trigger words** to clearly indicate the action performed by the button. A trigger word is typically a verb that influences users into clicking due to its specificity. For example, use "View profile" rather than "Open profile", and "Create playlist" rather than "Save".

The first word of the label should be a verb. If adding a noun is required for context, avoid including an article. For example, write "Add filter" rather than "Add a filter", but write "Save" and "Cancel".

When using a button to have users confirm the action to execute, use an active word to **clearly state the resulting action**. For instance, if users must confirm the deletion of a file, write "Delete" and "Cancel" rather than "Yes" and "No".

# Order of Buttons

When using a group of related buttons, such as for the "Save" and "Cancel" actions, always put **the primary button to the right** and the secondary to the left of the primary button.

In such case, the primary button must correspond to an action that moves the user forward through their journey or to the main action that the user should take.

For example, in the [Sticky footer](https://plasma.coveo.com/layout/StickyFooter) of a page where the user edits a configuration, order buttons as follows: "Cancel" (secondary), then "Save" (primary).

In a [page header](https://plasma.coveo.com/layout/PageHeader), **the primary button should appear on the left** and the secondary button should be to the right of the primary button. The primary action usually relates to the creation of new elements, while secondary actions are usually used to trigger troubleshooting or management actions, such as activity review. If multiple secondary actions are required, group them using an [actionable item](https://plasma.coveo.com/form/ActionableItem) on the rightmost side of the header.

# Variants

| **Type**                         | **Purpose**                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Primary**                      | A primary button draws the users' attention to the main action. There should be only one primary button per section or page.                                                                                                                                                                                                                                                                                                         |
| **Secondary**                    | A secondary button triggers an action of lesser importance. Multiple secondary buttons may trigger actions of similar importance.                                                                                                                                                                                                                                                                                                    |
| **Icon + label**                 | Add a icon left of the label to clarify the action or draw attention to the button. Ensure the icon is highly recognizable.                                                                                                                                                                                                                                                                                                          |
| **Label + icon**                 | Add an icon right of the label to indicate that additional options are available when clicking the button. This indicates that clicking the button doesn't immediately trigger the action. Instead, a menu overlay is displayed, allowing users to select the exact action to be performed. For example, use a label and an icon on the right when the action is "Create" and options are to create from a template or a blank file. |
| **Icon only**                    | When space is an issue or when the icon is highly and instantly recognizable, an icon alone may suffice. For instance, the "Settings" button is commonly presented using a cog icon. However, you should never use an icon-only button for primary actions.                                                                                                                                                                          |
| **Append and prepend separator** | Adding a separator is an aesthetic choice typically made when multiple buttons are stacked vertically. Use a separator to align the icon to the right or left of the button. All buttons must have the same width when vertically stacked.                                                                                                                                                                                           |

# Feedback and Validation

When the label is hidden, add a tooltip displaying the action.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Link](https://plasma.coveo.com/foundations/Links) - When you need to redirect users to another section or website.
-   [Actionable items](https://plasma.coveo.com/form/ActionableItem) - When you need to group several less important actions together.
