import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {flatSelectInitialState, IFlatSelectState} from './FlatSelectReducers';

const getInput = (state: IReactVaporState, ownProps: {id: string}): IFlatSelectState =>
    _.findWhere(state.flatSelect, {id: ownProps.id}) || flatSelectInitialState;

const getSelectedOptionId = createSelector(
    getInput,
    (flatSelectState: IFlatSelectState): string => flatSelectState && flatSelectState.selectedOptionId
);

export const FlatSelectSelectors = {
    getInput,
    getSelectedOptionId,
};
