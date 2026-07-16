---
'@coveord/plasma-llms': minor
'@coveord/plasma-mcp-server': minor
---

Add content guidelines to LLM documentation outputs and MCP server

- Include content guideline files (Voice, Writing Mechanics, Product Vocabulary, Target Audience) in `llms.txt` and `llms-full.txt`
- Component docs have moved from `plasma.coveo.com/llms/<Component>.md` to `plasma.coveo.com/llms/components/<Component>.md`
- Content guidelines are available at `plasma.coveo.com/llms/content/<Guideline>.md`
- Add `list_content_guidelines` and `get_content_guideline` MCP tools
- Extend `search_docs` to search across both components and content guidelines
- Update `plasma-skill.md` to reference content guidelines
