import {getPrimaryShade, type MantineTheme} from '@mantine/core';
import type {editor} from 'monaco-editor';

// Monaco's token rules take hex colors without the leading '#'.
const hex = (color: string) => color.replace('#', '');

// Monaco's theme colors only take hex, so opacity is written as an #RRGGBBAA suffix.
const alpha = (color: string, opacity: number) =>
    `${color}${Math.round(opacity * 255)
        .toString(16)
        .padStart(2, '0')}`;

// Icons in the suggestion list, grouped by the hue VS Code gives them
const orangeSymbols = ['class', 'enumerator', 'event'];
const purpleSymbols = ['constructor', 'function', 'method'];
const blueSymbols = ['enumeratorMember', 'field', 'interface', 'variable'];
const otherSymbols = [
    'array',
    'boolean',
    'color',
    'constant',
    'file',
    'folder',
    'key',
    'keyword',
    'module',
    'namespace',
    'null',
    'number',
    'object',
    'operator',
    'package',
    'property',
    'reference',
    'snippet',
    'string',
    'struct',
    'text',
    'typeParameter',
    'unit',
];

const symbolIconColors = (groups: Array<[string[], string]>) =>
    Object.fromEntries(
        groups.flatMap(([symbols, color]) => symbols.map((symbol) => [`symbolIcon.${symbol}Foreground`, color])),
    );

/**
 * Plasma colors for the whole editor in light mode, read from the Mantine theme.
 *
 * Syntax: keys and punctuation keep the text color, values get a hue (green strings and numbers, blue keywords such as
 * true/false/null), comments are dimmed and line numbers use the placeholder color.
 *
 * Everything else (selection, search, scrollbar, find box, menus, hovers, suggestions) replaces VS Code's colors with
 * the closest Plasma color. Accents follow the primary color like the rest of Plasma, and search results use yellow
 * like Plasma's `Highlight`. Highlights are semi-transparent so they stay visible when they overlap.
 */
export const getLightTheme = (theme: MantineTheme): editor.IStandaloneThemeData => {
    const {gray, green, blue, red, yellow, orange, violet} = theme.colors;
    const primaryColor = theme.colors[theme.primaryColor];
    const primary = primaryColor[getPrimaryShade(theme, 'light')];
    const primaryHover = primaryColor[6];
    const white = '#ffffff'; // mantine color white is #fff and monaco only accepts 6 digits
    const text = theme.black;
    const dimmed = gray[5];
    const placeholder = gray[4];
    const border = gray[2];
    const hover = gray[1];
    const error = red[5];
    // yellow.4 is closer to VS Code's warning color but below the 3:1 that underlines and icons need on white
    const warning = yellow[5];
    const info = blue[5];
    const shadow = alpha(text, 0.1);
    const selected = alpha(primary, 0.1);

    return {
        base: 'vs',
        // VS Code's language-specific rules (e.g. `string.key.json`) would otherwise win over the generic ones below
        inherit: false,
        // Monaco matches token names by prefix (`string` covers `string.value.json`), so these cover every language
        rules: [
            {token: '', foreground: hex(text)},
            // Keys and names: JSON keys, XML tags and attributes, types
            {token: 'string.key', foreground: hex(text)},
            {token: 'tag', foreground: hex(text)},
            {token: 'metatag', foreground: hex(text)},
            {token: 'attribute.name', foreground: hex(text)},
            {token: 'type', foreground: hex(text)},
            {token: 'delimiter', foreground: hex(text)},
            {token: 'comment', foreground: hex(dimmed)},
            // Values: strings, numbers, attribute values, true/false/null, def/return
            {token: 'string', foreground: hex(green[5])},
            {token: 'attribute.value', foreground: hex(green[5])},
            {token: 'number', foreground: hex(green[5])},
            {token: 'keyword', foreground: hex(blue[5])},
            // Markdown's own **bold** and _italic_
            {token: 'strong', fontStyle: 'bold'},
            {token: 'emphasis', fontStyle: 'italic'},
        ],
        colors: {
            // Base colors, which Monaco also derives other colors from
            foreground: text,
            descriptionForeground: dimmed,
            disabledForeground: gray[3],
            errorForeground: error,
            'icon.foreground': gray[6],
            focusBorder: primary,
            'widget.shadow': shadow,
            'widget.border': border,
            'sash.hoverBorder': primary,
            'textLink.foreground': primary,
            'textLink.activeForeground': primaryHover,
            'textPreformat.foreground': text,
            'textPreformat.background': hover,
            'textCodeBlock.background': hover,
            'progressBar.background': primary,

            // Editor surface
            'editor.background': white,
            'editor.foreground': text,
            'editorCursor.foreground': text,
            'editorCursor.background': white,
            'editor.compositionBorder': text,
            'editor.placeholder.foreground': placeholder,
            'editorLink.activeForeground': primary,
            'editor.lineHighlightBorder': gray[1],
            // The cursor line keeps the same color, a darker one would single out line 1 in a read-only editor
            'editorLineNumber.foreground': placeholder,
            'editorLineNumber.activeForeground': placeholder,
            'editorGutter.foldingControlForeground': dimmed,
            'editorIndentGuide.background1': border,
            'editorIndentGuide.activeBackground1': placeholder,
            'editorWhitespace.foreground': alpha(text, 0.2),
            'editorRuler.foreground': border,
            'editorBracketMatch.background': alpha(dimmed, 0.1),
            'editorBracketMatch.border': gray[3],
            // Bracket pair colorization would otherwise paint nested brackets blue, green and purple
            'editorBracketHighlight.foreground1': text,
            'editorBracketHighlight.foreground2': text,
            'editorBracketHighlight.foreground3': text,
            'editorBracketHighlight.foreground4': text,
            'editorBracketHighlight.foreground5': text,
            'editorBracketHighlight.foreground6': text,
            'editorBracketHighlight.unexpectedBracket.foreground': error,

            // Like the rest of Plasma's selected text: white on the primary color (see CodeEditor.module.css)
            'editor.selectionBackground': primary,
            'editor.inactiveSelectionBackground': primary,
            // Occurrences of the selection are tinted with the primary color, like Plasma's selected states
            'editor.selectionHighlightBackground': selected,
            // Kept light, since the word under the cursor is also part of the selection when double-clicked
            'editor.wordHighlightBackground': alpha(dimmed, 0.1),
            'editor.wordHighlightStrongBackground': alpha(dimmed, 0.1),
            'editor.wordHighlightTextBackground': alpha(dimmed, 0.1),
            'editor.hoverHighlightBackground': selected,
            'editor.foldBackground': selected,
            'editor.foldPlaceholderForeground': dimmed,
            'editor.snippetTabstopHighlightBackground': alpha(primary, 0.15),
            'editor.snippetFinalTabstopHighlightBorder': alpha(primary, 0.5),

            // Search results, in yellow like Plasma's `Highlight`
            'editor.findMatchBackground': yellow[2],
            'editor.findMatchHighlightBackground': alpha(yellow[2], 0.4),
            'editor.findRangeHighlightBackground': alpha(dimmed, 0.1),
            'editor.rangeHighlightBackground': alpha(yellow[2], 0.2),
            'editor.symbolHighlightBackground': alpha(yellow[2], 0.4),

            // Markers in the overview ruler, next to the scrollbar
            'editorOverviewRuler.border': border,
            'editorOverviewRuler.findMatchForeground': alpha(yellow[4], 0.5),
            'editorOverviewRuler.rangeHighlightForeground': alpha(yellow[4], 0.6),
            'editorOverviewRuler.selectionHighlightForeground': placeholder,
            'editorOverviewRuler.wordHighlightForeground': placeholder,
            'editorOverviewRuler.wordHighlightStrongForeground': placeholder,
            'editorOverviewRuler.wordHighlightTextForeground': placeholder,
            'editorOverviewRuler.bracketMatchForeground': placeholder,
            'editorOverviewRuler.errorForeground': error,
            'editorOverviewRuler.warningForeground': warning,
            'editorOverviewRuler.infoForeground': info,

            // Scrollbar
            'scrollbar.shadow': border,
            'scrollbarSlider.background': alpha(dimmed, 0.25),
            'scrollbarSlider.hoverBackground': alpha(dimmed, 0.4),
            'scrollbarSlider.activeBackground': alpha(dimmed, 0.55),

            // Validation errors, warnings and infos
            'editorError.foreground': error,
            'editorWarning.foreground': warning,
            'editorInfo.foreground': info,
            'editorHint.foreground': dimmed,
            'problemsErrorIcon.foreground': error,
            'problemsWarningIcon.foreground': warning,
            'problemsInfoIcon.foreground': info,
            'editorUnicodeHighlight.border': warning,
            'editorMarkerNavigation.background': white,
            'editorMarkerNavigationError.background': error,
            'editorMarkerNavigationError.headerBackground': alpha(error, 0.1),
            'editorMarkerNavigationWarning.background': warning,
            'editorMarkerNavigationWarning.headerBackground': alpha(warning, 0.1),
            'editorMarkerNavigationInfo.background': info,
            'editorMarkerNavigationInfo.headerBackground': alpha(info, 0.1),
            'editorLightBulb.foreground': yellow[3],
            'editorLightBulbAutoFix.foreground': primary,
            'editorLightBulbAi.foreground': yellow[3],

            // Find box, hovers, suggestions and code actions: white surfaces with a border, like Plasma's popovers
            'editorWidget.background': white,
            'editorWidget.foreground': text,
            'editorWidget.border': border,
            'editorHoverWidget.background': white,
            'editorHoverWidget.foreground': text,
            'editorHoverWidget.border': border,
            'editorHoverWidget.statusBarBackground': hover,
            'editorHoverWidget.highlightForeground': primary,
            'editorSuggestWidget.background': white,
            'editorSuggestWidget.foreground': text,
            'editorSuggestWidget.border': border,
            'editorSuggestWidget.selectedBackground': selected,
            'editorSuggestWidget.selectedForeground': text,
            'editorSuggestWidget.selectedIconForeground': text,
            'editorSuggestWidget.highlightForeground': primary,
            'editorSuggestWidget.focusHighlightForeground': primary,
            'editorSuggestWidgetStatus.foreground': dimmed,
            'editorActionList.background': white,
            'editorActionList.foreground': text,
            'editorActionList.focusBackground': selected,
            'editorActionList.focusForeground': text,

            // Inputs and toggles in the find box, like Plasma's inputs
            'input.background': white,
            'input.foreground': text,
            'input.border': gray[3],
            'input.placeholderForeground': placeholder,
            'inputOption.activeBackground': selected,
            'inputOption.activeBorder': primary,
            'inputOption.activeForeground': text,
            'inputOption.hoverBackground': hover,
            'inputValidation.errorBackground': red[0],
            'inputValidation.errorBorder': error,
            'inputValidation.errorForeground': text,
            'inputValidation.warningBackground': yellow[0],
            'inputValidation.warningBorder': warning,
            'inputValidation.warningForeground': text,
            'inputValidation.infoBackground': blue[0],
            'inputValidation.infoBorder': info,
            'inputValidation.infoForeground': text,
            'toolbar.hoverBackground': hover,
            'toolbar.activeBackground': border,
            'actionBar.toggledBackground': selected,
            'button.background': primary,
            'button.foreground': white,
            'button.hoverBackground': primaryHover,
            'button.secondaryBackground': hover,
            'button.secondaryForeground': text,
            'button.secondaryHoverBackground': border,

            // Lists: suggestions and the command palette (F1)
            'list.activeSelectionBackground': selected,
            'list.activeSelectionForeground': text,
            'list.activeSelectionIconForeground': text,
            'list.inactiveSelectionBackground': hover,
            'list.focusBackground': selected,
            'list.focusOutline': primary,
            'list.hoverBackground': hover,
            'list.highlightForeground': primary,
            'list.focusHighlightForeground': primary,
            'quickInput.background': white,
            'quickInput.foreground': text,
            'quickInputTitle.background': hover,
            'quickInputList.focusBackground': selected,
            'quickInputList.focusForeground': text,
            'quickInputList.focusIconForeground': text,
            'pickerGroup.foreground': primary,
            'pickerGroup.border': border,
            'keybindingLabel.background': hover,
            'keybindingLabel.foreground': gray[6],
            'keybindingLabel.border': border,
            'keybindingLabel.bottomBorder': gray[3],

            // Right-click menu, like Plasma's `Menu`
            'menu.background': white,
            'menu.foreground': text,
            'menu.border': border,
            'menu.selectionBackground': hover,
            'menu.selectionForeground': text,
            'menu.separatorBackground': border,

            ...symbolIconColors([
                [orangeSymbols, orange[5]],
                [purpleSymbols, violet[5]],
                [blueSymbols, blue[5]],
                [otherSymbols, dimmed],
            ]),
        },
    };
};
