import {useContext, Dispatch, useMemo} from 'react';
import {TextInputAction, TextInputState, textInputDefaultState} from './TextInputReducer';
import {FormContext} from '../form/FormProvider';

export const useTextInput = (id: string): {state: TextInputState; dispatch: Dispatch<TextInputAction>} => {
    const formContext = useContext(FormContext);
    if (formContext === undefined) {
        throw new Error('useTextInput must be used within a FormProvider.');
    }
    const state = formContext.state['TextInput'][id] || textInputDefaultState;
    const dispatch = (action: TextInputAction) => formContext.dispatch({type: 'TextInput', id, action});
    return useMemo(() => ({state, dispatch}), [state]);
};
