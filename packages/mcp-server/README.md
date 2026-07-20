# @coveord/plasma-mcp-server

MCP (Model Context Protocol) server for the [Plasma design system](https://plasma.coveo.com). Gives AI agents dynamic access to component documentation — no need to load everything upfront.

For full coverage, pair this with [`@mantine/mcp-server`](https://www.npmjs.com/package/@mantine/mcp-server): the Plasma server is authoritative for Plasma-wrapped components; the Mantine server covers the re-exported components and inherited props. Agents should query Plasma first and fall back to Mantine when a component isn't found.

> **Import invariant:** always import from `@coveord/plasma-mantine`, even when Mantine docs were the reference. `@coveord/plasma-mantine` re-exports all Mantine components with Coveo's theme applied.

## Tools

| Tool                  | Description                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `list_components`     | Returns all documented Plasma component names                                            |
| `get_component_doc`   | Returns the full Markdown doc for a component (props, sub-components, design guidelines) |
| `get_component_props` | Returns just the props table for a component                                             |
| `search_docs`         | Full-text search across all component docs; returns the top matching excerpts            |

## Setup

### Kiro

**Option 1 — MCP servers** (recommended for on-demand component docs):

Create or edit `.kiro/settings/mcp.json` in your project (or `~/.kiro/settings/mcp.json` for all projects):

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

Restart Kiro after saving the file. Both servers will appear in the MCP panel.

**Option 2 — Steering file** (always-on Plasma conventions, no MCP needed):

Create `.kiro/steering/plasma.md` and paste the contents of [`https://plasma.coveo.com/plasma-skill.md`](https://plasma.coveo.com/plasma-skill.md) into it with this frontmatter:

```markdown
---
inclusion: always
---

[paste plasma-skill.md contents here]
```

### GitHub Copilot (VS Code)

Create or edit `.vscode/mcp.json` in your project:

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

Commit this file to share the MCP setup with your team. Use **MCP: List Servers** in the VS Code command palette to verify the servers are running.

### Codex CLI

Add to `~/.codex/config.toml`:

```toml
[mcp_servers.plasma]
command = "npx"
args = ["-y", "@coveord/plasma-mcp-server"]

[mcp_servers.mantine]
command = "npx"
args = ["-y", "@mantine/mcp-server"]
```

For a project-specific setup, set `CODEX_HOME=.codex` and create `.codex/config.toml` in your repo instead.

### GitHub Copilot CLI (terminal)

The Copilot CLI uses skill files rather than MCP. Load the Plasma skill with:

```
/skill https://plasma.coveo.com/plasma-skill.md
```

Or add it to `.github/copilot-instructions.md` in your project to have it apply automatically.

---

## Example prompts

Once the MCP server is connected, you can ask your AI agent:

> "Show me all the available Plasma components."

> "Get the documentation for the Button component."

> "What props does the Modal component accept?"

> "Search the Plasma docs for 'form validation'."

---

## How it works

The component documentation is bundled at build time from `@coveord/plasma-llms/dist/` into a `dist/data.json` file. The MCP server loads this file at startup and serves it via the MCP protocol — no runtime network calls or file I/O required.

For the underlying static files (useful for tools that fetch URLs directly), see [`@coveord/plasma-llms`](../llms/README.md).
