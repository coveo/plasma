import {StickyFooterMetadata} from '@coveord/plasma-components-props-analyzer';
import StickyFooterExample from '@examples/legacy/layout/StickyFooter/StickyFooter.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Example = () => (
    <PageLayout
        id="StickyFooter"
        title="Sticky Footer"
        section="Layout"
        description="A page footer that sticks to the bottom of the screen"
        componentSourcePath="/stickyFooter/StickyFooter.tsx"
        propsMetadata={StickyFooterMetadata}
        code={StickyFooterExample}
    />
);

export default Example;
