import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';
    
    const defaultValue = JSONToString({hello: "world", thisIsANumber: 42, andThisAMap: {a: "a", b: "b"}});
    
    export default () => {
        const logValue = (value: string) => console.log(value); 
        return (
            <JSONEditorConnected id="example-1" value={defaultValue} onChange={logValue} />
        );
    };
`;

const readOnly = `
    import * as React from 'react';
    import {JSONEditorConnected, JSONToString} from '@coveord/plasma-react';
    
    const defaultValue = JSONToString({hello: "world", thisIsANumber: 42, andThisAMap: {a: "a", b: "b"}});
    
    export default () => (
        <JSONEditorConnected id="example-2" value={defaultValue} readOnly />
    );
`;

const inError = `
    import * as React from 'react';
    import {JSONEditorConnected} from '@coveord/plasma-react';
    
    const invalidJSON = "{hello: world}";
    
    export default () => (
        <JSONEditorConnected id="example-3" value={invalidJSON} errorMessage="Custom error message when JSON is invalid" />
    );
`;

const valueFromState = `
    import * as React from 'react';
    import {useSelector} from 'react-redux';
    import {JSONEditorConnected, JSONToString, JSONEditorSelectors, PlasmaState} from '@coveord/plasma-react';
    
    const defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});
    
    export default () => {
        const content = useSelector((state: PlasmaState) => JSONEditorSelectors.getValue(state, 'example-4'));
        return (
            <>
                {content}
                <JSONEditorConnected id="example-4" value={defaultValue} />
            </>
        );
    };
`;

export default () => (
    <PageLayout
        id="JSONEditor"
        title="JSON Editor"
        section="Form"
        description="A JSON editor is a text area where users can enter and edit data in JSON format."
        componentSourcePath="/editor/JSONEditor.tsx"
        code={code}
        examples={{
            readOnly: {code: readOnly, title: 'Read only'},
            inError: {code: inError, title: 'Error Message'},
            valueFromState: {code: valueFromState, title: 'Selector'},
        }}
    />
);
