import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ICheckboxState} from './CheckboxReducers';
import {IGroupableCheckboxActionPayload} from './GroupableCheckboxActions';
import {groupableCheckboxInitialState, IGroupableCheckboxesState} from './GroupableCheckboxReducers';

export const calculateTotalCheckboxesChecked = (checkboxes: ICheckboxState[]): number =>
    _.where(checkboxes, {checked: true}).length;

export const addParentCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
): IGroupableCheckboxesState => {
    const newState: IGroupableCheckboxesState = {
        ...state,
        parent: {
            id: action.payload.id,
            checked: !!action.payload.checked,
            disabled: !!action.payload.disabled,
        },
    };

    if (state === groupableCheckboxInitialState) {
        newState.parentId = action.payload.id;
    }

    return newState;
};

export const addChildCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
): IGroupableCheckboxesState => {
    const newState: IGroupableCheckboxesState = {
        ...state,
        checkboxes: [
            ...state.checkboxes,
            {
                id: action.payload.id,
                checked: !!action.payload.checked,
                disabled: !!action.payload.disabled,
            },
        ],
        total: state.total + 1,
        nbChecked: state.nbChecked + (action.payload.checked ? 1 : 0),
    };

    if (state === groupableCheckboxInitialState) {
        newState.parentId = action.payload.parentId;
    }

    return newState;
};

export const removeParentCheckbox = (
    state: IGroupableCheckboxesState[],
    action: IReduxAction<IGroupableCheckboxActionPayload>
): IGroupableCheckboxesState[] => {
    return _.reject(state, (checkboxState: IGroupableCheckboxesState) => action.payload.id === checkboxState.parentId);
};

export const removeChildCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    const checkboxState: ICheckboxState = _.findWhere(state.checkboxes, {id: action.payload.id});
    if (checkboxState) {
        return {
            checkboxes: _.reject(state.checkboxes, (checkbox: ICheckboxState) => checkbox.id === action.payload.id),
            nbChecked: state.nbChecked + (checkboxState && checkboxState.checked ? -1 : 0),
            total: state.total + (checkboxState ? -1 : 0),
        };
    }
    return state;
};

export const toggleChildCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    let isChecked: boolean;
    const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {
        if (checkbox.id === action.payload.id) {
            isChecked = !checkbox.checked;
            return {
                ...checkbox,
                id: checkbox.id,
                checked: isChecked,
            };
        }
        return checkbox;
    });

    const nbChecked: number = (state.nbChecked += isChecked ? 1 : -1);
    return {
        ...state,
        parent: {
            ...state.parent,
            id: action.payload.parentId,
            checked: nbChecked === state.total,
        },
        nbChecked,
        checkboxes: [...checkboxes],
    };
};

export const toggleParentCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    const isChecked: boolean = !state.parent.checked;
    const newCheckboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {
        return {
            ...checkbox,
            checked: checkbox.disabled ? checkbox.checked : isChecked,
        };
    });
    return {
        ...state,
        parent: {
            ...state.parent,
            id: action.payload.id,
            checked: isChecked,
        },
        checkboxes: newCheckboxes,
        nbChecked: calculateTotalCheckboxesChecked(newCheckboxes),
    };
};

export const disabledParentCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    const isDisabled: boolean = !state.parent.disabled;
    return {
        ...state,
        parent: {
            ...state.parent,
            id: action.payload.id,
            disabled: isDisabled,
        },
    };
};

export const disabledChildCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    const checkboxes: ICheckboxState[] = _.map(state.checkboxes, (checkbox: ICheckboxState) => {
        if (checkbox.id === action.payload.id) {
            return {
                ...checkbox,
                id: checkbox.id,
                disabled: !checkbox.disabled,
            };
        }
        return checkbox;
    });
    return {
        ...state,
        checkboxes: [...checkboxes],
    };
};

export const disabledAllCheckbox = (
    state: IGroupableCheckboxesState,
    action: IReduxAction<IGroupableCheckboxActionPayload>
) => {
    const disabled: boolean = action.payload.disabled || !state.parent.disabled;
    return {
        ...state,
        parent: {
            ...state.parent,
            id: action.payload.id,
            disabled: disabled,
        },
        checkboxes: _.map(state.checkboxes, (checkbox: ICheckboxState) => ({
            ...checkbox,
            disabled: disabled,
        })),
    };
};
