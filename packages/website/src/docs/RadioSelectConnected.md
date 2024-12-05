# Best Practices

Use radio buttons when users need to select a single option from a short list.

Radio buttons always come in a set of two or more options.

When presenting only two options,

- For an on/off choice, use a [Toggle](https://plasma.coveo.com/form/FlatSelect). Example: Enable dark mode.
- For a yes/no choice, such as opt in/out, use a stand-alone [Checkbox](https://plasma.coveo.com/form/Checkbox). Example: Receive email notification.
- When it’s neither, use a radio button. Examples: Choose between red or blue.

Aim for seven or less options. If that's impossible, consider using the [Single select](https://plasma.coveo.com/form/SingleSelect) instead.

Sort options by most relevant, unless a more suited ordering rationale applies. For example, when listing size (large to small) or security level options (full access to limited access). If no rationale stands out, place options in alphanumerical order.

# Labeling

Keep titles and labels short, preferably **under three words**.

## Title

A set of radio buttons must have a title that identifies the type of options available.

Provide a descriptive title without action verbs. For example, write "Print layout" rather than "Select a print layout".

## Labels

Labels identify each option and should be self-explanatory.

Use a consistent writing style for all options in the list.

# Feedback and Validation

Always preselect an option as the default. The default option can identify:

- The recommended path when you want to assist the user.
- The most commonly selected option when you want to help expedite the task.
  If preselecting a default option increases the risk of irreversible changes or security issues, always use the least risky option as the default.

When the user needs to be able to easily revert to the default option, for instance when testing configurations, add “(recommended)” or “(default)” to the appropriate option label.

If the choice is optional, add a neutral option (e.g., "None") so the user can explicitly choose to not select any option.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

- [Single select](https://plasma.coveo.com/form/SingleSelect) - When there are more than seven options.
- [Toggle](https://plasma.coveo.com/form/FlatSelect) - When the options are binary (e.g., on/off).
- [Checkbox](https://plasma.coveo.com/form/Checkbox) - When the user can chose any number of options (from none to all of them).
