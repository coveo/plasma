import {DiffViewerMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/diff-viewer/DiffViewer.demo.tsx';
import manyChanges from '@examples/legacy/form/diff-viewer/ManyChanges.demo.tsx';
import noChanges from '@examples/legacy/form/diff-viewer/NoChanges.demo.tsx';
import splitView from '@examples/legacy/form/diff-viewer/SplitView.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="DiffViewer"
        title="Diff Viewer"
        section="Form"
        description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
        componentSourcePath="/diffViewer/DiffViewer.tsx"
        code={code}
        propsMetadata={DiffViewerMetadata}
        examples={{
            splitView: {code: splitView, title: 'Split view'},
            manyChanges: {code: manyChanges, title: 'Many changes'},
            noChanges: {code: noChanges, title: 'Equal values'},
        }}
    />
);
