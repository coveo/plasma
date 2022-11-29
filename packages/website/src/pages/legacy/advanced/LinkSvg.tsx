import {LinkSvgMetadata} from '@coveord/plasma-components-props-analyzer';
import LinkSvgExample from '@examples/legacy/advanced/LinkSvg/LinkSvg.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="LinkSvg"
        title="Link SVG"
        section="Advanced"
        description="A SVG that acts as a link."
        componentSourcePath="/svg/LinkSvg.tsx"
        code={LinkSvgExample}
        propsMetadata={LinkSvgMetadata}
    />
);
