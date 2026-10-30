---
'@coveord/plasma-llms': minor
'@coveord/plasma-mcp-server': minor
---

Add Plasma patterns to the LLM documentation and MCP server, starting with Navigate with links

Patterns describe how to combine components to solve a recurring user need. The first one, Navigate with links, explains when to use a standalone, inline, external, or documentation link, and when to use a `Button` instead.

`@coveord/plasma-llms` now publishes each pattern under `llms/patterns/`, lists patterns in `llms.txt` and `llms-full.txt`, and the Plasma skill tells agents to follow a matching pattern before picking components.

`@coveord/plasma-mcp-server` adds the `list_patterns` and `get_pattern` tools, and `search_docs` now includes patterns in its results.
