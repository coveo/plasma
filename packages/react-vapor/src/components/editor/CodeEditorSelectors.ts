import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {CodeEditorState} from './CodeEditorReducers';

const getValue = (state: IReactVaporState, id: string): string => {
    const codeEditor: CodeEditorState = _.findWhere(state.codeEditors, {id});
    return codeEditor?.value ?? '';
};

export const CodeEditorSelectors = {
    getValue,
};
