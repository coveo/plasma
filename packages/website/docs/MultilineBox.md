# Best Practices
The Multiline box allows users to **add the same sequence of inputs multiple times**.  
Each sequence appears on a different line, making it easier to consult.  

Do not use the multiline box to regroup inputs that have no connection to one another.   
Multiline works best when the sequence of inputs is identical on each line.  

Multiline box can combine multiple inputs together to form a more complex input.  
They can also combine text elements when an input or sequence requires more explanation.  

Only use the drag and drop function if the order of each sequence is important.   
When doing so, the list must always be presented to the user in the order they have set.

# Labeling
Keep titles short, preferably **under three words**.  

If the list of inputs is very simple, provide a descriptive title without action verbs.  
For example, write "Email list" rather than "Provide a list of emails”.

If the sequence of inputs is more complex, consider using a title with a trigger verb to clearly explain that the outcome will apply or consider the entire list.  
For example, write “Show content that matches" instead of "Filter rules”. 

When using a dialog approach, always consider other inputs in the form so that it is cohesive with other inputs.

# Help Text and Instructions
Avoid the need for help text or instruction for each individual input that appears in a multiline line. 

Instead, provide short instructions, above the lines, that will briefly explain the type of inputs to be provided in the input sequence.

# Feedback and Validation
Make sure that a first sequence is **completed and valid** before allowing the addition of a new line. 

If the multiline is optional, do not show an empty first line. Users should be required to add it manually if they need it. 
In the same fashion, if the multiline is mandatory, the first line should be visible and the user should not be allowed to delete it. 

Always let the users **add a new line manually** instead of automating it. This avoids empty lines when the form is submitted. 

If each line has a sequence of inputs of variable width, make sure lines width at least allows for delete buttons to appear vertically aligned.


# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:
[Multiselect](#/form/multiselect) when the user only has to select options from a single list.
If users don’t need to repeat inputs, use a custom form layout instead.
