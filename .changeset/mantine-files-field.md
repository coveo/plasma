---
'@coveord/plasma-mantine': patch
---

Publish the `dist` folder by declaring it in the package `files` field

Newer pnpm versions honor the repository `.gitignore` when packing, which excluded the gitignored `dist` folder from the published tarball and caused `publint` to fail during release. Declaring `files: ["dist"]` (matching the other Plasma packages) ensures the built output is included.
