# coveo-frontend

Claude Code plugin that sets up Plasma for coding agents in one install: the [Plasma skill](skills/plasma/SKILL.md) plus the Plasma and Mantine MCP servers.

For other agents, or to set things up by hand, see the [AI Coding Agents guide](https://github.com/coveo/plasma#ai-coding-agents).

## Install

```text
/plugin marketplace add coveo/ai-tools
/plugin install coveo-frontend@ai-tools
```

Both MCP servers run through `npx`, so you need Node.js. Run `/mcp` to check they're connected.

## What you get

- **`plasma` skill**: loads by itself when you work with `@coveord/plasma-mantine`. Covers setup, imports, patterns, content guidelines and design tokens.
- **`plasma` MCP server** ([`@coveord/plasma-mcp-server`](../mcp-server/README.md)): Plasma component docs, patterns, content guidelines and foundations.
- **`mantine` MCP server** (`@mantine/mcp-server`): Mantine docs, the fallback when Plasma doesn't document a component.

## Example prompts

- "Add a settings page with a form using Plasma"
- "What props does the Modal component accept?"
- "Rewrite this error message to follow Plasma's content guidelines"
