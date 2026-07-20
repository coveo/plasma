# PR template

When the full group is complete and the branch has been pushed, output the following to the user as your final response. Fill in every placeholder with real values from the session. Present the title and body as two separate blocks so the user can copy each one directly into GitHub's PR form.

---

## How to present this to the user

Tell the user the branch has been pushed and they can open a PR on GitHub. Then output:

1. A code block containing only the PR title (so it can be copied in one click).
2. A second code block containing the full PR body (so it can be copied in one click).

Do not summarize or paraphrase the template — output it filled and verbatim.

---

## PR title

```
DS-<ticket>: Add Storybook component docs for <group letter(s)> components
```

Examples:

- `DS-400: Add Storybook component docs for A components`
- `DS-403: Add Storybook component docs for E-M components`

---

## PR body

Fill in the placeholders below, then output the result as a single copy-pasteable code block. If no third-party research was used during the session, omit the "External research used" section entirely before outputting.

```markdown
## Summary

Adds Storybook component documentation for the `<group>` component group.

## Components completed

- [x] ComponentName

## Validation

For each component above:

- MDX file is under `packages/storybook/src/`
- `<Meta ... />` is unchanged after rewrite
- H1 and description are unchanged after rewrite
- Original `.md` source file was not modified
- Fenced code blocks are unchanged after rewrite
- Step 2 completion marker is present
- Storybook build passed

## Build result

Passing.

## External research used

[List sources here with links]

## Notes

No reviewers have been requested.
```

---

## PR title mapping

| Branch                  | PR title                                                  |
| ----------------------- | --------------------------------------------------------- |
| `DS-400-A-components`   | `DS-400: Add Storybook component docs for A components`   |
| `DS-401-B-components`   | `DS-401: Add Storybook component docs for B components`   |
| `DS-426-C-components`   | `DS-426: Add Storybook component docs for C components`   |
| `DS-403-E-M-components` | `DS-403: Add Storybook component docs for E-M components` |
| `DS-427-P-T-components` | `DS-427: Add Storybook component docs for P-T components` |
