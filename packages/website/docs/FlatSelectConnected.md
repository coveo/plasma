# Best Practices

A flat select allows users to select a single value among multiple options.

All options must have the same width.

Aim for five or less options.

The effect of the flat select must be immediately visible. For example, a display could change according to the user's selection. If not, consider using a drop-down menu, radio buttons, or checkboxes instead.

You can offer a flat select as a way to switch views, but tabs should be preferred whenever possible. If you do use a flat select for this purpose, ensure that it makes sense in the hierarchy of information of the page. See [Flat Select and Tabs](https://github.com/coveo/plasma/blob/master/packages/website/docs/FlatSelectConnected.md#flat-select-and-tabs) for details.

## Labeling

-   Keep titles short, preferably **under three words**.
-   Make option labels consistent and easy to scan.

## Flat Select and Tabs

The flat select component shares similarities with the toggle switch and the tab set.

The flat select and the tab set look similar and are both designed for view switching. However, flat select are suitable for view switching within a pane, whereas tabs are rather used as a navigational control, i.e., moving from one screen to another.

## Related Components

-   [Radio buttons](https://plasma.coveo.com/form/RadioButton) - When the result doesn't apply immediately.
-   [Single select](https://plasma.coveo.com/form/SingleSelect) - Alternative to a flat select in the context of a form.
-   [Tabs](https://plasma.coveo.com/navigation/Tabs) - When in a navigational control context.
