import {IReactVaporState} from '../../ReactVaporState';

const getValue = (state: IReactVaporState, id: string): string => state.codeEditors?.[id]?.value ?? '';

export const CodeEditorSelectors = {
    getValue,
};
