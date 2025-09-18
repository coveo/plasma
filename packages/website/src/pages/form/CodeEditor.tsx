import {CodeEditorMetadata} from '@coveord/plasma-components-props-analyzer';
import CodeEditorDemo from '@examples/form/code-editor/CodeEditor.demo?demo';
import CodeEditorDisabledDemo from '@examples/form/code-editor/CodeEditorDisabled.demo?demo';
import CodeEditorErrorDemo from '@examples/form/code-editor/CodeEditorError.demo?demo';
import CodeEditorGraphQLDemo from '@examples/form/code-editor/CodeEditorGraphQL.demo?demo';
import CodeEditorPythonDemo from '@examples/form/code-editor/CodeEditorPython.demo?demo';
import CodeEditorXMLDemo from '@examples/form/code-editor/CodeEditorXML.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

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
            disabled: <CodeEditorDisabledDemo grow title="Disabled" />,
            python: <CodeEditorPythonDemo grow title="Python language" />,
            xml: <CodeEditorXMLDemo grow title="XML language" />,
            graphql: <CodeEditorGraphQLDemo grow title="GraphQL language" />,
            error: <CodeEditorErrorDemo grow title="Validation" />,
        }}
    />
);

export default CodeEditorPage;
