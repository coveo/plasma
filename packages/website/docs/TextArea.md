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

## Variants

| **Type**           | **Purpose**                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fixed size**     | By default, the size of the text area input box is fixed. A scrollbar automatically appears if text overflows the alloted space.                                                                                                                                                                                                                                                                                    |
| **Drag-to-resize** | Allow users to resize the text area manually when they need to provide very long texts, such as the content of an email. Consider this option only when expecting over 500 characters or a few paragraphs. Always restrict the resizing of the text area to a maximum size based on the available space on screen. If the text overflows the alloted space (default or resized), a scrollbar automatically appears. |
| **Autosize**       | Avoid using this option, as it is about to be deprecated. Autosize may cause undesired layout issues on screen, as the expanding area can push important information out of focus without the user's knowledge. Most of the time, the fixed size variant should suffice. In the rare cases where longer text is required, the drag-to-resize option is considered more appropriate.                                 |

## Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Text input](https://plasma.coveo.com/form/TextInput) - When users should enter no more than one line of text.
-   [Code editor](https://plasma.coveo.com/form/CodeEditor) - When users need to enter code rather than plain text.
