# PR workflow — Skill 1

## Branch rules

- Never work directly on `master`.
- Before modifying any file, check the current branch with `git branch --show-current`.
- If the current branch is `master`, create or switch to the correct DS branch for the component group.
- One component at a time. Never batch-convert multiple components in one pass.
- Validate after every component. Do not continue until the build passes and the user confirms.

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

Commit one component at a time after the build passes and the user confirms:

```
docs(storybook): convert <ComponentName> usage mdx
```

Do not create one large commit for the full group.
