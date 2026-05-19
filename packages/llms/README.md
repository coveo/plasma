# @coveord/plasma-llms

LLM-friendly documentation for the [Plasma design system](https://plasma.coveo.com) — Coveo's Mantine-based component library.

Inspired by [Mantine's llms.txt guide](https://mantine.dev/guides/llms/), this package generates static documentation files optimised for consumption by AI tools and large language models.

## What's included

| File              | URL                                        | Purpose                                                                      |
| ----------------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| `llms.txt`        | `https://plasma.coveo.com/llms.txt`        | Index of all components (compact, [llmstxt.org](https://llmstxt.org) format) |
| `llms-full.txt`   | `https://plasma.coveo.com/llms-full.txt`   | All component docs concatenated into a single file                           |
| `llms/Button.md`  | `https://plasma.coveo.com/llms/Button.md`  | Per-component reference (props, sub-components, design guidelines)           |
| `plasma-skill.md` | `https://plasma.coveo.com/plasma-skill.md` | AI agent skill file for GitHub Copilot CLI / agent workflows                 |

---

## Development

### Regenerating docs

```bash
pnpm turbo run build --filter=@coveord/plasma-llms
```

This reads the hand-maintained `.md` files from `src/components/`, copies them to `dist/llms/` (stripping frontmatter), and assembles the aggregated outputs (`llms.txt`, `llms-full.txt`, `plasma-skill.md`, `descriptions.json`).

Set `PLASMA_BASE_URL` to override the base URL (default: `https://plasma.coveo.com`):

```bash
PLASMA_BASE_URL=http://localhost:6006 pnpm build
```

### Updating component docs

Each component has a hand-maintained `src/components/ComponentName.md` file. These are the source of truth for all LLM-facing documentation.

When a component's API changes, use the internal `plasma-component-docs` GitHub Copilot skill to update the spec — it knows the expected format and conventions. You can also edit the files manually.

### Adding a new component

1. Create `src/components/NewComponent.md` with YAML frontmatter and Markdown content — use the `plasma-component-docs` skill to generate the initial spec
2. Run `pnpm build` to regenerate the dist outputs

### How it works

1. **`src/build.ts`** reads all `*.md` files from `src/components/`, parses YAML frontmatter, and copies body content to `dist/llms/`
2. **`src/llms-txt.ts`** builds the index from component names and frontmatter descriptions
3. **`src/llms-full-txt.ts`** concatenates all component docs into one file
4. **`src/skill.md`** is the AI agent skill file served as `plasma-skill.md`
