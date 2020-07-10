import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IJSONEditorState} from './JSONEditorReducers';

const getValue = (state: IReactVaporState, id: string): string => {
    const jsonEditor: IJSONEditorState = _.findWhere(state.jsonEditors, {id});
    return jsonEditor?.value ?? '';
};

const isValid = (state: IReactVaporState, id: string): boolean => {
    const jsonEditor: IJSONEditorState = _.findWhere(state.jsonEditors, {id});
    return !!jsonEditor?.valid;
};

export const JSONEditorSelectors = {
    getValue,
    isValid,
};
