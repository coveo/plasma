import {DiffViewerMetadata} from '@coveord/plasma-components-props-analyzer';
import DiffViewerDemo from '@examples/legacy/form/diff-viewer/DiffViewer.demo.tsx';
import DiffViewerManyChangesDemo from '@examples/legacy/form/diff-viewer/ManyChanges.demo.tsx';
import DiffViewerNoChangesDemo from '@examples/legacy/form/diff-viewer/NoChanges.demo.tsx';
import DiffViewerSplitViewDemo from '@examples/legacy/form/diff-viewer/SplitView.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="DiffViewer"
        title="Diff Viewer"
        section="Form"
        description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
        sourcePath="/packages/react/src/components/diffViewer/DiffViewer.tsx"
        demo={<DiffViewerDemo />}
        propsMetadata={DiffViewerMetadata}
        examples={{
            splitView: <DiffViewerSplitViewDemo title="Split view" />,
            manyChanges: <DiffViewerManyChangesDemo title="Many changes" />,
            noChanges: <DiffViewerNoChangesDemo title="Equal values" />,
        }}
    />
);

export default Page;
