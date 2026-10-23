import {IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp} from '@coveord/plasma-react-icons';
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
    const {orientation} = useProps('Carousel', defaultProps, props);
    const nextControlIcon = orientation === 'horizontal' ? <IconArrowRight size={16} /> : <IconArrowDown size={16} />;
    const previousControlIcon = orientation === 'horizontal' ? <IconArrowLeft size={16} /> : <IconArrowUp size={16} />;
    return <MantineCarousel nextControlIcon={nextControlIcon} previousControlIcon={previousControlIcon} {...props} />;
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
