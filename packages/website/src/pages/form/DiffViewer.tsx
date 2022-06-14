import code from '@examples/diff-viewer/DiffViewer.example.tsx';
import manyChanges from '@examples/diff-viewer/ManyChanges.example.tsx';
import noChanges from '@examples/diff-viewer/NoChanges.example.tsx';
import splitView from '@examples/diff-viewer/SplitView.example.tsx';

export default () => (
    <PageLayout
        id="DiffViewer"
        title="Diff Viewer"
        section="Form"
        description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
        componentSourcePath="/diffViewer/DiffViewer.tsx"
        code={code}
        examples={{
            splitView: {code: splitView, title: 'Split view'},
            manyChanges: {code: manyChanges, title: 'Many changes'},
            noChanges: {code: noChanges, title: 'Equal values'},
        }}
    />
);
