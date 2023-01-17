import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {IDispatch} from '../../utils/index.js';
import {JSONEditor, JSONEditorProps} from './JSONEditor.js';
import {JSONEditorActions} from './JSONEditorActions.js';
import {JSONEditorSelectors} from './JSONEditorSelectors.js';

interface JSONEditorConnectedProps {
    /**
     * initial value of the component
     */
    defaultValue?: string;
}

/**
 * @deprecated use Mantine instead
 */
export const JSONEditorConnected = (props: JSONEditorProps & JSONEditorConnectedProps) => {
    const dispatch: IDispatch = useDispatch();
    const value = useSelector((state) => JSONEditorSelectors.getValue(state, props.id));

    useEffect(() => {
        dispatch(JSONEditorActions.addJSONEditor(props.id, props.defaultValue || props.value));

        return () => {
            dispatch(JSONEditorActions.removeJSONEditor(props.id));
        };
    }, []);

    const onChange = (changedValue: string, inError: boolean) => {
        dispatch(JSONEditorActions.updateJSONEditorValue(props.id, changedValue));
        props.onChange?.(changedValue, inError);
    };

    return <JSONEditor {...props} value={value} onChange={onChange} />;
};
