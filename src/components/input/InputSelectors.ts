import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IInputState} from './InputReducers';

const getInputValue = (state: Partial<IReactVaporState>, props: {id: string}): string => {
    const input: IInputState = _.findWhere(state.inputs, {id: props.id});
    return input && input.value;
};

export const InputSelectors = {
    getValue: getInputValue,
};
