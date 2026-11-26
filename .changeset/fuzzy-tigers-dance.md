---
'@coveord/plasma-llms': patch
'@coveord/plasma-mcp-server': patch
---

Add usage rules to the `Card` LLM documentation

The `Card` spec now states when `variant="hover"` is allowed, that a clickable card holds no buttons or links, how many actions a card holds, how `Card.Section` embeds tables and sections, and that cards are not nested. Its usage example marks the disabled tile with `aria-disabled`. Agents get these rules through `llms.txt`, `llms-full.txt`, and the MCP server.
