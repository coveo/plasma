import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IFlatSelectState} from './FlatSelectReducers';

const getInput = (state: IReactVaporState, ownProps: {id: string}): IFlatSelectState => {
    return _.findWhere(state.flatSelect, {id: ownProps.id});
};

const getSelectedOptionId = createSelector(
    getInput,
    (flatSelectState: IFlatSelectState): string => flatSelectState && flatSelectState.selectedOptionId
);

export const FlatSelectSelectors = {
    getInput,
    getSelectedOptionId,
};
