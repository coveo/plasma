# @coveord/plasma-llms

LLM-friendly documentation for the [Plasma design system](https://plasma.coveo.com), Coveo's Mantine-based component library.

Inspired by [Mantine's llms.txt guide](https://mantine.dev/guides/llms/), this package generates static documentation files optimised for consumption by AI tools and large language models.

## What's included

| File                        | URL                                                  | Purpose                                                                      |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| `llms.txt`                  | `https://plasma.coveo.com/llms.txt`                  | Index of all components (compact, [llmstxt.org](https://llmstxt.org) format) |
| `llms-full.txt`             | `https://plasma.coveo.com/llms-full.txt`             | All component docs concatenated into a single file                           |
| `llms/components/Button.md` | `https://plasma.coveo.com/llms/components/Button.md` | Per-component reference (props, sub-components, design guidelines)           |
| `llms/content/Voice.md`     | `https://plasma.coveo.com/llms/content/Voice.md`     | Per-guideline reference for user-facing content                              |
| `plasma-skill.md`           | `https://plasma.coveo.com/plasma-skill.md`           | Portable AI agent skill with Plasma conventions and lookup guidance          |

## Using Plasma with AI coding agents

See the canonical [AI Coding Agents guide](https://github.com/coveo/plasma#ai-coding-agents) for skill installation, MCP server configuration, and the documentation lookup workflow.

---

## Development

### Regenerating docs

```bash
pnpm turbo run build --filter=@coveord/plasma-llms
```

This reads the hand-maintained `.md` files from `src/components/` and `src/content/`, copies them to `dist/llms/` (stripping frontmatter), and assembles `llms.txt`, `llms-full.txt`, and `plasma-skill.md`.

Set `PLASMA_BASE_URL` to override the base URL (default: `https://plasma.coveo.com`):

```bash
PLASMA_BASE_URL=http://localhost:6006 pnpm build
```

### Updating component docs

Each component has a hand-maintained `src/components/ComponentName.md` file. These are the source of truth for all LLM-facing documentation.

When a component's API changes, use the internal `plasma-component-docs` skill to update the spec. It knows the expected format and conventions. You can also edit the files manually.

### Adding a new component

1. Create `src/components/NewComponent.md` with YAML frontmatter and Markdown content. Use the `plasma-component-docs` skill to generate the initial spec.
2. Run `pnpm build` to regenerate the dist outputs

### How it works

1. **`src/build.ts`** reads all `*.md` files from `src/components/` and `src/content/`, parses YAML frontmatter, and copies body content to `dist/llms/`
2. **`src/llms-txt.ts`** builds the index from component and content guideline metadata
3. **`src/llms-full-txt.ts`** concatenates all component and content guideline docs into one file
4. **`src/skill.md`** is the source for the AI agent skill served as `plasma-skill.md`; the build replaces its `{{BASE_URL}}` placeholders

Do not edit generated files in `dist/` manually.
