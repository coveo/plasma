import {BrowserPreviewMetadata} from '@coveord/plasma-components-props-analyzer';
import BrowserPreviewDemo from '@examples/legacy/layout/BrowserPreview/BrowserPreview.demo.tsx';
import BrowserPreviewWithEmptyStateDemo from '@examples/legacy/layout/BrowserPreview/BrowserPreviewWithEmptyState.demo.tsx';
import dynamic from 'next/dynamic';
const BrowserPreviewWithErrorDemo = dynamic(
    () => import('@examples/legacy/layout/BrowserPreview/BrowserPreviewWithError.demo.tsx'),
    {ssr: false}
);
import {Suspense} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';
import {PlasmaLoading} from '../../../building-blocs/PlasmaLoading';

export const BrowserPreviewDemos = () => (
    <PageLayout
        id="BrowserPreview"
        title="Browser preview"
        section="Layout"
        thumbnail="placeholder"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        componentSourcePath="/browserPreview/BrowserPreview.tsx"
        propsMetadata={BrowserPreviewMetadata}
        demo={<BrowserPreviewDemo />}
        examples={{
            withError: (
                <Suspense fallback={<PlasmaLoading />}>
                    <BrowserPreviewWithErrorDemo title="With error" />
                </Suspense>
            ),
            emptyState: <BrowserPreviewWithEmptyStateDemo title="Empty state" />,
        }}
    />
);
export default BrowserPreviewDemos;
