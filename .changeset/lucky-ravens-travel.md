---
'@coveord/plasma-mantine': minor
---

Deprecate `Header.BreadcrumbText`

Every breadcrumb item should be a link. Use `Header.BreadcrumbAnchor` for each ancestor page, and leave the current page out of the trail, since the header title already shows it. `Header.BreadcrumbText` still works and will be removed in the next major version.
