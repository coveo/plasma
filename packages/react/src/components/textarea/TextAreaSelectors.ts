import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {ITextAreaState} from './TextAreaReducers';

const getValue = (state: PlasmaState, id: string): string => {
    const textArea: ITextAreaState = _.findWhere(state.textAreas, {id});
    return textArea?.value ?? '';
};

const isDisabled = (state: PlasmaState, id: string): boolean => {
    const textArea: ITextAreaState = _.findWhere(state.textAreas, {id});
    return !!textArea?.disabled;
};

export const TextAreaSelectors = {
    getValue,
    isDisabled,
};
