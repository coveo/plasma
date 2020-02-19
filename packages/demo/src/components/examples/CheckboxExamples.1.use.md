## Guidelines

### General

-   Whereas checkboxes can be used to toggle options on and off, using a [toggle switch](#/components/FlatSelect) or [radio buttons](#/components/Radio) is preferable.
-   A checkbox set should always have a title.
-   Always put the most common options at the top of the checkbox list.
-   If more than 7 options (checkboxes) are needed, it is preferable to group checkboxes logically under more than one set of options such that the set label represents the grouping logic.

### Label

-   Try to limit labels to one short line.
-   Add instructions that indicate how many items can be selected, as some users might not know the difference between checkboxes and radio buttons.
-   Consider listing options vertically, as horizontal listings can make it difficult to tell which label is related to which checkbox.
-   [Partially selected states](#/components/Checkbox) should only be used when sub-options can be selected as children of a checkbox. A parent checkbox being in the partially selected state indicates that only some of its sub-options are selected, not all of them. Toggling the parent checkbox toggles all its sub-options.

### Behavior

-   As much as possible, preselect the recommended option. If there is none, preselect the option most likely to be selected by users.

---

## Related Components

[Radio buttons](#/components/Radio)

[Dropdown](#/components/DropdownSearch)

[Toggle](#/components/FlatSelect)
