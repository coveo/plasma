---
'@coveord/plasma-mantine': minor
---

Add Plasma syntax colors to `CodeEditor` in light mode

In light mode, `CodeEditor` now colors code with the Plasma palette instead of Visual Studio Code's colors. Keys, tags and punctuation use the text color, strings and numbers use `green.5`, keywords such as `true`, `false` and `null` use `blue.5`, comments use the dimmed color, and line numbers use the placeholder color.

Read-only and disabled editors now use the same colors as editable ones, on their gray background. They previously fell back to Monaco's default theme. Dark mode is unchanged.
