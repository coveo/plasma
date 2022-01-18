import {IReactVaporState, ReactVaporReducers} from '@coveord/plasma-react';
import {combineReducers, Reducer} from 'redux';
import {IListBoxExampleCompositeState, listBoxExampleReducer} from './pages/legacy/ListBoxExampleReducer';

export interface IReactVaporExampleState extends IReactVaporState {
    listBoxExampleState: IListBoxExampleCompositeState;
}

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
