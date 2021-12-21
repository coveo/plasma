import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {JSONEditorState} from './JSONEditorReducers';

const getValue = (state: IReactVaporState, id: string): string => {
    const jsonEditor: JSONEditorState = _.findWhere(state.jsonEditors, {id});
    return jsonEditor?.value ?? '';
};

const isValid = (state: IReactVaporState, id: string): boolean => {
    const jsonEditor: JSONEditorState = _.findWhere(state.jsonEditors, {id});
    return !!jsonEditor?.valid;
};

export const JSONEditorSelectors = {
    getValue,
    isValid,
};
