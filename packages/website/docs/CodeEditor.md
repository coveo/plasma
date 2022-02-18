# Best Practices

Code editor displays code snippets that users can consult or edit.

Be **extremely careful** when providing editable code as it greatly increases the risk of errors. Only use code editors when the expected users are well informed developers.

The code editor should preferably take the full width of the section it appears in to reduce line wrap friction.
Make sure the height of the code editor is comfortable enough for users to understand its content.

## Labeling

Keep titles short, preferably **under three words**.
Provide a descriptive title without action verbs. For example, write "Plugin script" rather than "Write a script".

## Help Text and Instructions

Help text should explain how or where this information can be used or to provide external references about the syntax to use. 
Help text should be **short, preferably on one line**.

Placeholder provides a **temporary example** of the syntax when the input is empty. Only use a placeholder if a short example can prevent the user from having to refer to the external resources to get started.

## Feedback and Validation

Code editor supports syntax formatting and basic validation of their associated language.

Most of the error validation on edited code only occurs once the user saves, using the proper error messaging method is important to help users troubleshoot their own errors.
Consider providing links to troubleshooting documentation in the external references in error messages when appropriate.

If possible, consider adding a way for the user to test his code before moving on through his journey. For instance, adding a button to test a script before saving it is a good practice.

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Code editor](#/form/JSONEditor) if the user needs to input code using JSON syntax.
