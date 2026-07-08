# Skill 1 examples

## Good output

A correct Step 1 conversion:

- Preserves every word from the source `.md` exactly — no rephrasing, no improvement
- Removes the YAML frontmatter block entirely
- Uses `name` as the `# H1` heading and `description` as the line directly beneath it
- Adds `import { Meta }` as the very first line
- Adds `<Meta title="..." />` using the exact title from the `.stories.tsx` file
- Escapes JSX-sensitive prose (`<tag>` → `&lt;tag&gt;`, bare `{` → `&#123;`)
- Replaces `[Full Plasma documentation]({{BASE_URL}})` with `{/* TODO: Replace with full Plasma docs URL */}`
- Does **not** include the Step 2 completion marker (`{/* storybook-usage-guidelines: rewritten */}`)
- Is saved as `ComponentName-usage.mdx` in the correct folder

## Bad output

A Step 1 conversion that must be rejected:

- Rewrites, simplifies, or improves any source copy (rewriting is Step 2)
- Leaves the YAML frontmatter block in place
- Uses an invented or guessed `<Meta title>` instead of reading it from the `.stories.tsx` file
- Places the file outside `packages/storybook/src/`
- Keeps `[Full Plasma documentation]({{BASE_URL}})` as a rendered link
- Overwrites an existing `.mdx` file without explicit user permission
- Adds the Step 2 completion marker during Step 1
