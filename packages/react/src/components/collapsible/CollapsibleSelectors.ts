import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {CollapsibleState} from './CollapsibleReducers';

const isExpanded = (state: IReactVaporState, id: string): boolean => {
    const collapsible: CollapsibleState = _.findWhere(state.collapsibles, {id});
    return !!collapsible?.expanded;
};

export const CollapsibleSelectors = {
    isExpanded,
};
