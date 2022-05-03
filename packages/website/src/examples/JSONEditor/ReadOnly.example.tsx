import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';

const defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});

export default () => <JSONEditorConnected id="example-2" defaultValue={defaultValue} readOnly />;
