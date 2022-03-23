import code from '@examples/JSONEditor/JSONEditor.example.tsx';
import readOnly from '@examples/JSONEditor/ReadOnly.example.tsx';
import inError from '@examples/JSONEditor/InError.example.tsx';
import valueFromState from '@examples/JSONEditor/ValueState.example.tsx';
import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="JSONEditorConnected"
        title="JSON Editor"
        section="Form"
        description="A JSON editor is a text area where users can enter and edit data in JSON format."
        componentSourcePath="/editor/JSONEditor.tsx"
        code={code}
        examples={{
            readOnly: {code: readOnly, title: 'Read only'},
            inError: {code: inError, title: 'Error Message'},
            valueFromState: {code: valueFromState, title: 'Selector'},
        }}
    />
);
