[Description]: # 
[Text inputs allow to enter and edit short texts, such as names, emails or passwords.]: # 
>
> ### Best Practices :bulb: 
> Use text inputs when the user must enter one **short line of text.**
> 
> The width of the text input should be proportional to the expected user input and large enough to display the entire text, in most cases. 
> The minimum width is 320px and can be incremented by multiples of 8.
> 
#
### Labeling
Keep labels short, under three words. 

Use descriptive labels. Avoid action verbs. (E.g. Use "Email" instead of "Write your email")
#
### Help text and instructions
Help text provide extra guidance on **what** information must be provided or **how** the user should fill it in (such as restricted characters).

Help text should be **short one-liner**. 
There are two ways to provide help text guidance:
- Written instructions : "Provide your business email."
- Example given: "E.g.: johndoe@acme.com"
A combination of both is also acceptable. 

Text input should be self-explanatory as much as possible.
Add a title and description when providing additional guidance is critical to the user to understand why the information is required or how the information will be used.
#
### Feedback and validation
If some characters are restricted, consider indicating it in an help text instead of relying only on the validation message to inform the user about them.

If the provided information isn't compliant with the requirements, make sure that the validation feedback clearly indicates how to fix it in the text of the validation message.

If the information is optional, the text input will be automatically tagged as so to indicate that it can be left blank.
# 
#### Related Components  :mag: 
If your use case doesn't match these guidelines, consider using alternate component instead. 

- [Text Area](#/components/TextArea) when you require more than one line of characters.
- [Numeric Input](#/components/NumericInput) when you restrict characters to only numerical values.
- [Single Select](#/input/SingleSelect) when you instead want user to select an option from a predefined list.



