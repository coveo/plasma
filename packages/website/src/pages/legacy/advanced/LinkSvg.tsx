import {LinkSvgMetadata} from '@coveord/plasma-components-props-analyzer';
import LinkSvgDemo from '@examples/legacy/advanced/LinkSvg/LinkSvg.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="LinkSvg"
        title="Link SVG"
        section="Advanced"
        description="A SVG that acts as a link."
        componentSourcePath="/svg/LinkSvg.tsx"
        demo={<LinkSvgDemo center />}
        propsMetadata={LinkSvgMetadata}
    />
);

export default DemoPage;
