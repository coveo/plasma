import BrowserPreviewDemo from '@examples/layout/BrowserPreview/BrowserPreview.demo?demo';
import BrowserPreviewWithTitleAndDescriptionDemo from '@examples/layout/BrowserPreview/BrowserPreviewWithTitleAndDescription.demo?demo';
import BrowserPreviewOverflowDemo from '@examples/layout/BrowserPreview/BrowserPreviewOverflow.demo?demo';
import {BrowserPreviewMetadata} from '@coveord/plasma-components-props-analyzer';
import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Browser Preview"
        sourcePath="/packages/mantine/src/components/browser-preview/BrowserPreview.tsx"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        thumbnail="placeholder"
        propsMetadata={BrowserPreviewMetadata}
        id="BrowserPreview"
        demo={<BrowserPreviewDemo maxHeight="none" />}
        examples={{
            withTitleAndCustomTooltip: (
                <BrowserPreviewWithTitleAndDescriptionDemo maxHeight="none" title="Custom title and tooltip" />
            ),
            withMaximumHeight: <BrowserPreviewOverflowDemo maxHeight="none" title="Maxium height" />,
        }}
    />
);
