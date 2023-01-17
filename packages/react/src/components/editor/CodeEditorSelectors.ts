import {PlasmaState} from '../../PlasmaState.js';

const getValue = (state: PlasmaState, id: string): string => state.codeEditors?.[id]?.value ?? '';

export const CodeEditorSelectors = {
    getValue,
};
