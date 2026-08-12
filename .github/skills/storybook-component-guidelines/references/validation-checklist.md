# Skill 2 validation checklist

Before considering Step 2 complete for a component:

- [ ] Current branch is not `master`
- [ ] Component belongs to the current DS branch group
- [ ] Existing `.mdx` file is under `packages/storybook/src/`
- [ ] Existing `.mdx` file was created by Step 1 or approved by the user as the Step 2 input
- [ ] Original `.md` source file under `packages/llms/src/components/` was read for cross-checking
- [ ] Writing practices documentation under `packages/llms/src/content/` was used as the writing source of truth
- [ ] Existing `.stories.tsx` file was read as secondary context when available
- [ ] Actual component implementation was checked if needed to verify behavior
- [ ] `<Meta ... />` is unchanged
- [ ] H1 is unchanged
- [ ] Description line is unchanged
- [ ] Agent-redirect comment `{/* For the agent-friendly version... */}` is present immediately after `<Meta ... />`
- [ ] All original rules are preserved. None were dropped or changed in meaning.
- [ ] No unsupported product behavior was added
- [ ] Fenced code blocks are byte-for-byte identical to the originals, including language fences, indentation, comments, and blank lines
- [ ] `## Props`, `## Sub-components`, and `## Usage` sections were removed from the docs page
- [ ] Each prose sentence is on its own line. Blank lines are added only where a new paragraph is warranted, not between every sentence.
- [ ] No em-dashes (`—`) appear in any rewritten prose (replace with a conjunction, comma, period, or colon for lists)
- [ ] No semicolons (`;`) appear in any rewritten prose (use a period instead, except in code examples or code blocks)
- [ ] No colons in headings or titles
- [ ] Contractions read naturally and follow the approved list in `WritingMechanics.md`
- [ ] Active voice by default
- [ ] Sentence case for headings (only first word and proper nouns capitalized)
- [ ] Reader addressed as "you"; no "we", "our", or "us"; Plasma is not framed as the "doer" of the action
- [ ] No ALL CAPS directives such as `MUST`, `SHOULD`, or `MAY` remain in the rewritten component documentation
- [ ] American English spelling throughout (no British variants like "colour", "behaviour", "organise", "cancelled")
- [ ] Numbers one through ten are spelled out, including in ranges ("one to three words", "three words or fewer"). Numbers 11 and higher use numerals ("20 words", "25 words").
- [ ] Plain language: jargon replacements from `WritingMechanics.md` applied
- [ ] Content guidance includes at least two bold subheadings
- [ ] Content guidance covers primary labels, primary body/content, and ordering/grouping when applicable
- [ ] Content guidance does not invent behavior that is unsupported by the source `.md`, stories, or component code
- [ ] External research, if used, was cross-checked against Coveo code and writing practices documentation under `packages/llms/src/content/`
- [ ] External research sources are noted in the final response
- [ ] Original `.md` source file is untouched
- [ ] `git diff -- packages/llms/src/components` shows no changes
- [ ] `cd packages/storybook && pnpm build` was run
- [ ] Build result was recorded
- [ ] If the build failed, the agent stopped and reported the error output for user review
- [ ] Commit message was presented to user for confirmation before committing
- [ ] Changes were committed with message `docs(storybook): rewrite <ComponentName> guidelines`

## Group-complete checklist

Before considering the full group done:

- [ ] Every component in the group passes the per-component checklist above
- [ ] Branch pushed with `git push -u origin <branch-name>`
- [ ] PR title output to user as a copy-pasteable code block
- [ ] PR body output to user as a copy-pasteable code block, with all placeholders filled
- [ ] External research section omitted from PR body if no third-party sources were used
