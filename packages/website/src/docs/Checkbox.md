# Best Practices

Use checkboxes so that users can select one or more options from a list, or none at all.

Use a stand-alone checkbox to toggle a single option on/off if the result is not immediately visible, e.g., when a final confirmation from the user is required to apply changes.

Conversely, if the result is applied immediately, such as a change of display, use a [Toggle](https://plasma.coveo.com/form/FlatSelect) instead.

Aim for seven or less options. If that's impossible, consider breaking your set of options into several smaller logical sets or consider using [Multi select](https://plasma.coveo.com/form/MultiSelect) instead.

List options in alphanumerical order unless a more suited ordering rationale applies, for example when listing size or security level options. If no rationale stands out, place options in alphanumerical order.

# Labeling

Keep titles and labels short, preferably **under three words**.

## Title

Always use a title when offering multiple options.

Provide a descriptive title without action verbs. For example, write "Grocery items" rather than "Select all grocery items".

For a stand-alone checkbox, the title is optional. Use a title only if you need to dissociate the stand-alone checkbox from other adjacent checkboxes.

## Labels

Labels identify each option and should be self-explanatory.

Use a consistent writing style for all options in the list.

For a stand-alone checkbox, use a positive and active wording that clearly indicates what happens if the checkbox is selected. For example, write "Send me a text notification" rather than "Email notification".

# Help Text and Instructions

Instructions provide more context on the outcome of the choice to make. Use it sparingly, only when it is critical to the user's understanding.

# Feedback and Validation

If there is a maximum number of options that users can select, indicate it in a description.

If an option is recommended or the default, indicate it in its label.

The partially selected state is only allowed with checkboxes that have children options. A partially selected parent checkbox indicates that only some of its children options are selected.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Multi select](https://plasma.coveo.com/form/MultiSelect) - When there are more than seven options.
-   [Toggle](https://plasma.coveo.com/form/FlatSelect) - When the result applies immediately, for example with a change of display.
-   [Radio button](https://plasma.coveo.com/form/RadioButton) - When options are mutually exclusive.
