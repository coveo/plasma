import BannerDemo from '@examples/legacy/layout/Banner/Banner.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BannerDemos = () => (
    <PageLayout
        id="BannerContainer"
        componentSourcePath="/banner/BannerContainer.tsx"
        title="Banner"
        withPropsTable={false}
        section="Layout"
        thumbnail="placeholder"
        demo={<BannerDemo />}
    />
);
export default BannerDemos;
