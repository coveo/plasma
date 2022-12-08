import {TextInputMetadata} from '@coveord/plasma-components-props-analyzer';
import TextInputDemo from '@examples/legacy/form/TextInput/TextInput.demo.tsx';
import UseTextInputDemo from '@examples/legacy/form/TextInput/useTextInput.demo.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TextInputDemos: FunctionComponent = () => (
    <PageLayout
        id="TextInput"
        title="Text Input"
        section="Form"
        thumbnail="textInput"
        description="A text input allows users to enter and edit short texts, such as names, emails, and passwords."
        sourcePath="/packages/react/src/components/textInput/TextInput.tsx"
        demo={<TextInputDemo center />}
        examples={{hookUsage: <UseTextInputDemo title="useTextInput hook usage" />}}
        propsMetadata={TextInputMetadata}
    />
);

export default TextInputDemos;
