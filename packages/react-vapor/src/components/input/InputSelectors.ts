import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IInputState} from './InputReducers';

const get = (state: IReactVaporState, props: {id: string}): IInputState => _.findWhere(state.inputs, {id: props.id});

const getInput = createSelector(
    get,
    (input: IInputState) => input
);

const getValue = createSelector(
    get,
    (input: IInputState): string => input && input.value
);

const getIsValid = createSelector(
    get,
    (input: IInputState): boolean => !!input && input.valid
);

export const InputSelectors = {
    getInput,
    getValue,
    getIsValid,
};
