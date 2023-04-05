import {LinkSvgMetadata} from '@coveord/plasma-components-props-analyzer';
import LinkSvgDemo from '@examples/legacy/advanced/LinkSvg/LinkSvg.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="LinkSvg"
        title="Link SVG"
        section="Advanced"
        description="A SVG that acts as a link."
        demo={<LinkSvgDemo center />}
        sourcePath="/packages/react/src/components/svg/LinkSvg.tsx"
        propsMetadata={LinkSvgMetadata}
    />
);

export default DemoPage;
