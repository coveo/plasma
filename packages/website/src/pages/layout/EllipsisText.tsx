import {EllipsisTextMetadata} from '@coveord/plasma-components-props-analyzer';
import EllipsisTextDemo from '@examples/layout/EllipsisText/EllipsisText.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Layout"
        title="EllipsisText"
        sourcePath="/packages/mantine/src/components/ellipsis-text/EllipsisText.tsx"
        description="Allows to display text that will automatically truncate and shows a tooltip on hover if it overflows the max width."
        id="EllipsisText"
        propsMetadata={EllipsisTextMetadata}
        demo={<EllipsisTextDemo />}
    />
);

export default Page;
