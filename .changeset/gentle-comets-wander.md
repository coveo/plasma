---
'@coveord/plasma-mantine': patch
---

Refine `Collection` spacing and alignment of the drag handle and remove button

Drag handles and remove buttons are now 36px tall and aligned with the top of the item inputs, so they stay in place when a field displays an error message. Items that can't be removed reserve the same 36px so their fields stay aligned with removable ones. The default `gap` between items is reduced from `md` to `sm`, and the legacy children pattern uses a tighter padding around its items. Pass `gap="md"` to keep the previous spacing.
