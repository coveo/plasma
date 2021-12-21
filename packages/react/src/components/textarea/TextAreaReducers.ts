import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ITextAreaActionPayload, TextAreaActions} from './TextAreaActions';

export interface ITextAreaState {
    id: string;
    value: string;
    disabled: boolean;
}

export const textAreaInitialState: ITextAreaState = {
    id: undefined,
    value: '',
    disabled: false,
};

export const textAreasInitialState: ITextAreaState[] = [];

export const textAreasReducer = (
    state: ITextAreaState[] = textAreasInitialState,
    action: IReduxAction<ITextAreaActionPayload>
): ITextAreaState[] => {
    switch (action.type) {
        case TextAreaActions.add:
            return [...state, {...action.payload} as ITextAreaState];
        case TextAreaActions.remove:
            return _.reject(state, (textArea: ITextAreaState) => textArea.id === action.payload.id);
        case TextAreaActions.changeValue:
        case TextAreaActions.setDisabled:
            return state.map((textArea: ITextAreaState) =>
                textArea.id === action.payload.id ? {...textArea, ...action.payload} : textArea
            );
        default:
            return state;
    }
};
