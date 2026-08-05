# Storybook fallback locations

Use this file only after searching for a matching `.stories.tsx` file under `packages/storybook/src/`.

If a matching story file exists, ignore this file and use the story file location and title instead.

| Component       | Output directory                         | Meta title                              |
| --------------- | ---------------------------------------- | --------------------------------------- |
| `BlankSlate`    | `packages/storybook/src/feedback/`       | `@components/feedback/BlankSlate`       |
| `Input`         | `packages/storybook/src/form/string/`    | `@components/form/string/Input`         |
| `Menu`          | `packages/storybook/src/call-to-action/` | `@components/call-to-action/Menu`       |
| `PasswordInput` | `packages/storybook/src/form/string/`    | `@components/form/string/PasswordInput` |

If no story file exists and the component is not listed here, stop and ask the user where the file should go before continuing.
