---
'@coveord/plasma-mantine': minor
---

Use Plasma colors throughout `CodeEditor` in light mode

In light mode, `CodeEditor` now uses Plasma colors instead of Visual Studio Code's, for both the code and the editor around it. Keys, tags and punctuation use the text color, strings and numbers use `green.5`, keywords such as `true`, `false` and `null` use `blue.5`, comments use the dimmed color, and line numbers use the placeholder color.

The rest of the editor follows Plasma too. Selected text is white on the primary color, like other selected text in Plasma, search results are highlighted in yellow like `Highlight`, and validation errors and warnings use Plasma's red and yellow. The scrollbar and indent guides use Plasma grays. The find box, hovers, suggestions, right-click menu and command palette use white surfaces with Plasma borders, focus color and hover states.

Read-only and disabled editors now use the same colors as editable ones, on their gray background. They previously fell back to Monaco's default theme. Dark mode colors are unchanged.

The code area now fills the card, in both color schemes, so code scrolls all the way to the card's edges and the scrollbar sits on its right edge. The spacing above the first line and below the last line moved inside the scrollable area.
