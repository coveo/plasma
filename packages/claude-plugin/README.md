# coveo-frontend

Claude Code plugin that sets up Plasma for coding agents in one install: the [Plasma skill](skills/plasma/SKILL.md), the [DS check skill](skills/ds-check/SKILL.md), plus the Plasma, Mantine and Playwright MCP servers.

For other agents, or to set things up by hand, see the [AI Coding Agents guide](https://github.com/coveo/plasma#ai-coding-agents).

## Install

```text
/plugin marketplace add coveo/ai-tools
/plugin install coveo-frontend@ai-tools
```

The MCP servers run through `npx`, so you need Node.js. The Playwright server, used only for DS check screenshots, also needs Google Chrome. Run `/mcp` to check they're connected.

## What you get

- **`plasma` skill**: loads by itself when you work with `@coveord/plasma-mantine`. Covers setup, imports, patterns, content guidelines and design tokens.
- **`ds-check` skill**: checks a prototype branch against Plasma and writes a coverage report: which components are covered, which need to evolve, and which are new. Also checks copy, patterns and design tokens. Report only; it never changes the prototype.
- **`plasma` MCP server** ([`@coveord/plasma-mcp-server`](../mcp-server/README.md)): Plasma component docs, patterns, content guidelines and foundations.
- **`mantine` MCP server** (`@mantine/mcp-server`): Mantine docs, the fallback when Plasma doesn't document a component.
- **`playwright` MCP server** ([`@playwright/mcp`](https://github.com/microsoft/playwright-mcp)): a hidden Chrome window the `ds-check` skill uses to screenshot each component. It runs only when a DS check asks for screenshots.

## Example prompts

- "Add a settings page with a form using Plasma"
- "What props does the Modal component accept?"
- "Rewrite this error message to follow Plasma's content guidelines"
- "Run a DS check on my prototype branch"
