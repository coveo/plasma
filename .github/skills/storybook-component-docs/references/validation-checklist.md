# Storybook component documentation checklist

## Repository safety

- [ ] Current branch is not `master`.
- [ ] Pre-existing tracked and untracked changes were recorded and preserved.
- [ ] The final diff contains no unexpected files.
- [ ] No commit, push, or pull request was created without explicit user approval.

## Sources

- [ ] The existing MDX page was read before updating it.
- [ ] The matching story and representative export were verified.
- [ ] The component specification was used as read-only source material.
- [ ] Implementation and tests were checked when behavior was unclear.
- [ ] No unsupported behavior or guidance was invented.
- [ ] External research was used only with user approval.

## Page structure

- [ ] The MDX page is beside its story under `packages/storybook/src/components/`.
- [ ] `<Meta of={...} />` binds to the story namespace.
- [ ] The page has an H1, description, Overview, Usage, and Guidelines.
- [ ] Usage references an exported representative story.
- [ ] Controls are present only when useful.
- [ ] Every exposed arg type has a clear description.
- [ ] Every public prop shows its useful public type in `table.type.summary`.
- [ ] Every public prop shows its actual component default in `table.defaultValue.summary`.
- [ ] Component defaults are not inferred from demo-only `args`.
- [ ] Controls and options produce values compatible with their story argument types.
- [ ] Synthetic arguments are clearly named and show their story types and defaults.
- [ ] Guidelines include When to use, When not to use, and Best practices where applicable.
- [ ] Content guidelines are present only when the component has meaningful user-facing copy.
- [ ] Component-specific sections exist only when essential guidance does not fit the common shape.
- [ ] Props, aliases, and exhaustive API details are not duplicated.
- [ ] Visible variants and states are left to Usage when possible.

## Writing and MDX

- [ ] Content is written for UX designers and developers.
- [ ] Prose uses active voice, plain language, sentence case, and American English.
- [ ] No agent-oriented `MUST`, `SHOULD`, or `MAY` directives remain.
- [ ] No em dashes appear in new prose.
- [ ] UI-copy examples follow `packages/llms/src/content/WritingMechanics.md`.
- [ ] Bare angle brackets and curly braces in prose are escaped.
- [ ] No YAML frontmatter or `{{BASE_URL}}` footer was copied into MDX.
- [ ] No Markdown pipe tables were added.
- [ ] New UI imports come from `@coveord/plasma-mantine`.

## Validation

- [ ] Intended files were formatted with oxfmt.
- [ ] `pnpm fmt:check` passed.
- [ ] `pnpm --filter @coveord/plasma-storybook build` passed.
- [ ] `pnpm --filter @coveord/plasma-storybook lint` passed when a story changed.
- [ ] `git diff --check` passed.
- [ ] `packages/llms/src/components/` has no new changes from this operation.
- [ ] The final status and validation results were reported.
