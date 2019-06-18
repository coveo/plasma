import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ITextAreaState} from './TextAreaReducers';

const getValue = (state: IReactVaporState, id: string): string => {
    const textArea: ITextAreaState = _.findWhere(state.textAreas, {id});
    return (textArea && textArea.value) || '';
};

export const TextAreaSelectors = {
    getValue,
};
