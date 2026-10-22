---
'@coveord/plasma-mantine': minor
---

Add the `Carousel` component

`Carousel` and `Carousel.Slide` are now exported from `@coveord/plasma-mantine` with Plasma styling for the indicators and controls, and Plasma arrow icons as the default `nextControlIcon` and `previousControlIcon`.

To use it, install the optional peer dependencies `@mantine/carousel` and `embla-carousel-react`, and import `@mantine/carousel/styles.layer.css` alongside the other Mantine styles.

```tsx
import {Carousel} from '@coveord/plasma-mantine';

<Carousel withIndicators>
    <Carousel.Slide>First slide</Carousel.Slide>
    <Carousel.Slide>Second slide</Carousel.Slide>
</Carousel>;
```
