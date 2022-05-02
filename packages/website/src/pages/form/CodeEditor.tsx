import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {CodeEditor, CodeMirrorModes} from '@coveord/plasma-react';

    const defaultValue = \`from math import pi as PI
print(PI) // 3.141592653589793
\`;
    
    export default () => (
        <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} options={{lineWrapping: true}} />
    );
`;

const readOnly = `
    import {CodeEditor, CodeMirrorModes} from '@coveord/plasma-react';

    const defaultValue = \`from math import pi as PI
print(PI) // 3.141592653589793
\`;
    
    export default () => (
        <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} readOnly />
    );
`;

export default () => (
    <PageLayout
        id="CodeEditor"
        title="Code Editor"
        section="Form"
        description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
        thumbnail="codeEditor"
        code={code}
        componentSourcePath="/editor/CodeEditor.tsx"
        examples={{
            readOnly: {code: readOnly, title: 'Read only'},
        }}
    />
);
