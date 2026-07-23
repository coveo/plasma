# Skill 2 examples

## Good output

A correct Step 2 rewrite:

- Keeps `import {Meta}`, `import * as stories` (when present), `<Meta ... />`, the H1, and the description line unchanged
- Removes duplicated API reference sections (`## Props`, `## Sub-components`, `## Usage`) from the docs page
- Rewrites machine-facing directives (`MUST`, `SHOULD`, `MAY`) into natural developer language
- Preserves every rule from the source, with nothing dropped or changed in meaning
- Keeps all fenced code blocks byte-for-byte identical to the originals
- Adds a Content guidance section grounded in the source file, Coveo code, writing practices documentation under `packages/llms/src/content/`, or cited external research
- Leaves all files under `packages/llms/src/components/` untouched

## Bad output

A Step 2 rewrite that must be rejected:

- Adds product behavior that is not supported by the source file or component code
- Drops a rule that existed in the original
- Rewrites or reformats a fenced code block
- Changes the `<Meta ... />` value
- Uses third-party guidance without cross-checking against Coveo code or writing practices documentation under `packages/llms/src/content/`
- Cites research sources inline in the MDX file
- Touches any file under `packages/llms/src/components/`
