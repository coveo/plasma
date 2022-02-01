import * as _ from 'underscore';

import {PlasmaState} from '../../ReactVaporState';
import {JSONEditorState} from './JSONEditorReducers';

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
