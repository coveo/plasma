---
'@coveord/plasma-mantine': patch
---

Refine `Collection` spacing and alignment of the drag handle and remove button

Drag handles and remove buttons are now 36px tall and vertically centered with the item inputs. The default `gap` between items is reduced from `md` to `sm`, and the legacy children pattern uses a tighter padding around its items. Pass `gap="md"` to keep the previous spacing.
