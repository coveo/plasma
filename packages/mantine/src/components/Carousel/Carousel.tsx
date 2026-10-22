import {IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp} from '@coveord/plasma-react-icons';
import {CarouselFactory, type CarouselProps, Carousel as MantineCarousel} from '@mantine/carousel';
import {factory} from '@mantine/core';

const PlasmaCarousel = factory<CarouselFactory>(({...props}: CarouselProps) => {
    const {orientation = 'horizontal'} = props;
    const nextControlIcon = orientation === 'horizontal' ? <IconArrowRight size={16} /> : <IconArrowDown size={16} />;
    const previousControlIcon = orientation === 'horizontal' ? <IconArrowLeft size={16} /> : <IconArrowUp size={16} />;
    return <MantineCarousel {...props} nextControlIcon={nextControlIcon} previousControlIcon={previousControlIcon} />;
});

PlasmaCarousel.displayName = 'Carousel';
PlasmaCarousel.Slide = MantineCarousel.Slide;
PlasmaCarousel.Slide.displayName = 'Carousel.Slide';

export {type CarouselFactory, type CarouselProps} from '@mantine/carousel';
export {PlasmaCarousel as Carousel};
