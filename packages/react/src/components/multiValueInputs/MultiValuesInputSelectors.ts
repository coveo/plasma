import {PlasmaState} from '../../PlasmaState.js';
import {InputSelectors} from '../input/InputSelectors.js';
import {MultilineBoxSelectors} from '../multilineBox/MultilineBoxSelector.js';

const getValues = (state: PlasmaState, id: string) =>
    MultilineBoxSelectors.getIds(state, {id})
        .map((inputId) => InputSelectors.getValue(state, {id: inputId}))
        .filter((value) => value !== '');

export const MultiValuesInputSelectors = {
    getValues,
};
