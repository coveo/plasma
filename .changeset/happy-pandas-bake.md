---
'@coveord/plasma-mantine': patch
---

Respect reduced motion

`Plasmantine` now sets `respectReducedMotion: true`. When the user prefers reduced motion, `Collapse`, `Accordion`, and `Transition` can take Mantine's synchronous, animation-free path instead of running their `requestAnimationFrame`-driven timers. For this to take effect in your test environment, your `matchMedia` mock needs to return `true` for the `(prefers-reduced-motion: reduce)` query; setting that up removes a common source of animation-timing flakiness in tests.
