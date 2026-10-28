---
'@coveord/plasma-mantine': minor
---

Use Plasma colors throughout `CodeEditor` in light mode

In light mode, `CodeEditor` now uses Plasma colors instead of Visual Studio Code's, for both the code and the editor around it. Keys, tags and punctuation use the text color, strings and numbers use `green.5`, keywords such as `true`, `false` and `null` use `blue.5`, comments use the dimmed color, and line numbers use the placeholder color.

The rest of the editor follows Plasma too. Text selection is tinted with the primary color, search results are highlighted in yellow like `Highlight`, and validation errors and warnings use Plasma's red and yellow. The scrollbar and indent guides use Plasma grays. The find box, hovers, suggestions, right-click menu and command palette use white surfaces with Plasma borders, focus color and hover states.

Read-only and disabled editors now use the same colors as editable ones, on their gray background. They previously fell back to Monaco's default theme. Dark mode is unchanged.
