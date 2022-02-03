import {PlasmaState} from '../../PlasmaState';

const getValue = (state: PlasmaState, id: string): string => state.codeEditors?.[id]?.value ?? '';

export const CodeEditorSelectors = {
    getValue,
};
