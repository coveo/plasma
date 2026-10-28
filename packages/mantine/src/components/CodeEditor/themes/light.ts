import type {MantineTheme} from '@mantine/core';
import type {editor} from 'monaco-editor';

// Monaco's token rules take hex colors without the leading '#'.
const hex = (color: string) => color.replace('#', '');

/**
 * Plasma syntax colors for light mode, read from the Mantine theme.
 * Keys and punctuation keep the text color, values get a hue (green strings and numbers, blue keywords such as
 * true/false/null), comments are dimmed and line numbers use the placeholder color.
 */
export const getLightTheme = (theme: MantineTheme): editor.IStandaloneThemeData => {
    const text = theme.black;
    const value = theme.colors.green[5];
    const keyword = theme.colors.blue[5];
    const dimmed = theme.colors.gray[5];
    const placeholder = theme.colors.gray[4];

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
            {token: 'string', foreground: hex(value)},
            {token: 'attribute.value', foreground: hex(value)},
            {token: 'number', foreground: hex(value)},
            {token: 'keyword', foreground: hex(keyword)},
            // Markdown's own **bold** and _italic_
            {token: 'strong', fontStyle: 'bold'},
            {token: 'emphasis', fontStyle: 'italic'},
        ],
        colors: {
            'editor.background': '#ffffff', // mantine color white is #fff and monaco only accepts 6 digits
            // The cursor line keeps the same color, a darker one would single out line 1 in a read-only editor
            'editorLineNumber.foreground': placeholder,
            'editorLineNumber.activeForeground': placeholder,
            // Bracket pair colorization would otherwise paint nested brackets blue, green and purple
            'editorBracketHighlight.foreground1': text,
            'editorBracketHighlight.foreground2': text,
            'editorBracketHighlight.foreground3': text,
            'editorBracketHighlight.foreground4': text,
            'editorBracketHighlight.foreground5': text,
            'editorBracketHighlight.foreground6': text,
        },
    };
};
