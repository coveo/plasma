import {JSONEditorConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import JSONEditorInErrorDemo from '@examples/legacy/form/JSONEditor/InError.demo.tsx';
import JSONEditorDemo from '@examples/legacy/form/JSONEditor/JSONEditor.demo.tsx';
import JSONEditorReadOnlyDemo from '@examples/legacy/form/JSONEditor/ReadOnly.demo.tsx';
import JSONEditorStateDemo from '@examples/legacy/form/JSONEditor/ValueState.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="JSONEditorConnected"
        title="JSON Editor"
        section="Form"
        description="A JSON editor is a text area where users can enter and edit data in JSON format."
        componentSourcePath="/editor/JSONEditor.tsx"
        demo={<JSONEditorDemo />}
        propsMetadata={JSONEditorConnectedMetadata}
        examples={{
            readOnly: <JSONEditorReadOnlyDemo title="Read only" />,
            inError: <JSONEditorInErrorDemo title="Error Message" />,
            valueFromState: <JSONEditorStateDemo title="Selector" />,
        }}
    />
);

export default Page;
