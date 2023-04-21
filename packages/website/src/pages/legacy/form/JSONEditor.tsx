import {JSONEditorConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import JSONEditorInErrorDemo from '@examples/legacy/form/JSONEditor/InError.demo?demo';
import JSONEditorDemo from '@examples/legacy/form/JSONEditor/JSONEditor.demo?demo';
import JSONEditorReadOnlyDemo from '@examples/legacy/form/JSONEditor/ReadOnly.demo?demo';
import JSONEditorStateDemo from '@examples/legacy/form/JSONEditor/ValueState.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="JSONEditorConnected"
        title="JSON Editor"
        section="Form"
        description="A JSON editor is a text area where users can enter and edit data in JSON format."
        sourcePath="/packages/react/src/components/editor/JSONEditor.tsx"
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
