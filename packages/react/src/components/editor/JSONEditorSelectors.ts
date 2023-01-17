import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {JSONEditorState} from './JSONEditorReducers.js';

const getValue = (state: PlasmaState, id: string): string => {
    const jsonEditor: JSONEditorState = _.findWhere(state.jsonEditors, {id});
    return jsonEditor?.value ?? '';
};

const isValid = (state: PlasmaState, id: string): boolean => {
    const jsonEditor: JSONEditorState = _.findWhere(state.jsonEditors, {id});
    return !!jsonEditor?.valid;
};

export const JSONEditorSelectors = {
    getValue,
    isValid,
};
