---
'@coveord/plasma-mantine': patch
---

Notifications can no longer be dragged or swiped sideways to dismiss them

The Plasma theme now sets `allowDragDismiss` and `allowScrollDismiss` to `false` on `Notifications`, so toasts stay in place and can only be closed with the close button or auto close. To restore the previous behavior, pass `allowDragDismiss` or `allowScrollDismiss` to `<Notifications>`.
