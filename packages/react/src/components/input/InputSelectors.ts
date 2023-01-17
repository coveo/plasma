import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {IInputState} from './InputReducers.js';

const getInput = (state: PlasmaState, props: {id: string}): IInputState => _.findWhere(state.inputs, {id: props.id});

const getValue = createSelector(getInput, (input: IInputState): string => input && input.value);

const getIsValid = createSelector(getInput, (input: IInputState): boolean => !!input && input.valid);

export const InputSelectors = {
    getValue,
    getIsValid,
    getInput,
};
