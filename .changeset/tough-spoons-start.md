---
'@coveord/plasma-react-icons': major
'storybook': major
'@coveord/plasma-mantine': major
'@coveord/plasma-figma-code-connect': major
'@coveord/plasma-tokens': major
---

This release modernizes Plasma’s TypeScript tooling, and release infrastructure.

- Enabled strict TypeScript type checking across the monorepo, improving type safety and making exported APIs more reliable.
- Upgraded the TypeScript toolchain to the TypeScript 7 preview via `tsgo`.
- Removed the legacy `packages/website` documentation site now that the Storybook experience has taken over.
- Switched the publishing workflow to Changesets, making future versioning and changelog generation clearer and easier to maintain.

Most of these changes are infrastructure focused. The strict TypeScript migration may surface more precise types in downstream projects, but no intentional runtime behavior changes are expected.
