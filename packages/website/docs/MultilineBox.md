# Best Practices

A multiline box allows users to **add multiple inputs or multiple series of inputs, each on a different line**.

Inputs can be combined into a series to form a more complex input.  
Text elements can also be included when an input or series requires more explanation.

A multiline box works best when the sequence of inputs is identical on all lines.
Don't use the multiline box to group inputs that have no connection to one another.

Only offer the drag and drop feature when the order of the inputs or series is important.
In such case, the inputs/series must always be presented in the order set by the user.

# Labeling

Keep titles short, preferably **under three words**.

If the list of inputs is very simple, provide a descriptive title without action verbs.  
For example, write "Email list" rather than "Provide a list of emails”.

If the series of inputs is complex, consider using a title with an action verb to clarify the outcome of the choice to make.  
For example, write “Show content that matches..." instead of "Filter rules”.

You may choose to use a dialog approach with the labels. For example, you could have: "Among all items matching... [condition1] Show only the items with... [condition2]". In such case, consider the other inputs in the form so that your approach is coherent with all inputs.

# Help Text and Instructions

Avoid adding help text or instructions for each individual input that appears in a series.
Instead, provide brief instructions above the multiline box to explain the inputs in the series.

# Feedback and Validation

Ensure that all inputs on the first line are **complete and valid** before allowing the addition of a new line.

If the multiline box is optional, don't show an empty first line. Users should add it manually if they need it.
If users must fill at least one line, the first line should be visible and users should not be allowed to delete it.

**Let users add new lines manually** rather than automating the process. This pevents submitting forms that contain empty lines.

When each line has a series of inputs of variable width, ensure line width allows vertical alignment of the delete buttons.

# Related Components

When the user must select one or more options from a single list, consider using a [multi select](https://plasma.coveo.com/form/MultiSelect) instead.
Don't use a multiline box to group inputs that have no connection to one another. Use a custom form layout instead. For example, if you want a user to provide their name and email address, just provide two text inputs. However, if you want them to provide the name and email address of several people, use a multiline box and show the name and email inputs on one line for each person.
