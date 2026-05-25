---
name: CodeEditor
description: Monaco-based code editor that supports syntax highlighting, validation, search, and copy actions.
---

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
