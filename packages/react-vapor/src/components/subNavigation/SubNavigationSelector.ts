import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ISubNavigationState} from './SubNavigationReducers';

const getItem = (state: IReactVaporState, subNavigationId: string): ISubNavigationState =>
    _.findWhere(state.subNavigations, {id: subNavigationId});

const getItemSelected = (state: IReactVaporState, subNavigationId: string): string =>
    getItem(state, subNavigationId)?.selected;

export const SubNavigationSelector = {
    getItem,
    getItemSelected,
};
