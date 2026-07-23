# Skill 1 examples

## Good output

A correct Step 1 conversion:

- Preserves every word from the source `.md` exactly, with no rephrasing or improvement
- Removes the YAML frontmatter block entirely
- Uses `name` as the `# H1` heading and `description` as the line directly beneath it
- Adds `import {Meta}` as the very first line
- Adds `import * as stories from './ComponentName.stories';` when a stories file exists
- Adds `<Meta of={stories} title="..." />` using the exact title from the `.stories.tsx` file
- Escapes JSX-sensitive prose (`<tag>` → `&lt;tag&gt;`, bare `{` → `&#123;`)
- Removes `[Full Plasma documentation]({{BASE_URL}})` entirely
- Does **not** include any completion marker comments
- Includes the agent-redirect comment linking to the original `.md` file immediately after `<Meta ... />`
- Is saved as `ComponentName.mdx` in the correct folder

## Bad output

A Step 1 conversion that must be rejected:

- Rewrites, simplifies, or improves any source copy (rewriting is Step 2)
- Leaves the YAML frontmatter block in place
- Uses an invented or guessed `<Meta ...>` block instead of reading title from the `.stories.tsx` file
- Places the file outside `packages/storybook/src/`
- Keeps `[Full Plasma documentation]({{BASE_URL}})` as a rendered link
- Overwrites an existing `.mdx` file without explicit user permission
