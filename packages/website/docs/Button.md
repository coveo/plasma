## Best Practices

Button label should allow users to **foresee what will happen** when clicking them. 

Avoid multiplying buttons within a page. A page should have **only one primary action button**. If several secondary action buttons are required, consider using [Actionable items](#/form/ActionableItem) instead.

When using button groups, such as for "Save" and "Cancel" actions, always put the action that move the user forward through his journey **to the right**. For instance, order buttons as "Cancel" then "Save".


## Labeling

Keep labels short, preferably **under three words**.
Use **trigger words** to clearly indicate the action performed by the button.

Write labels so **the first word is a verb**. Use noun without article, to specify the context when required. For example, write "Add filter" rather than "Add a filter" but only write "Save" and "Cancel".

When using button to confirm an action that will be executed, always use an active word to **clearly state the resulting action**. For instance, if user must confirm the deletion of a file, write "Delete" and "Cancel" rather than "Yes" and "No".


## Variants

| **Type** | **Purpose** |
| **Primary** | Use primary buttons for the main action you want to draw the user attention to. There should be only one primary action in a section or page. |
| **Secondary** | Use secondary buttons to display action of lesser importance or to display multiple actions of similar importance. |
| **Left icon + label** | Add a left icon to add quick and visual clarity to what the action is or draw attention to the button. Make sure the icon is highly recognizable. |
| **Left icon + label** | Use the right icon to indicate that additional options are available upon selecting the button. This means that the action will not be carried right away upon clicking the button, but a menu overlay would be displayed where the user can select the exact action to be performed. For instance, when the action is "Create" and options are to create from a template or a blank file. |
| **Right icon + label** | Use only an icon when space is an issue or when the icon is highly and instantly recognizable. For instance, the "Setting" button is commonly presented only using a cog icon. Never use icon only button for primary actions. |
| **Append and prepend separator** | Adding a separator is an aesthetic choice especially used when two or more buttons are stacked vertically. Use a separator to align the icon to the right or left or the button. Note that all buttons must have the same width when vertically stacked. |


## Feedback and Validation

Add a tooltip when the label is hidden to display the name of the related action.

---

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Link](#/foundations/Links) when you need to redirect a user to another section or website
-   [Actionable items](#/form/ActionableItem) when you want to regroup several less important action together.

