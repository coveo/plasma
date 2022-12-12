import {StickyFooterMetadata} from '@coveord/plasma-components-props-analyzer';
import StickyFooterDemo from '@examples/layout/StickyFooter/StickyFooter.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="StickyFooter"
        sourcePath="/packages/mantine/src/components/sticky-footer/StickyFooter.tsx"
        description="A page footer that sticks to the bottom of the screen."
        id="StickyFooter"
        propsMetadata={StickyFooterMetadata}
        demo={<StickyFooterDemo />}
    />
);
