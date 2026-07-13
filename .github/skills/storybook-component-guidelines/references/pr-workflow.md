# PR workflow — Skill 2

## Branch rules

- Never work directly on `master`.
- Before modifying any file, check the current branch with `git branch --show-current`.
- If the current branch is `master`, create or switch to the correct DS branch for the component group.
- One component at a time. Never batch-rewrite multiple components in one pass.
- Validate after every component. Do not continue until the build passes and the user confirms.
- After a full alphabetic group is complete, push the branch.

## Branch mapping

| Component group | Branch                  |
| --------------- | ----------------------- |
| A               | `DS-400-A-components`   |
| B               | `DS-401-B-components`   |
| C               | `DS-426-C-components`   |
| E–M             | `DS-403-E-M-components` |
| P–T             | `DS-427-P-T-components` |

There are no D, N, or O groups — no components exist for those letters.

## Branch creation pattern

```bash
git checkout master
git pull origin master
git checkout -b DS-400-A-components
```

Repeat for each group branch as needed:

- `DS-401-B-components`
- `DS-426-C-components`
- `DS-403-E-M-components`
- `DS-427-P-T-components`

## Commit format

Commit one component at a time after validation:

```
docs(storybook): rewrite <ComponentName> usage guidelines
```

Do not create one large commit for the full group.

## When the group is complete

After all components in the group are committed, push the branch:

```bash
git push -u origin <branch-name>
```

Then output the filled PR template to the user. See `references/pr-body-template.md` for the template. Present the PR title and body as two separate copy-pasteable blocks.
