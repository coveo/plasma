---
'@coveord/plasma-mantine': patch
---

Allow overriding the `Carousel` control icons and expose its type aliases

`nextControlIcon` and `previousControlIcon` now replace the default Plasma arrows when provided. The default arrows also follow an `orientation` set through the theme.

`Carousel.Props`, `Carousel.StylesNames`, `Carousel.CssVariables`, `Carousel.Factory`, `Carousel.ContextValue`, and `Carousel.Slide.Props` are now available as type aliases on the Plasma `Carousel`, matching the Mantine API.
