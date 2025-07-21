import CarouselDemo from '@examples/layout/Carousel/Carousel.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Layout"
        title="Carousel"
        description="Embla based carousel component"
        id="Carousel"
        demo={<CarouselDemo />}
    />
);

export default Page;
