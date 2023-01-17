import {ReactText} from 'react';
import {createSelector} from 'reselect';

import {PlasmaState} from '../../PlasmaState.js';
import {initialNumericInputState, INumericInputState} from './NumericInputReducers.js';

const getNumericInput = (state: PlasmaState, ownProps: {id: string}): INumericInputState =>
    state?.numericInputs?.[ownProps.id] || initialNumericInputState;

const getValue: (state: PlasmaState, ownProps: {id: string}) => ReactText = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.value
);

const getHasError: (state: PlasmaState, ownProps: {id: string}) => boolean = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.hasError
);

export const NumericInputSelectors = {
    getValue,
    getHasError,
};
