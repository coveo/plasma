# @coveord/plasma-mcp-server

MCP (Model Context Protocol) server for the [Plasma design system](https://plasma.coveo.com). It gives AI agents dynamic access to component and content documentation without loading everything upfront.

For installation, client configuration, and guidance on using the Plasma skill with the Plasma and Mantine MCP servers, see the canonical [AI Coding Agents guide](https://github.com/coveo/plasma#ai-coding-agents).

> **Import invariant:** always import from `@coveord/plasma-mantine`, even when Mantine docs were the reference. `@coveord/plasma-mantine` re-exports all Mantine components with Coveo's theme applied.

## Tools

| Tool                      | Description                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| `list_components`         | Returns all documented Plasma component names                                                  |
| `get_component_doc`       | Returns the full Markdown doc for a component (props, sub-components, design guidelines)       |
| `get_component_props`     | Returns just the props table for a component                                                   |
| `search_docs`             | Searches component docs and content guidelines; returns the top matching excerpts              |
| `list_content_guidelines` | Returns all documented content guidelines                                                      |
| `get_content_guideline`   | Returns the full Markdown doc for a content guideline (voice, mechanics, vocabulary, audience) |

## Example prompts

Once the MCP server is connected, you can ask your AI agent:

> "Show me all the available Plasma components."

> "Get the documentation for the Button component."

> "What props does the Modal component accept?"

> "Search the Plasma docs for 'form validation'."

---

## How it works

The component and content documentation is bundled at build time from `@coveord/plasma-llms/dist/` into a `dist/data.json` file. The MCP server loads this file at startup and serves it via the MCP protocol, with no runtime network calls or file I/O required.

For the underlying static files (useful for tools that fetch URLs directly), see [`@coveord/plasma-llms`](../llms/README.md).
