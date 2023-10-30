# Best Practices

Use a text input to have users enter a **short line of text**.

The width of a text input should be proportional to the expected user input and large enough to display the entire text.

# Labeling

Keep labels short, preferably **under three words**.

Provide a descriptive title without action verbs. For example, write "Email" rather than "Enter your email".

# Help Text and Instructions

Help text provides extra guidance on what information to provide or how the user should fill it in, for example when there are character restrictions.

Help text should be **short, preferably on one line**.
There are two ways to provide help text:

-   Written instructions (e.g., "Provide your business email.")
-   Example (e.g., "E.g., johndoe@acme.com")

A combination of both is also acceptable.

The label of the text input should be self-explanatory.
Add a title and description when providing additional guidance is critical for the user to understand why the information is required or how the information will be used.

# Feedback and Validation

If there are character restrictons, consider indicating them in the help text. Avoid relying only on the validation message to inform the user about them.

If the user provides text that doesn't meet the requirements, the validation message should clearly indicate how to fix it.

If providing the information is optional, the text input will be automatically tagged as such, indicating that the input can be left blank.

# Related Components

If your use case doesn't match the guidelines above, consider using one of the following components instead:

-   [Text Area](https://plasma.coveo.com/form/TextArea) - When users need to enter longer text.
-   [Numeric input](https://plasma.coveo.com/form/NumericInput) - When only numerical characters are allowed.
-   [Single select](https://plasma.coveo.com/form/SingleSelect) - When users need to select an option from a list instead.
