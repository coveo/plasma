import {TextAreaMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/TextArea/main.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="TextArea"
        title="Text Area"
        section="Form"
        description="A text area allows users to enter and edit longer text, often on multiple lines or in a paragraph."
        componentSourcePath="/textarea/TextArea.tsx"
        code={code}
        propsMetadata={TextAreaMetadata}
    />
);
