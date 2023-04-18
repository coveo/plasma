import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';

const defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});

const Demo = () => {
    const logValue = (value: string) => console.log(value);
    return <JSONEditorConnected id="example-1" defaultValue={defaultValue} onChange={logValue} />;
};
export default Demo;
