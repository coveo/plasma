import {createSelector} from 'reselect';
import {IReactVaporState} from '../../ReactVapor';
import {initialNumericInputState, INumericInputState} from './NumericInputReducers';

const getNumericInput = (state: IReactVaporState, ownProps: {id: string}): INumericInputState => {
    return state && state.numericInputs[ownProps.id] || initialNumericInputState;
};

const getValue: (state: IReactVaporState, ownProps: {id: string}) => number | string = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.value,
);

const getHasError: (state: IReactVaporState, ownProps: {id: string}) => boolean = createSelector(
    getNumericInput,
    (numericInput: INumericInputState) => numericInput.hasError,
);

export const NumericInputSelectors = {
    getValue,
    getHasError,
};
