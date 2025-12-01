import {StickyFooterMetadata} from '@coveord/plasma-components-props-analyzer';
import StickyFooterDemo from '@examples/layout/StickyFooter/StickyFooter.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Layout"
        title="Sticky Footer"
        sourcePath="/packages/mantine/src/components/StickyFooter/StickyFooter.tsx"
        description="A page footer that sticks to the bottom of the screen."
        id="StickyFooter"
        propsMetadata={StickyFooterMetadata}
        demo={<StickyFooterDemo />}
    />
);

export default Page;
