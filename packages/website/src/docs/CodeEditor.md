# Best Practices

A code editor displays code snippets that users can review or edit.

Be **extremely careful** when allowing users to edit code, as it greatly increases the risk of errors. Provide a code editor only when its expected users are well-informed developers.

The code editor should:

- Preferably take the full width of the section it appears in to reduce line wrap friction.
- Be long enough to display a significant portion of the code and allow users to review it comfortably.

## Labeling

Keep titles short, preferably **under three words**.
Provide a descriptive title without action verbs. For example, write "Plugin script" rather than "Write a script".

## Help Text and Instructions

Help text should explain how or where the code is used, or provide external references regarding the programming language to use.
Help text should be **short, preferably on one line**.

A placeholder should provide a **temporary example** when the code editor is empty. Add a placeholder only if a short example can allow users to get started without referring to external resources.

## Feedback and Validation

Code editors support syntax formatting and basic programming language validation.

Most of the code validation takes place once changes are saved. Writing proper error messages is important to help users troubleshoot their own errors.
Consider providing links to troubleshooting documentation in error messages.

If possible, consider adding a way for users to test their code before moving on through their journey. For instance, adding a button to test a script before saving it is a good practice.

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

- [JSON editor](https://plasma.coveo.com/form/JSONEditor) - When the user needs to input code using JSON syntax.
