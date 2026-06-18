---
name: CodeEditor
description: Monaco-based code editor that supports syntax highlighting, validation, search, and copy actions.
---

# Usage guidance

## What problem does it solve?

The `CodeEditor` gives users a structured editing surface for code-like, syntax-sensitive, or multi-line technical content.

It is useful when plain text entry is not enough because users need syntax highlighting, code formatting expectations, search, copy, or editor-level behavior.

## When to use it

Use `CodeEditor` when:

- users edit JSON, XML, Python, Markdown, or other code-like content
- syntax highlighting helps users understand or validate the value
- the content is multi-line and technical
- search or copy actions are useful inside the editor

## When not to use it

Do not use `CodeEditor` when:

- users enter ordinary short text; use `TextInput`
- users enter long prose; use `Textarea`
- the value is read-only and only needs display; use formatted text or a code block
- syntax support would add complexity without helping the task

## Decision-making guidance

- Use `CodeEditor` for technical text where structure matters.
- Use `Textarea` for freeform prose or comments.
- Use `TextInput` for short single-line values.
- Use `disabled` when the editor should be readable but not editable.

## States

Important states include:

- controlled or uncontrolled value
- focused editor
- disabled read-only editor
- search action available
- copy action available

## Accessibility expectations

- Labels and descriptions SHOULD explain what kind of content is expected.
- Validation feedback SHOULD identify the problem and location when possible.
- The editor height SHOULD leave enough room for users to understand the content.

## Common anti-patterns

- Using a code editor for ordinary text fields.
- Making users edit large structured payloads without examples or validation.
- Setting a very small height for multi-line technical content.

## What an AI agent should understand

- `CodeEditor` is for syntax-sensitive technical text.
- Choose simpler inputs for ordinary text or prose.
- Provide language, label, description, and sizing that match the task.

# API reference

## Props

> Extends: `InputWrapperProps`, `StackProps`. Only Plasma-specific props are listed below; refer to Mantine documentation for inherited props.

**`language`** `'plaintext' | 'json' | 'markdown' | 'python' | 'xml' | (string & unknown)` · optional · default: `plaintext` — Defines the language syntax of the editor.
**`defaultValue`** `string` · optional · default: `''` — For uncontrolled input, this prop MAY provide the default value.
**`value`** `string` · optional · default: `undefined` — For controlled input, this prop MUST provide the value.
**`onChange`** `(value: string) => void` · optional · default: `undefined` — For controlled input, this callback receives the updated value.
**`onSearch`** `() => void` · optional · default: `undefined` — If provided, this callback is called whenever the search icon is clicked.
**`onCopy`** `() => void` · optional · default: `undefined` — If provided, this callback is called whenever the copy icon is clicked.
**`onFocus`** `() => void` · optional · default: `undefined` — If provided, this callback is called whenever the code editor gets focus.
**`editorHandle`** `React.MutableRefObject<monacoEditor.IStandaloneCodeEditor | null>` · optional · default: `undefined` — This ref MAY provide access to the editor's functionality.
**`minHeight`** `number` · optional · default: `300` — The CodeEditor height, including label and description, is never smaller than this value. By default, the CodeEditor adjusts to fill its parent height. If the parent height is too short, the component uses this value as its minimum height.
**`maxHeight`** `number` · optional · default: `undefined` — The CodeEditor height, including label and description, is never larger than this value. By default, the CodeEditor adjusts to fill its parent height. This prop can set the maximum height when the parent height would otherwise be too high.
**`disabled`** `boolean` · optional · default: `undefined` — When set, the editor is read-only and uses disabled styling.
**`monacoLoader`** `'cdn' | 'local'` · optional · default: `local` — Defines how the Monaco editor files are loaded. When `local` is used, the required [additional configuration](https://github.com/suren-atoyan/monaco-react#use-monaco-editor-as-an-npm-package) MUST be provided.
**`options`** `Pick<monacoEditor.IStandaloneEditorConstructionOptions, 'tabSize'>` · optional · default: `undefined` — This prop MAY pass options to the Monaco editor. It currently supports only [`tabSize`](https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html#tabSize).

## Usage

```tsx
import {useState} from 'react';
import {CodeEditor} from '@coveord/plasma-mantine';

export function JsonEditor() {
    const [value, setValue] = useState(`{
  "name": "Plasma",
  "enabled": true
}`);

    return (
        <CodeEditor
            label="Payload"
            description="Edit the JSON payload before saving."
            language="json"
            value={value}
            onChange={setValue}
            monacoLoader="cdn"
            minHeight={320}
        />
    );
}
```

---

[Full Plasma documentation]({{BASE_URL}})
