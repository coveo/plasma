import {CodeEditorLegacyMetadata} from '@coveord/plasma-components-props-analyzer';
import CodeEditorExample from '@examples/legacy/form/CodeEditor/CodeEditor.demo.tsx';
import CodeEditorReadonlyExample from '@examples/legacy/form/CodeEditor/CodeEditorReadonly.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="CodeEditor"
        title="Code Editor"
        section="Form"
        description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
        thumbnail="codeEditor"
        code={CodeEditorExample}
        componentSourcePath="/editor/CodeEditor.tsx"
        propsMetadata={CodeEditorLegacyMetadata}
        examples={{
            readOnly: {code: CodeEditorReadonlyExample, title: 'Read only'},
        }}
    />
);
