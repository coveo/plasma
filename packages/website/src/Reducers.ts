import {IReactVaporState, ReactVaporReducers} from '@coveord/plasma-react';
import {combineReducers, Reducer} from 'redux';
import {IListBoxExampleCompositeState, listBoxExampleReducer} from './plasma/routes/legacy/pages/ListBoxExampleReducer';

export interface IReactVaporExampleState extends IReactVaporState {
    listBoxExampleState: IListBoxExampleCompositeState;
}

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
