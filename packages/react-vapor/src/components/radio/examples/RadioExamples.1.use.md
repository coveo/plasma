## Guidelines

(See also: **Guidelines for All Form Controls** - _coming soon!_)

### Label

-   A set should always have a title.
-   Use a wording that indicates that the user can select **only one option**. Some user may not know the difference between radio buttons and checkboxes.
-   Try to limit the size of the label to one line. You can add a description only if necessary, but preferably use a help hint to explain the option.

### Options

-   List options vertically because it’s easier to scan.
-   Always put the most common options at the top of the list, unless your options have a strong logical sorting order (such as prices, or sizes).
-   Use Dropdowns when you have more than 7 options to show.
-   Use Toggles for binary options with short labels (e.g. yes or no), or for multiple options using abbreviated labels or acronyms (e.g. days of the week)

### Behavior

-   Only preselect options if there’s a strong, user-centred reason to do it. If you need to do it, select the value that has the most chance to be chosen by the users.
-   Never use radio buttons if they are no answer possible in the set. The user **must** provide an answer.
-   Includes a value such as “None of the above” at the end of the list if you need a disabled option.
-   Only reveal additional questions with the expanded zone, pointing to the value that is selected.

---

## Related Components

### [Dropdown](http://react-vapor.surge.sh/#/components/DropdownSearch)

Use a dropdown when you have more than 7 options to show.

### [Toggle](http://react-vapor.surge.sh/#/components/FlatSelect)

You can use a toggle button for binary options with short labels (e.g. yes or no).
