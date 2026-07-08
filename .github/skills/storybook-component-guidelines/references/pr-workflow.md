# PR workflow — Skill 2

## Branch rules

- Never work directly on `master`.
- Before modifying any file, check the current branch with `git branch --show-current`.
- If the current branch is `master`, create or switch to the correct DS branch for the component group.
- One component at a time. Never batch-rewrite multiple components in one pass.
- Validate after every component. Do not continue until the build passes and the user confirms.
- After a full alphabetic group is complete, push the branch and create a draft PR. Do not request reviewers.

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
docs(storybook): add <ComponentName> usage guidelines
```

Do not create one large commit for the full group.

## Draft PR command

```bash
gh pr create \
  --draft \
  --base master \
  --head <branch-name> \
  --title "<PR title>" \
  --body-file <pr-body-file>
```

## PR titles

| Branch                  | Draft PR title                                        |
| ----------------------- | ----------------------------------------------------- |
| `DS-400-A-components`   | `DS-400: Add Storybook usage docs for A components`   |
| `DS-401-B-components`   | `DS-401: Add Storybook usage docs for B components`   |
| `DS-426-C-components`   | `DS-426: Add Storybook usage docs for C components`   |
| `DS-403-E-M-components` | `DS-403: Add Storybook usage docs for E-M components` |
| `DS-427-P-T-components` | `DS-427: Add Storybook usage docs for P-T components` |

## Notes

- PRs are always draft. Never request reviewers.
- Stop after creating the draft PR.
- Use `references/pr-body-template.md` as the PR body.
