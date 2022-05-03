import {JSONEditorConnected} from '@coveord/plasma-react';

const invalidJSON = '{hello: world}';

export default () => (
    <JSONEditorConnected
        id="example-3"
        defaultValue={invalidJSON}
        errorMessage="Custom error message when JSON is invalid"
    />
);
