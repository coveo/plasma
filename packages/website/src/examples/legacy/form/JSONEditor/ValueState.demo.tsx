import {useSelector} from 'react-redux';
import {JSONEditorConnected, JSONToString, JSONEditorSelectors, PlasmaState} from '@coveord/plasma-react';

const defaultValue = JSONToString({hello: 'world', thisIsANumber: 42, andThisAMap: {a: 'a', b: 'b'}});

export default () => {
    const content = useSelector((state: PlasmaState) => JSONEditorSelectors.getValue(state, 'example-4'));
    return (
        <>
            {content}
            <JSONEditorConnected id="example-4" defaultValue={defaultValue} />
        </>
    );
};
