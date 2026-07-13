# Skill 1 validation checklist

Before considering Step 1 complete for a component:

- [ ] Current branch is not `master`
- [ ] Component belongs to the current DS branch group
- [ ] Source `.md` file exists under `packages/llms/src/components/`
- [ ] Matching `.stories.tsx` file was searched first
- [ ] If no story exists, fallback location came from `references/storybook-fallbacks.md`
- [ ] If no story exists and no fallback exists, the agent stopped and asked the user
- [ ] Output file is named `ComponentName-usage.mdx`
- [ ] Output file is under `packages/storybook/src/`
- [ ] No existing `.mdx` file was overwritten without explicit user permission
- [ ] If the existing `.mdx` file had the Step 2 marker, the agent stopped before overwriting
- [ ] YAML frontmatter was fully removed
- [ ] `import { Meta }` is the first line
- [ ] `<Meta title="..." />` uses the exact story title or approved fallback title
- [ ] `name` value became the `# H1` heading
- [ ] `description` value appears as plain text directly under the H1
- [ ] JSX-sensitive characters, including bare angle brackets and curly braces, were escaped in prose outside inline code and fenced code blocks
- [ ] Inline code and fenced code blocks were not escaped or rewritten
- [ ] `[Full Plasma documentation]({{BASE_URL}})` was replaced with `{/* TODO: Replace with full Plasma docs URL */}`
- [ ] No rendered `{{BASE_URL}}` link remains
- [ ] Step 2 marker `{/* storybook-usage-guidelines: rewritten */}` was not added by Skill 1
- [ ] Original `.md` source file is untouched
- [ ] `git diff -- packages/llms/src/components` shows no changes
- [ ] `cd packages/storybook && pnpm build` was run
- [ ] Build result was recorded
- [ ] If the build failed, the agent stopped and reported the error output for user review
- [ ] Commit message was presented to user for confirmation before committing
- [ ] Changes were committed with message `docs(storybook): convert <ComponentName> usage mdx`
