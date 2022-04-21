import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {IDispatch} from '../../utils';
import {JSONEditor, JSONEditorDispatchProps, JSONEditorProps, JSONEditorStateProps} from './JSONEditor';
import {JSONEditorActions} from './JSONEditorActions';
import {JSONEditorSelectors} from './JSONEditorSelectors';

export const JSONEditorConnected = (props: JSONEditorStateProps & JSONEditorDispatchProps & JSONEditorProps) => {
    const dispatch: IDispatch = useDispatch();
    const defaultValue = useSelector((state) => JSONEditorSelectors.getValue(state, props.id));

    useEffect(() => {
        dispatch(JSONEditorActions.addJSONEditor(props.id, props.defaultValue || props.value));

        return () => {
            dispatch(JSONEditorActions.removeJSONEditor(props.id));
        };
    }, []);

    const onChange = (value: string, inError: boolean) => {
        dispatch(JSONEditorActions.updateJSONEditorValue(props.id, value));
        props.onChange?.(value, inError);
    };

    return <JSONEditor {...props} defaultValue={defaultValue} onChange={onChange} />;
};
