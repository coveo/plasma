import * as React from 'react';

import {textInputReducer} from '../textInput/TextInputReducer';

/**
 * Extrapolates a reducer that manages a state of type `T` into a reducer that manages a state of type `Record<string, T>`.
 *
 * Usefull if you want many independent states of the same component and index those states by id.
 */
const generateRecordReducer = <S, A>(
    reducer: React.Reducer<S, A>
): React.Reducer<Record<string, S>, {id: string; action: A}> => (state = {}, {id, action}) => ({
    ...state,
    [id]: reducer(state[id], action),
});

const componentReducers = {
    TextInput: generateRecordReducer(textInputReducer),
};

type FormComponent = keyof typeof componentReducers;
type FormComponentReducer = typeof componentReducers[FormComponent];
type FormAction = {type: FormComponent} & React.ReducerAction<FormComponentReducer>;
type FormState = Record<FormComponent, React.ReducerState<FormComponentReducer>>;

const formInitialState: FormState = {
    TextInput: {},
};

const formReducer = (state: FormState, {type, ...action}: FormAction) => ({
    ...state,
    [type]: componentReducers[type](state[type], action),
});

export const FormContext = React.createContext<{state: FormState; dispatch: React.Dispatch<FormAction>}>(undefined);

export const FormProvider: React.FunctionComponent = ({children}) => {
    const [state, dispatch] = React.useReducer(formReducer, formInitialState);
    const store = React.useMemo(() => ({state, dispatch}), [state]);

    return <FormContext.Provider value={store}>{children}</FormContext.Provider>;
};
