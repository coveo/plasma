# Plasma

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/coveo/plasma/badge)](https://scorecard.dev/viewer/?uri=github.com/coveo/plasma)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
![module: ESM](https://img.shields.io/badge/module-ESM-F7DF1E)
[![linted with oxlint](https://img.shields.io/badge/linted%20with-oxlint-000?logo=oxc&logoColor=white)](https://oxc.rs)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

Plasma is Coveo's design system used in Coveo Cloud Administration Console. It provides a Mantine-themed component library, design tokens, React icons, and documentation. All components and their documentation are available in [the demo page](https://plasma.coveo.com/).

## Usage

```bash
npm install @coveord/plasma-mantine @mantine/core @mantine/hooks react react-dom
```

Wrap your application with the `Plasmantine` provider — it applies the Plasma theme on top of Mantine, so you don't need a separate `MantineProvider`:

```tsx
import {Plasmantine} from '@coveord/plasma-mantine/plasmantine';
import '@mantine/core/styles.css';

function App() {
    return <Plasmantine>{/* your app */}</Plasmantine>;
}
```

> **Import invariant:** always import from `@coveord/plasma-mantine`, even when Mantine docs were the reference source.

Each package documents its own installation and usage in its README:

| Package                                                         | Purpose                                               |
| --------------------------------------------------------------- | ----------------------------------------------------- |
| [`@coveord/plasma-mantine`](packages/mantine/README.md)         | Mantine-themed component library (main package)       |
| [`@coveord/plasma-tokens`](packages/tokens/README.md)           | Design tokens (colors, typography, spacing, icons, …) |
| [`@coveord/plasma-react-icons`](packages/react-icons/README.md) | Plasma iconography as React components                |
| [`@coveord/plasma-llms`](packages/llms/README.md)               | LLM-friendly component documentation                  |
| [`@coveord/plasma-mcp-server`](packages/mcp-server/README.md)   | MCP server exposing Plasma docs to AI agents          |

## Compatibility

- **React** — requires React **19.2** or later (`react` and `react-dom`).
- **Mantine** — built for Mantine **9** (`@mantine/core` and `@mantine/hooks` are required peer dependencies). Optional Mantine packages (`@mantine/notifications`, `@mantine/dates`, `@mantine/form`, `@mantine/modals`, `@mantine/carousel`, `@mantine/code-highlight`) are also on the `9.x` line — install the ones you use.
- **TypeScript** — ships its own type declarations; no `@types` package needed.
- **Modules** — distributed as ES modules (`"type": "module"`); use a bundler or a Node.js version that supports ESM.

## AI Coding Agents

Plasma documents its wrapped components in [`@coveord/plasma-llms`](packages/llms/README.md). The other components are pure Mantine re-exports. For full coverage, configure **both** the Plasma and Mantine MCP servers:

- **Plasma MCP** — authoritative for Plasma-specific props, sub-components, and usage
- **Mantine MCP** — fallback for re-exported components and inherited props

> **Import invariant:** always import from `@coveord/plasma-mantine`, even when Mantine docs were the reference source.

<details>
<summary><strong>Claude Code</strong></summary>

Add both MCP servers to a project-scoped `.mcp.json` at your repository root (commit it to share the setup with your team):

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

Or add them from the CLI:

```bash
claude mcp add plasma -- npx -y @coveord/plasma-mcp-server
claude mcp add mantine -- npx -y @mantine/mcp-server
```

Run `/mcp` inside Claude Code to verify both servers are connected.

</details>

<details>
<summary><strong>Opencode</strong></summary>

Add both MCP servers to your [Opencode config](https://opencode.ai/docs/mcp-servers/) (`opencode.json` at your repository root, or `~/.config/opencode/opencode.json` for all projects):

```json
{
    "$schema": "https://opencode.ai/config.json",
    "mcp": {
        "plasma": {
            "type": "local",
            "command": ["npx", "-y", "@coveord/plasma-mcp-server"],
            "enabled": true
        },
        "mantine": {
            "type": "local",
            "command": ["npx", "-y", "@mantine/mcp-server"],
            "enabled": true
        }
    }
}
```

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong></summary>

Load the Plasma skill in the terminal:

```
/skill https://plasma.coveo.com/plasma-skill.md
```

</details>

<details>
<summary><strong>GitHub Copilot in VS Code (agent mode)</strong></summary>

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

</details>

<details>
<summary><strong>Kiro</strong></summary>

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

</details>

<details>
<summary><strong>Codex CLI</strong></summary>

Add to `~/.codex/config.toml` (global) or `.codex/config.toml` (project):

```toml
[mcp_servers.plasma]
command = "npx"
args = ["-y", "@coveord/plasma-mcp-server"]

[mcp_servers.mantine]
command = "npx"
args = ["-y", "@mantine/mcp-server"]
```

</details>

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to set up the repo, run the demo, test, and open a pull request. AI coding agents should read [AGENTS.md](AGENTS.md).

> `@coveord/plasma-style` and `@coveord/plasma-react` are in maintenance mode and live on the [`v53` branch](https://github.com/coveo/plasma/tree/v53).

## License

All packages under this repository are distributed under [Apache 2.0 license](LICENSE).
