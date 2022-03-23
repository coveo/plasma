# Best Practices

Text areas are ideal for **long sentences or paragraphs**.
They are commonly used to provide descriptions, notes, and messages when the information to enter is discretional to the user.
The size of the input box should **comfortably display four lines**. A scrollbar should then allow users to view any extra lines.

## Labeling

Keep titles short, preferably **under three words**.
Provide a descriptive title without action verbs. For example, write "Note" rather than "Write a note".

## Help Text and Instructions

Help text should explain how the input can be used or who will see it. For instance, if users should provide delivery instructions, the help text could be: "Provide instructions for the delivery agent". Help text should be **short, preferably on one line**.
A placeholder provides a **temporary example** when the text area is empty. Use a placeholder only when showing examples of possible content is necessary to the user's understanding. When the text is discretional (e.g., email content), a placeholder is often unnecessary.

## Feedback and Validation

Text areas typically accept all types of characters. Therefore, validation often only occurs due to character limits.
When the character limit has been reached, the validation message should clearly state the allowed number of characters under the text area, like the text input validation.
If the input can be left blank, the tag “(Optional)” must appear next to the text area title.

---

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Text input](#/form/TextInput) when users should enter no more than one line of text.
-   [Code editor](#/form/CodeEditor) if users need to enter code rather than plain text.
