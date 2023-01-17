import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {CollapsibleState} from './CollapsibleReducers.js';

const isExpanded = (state: PlasmaState, id: string): boolean => {
    const collapsible: CollapsibleState = _.findWhere(state.collapsibles, {id});
    return !!collapsible?.expanded;
};

export const CollapsibleSelectors = {
    isExpanded,
};
