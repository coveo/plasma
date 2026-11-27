---
'@coveord/plasma-llms': patch
'@coveord/plasma-mcp-server': patch
---

Add usage rules to the `Card` LLM documentation

The `Card` spec now states when `variant="hover"` is allowed, that a clickable card holds no buttons or links, how many actions a card holds, how `Card.Section` embeds tables, sections and `Tabs`, that cards are not nested, which surface style every card keeps, how a card's content is ordered, spaced and headed, and how an empty card looks. Its usage example marks the disabled tile with `aria-disabled`. The `Header` and `Tabs` specs gain the matching card rules. Agents get these rules through `llms.txt`, `llms-full.txt`, and the MCP server.
