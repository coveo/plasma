import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IInputState} from './InputReducers';

const getInput = (state: IReactVaporState, props: {id: string}): IInputState =>
    _.findWhere(state.inputs, {id: props.id});

const getValue = createSelector(getInput, (input: IInputState): string => input && input.value);

const getIsValid = createSelector(getInput, (input: IInputState): boolean => !!input && input.valid);

export const InputSelectors = {
    getValue,
    getIsValid,
    getInput,
};
