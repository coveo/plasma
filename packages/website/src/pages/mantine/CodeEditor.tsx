import {CodeEditorMantineMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import MainExample from '@examples/code-editor/CodeEditor.demo.tsx';

const CodeEditorPage = () => (
    <PageLayout
        id="CodeEditor"
        section="Mantine"
        title="Code Editor"
        sourcePath="/packages/mantine/src/components/code-editor/CodeEditor.tsx"
        description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
        thumbnail="codeEditor"
        propsMetadata={CodeEditorMantineMetadata}
        Demo={MainExample}
    />
);

export default CodeEditorPage;
