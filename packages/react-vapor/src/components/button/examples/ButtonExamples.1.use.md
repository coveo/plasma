## Guidelines

### General

-   **To redirect** users to another page of the current website or app, or to another website, **use links** rather than buttons.
-   Avoid multiplying buttons within a given page. If you need several buttons, less popular or **less important actions may be grouped** in a ["more" Menu button](../#/components/Menu) (dropdown list) or visually styled as isolated actions or links.

### Labels

-   The button label should allow users to **foresee what will happen** when clicking it.
-   Button labels should be **short** and use **trigger words**.
-   As much as possible, the **first word** of the label should be an **action verb** (e.g., the label for a button that allows the user to add a filter could be "Add Filter").

### Alterative Texts

-   When a button includes **only an icon** (i.e., no label), **label information** should be **added in the alternative text** element in the HTML and appear **in a tooltip** when hovering the button.
-   When a button contains a **text as well as an icon**, the icon is a visual help to identify the purpose faster. Providing an **alternative text is not recommended** as it would only repeat the information when using a **screenreader**.

## Variations

The button type choice depends on the function of the button (e.g., primary action, secondary action), the number of actions available in the screen (e.g., one, two, several), and its location (e.g., header, action bar, page, footer).

| Type      | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary   | Used to enable the most important actions, i.e., those that lead to the completion of the main task (e.g., Save, Continue, Submit), or strong calls to action. Ideally, there should be only one Primary Button per screen to avoid diluting user attention.                                                                                                                                                                                                                                  |
| Secondary | Used for main actions that users might want to execute but that are not in direct relation to the main task that is to be done in the screen or interface.                                                                                                                                                                                                                                                                                                                                    |
| Combo     | These buttons have an attached drop menu where a choice between multiple actions has to be made (2 or more). They are useful when one single action allows users to create, delete or modify many different elements, which can be selected in the dropdown list that appears upon clicking. While using a combo button prevents adding an extra step in the process, it can add friction to the user decision making process when the options in the dropdown list are not intuitive enough. |
| Isolated  | Used for extra actions which are, as the name suggests, isolated in an interface. Those button do not have borders and background colors, in order to reduce noise and to make them less conspicuous. Icons are optional and may help users identify actions faster. However, keep in mind that too many icons can be as distracting and confusing as too few.                                                                                                                                |
| Icon Only | Used when there is a lack of space and a high density of content. This button type is preferably used to represent labels that are easily represented iconically, such as an icon "..." for "more items" (see [Menu button](../#/components/Menu) for an example).                                                                                                                                                                                                                            |

---

## Related Components

["More" Menu Button](#/components/Menu)

[Tabs](#/components/Tabs)

[Action Bar](#/components/ActionBar)
