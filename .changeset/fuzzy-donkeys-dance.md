---
'@coveord/plasma-mantine': minor
'@coveord/plasma-llms': patch
---

Add the `Carousel` component

`Carousel` and `Carousel.Slide` are now exported from `@coveord/plasma-mantine` with Plasma styling for the indicators and controls. The controls use Plasma arrow icons that point left and right, or up and down when `orientation` is `vertical`, including when the orientation is set through the theme. Pass `nextControlIcon` or `previousControlIcon` to replace them.

The `Carousel.Props`, `Carousel.StylesNames`, `Carousel.CssVariables`, `Carousel.Factory`, `Carousel.ContextValue`, and `Carousel.Slide.Props` type aliases are available, matching the Mantine API.

To use it, install the optional peer dependencies `@mantine/carousel` and `embla-carousel-react`, and import `@mantine/carousel/styles.layer.css` alongside the other Mantine styles.

```tsx
import {Carousel} from '@coveord/plasma-mantine';

<Carousel withIndicators>
    <Carousel.Slide>First slide</Carousel.Slide>
    <Carousel.Slide>Second slide</Carousel.Slide>
</Carousel>;
```
