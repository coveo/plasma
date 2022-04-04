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

If the series of inputs are complex, consider using a title with an action verb to clarify the outcome of the choice to make.  
For example, write “Show content that matches" instead of "Filter rules”. 

When using a dialog approach, always consider other inputs in the form so that it is cohesive with other inputs.

# Help Text and Instructions

Avoid adding help text or instructions for each individual input that appears in a series. 
Instead, provide brief instructions above the multiline box to explain the inputs in the series.

# Feedback and Validation

Make sure that a first sequence is **completed and valid** before allowing the addition of a new line. 

If the multiline is optional, do not show an empty first line. Users should be required to add it manually if they need it. 
If users must fill at least one line, the first line should be visible and users should not be allowed to delete it. 

**Let users add new lines manually** rather than automating the process. This pevents submitting forms that contain empty lines.

When each line has a series of inputs of variable width, ensure line width allows vertical alignment of the delete buttons.

# Related Components

When the user must select one or more options from a single list, consider using a [multi select](https://plasma.coveo.com/form/MultiSelect) instead.
If users don’t need to repeat inputs, use a custom form layout instead.
