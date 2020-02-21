import {IReactVaporState, ReactVaporReducers} from 'react-vapor';
import {combineReducers, Reducer} from 'redux';

import {IListBoxExampleCompositeState, listBoxExampleReducer} from './components/examples/ListBoxExampleReducer';

export interface IReactVaporExampleState extends IReactVaporState {
    listBoxExampleState: IListBoxExampleCompositeState;
}

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
