---
'@coveord/plasma-mantine': minor
---

Open `Anchor` links to another origin in a new tab

When its `href` points to another origin than the current page, `Anchor` now opens it in a new tab with `rel="noopener noreferrer"`. Relative and same-origin links still open in the same tab. Pass `target` or `rel` explicitly to override this behavior.
