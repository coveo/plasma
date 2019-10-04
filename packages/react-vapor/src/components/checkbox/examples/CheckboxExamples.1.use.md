## Guidelines

(See also: **Guidelines for All Form Controls** - _coming soon!_)

### General

-   Whereas checkboxes can be used to toggle on or off an option, using a [toggle switch](#/components/FlatSelect) or [radio buttons](#/components/Radio) is preferable.
-   A checkbox set should always have a title.
-   Always put the most common options at the top of the checkbox list.
-   If more than 7 options (checkboxes) are needed, it is preferable to group checkboxes logically under more than one set of options such that the set label represents to the logic underlying the grouping.

### Label

-   Try to limit labels to one short line.
-   Add instructions that indicates how many items can be selected as some users might not know the difference between checkboxes and radio buttons.
-   Consider listing options vertically as horizontal listings can make it difficult to tell which label is related to which checkbox.
-   [Partially selected state](#/components/Checkbox) should only be used when sub-options can be selected as children of a checkbox. In that case, the parent checkbox checks and unchecks all sub-options when clicked. In that case this state shows that only some sub-options are selected, not all of them.

### Behavior

-   As much as possible, preselect the recommended option. If there is none, preselect the option most likely to be selected by users.

---

## Related Components

[Radio buttons](#/components/Radio)

[Dropdown](#/components/DropdownSearch)

[Toggle](#/components/FlatSelect)
