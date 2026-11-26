---
'@coveord/plasma-llms': patch
'@coveord/plasma-mcp-server': patch
---

Add usage rules to the `Accordion` LLM documentation

The `Accordion` spec now states which variant to use, how many panels stay open, what panel content and controls may hold, and how `Accordion.ControlDisabled` and `order` are expected to be set. Agents get these rules through `llms.txt`, `llms-full.txt`, and the MCP server.
