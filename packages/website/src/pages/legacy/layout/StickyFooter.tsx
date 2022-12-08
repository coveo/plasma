import {StickyFooterLegacyMetadata} from '@coveord/plasma-components-props-analyzer';
import StickyFooterDemo from '@examples/legacy/layout/StickyFooter/StickyFooter.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Demo = () => (
    <PageLayout
        id="StickyFooter"
        title="Sticky Footer"
        section="Layout"
        description="A page footer that sticks to the bottom of the screen"
        sourcePath="/packages/react/src/components/stickyFooter/StickyFooter.tsx"
        propsMetadata={StickyFooterLegacyMetadata}
        demo={<StickyFooterDemo />}
    />
);

export default Demo;
