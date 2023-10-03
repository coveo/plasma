import {BrowserPreviewMantineMetadata} from '@coveord/plasma-components-props-analyzer';
import BrowserPreviewDemo from '@examples/legacy/layout/BrowserPreview/BrowserPreview.demo?demo';
import BrowserPreviewWithEmptyStateDemo from '@examples/legacy/layout/BrowserPreview/BrowserPreviewWithEmptyState.demo?demo';
import dynamic from 'next/dynamic';
const BrowserPreviewWithErrorDemo = dynamic(
    () => import('@examples/legacy/layout/BrowserPreview/BrowserPreviewWithError.demo?demo'),
    {ssr: false},
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
        sourcePath="/packages/react/src/components/browserPreview/BrowserPreview.tsx"
        propsMetadata={BrowserPreviewMantineMetadata}
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
