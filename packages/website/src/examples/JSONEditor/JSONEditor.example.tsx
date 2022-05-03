import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';

const defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});

export default () => {
    const logValue = (value: string) => console.log(value);
    return <JSONEditorConnected id="example-1" defaultValue={defaultValue} onChange={logValue} />;
};
