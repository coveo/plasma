import {BrowserPreviewMetadata} from '@coveord/plasma-components-props-analyzer';
import BrowserPreviewExample from '@examples/legacy/layout/BrowserPreview/BrowserPreview.example.tsx';
import BrowserPreviewWithEmptyStateExample from '@examples/legacy/layout/BrowserPreview/BrowserPreviewWithEmptyState.example.tsx';
import BrowserPreviewWithErrorExample from '@examples/legacy/layout/BrowserPreview/BrowserPreviewWithError.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const BrowserPreviewExamples = () => (
    <PageLayout
        id="BrowserPreview"
        title="Browser preview"
        section="Layout"
        thumbnail="placeholder"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        componentSourcePath="/browserPreview/BrowserPreview.tsx"
        propsMetadata={BrowserPreviewMetadata}
        code={BrowserPreviewExample}
        examples={{
            withError: {code: BrowserPreviewWithErrorExample, title: 'With error'},
            emptyState: {code: BrowserPreviewWithEmptyStateExample, title: 'Empty state'},
        }}
    />
);
export default BrowserPreviewExamples;
