import BrowserPreviewDemo from '@examples/layout/BrowserPreview/BrowserPreview.demo?demo';
import BrowserPreviewWithTitleAndDescriptionDemo from '@examples/layout/BrowserPreview/BrowserPreviewWithTitleAndDescription.demo?demo';
import BrowserPreviewOverflowDemo from '@examples/layout/BrowserPreview/BrowserPreviewOverflow.demo?demo';
import {BrowserPreviewMantineMetadata} from '@coveord/plasma-components-props-analyzer';
import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Browser Preview"
        sourcePath="/packages/mantine/src/components/browser-preview/BrowserPreview.tsx"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        thumbnail="placeholder"
        propsMetadata={BrowserPreviewMantineMetadata}
        id="BrowserPreview"
        demo={<BrowserPreviewDemo />}
        examples={{
            withTitleAndCustomTooltip: <BrowserPreviewWithTitleAndDescriptionDemo title="Custom title and tooltip" />,
            withOverflowingContent: <BrowserPreviewOverflowDemo title="Overflowing content" />,
        }}
    />
);
