---
'@coveord/plasma-mantine': minor
---

Add an optional `upload` prop to `CodeEditor`

When `upload` is defined, the `CodeEditor` renders an upload button beside the search and copy buttons. Uploading a file replaces the editor value with the file content and calls `onChange`. Accepted file types default to the ones matching `language`, and can be overridden with `upload.accept`. Use `upload.label` to customize the button label (defaults to `Upload file`) and `upload.onUpload` to be notified with the file and its content. Binary and unreadable files are rejected with an error message under the editor, and `upload.onError` is called with the rejection reason.

```tsx
<CodeEditor language="json" value={value} onChange={setValue} upload={{onUpload: (file) => track(file.name)}} />
```
