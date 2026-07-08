# PR body template

Use this as the `--body-file` when creating a draft PR with `gh pr create`.

---

## Summary

Adds Storybook usage documentation for the `<group>` component group.

## Components completed

- [ ] ComponentName

## Validation

For each component, the agent validated:

- MDX file is under `packages/storybook/src/**/*.mdx`
- `<Meta title="..." />` is unchanged after rewrite
- H1 and description are unchanged after rewrite
- Original `.md` source file was not modified
- Fenced code blocks are unchanged after rewrite
- Step 2 completion marker is present
- Storybook build was run after the component

## Build result

`<passing | failing>`

If failing, include the exact command and relevant error output.

## External research used

Include links and notes for any third-party research used for Content guidance sections.

## Notes

This PR is intentionally marked as draft and has no requested reviewers.
