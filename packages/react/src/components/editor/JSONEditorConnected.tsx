import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {IDispatch} from '../../utils';
import {JSONEditor, JSONEditorProps} from './JSONEditor';
import {JSONEditorActions} from './JSONEditorActions';
import {JSONEditorSelectors} from './JSONEditorSelectors';

export const JSONEditorConnected = (props: JSONEditorProps) => {
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
