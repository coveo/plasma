import {CodeEditorMetadata} from '@coveord/plasma-components-props-analyzer';
import CodeEditorDemo from '@examples/form/code-editor/CodeEditor.demo.tsx';
import CodeEditorPythonDemo from '@examples/form/code-editor/CodeEditorPython.demo.tsx';
import CodeEditorXMLDemo from '@examples/form/code-editor/CodeEditorXML.demo.tsx';

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
        demo={<CodeEditorDemo grow />}
        examples={{
            python: <CodeEditorPythonDemo grow title="Python language" />,
            xml: <CodeEditorXMLDemo grow title="XML language" />,
        }}
    />
);

export default CodeEditorPage;
