import BannerExample from '@examples/legacy/layout/Banner/Banner.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BannerExamples = () => (
    <PageLayout
        id="BannerContainer"
        componentSourcePath="/banner/BannerContainer.tsx"
        title="Banner"
        withPropsTable={false}
        section="Layout"
        thumbnail="placeholder"
        code={BannerExample}
    />
);
export default BannerExamples;
