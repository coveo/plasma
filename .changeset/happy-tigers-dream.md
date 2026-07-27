---
'@coveord/plasma-mantine': patch
---

Fix `CodeEditor` crashing when hidden and shown again by React's `Activity`

When a `CodeEditor` was placed inside a component that hides inactive content with React's `Activity`
(such as `Tabs`, `Collapse`, or `Accordion` with `keepMountedMode="activity"`), switching away and back
disposed the underlying Monaco editor and left it in a broken state. The editor now recreates itself when
it is disposed while still mounted, so it keeps working across visibility changes.
