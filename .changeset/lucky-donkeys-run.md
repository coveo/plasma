---
'@coveord/plasma-mantine': patch
---

Set `keepMountedMode: 'display-none'` as the default for Tabs in the Plasma theme.

Mantine's default (`'activity'`) hides inactive panels using React's `Activity` component. This caused unexpected rendering issues in components that don't handle being suspended/hidden well, such as code editors: switching away from and back to a tab could leave the editor in a broken or stale state. Defaulting to `'display-none'` avoids this by hiding inactive panels with `display: none` styles instead, while still keeping their content mounted.
