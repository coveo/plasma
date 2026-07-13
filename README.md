# Plasma

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square&logo=appveyor)](https://conventionalcommits.org)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/coveo/plasma/badge)](https://scorecard.dev/viewer/?uri=github.com/coveo/plasma)

Plasma is Coveo's design system used in Coveo Cloud Administration Console. It provides a Mantine-themed component library, design tokens, React icons, and documentation. All components and their documentation are available in [the demo page](https://plasma.coveo.com/).

## AI Coding Agents

Plasma documents its wrapped components in [`@coveord/plasma-llms`](packages/llms/README.md). The other components are pure Mantine re-exports. For full coverage, configure **both** the Plasma and Mantine MCP servers:

- **Plasma MCP** — authoritative for Plasma-specific props, sub-components, and usage
- **Mantine MCP** — fallback for re-exported components and inherited props

> **Import invariant:** always import from `@coveord/plasma-mantine`, even when Mantine docs were the reference source.

### GitHub Copilot CLI

Load the Plasma skill in the terminal:

```
/skill https://plasma.coveo.com/plasma-skill.md
```

### GitHub Copilot in VS Code (agent mode)

Create `.vscode/mcp.json` in your project:

```json
{
    "servers": {
        "plasma": {
            "type": "stdio",
            "command": "npx",
            "args": ["-y", "@coveord/plasma-mcp-server"]
        },
        "mantine": {
            "type": "stdio",
            "command": "npx",
            "args": ["-y", "@mantine/mcp-server"]
        }
    }
}
```

### Kiro

**Option 1 — MCP servers** (recommended for component API lookups):

Create `.kiro/settings/mcp.json` in your project:

```json
{
    "mcpServers": {
        "plasma": {
            "command": "npx",
            "args": ["-y", "@coveord/plasma-mcp-server"]
        },
        "mantine": {
            "command": "npx",
            "args": ["-y", "@mantine/mcp-server"]
        }
    }
}
```

**Option 2 — Steering file** (injects Plasma conventions into every agent session):

Create `.kiro/steering/plasma.md` and paste the contents of [`https://plasma.coveo.com/plasma-skill.md`](https://plasma.coveo.com/plasma-skill.md) into it with this frontmatter:

```markdown
---
inclusion: always
---
```

### Codex CLI

Add to `~/.codex/config.toml` (global) or `.codex/config.toml` (project):

```toml
[mcp_servers.plasma]
command = "npx"
args = ["-y", "@coveord/plasma-mcp-server"]

[mcp_servers.mantine]
command = "npx"
args = ["-y", "@mantine/mcp-server"]
```

## React Compatibility

Plasma requires **React 19** or later.

## Usage

```bash
npm install @coveord/plasma-mantine
```

## Contributing

### Build

Make sure you have

- [Node.js](https://nodejs.org/)'s LTS version
- [PNPM](https://pnpm.io/installation)

### Where are @coveord/plasma-style and @coveord/plasma-react?

The `@coveord/plasma-style` and `@coveord/plasma-react` packages are in maintenance mode and can be found on the [`v53` branch](https://github.com/coveo/plasma/tree/v53).

## Setup

All the commands in the instructions must be run at the root of the project.

First you need to install the project's dependencies and link the projects together.

```bash
pnpm install
```

### Running the demo pages locally

```bash
pnpm start
```

Changes made to any source files in any package will make the demo rebuild and refresh. Since the projects are in the same repository and we use pnpm, we don't have to link them together.

### Testing

All new unit tests for components should be written using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/).

To run all tests from the root, you can run `pnpm test`

Alternatively, you can run it directly from `packages/{packageName}`, which also allows using two other testing methods:

#### Watching and Debugging

1. First, make sure you're in `packages/{packageName}`.
2. To watch your tests:
    1. Run `pnpm test:watch`, wait for it to start up then hit any key. This will show you the menu.
    2. Then, for example, to focus on a particular spec file, hit `p` to filter by a filename regex pattern, then the name of a spec file (e.g `SingleSelectConnected`).
    3. Then you can use `fdescribe` and `fit` to focus on individual suites and tests respectively
3. To debug your tests:
    1. Run `pnpm test:debug`, wait for it to start up then hit any key to pause.
    2. In a Chromium browser (Chrome / Brave), go to `chrome://inspect` and connect to the Node process.
    3. From here, you can add a `debugger` statement in a test, save the file, focus on the suite using `p` and then the spec file name.
    4. When the file is saved and rerun, the debugger should open in the dev tools!
    5. You will need to close the dev tools for the process to disconnect

### Committing your changes

Every commit made to this repository must comply to the [Conventional Commits specification](https://www.conventionalcommits.org/). Release versions are managed with Changesets instead of being inferred from commit messages.

If your PR changes a releasable package, run:

```bash
pnpm changeset
```

Commit the generated file from `.changeset/`. CI will preview the package versions that would be bumped if the PR were merged and later released.

> We have integrated an optional [command line utility](https://github.com/commitizen/cz-cli) to help you build proper commit messages.
>
> ```bash
> git add . # stage the changes you want to commit
> npm run commit-cli # execute the commit message helper
> ```

## License

All packages under this repository are distributed under [Apache 2.0 license](LICENSE).
