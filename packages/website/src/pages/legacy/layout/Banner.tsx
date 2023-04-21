import BannerDemo from '@examples/legacy/layout/Banner/Banner.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BannerDemos = () => (
    <PageLayout
        id="BannerContainer"
        sourcePath="/packages/react/src/components/banner/BannerContainer.tsx"
        title="Banner"
        withPropsTable={false}
        section="Layout"
        thumbnail="placeholder"
        demo={<BannerDemo />}
    />
);
export default BannerDemos;
