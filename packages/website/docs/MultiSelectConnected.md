# Best Practices

Use a Multi select for when users need to **filter and select options from a long list**. A Multi select is especially appropriate when the available list of options is very long or when space is limited.

List options in alphanumerical order unless a more suited ordering rationale applies. For example, when listing size (large to small) or security level options (full access to limited access).

When a list contains 20 or more options, include the ability to filter them.

# Labeling

Keep titles and labels short, preferably **under three words**.

## Title

The title should indicate the type of information to provide.

Provide a descriptive title without action verbs. For example, write "Grocery list" rather than "Select the desired items".

## Labels

Labels identify each option and should be self-explanatory. The width of the input should allow to fully display the label of the selected option.

Use a consistent writing style for all options in the list.

# Help Text and Instructions

The placeholder text should indicate the type of information to select. Use an action verb. For example, write "Select an ingredient" rather than "Select an option".

# Feedback and Validation

Allow the addition of custom values only when it doesn't increase the risk of failure and when there's a possibility that not all available options are listed.

Examples:

-   When users select countries: do not allow custom values.
-   When users build a grocery list: allow custom values so that users can request new products that may not be on the list yet.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Multiline box](https://plasma.coveo.com/form/MultilineBox) - When space is not an issue or when legibility of the selected option is critical.
-   [Checkbox](https://plasma.coveo.com/form/Checkbox) - When there are seven options or less.
-   [Single select](https://plasma.coveo.com/form/SingleSelect) - When users can select only one option from the list.
