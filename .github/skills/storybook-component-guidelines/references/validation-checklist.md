# Skill 2 validation checklist

Before considering Step 2 complete for a component:

- [ ] Current branch is not `master`
- [ ] Component belongs to the current DS branch group
- [ ] Existing `.mdx` file is under `packages/storybook/src/`
- [ ] Existing `.mdx` file was created by Step 1 or approved by the user as the Step 2 input
- [ ] Original `.md` source file under `packages/llms/src/components/` was read for cross-checking
- [ ] Published Storybook content docs were used as the only writing source of truth
- [ ] Existing `.stories.tsx` file was read as secondary context when available
- [ ] Actual component implementation was checked if needed to verify behavior
- [ ] `<Meta title="..." />` is unchanged
- [ ] H1 is unchanged
- [ ] Description line is unchanged
- [ ] Step 2 marker `{/* storybook-usage-guidelines: rewritten */}` is present immediately after `<Meta title="..." />`
- [ ] All original rules are preserved — none dropped or changed in meaning
- [ ] No unsupported product behavior was added
- [ ] Fenced code blocks are byte-for-byte identical to the originals, including language fences, indentation, comments, and blank lines
- [ ] No ALL CAPS directives such as `MUST`, `SHOULD`, or `MAY` remain in the rewritten component documentation
- [ ] Content guidance includes at least two bold subheadings
- [ ] Content guidance covers primary labels, primary body/content, and ordering/grouping when applicable
- [ ] Content guidance does not invent behavior that is unsupported by the source `.md`, stories, or component code
- [ ] Footer TODO comment remains present: `{/* TODO: Replace with full Plasma docs URL */}`
- [ ] External research, if used, was cross-checked against Coveo code and published Storybook content docs
- [ ] External research sources are noted for PR notes
- [ ] Original `.md` source file is untouched
- [ ] `git diff -- packages/llms/src/components` shows no changes
- [ ] `cd packages/storybook && pnpm build` was run
- [ ] Build result was recorded
- [ ] If the build failed, the agent stopped and reported the error output for user review
- [ ] Changes were committed with the correct commit message format
