import {CodeEditorLegacyMetadata} from '@coveord/plasma-components-props-analyzer';
import CodeEditorDemo from '@examples/legacy/form/CodeEditor/CodeEditor.demo?demo';
import CodeEditorReadonlyDemo from '@examples/legacy/form/CodeEditor/CodeEditorReadonly.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const CodeEditorLegacyPage = () => (
    <PageLayout
        id="CodeEditor"
        title="Code Editor"
        section="Form"
        description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
        thumbnail="codeEditor"
        demo={<CodeEditorDemo />}
        sourcePath="/packages/react/src/components/editor/CodeEditor.tsx"
        propsMetadata={CodeEditorLegacyMetadata}
        examples={{
            readOnly: <CodeEditorReadonlyDemo title="Read only" />,
        }}
    />
);

export default CodeEditorLegacyPage;
