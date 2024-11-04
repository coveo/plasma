import {EllipsisTextMetadata} from '@coveord/plasma-components-props-analyzer';
import EllipsisTextDefaultLongDemo from '@examples/layout/EllipsisText/EllipsisTextDefaultLong.demo?demo';
import EllipsisTextDefaultShortDemo from '@examples/layout/EllipsisText/EllipsisTextDefaultShort.demo?demo';
import EllipsisTextLineClampLongDemo from '@examples/layout/EllipsisText/EllipsisTextLineClampLong.demo?demo';
import EllipsisTextLineClampShortDemo from '@examples/layout/EllipsisText/EllipsisTextLineClampShort.demo?demo';
import EllipsisTextNoWrapContainerDemo from '@examples/layout/EllipsisText/EllipsisTextNoWrapContainer.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Layout"
        title="EllipsisText"
        sourcePath="/packages/mantine/src/components/ellipsis-text/EllipsisText.tsx"
        description="Allows to display text that will automatically truncate and shows a tooltip on hover if it overflows the max width."
        id="EllipsisText"
        propsMetadata={EllipsisTextMetadata}
        demo={<EllipsisTextDefaultLongDemo />}
        examples={{
            defaultLong: <EllipsisTextDefaultLongDemo title="Default ellipsis" />,
            defaultShort: <EllipsisTextDefaultShortDemo title="Default no ellipsis" />,
            noWrapContainer: <EllipsisTextNoWrapContainerDemo title="Default in no wrap container" />,
            lineClampLong: <EllipsisTextLineClampLongDemo title="Line clamp ellipsis" />,
            lineClampShort: <EllipsisTextLineClampShortDemo title="Line clamp no ellipsis" />,
        }}
    />
);

export default Page;
