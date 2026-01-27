import {createSelector} from 'reselect';

import {PlasmaState} from '../../PlasmaState';
import {initialNumericInputState, INumericInputState} from './NumericInputReducers';

const getNumericInput = (state: PlasmaState, ownProps: {id: string}): INumericInputState =>
    state?.numericInputs?.[ownProps.id] || initialNumericInputState;

const getValue: (state: PlasmaState, ownProps: {id: string}) => string | number = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.value,
);

const getHasError: (state: PlasmaState, ownProps: {id: string}) => boolean = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.hasError,
);

export const NumericInputSelectors = {
    getValue,
    getHasError,
};
