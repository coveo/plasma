---
name: Carousel
description: Scrollable set of slides that users browse one view at a time with controls, indicators, swipe, or arrow keys.
---

# Usage guidance

## What problem does it solve?

`Carousel` presents a set of related, equally weighted items in limited space. Users move through the items one view at a time instead of seeing them all at once.

It is useful when the items are visual, independent of each other, and secondary to the main task, so hiding some of them behind navigation does not cost the user anything important.

## When to use it

- Browsing a small set of visual items, such as screenshots, illustrations, or feature highlights, where the available space fits only one or a few at a time.
- The items are independent and users can view them in any order.
- Users benefit from seeing a preview of the next item to understand that more content is available.

## When not to use it

- When users must see the content to complete their task — content on later slides is easily missed. Use a visible layout such as `Stack`, `SimpleGrid`, or a group of `Card`s.
- When users need to compare items side by side — use a `Table` or a grid of `Card`s.
- When the items are ordered steps with tracked progress — use `Stepper`.
- When the items are peer views of the same context — use `Tabs`.
- When the set is large or open-ended — use a list, a grid, or a `Table` with pagination.

## Decision-making guidance

- Use `slideSize` to set how many slides are visible at once: `'100%'` (the default) shows one slide, `'50%'` shows two, and `'33.333333%'` shows three. Responsive values such as `{base: '100%', sm: '50%'}` MAY be passed.
- When more than one slide is visible, you SHOULD set `slideGap` with a theme spacing key (`'xs'`, `'sm'`, `'md'`) so slides do not touch. The default gap is `0`.
- You SHOULD set `height` on the carousel, or give the slide content a fixed height, so slides render at a consistent size. `height` is REQUIRED when `orientation="vertical"`.
- Use `withIndicators` for short sets where users benefit from seeing their position and jumping directly to a slide. Indicators are hidden by default.
- You SHOULD NOT turn off `withControls` unless indicators are shown; without either, users can only navigate by dragging, swiping, or using the keyboard.
- Behaviour options are passed through `emblaOptions`, not as top-level props. For example, `{loop: true}` wraps from the last slide back to the first, `{align: 'start'}` aligns slides to the start edge, and `{slidesToScroll: 2}` moves two slides per step.
- Use `onSlideChange` to react to the active slide index, and `getEmblaApi` when you need imperative control.

## Interaction notes

- Users can navigate with the previous and next controls, the indicators when shown, drag or swipe gestures, and the Left arrow, Right arrow, Home, and End keys while focus is inside the carousel. Keyboard navigation is controlled by `withKeyboardEvents` and is on by default.
- The Plasma theme replaces Mantine's chevrons with Plasma arrow icons, rounds the controls, and colours the active indicator with the primary colour. `nextControlIcon` and `previousControlIcon` MAY be overridden, but the Plasma defaults SHOULD be kept for consistency.
- A visually hidden live region announces the current position ("Slide 2 of 5") when the slide changes.

## Accessibility expectations

- The carousel renders as a `region` landmark with no accessible name. You SHOULD pass an `aria-label` (or `aria-labelledby`) that describes the content, such as `aria-label="Search page screenshots"`.
- Images inside slides MUST have meaningful `alt` text, or `alt=""` when they are purely decorative.
- The control labels ("Previous slide", "Next slide") and indicator labels ("Go to slide 1") are in English. When the interface is localized, you SHOULD override them through `previousControlProps`, `nextControlProps`, and `getIndicatorProps`.
- Slides SHOULD NOT advance automatically. If an autoplay plugin is added through `plugins`, you MUST provide a visible control that lets users pause it.

## Content guidance

- Each slide SHOULD present one self-contained item, with the same structure as the other slides.
- Keep the set short enough that users can reasonably view every slide.
- Content on the first slide SHOULD stand on its own, because many users never move past it.

## Common anti-patterns

- Forgetting to import `@mantine/carousel/styles.layer.css` — the slides stack vertically instead of forming a track.
- Passing items directly as children — each item MUST be wrapped in `Carousel.Slide`.
- Passing `loop`, `align`, or `slidesToScroll` as top-level props — they MUST be passed through `emblaOptions`.
- Using a vertical carousel without `height`.
- Hiding required information, warnings, or form fields on later slides.

# API reference

## Setup

`Carousel` relies on optional peer dependencies of `@coveord/plasma-mantine`. Install them and import the carousel styles once, alongside the other Mantine styles:

```bash
pnpm add @mantine/carousel embla-carousel-react
```

```tsx
import '@mantine/carousel/styles.layer.css';
```

## Props

> Extends: `CarouselProps` from `@mantine/carousel`.

_No additional props beyond the Mantine base component._

Key props relevant to Plasma usage patterns:

**`slideSize`** `StyleProp<string | number>` · optional · default: `'100%'` — Controls slide width based on viewport width.

**`slideGap`** `StyleProp<MantineSpacing>` · optional · default: `0` — Key of theme.spacing or number to set gap between slides.

**`height`** `React.CSSProperties['height']` · optional · default: `undefined` — Slides container `height`, required for vertical orientation.

**`orientation`** `'horizontal' | 'vertical'` · optional · default: `'horizontal'` — Carousel orientation.

**`withControls`** `boolean` · optional · default: `true` — Determines whether next/previous controls should be displayed.

**`withIndicators`** `boolean` · optional · default: `false` — Determines whether indicators should be displayed.

**`emblaOptions`** `EmblaOptionsType` · optional · default: `{align: 'center', loop: false, slidesToScroll: 1, dragFree: false, containScroll: 'trimSnaps'}` — Options passed down to embla carousel.

**`onSlideChange`** `(index: number) => void` · optional · default: `undefined` — Called with slide index when slide changes.

**`nextControlIcon`** `React.ReactNode` · optional · default: `<IconArrowRight size={16} />` (Plasma theme) — Icon of the next control.

**`previousControlIcon`** `React.ReactNode` · optional · default: `<IconArrowLeft size={16} />` (Plasma theme) — Icon of the previous control.

## Sub-components

Plasma exposes Mantine's compound carousel API.

- `Carousel.Slide`

## TypeScript namespace aliases

These type-only aliases are available for annotations and do not add runtime static properties.

- `Carousel.Props`
- `Carousel.StylesNames`
- `Carousel.CssVariables`
- `Carousel.Factory`
- `Carousel.ContextValue`

## Usage

```tsx
import {Card, Carousel, Image, Text, Title} from '@coveord/plasma-mantine';

const screenshots = [
    {src: '/screenshots/search-page.png', alt: 'Search page with facets and a result list'},
    {src: '/screenshots/analytics.png', alt: 'Analytics dashboard showing query volume over time'},
    {src: '/screenshots/pipelines.png', alt: 'Query pipeline rules listed in a table'},
];

// One slide per view, with indicators
function ScreenshotCarousel() {
    return (
        <Carousel aria-label="Product screenshots" height={240} withIndicators>
            {screenshots.map(({src, alt}) => (
                <Carousel.Slide key={src}>
                    <Image src={src} alt={alt} h="100%" />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}

// Several slides per view, looping back to the first slide
function FeatureCarousel() {
    return (
        <Carousel
            aria-label="Feature highlights"
            slideSize="33.333333%"
            slideGap="sm"
            emblaOptions={{loop: true, align: 'start'}}
        >
            <Carousel.Slide>
                <Card h="100%">
                    <Title order={4}>Search analytics</Title>
                    <Text c="dimmed">Review usage trends and find opportunities to improve relevance.</Text>
                </Card>
            </Carousel.Slide>
            <Carousel.Slide>
                <Card h="100%">
                    <Title order={4}>Query pipelines</Title>
                    <Text c="dimmed">Apply rules that adjust queries and results for specific audiences.</Text>
                </Card>
            </Carousel.Slide>
            <Carousel.Slide>
                <Card h="100%">
                    <Title order={4}>Machine learning models</Title>
                    <Text c="dimmed">Train models that recommend content and personalize results.</Text>
                </Card>
            </Carousel.Slide>
        </Carousel>
    );
}
```

See the interactive [Carousel story]({{BASE_URL}}/?path=/story/carousel--demo) in Storybook to try the slide size, gap, controls, indicators, and looping options.

---

[Full Plasma documentation]({{BASE_URL}})
