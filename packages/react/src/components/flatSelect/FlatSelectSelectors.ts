import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {flatSelectInitialState, IFlatSelectState} from './FlatSelectReducers';

const getInput = (state: PlasmaState, ownProps: {id: string}): IFlatSelectState =>
    _.findWhere(state.flatSelect, {id: ownProps.id}) || flatSelectInitialState;

const getSelectedOptionId = createSelector(
    getInput,
    (flatSelectState: IFlatSelectState): string => flatSelectState && flatSelectState.selectedOptionId,
);

export const FlatSelectSelectors = {
    getInput,
    getSelectedOptionId,
};
