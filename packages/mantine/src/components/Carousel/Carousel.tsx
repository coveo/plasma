import {IconChevronDown, IconChevronLeft, IconChevronRight, IconChevronUp} from '@coveord/plasma-react-icons';
import {
    type CarouselContextValue,
    type CarouselCssVariables,
    CarouselFactory,
    type CarouselProps,
    type CarouselStylesNames,
    Carousel as MantineCarousel,
} from '@mantine/carousel';
import {factory, useProps} from '@mantine/core';
import {type ComponentProps} from 'react';

const defaultProps = {
    orientation: 'horizontal',
} satisfies Partial<CarouselProps>;

const PlasmaCarousel = factory<CarouselFactory>((props: CarouselProps) => {
    const {orientation, nextControlIcon, previousControlIcon} = useProps('Carousel', defaultProps, props);
    const nextIcon =
        nextControlIcon ??
        (orientation === 'horizontal' ? <IconChevronRight size={16} /> : <IconChevronDown size={16} />);
    const previousIcon =
        previousControlIcon ??
        (orientation === 'horizontal' ? <IconChevronLeft size={16} /> : <IconChevronUp size={16} />);
    return <MantineCarousel nextControlIcon={nextIcon} previousControlIcon={previousIcon} {...props} />;
});

PlasmaCarousel.displayName = 'Carousel';
PlasmaCarousel.Slide = MantineCarousel.Slide;
PlasmaCarousel.Slide.displayName = 'Carousel.Slide';

namespace PlasmaCarousel {
    export type Props = CarouselProps;
    export type StylesNames = CarouselStylesNames;
    export type CssVariables = CarouselCssVariables;
    export type Factory = CarouselFactory;
    export type ContextValue = CarouselContextValue;

    export namespace Slide {
        export type Props = ComponentProps<typeof MantineCarousel.Slide>;
    }
}

export {type CarouselFactory, type CarouselProps} from '@mantine/carousel';
export {PlasmaCarousel as Carousel};
