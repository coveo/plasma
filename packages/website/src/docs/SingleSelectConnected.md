# Best Practices

Use a single select to have users **filter options from a long list and select only one**. A single select is especially appropriate when the list of available options is very long or when the space is limited.

List options in alphanumerical order unless a more suited ordering rationale applies, for example when listing size or security level options.

Always include the ability to filter options when the list contains 20 or more.

# Labeling

Keep titles and labels short, preferably **under three words**.

## Title

The title should indicate the type of information to provide.

Provide a descriptive title without action verbs. For instance, write "Favorite drink" rather than "Select your favorite drink".

## Labels

Labels identify each option and should be self-explanatory. The width of the input should fully display the name of the selected option.

Use a consistent writing style for all options in the list.

# Help Text and Instructions

The placeholder text should indicate the type of information to select. Use an action verb. For example, write "Select a drink" rather than "Select an option".

# Feedback and Validation

Allow the addition of custom values only when it doesn't increase the risk of failure and when there may be options other than those listed.

Examples:

- When users select a country: do not allow custom values.
- When users select their favorite color: allow custom values.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

- [Radio buttons](https://plasma.coveo.com/form/RadioButton) - When there are seven options or less.
- [Multi select](https://plasma.coveo.com/form/MultiSelect) - When users can select multiple options from the list.
