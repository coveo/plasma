import * as Redux from 'redux';
import {IListBoxExampleCompositeState, listBoxExampleReducer} from '../src/components/listBox/examples/ListBoxExampleReducer';
import {IReactVaporState} from '../src/ReactVapor';
import {ReactVaporReducers} from '../src/ReactVaporReducers';
import {IMembersCompositeState} from './members-example/reducers/MembersReducers';

export interface IReactVaporExampleState extends IReactVaporState {
    membersCompositeState?: IMembersCompositeState;
    listBoxExampleState?: IListBoxExampleCompositeState;
}

export const Reducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
    ...ReactVaporReducers,
    listBoxExampleState: listBoxExampleReducer,
});
