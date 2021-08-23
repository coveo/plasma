import {useContext, useMemo} from 'react';
import {TextInputState} from '../textInput/TextInputReducer';
import {FormComponent, FormContext} from './FormProvider';

export const useFormComponent = (component: FormComponent): {state: Record<string, TextInputState>} => {
    const formContext = useContext(FormContext);
    if (formContext === undefined) {
        throw new Error('useFormComponent must be used within a FormProvider.');
    }
    const state = formContext.state[component] || {};
    return useMemo(() => ({state}), [state]);
};
