---
'@coveord/plasma-mantine': minor
---

Add `footer` and toggle options to `Navigation.SideBar`, and `disabled` to `Navigation.Toggle`

`Navigation.SideBar` accepts a `footer` that stays pinned below the scrollable links, `withToggle={false}` to remove the collapse toggle, and `toggleProps` to customize it, for example `toggleProps={{disabled: true}}` to keep it visible while preventing the sidebar from being collapsed or expanded.

`Navigation.Toggle` now also responds to clicks anywhere in its strip along the sidebar edge, not only on the chevron button.

```tsx
<Navigation.SideBar header={<Logo />} footer={<SettingsLink />} toggleProps={{disabled: isLocked}}>
    {links}
</Navigation.SideBar>
```
