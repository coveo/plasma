import {CodeEditorMetadata} from '@coveord/plasma-components-props-analyzer';
import MainExample from '@examples/form/code-editor/CodeEditor.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

const CodeEditorPage = () => (
    <PageLayout
        id="CodeEditor"
        section="Form"
        title="Code Editor"
        sourcePath="/packages/mantine/src/components/code-editor/CodeEditor.tsx"
        description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
        thumbnail="codeEditor"
        propsMetadata={CodeEditorMetadata}
        demo={<MainExample grow />}
    />
);

export default CodeEditorPage;
