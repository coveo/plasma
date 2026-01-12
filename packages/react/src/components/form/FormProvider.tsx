import {
    Reducer,
    ReducerAction,
    ReducerState,
    FunctionComponent,
    createContext,
    useReducer,
    useMemo,
    PropsWithChildren,
    Dispatch,
} from 'react';

import {textInputReducer} from '../textInput/TextInputReducer';

/**
 * Extrapolates a reducer that manages a state of type `T` into a reducer that manages a state of type `Record<string, T>`.
 *
 * Usefull if you want many independent states of the same component and index those states by id.
 */
const generateRecordReducer =
    <S, A>(reducer: Reducer<S, A>): Reducer<Record<string, S>, {id: string; action: A}> =>
    (state = {}, {id, action}) => ({
        ...state,
        [id]: reducer(state[id], action),
    });

const componentReducers = {
    TextInput: generateRecordReducer(textInputReducer),
};

export type FormComponent = keyof typeof componentReducers;
type FormComponentReducer = (typeof componentReducers)[FormComponent];
type FormAction = {type: FormComponent} & ReducerAction<FormComponentReducer>;
type FormState = Record<FormComponent, ReducerState<FormComponentReducer>>;

const formInitialState: FormState = {
    TextInput: {},
};

const formReducer = (state: FormState, {type, ...action}: FormAction) => ({
    ...state,
    [type]: componentReducers[type](state[type], action),
});

export const FormContext = createContext<{state: FormState; dispatch: Dispatch<FormAction>}>(undefined);

/**
 * @deprecated Use Mantine use-form instead: https://mantine.dev/form/use-form/
 */
export const FormProvider: FunctionComponent<PropsWithChildren<unknown>> = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, formInitialState);
    const store = useMemo(() => ({state, dispatch}), [state]);

    return <FormContext.Provider value={store}>{children}</FormContext.Provider>;
};
