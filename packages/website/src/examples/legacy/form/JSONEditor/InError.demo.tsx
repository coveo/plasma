import {JSONEditorConnected} from '@coveord/plasma-react';

const invalidJSON = '{hello: world}';

const Demo = () => (
    <JSONEditorConnected
        id="example-3"
        defaultValue={invalidJSON}
        errorMessage="Custom error message when JSON is invalid"
    />
);
export default Demo;
