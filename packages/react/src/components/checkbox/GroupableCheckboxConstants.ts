import {ICheckboxState} from './CheckboxReducers.js';

export interface IGroupableCheckboxesState {
    total: number;
    nbChecked: number;
    parentId?: string;
    parent?: ICheckboxState;
    checkboxes: ICheckboxState[];
}

export const groupableCheckboxInitialState: IGroupableCheckboxesState = {total: 0, nbChecked: 0, checkboxes: []};
export const groupableCheckboxesInitialState: IGroupableCheckboxesState[] = [];
