import {JSONEditorConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import inError from '@examples/legacy/form/JSONEditor/InError.example.tsx';
import code from '@examples/legacy/form/JSONEditor/JSONEditor.example.tsx';
import readOnly from '@examples/legacy/form/JSONEditor/ReadOnly.example.tsx';
import valueFromState from '@examples/legacy/form/JSONEditor/ValueState.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="JSONEditorConnected"
        title="JSON Editor"
        section="Form"
        description="A JSON editor is a text area where users can enter and edit data in JSON format."
        componentSourcePath="/editor/JSONEditor.tsx"
        code={code}
        propsMetadata={JSONEditorConnectedMetadata}
        examples={{
            readOnly: {code: readOnly, title: 'Read only'},
            inError: {code: inError, title: 'Error Message'},
            valueFromState: {code: valueFromState, title: 'Selector'},
        }}
    />
);
