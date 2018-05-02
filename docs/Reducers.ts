import * as Redux from 'redux';
import {IReactVaporState} from '../src/ReactVapor';
import {ReactVaporReducers} from '../src/ReactVaporReducers';
import {IMembersCompositeState} from './members-example/reducers/MembersReducers';

export interface IReactVaporExampleState extends IReactVaporState {
    membersCompositeState: IMembersCompositeState;
    lastAction: Redux.Action;
}

const lastAction = (state: IReactVaporExampleState = null, action: Redux.Action): Redux.Action => {
    return action;
};

export const Reducers: Redux.Reducer<IReactVaporExampleState> = Redux.combineReducers<IReactVaporExampleState>({
    lastAction,
    ...ReactVaporReducers,
});
