---
'@coveord/plasma-mantine': minor
---

Add `Anchor.External` for links that leave the application

`Anchor.External` opens its destination in a new tab with `rel="noopener noreferrer"`, renders an external link icon after the content, and tells screen reader users that the link opens in a new tab. Hide the icon with `showIcon={false}` and translate the announcement with `newTabLabel`.

```tsx
<Anchor.External href="https://docs.coveo.com">Coveo documentation</Anchor.External>
```
