import {IReduxAction} from '../../../utils/ReduxUtils';
import {FlatSelectActions, IFlatSelectActionPayload} from '../FlatSelectActions';
import {
    flatSelectInitialState,
    flatSelectReducer,
    flatSelectsInitialState,
    flatSelectsReducer,
    IFlatSelectState,
} from '../FlatSelectReducers';

describe('FlatSelect', () => {
    const genericAction: IReduxAction<IFlatSelectActionPayload> = {
        type: 'DO_SOMETHING',
        payload: {
            id: 'flat-select-id',
        },
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(undefined, genericAction);

        expect(flatSelectState).toBe(flatSelectsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one flat select', () => {
        const flatSelectState: IFlatSelectState = flatSelectReducer(undefined, genericAction);

        expect(flatSelectState).toBe(flatSelectInitialState);
    });

    it('should return the old state when the action is not defined', () => {
        const oldState: IFlatSelectState[] = [flatSelectInitialState];
        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, genericAction);

        expect(flatSelectState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one flat select', () => {
        const oldState: IFlatSelectState = flatSelectInitialState;
        const flatSelectState: IFlatSelectState = flatSelectReducer(oldState, genericAction);

        expect(flatSelectState).toBe(oldState);
    });

    it('should return the old state with one more FlatSelectState when the action is "ADD_FLAT_SELECT"', () => {
        let oldState: IFlatSelectState[] = flatSelectsInitialState;
        const action: IReduxAction<IFlatSelectActionPayload> = {
            type: FlatSelectActions.add,
            payload: {
                id: 'flat-select-id',
            },
        };
        let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

        expect(flatSelectState.length).toBe(oldState.length + 1);
        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(1);

        oldState = flatSelectState;
        action.payload.id = 'flat-select-id-2';
        flatSelectState = flatSelectsReducer(oldState, action);

        expect(flatSelectState.length).toBe(oldState.length + 1);
        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the flatSelectState with the flat select id when the action is "REMOVE_FLAT_SELECT', () => {
        let oldState: IFlatSelectState[] = [
            {
                id: 'flat-select-id-1',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-2',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-3',
                selectedOptionId: undefined,
            },
        ];
        const action: IReduxAction<IFlatSelectActionPayload> = {
            type: FlatSelectActions.remove,
            payload: {
                id: 'flat-select-id-1',
            },
        };
        let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

        expect(flatSelectState.length).toBe(oldState.length - 1);
        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);

        oldState = flatSelectState;
        action.payload.id = 'flat-select-id-2';
        flatSelectState = flatSelectsReducer(oldState, action);

        expect(flatSelectState.length).toBe(oldState.length - 1);
        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state when the action is "REMOVE_FLAT_SELECT" and the prompt id does not exist', () => {
        const oldState: IFlatSelectState[] = [
            {
                id: 'flat-select-id-1',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-2',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-3',
                selectedOptionId: undefined,
            },
        ];
        const action: IReduxAction<IFlatSelectActionPayload> = {
            type: FlatSelectActions.remove,
            payload: {
                id: 'flat-select-id-4',
            },
        };
        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

        expect(flatSelectState.length).toBe(oldState.length);
        expect(flatSelectState.filter((flatSelect) => flatSelect.id === action.payload.id).length).toBe(0);
    });

    it('should return the old state with the flatSelectState selected option updated when the action is "SELECT_FLAT_SELECT"', () => {
        const oldState: IFlatSelectState[] = [
            {
                id: 'flat-select-id-1',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-2',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-3',
                selectedOptionId: undefined,
            },
        ];
        const action: IReduxAction<IFlatSelectActionPayload> = {
            type: FlatSelectActions.select,
            payload: {
                id: 'flat-select-id-1',
                selectedOptionId: 'id',
            },
        };

        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);
        expect(
            flatSelectState.filter((flatSelect) => flatSelect.selectedOptionId === action.payload.selectedOptionId)
                .length
        ).toBe(1);
    });

    it('should return the old state if the id does not exist when the action is "SELECT_FLAT_SELECT"', () => {
        const oldState: IFlatSelectState[] = [
            {
                id: 'flat-select-id-1',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-2',
                selectedOptionId: undefined,
            },
            {
                id: 'flat-select-id-3',
                selectedOptionId: undefined,
            },
        ];
        const action: IReduxAction<IFlatSelectActionPayload> = {
            type: FlatSelectActions.select,
            payload: {
                id: 'invalid-id',
                selectedOptionId: 'id',
            },
        };

        const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);
        expect(
            flatSelectState.filter((flatSelect) => flatSelect.selectedOptionId === action.payload.selectedOptionId)
                .length
        ).toBe(0);
    });
});
