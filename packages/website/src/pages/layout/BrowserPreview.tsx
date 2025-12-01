import BrowserPreviewDemo from '@examples/layout/BrowserPreview/BrowserPreview.demo?demo';
import BrowserPreviewWithTitleAndDescriptionDemo from '@examples/layout/BrowserPreview/BrowserPreviewWithTitleAndDescription.demo?demo';
import BrowserPreviewOverflowDemo from '@examples/layout/BrowserPreview/BrowserPreviewOverflow.demo?demo';
import {BrowserPreviewMetadata} from '@coveord/plasma-components-props-analyzer';
import {PageLayout} from '../../building-blocs/PageLayout.js';

const Page = () => (
    <PageLayout
        section="Layout"
        title="Browser Preview"
        sourcePath="/packages/mantine/src/components/BrowserPreview/BrowserPreview.tsx"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        thumbnail="placeholder"
        propsMetadata={BrowserPreviewMetadata}
        id="BrowserPreview"
        demo={<BrowserPreviewDemo maxHeight={750} />}
        examples={{
            withTitleAndCustomTooltip: (
                <BrowserPreviewWithTitleAndDescriptionDemo maxHeight="none" grow title="Custom title and tooltip" />
            ),
            withOverflowingContent: <BrowserPreviewOverflowDemo maxHeight={700} title="Overflowing content" />,
        }}
    />
);

export default Page;
