import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';

const getCurrentOption = (state: PlasmaState, props: {id: string; startAt?: number}): number => {
    const cycle = _.findWhere(state.optionsCycles, {id: props.id});
    return _.result(cycle, 'currentOption', props.startAt || 0);
};

export const OptionsCycleSelectors = {
    getCurrentOption,
};
