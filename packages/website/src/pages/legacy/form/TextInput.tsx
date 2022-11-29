import {TextInputMetadata} from '@coveord/plasma-components-props-analyzer';
import TextInputExample from '@examples/legacy/form/TextInput/TextInput.example.tsx';
import useTextInputExample from '@examples/legacy/form/TextInput/useTextInput.example.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TextInputExamples: FunctionComponent = () => (
    <PageLayout
        id="TextInput"
        title="Text Input"
        section="Form"
        thumbnail="textInput"
        description="A text input allows users to enter and edit short texts, such as names, emails, and passwords."
        componentSourcePath="/textInput/TextInput.tsx"
        code={TextInputExample}
        examples={{hookUsage: {code: useTextInputExample, title: 'useTextInput hook usage'}}}
        propsMetadata={TextInputMetadata}
    />
);
export default TextInputExamples;
