# Skill 2 examples

## Good output

A correct Step 2 rewrite:

- Keeps `import { Meta }`, `<Meta title="..." />`, the H1, and the description line unchanged
- Adds the Step 2 completion marker `{/* storybook-usage-guidelines: rewritten */}` immediately after `<Meta title="..." />`
- Rewrites machine-facing directives (`MUST`, `SHOULD`, `MAY`) into natural developer language
- Preserves every rule from the source — nothing is dropped or changed in meaning
- Keeps all fenced code blocks byte-for-byte identical to the originals
- Adds a Content guidance section grounded in the source file, Coveo code, Storybook content docs, or cited external research
- Leaves all files under `packages/llms/src/components/` untouched

## Bad output

A Step 2 rewrite that must be rejected:

- Adds product behavior that is not supported by the source file or component code
- Drops a rule that existed in the original
- Rewrites or reformats a fenced code block
- Changes the `<Meta title="..." />` value
- Uses third-party guidance without cross-checking against Coveo code or Storybook content docs
- Cites research sources inline in the MDX file
- Touches any file under `packages/llms/src/components/`
- Omits the Step 2 completion marker
