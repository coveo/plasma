import { IReduxAction } from '../../../utils/ReduxUtils';
import { FlatSelectActions, IFlatSelectActionPayload } from '../FlatSelectActions';
import {
  flatSelectInitialState, flatSelectReducer, flatSelectsInitialState, flatSelectsReducer,
  IFlatSelectState,
} from '../FlatSelectReducers';

describe('FlatSelect', () => {
  let genericAction: IReduxAction<IFlatSelectActionPayload> = {
    type: 'DO_SOMETHING',
    payload: {
      id: 'flat-select-id',
    },
  };

  it('should return the default state if the action is not defined and the state is undefined', () => {
    let oldState: IFlatSelectState[] = undefined;
    let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, genericAction);

    expect(flatSelectState).toBe(flatSelectsInitialState);
  });

  it('should return the default state if the action is not defined and the state is undefined for one flat select', () => {
    let oldState: IFlatSelectState = undefined;
    let actionBarState: IFlatSelectState = flatSelectReducer(oldState, genericAction);

    expect(actionBarState).toBe(flatSelectInitialState);
  });

  it('should return the old state when the action is not defined', () => {
    let oldState: IFlatSelectState[] = [flatSelectInitialState];
    let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, genericAction);

    expect(flatSelectState).toBe(oldState);
  });

  it('should return the old state when the action is not defined for one flat select', () => {
    let oldState: IFlatSelectState = flatSelectInitialState;
    let actionBarState: IFlatSelectState = flatSelectReducer(oldState, genericAction);

    expect(actionBarState).toBe(oldState);
  });

  it('should return the old state with one more FlatSelectState when the action is "ADD_FLAT_SELECT"', () => {
    let oldState: IFlatSelectState[] = flatSelectsInitialState;
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.add,
      payload: {
        id: 'flat-select-id',
      },
    };
    let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

    expect(flatSelectState.length).toBe(oldState.length + 1);
    expect(flatSelectState.filter(flatSelect => flatSelect.id === action.payload.id).length).toBe(1);

    oldState = flatSelectState;
    action.payload.id = 'flat-select-id-2';
    flatSelectState = flatSelectsReducer(oldState, action);

    expect(flatSelectState.length).toBe(oldState.length + 1);
    expect(flatSelectState.filter(flatSelect => flatSelect.id === action.payload.id).length).toBe(1);
  });

  it('should return the old state without the flatSelectState with the flat select id when the action is "REMOVE_FLAT_SELECT', () => {
    let oldState: IFlatSelectState[] = [
      {
        id: 'flat-select-id-1',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-2',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-3',
        selectedOption: undefined,
      },
    ];
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.remove,
      payload: {
        id: 'flat-select-id-1',
      },
    };
    let flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

    expect(flatSelectState.length).toBe(oldState.length - 1);
    expect(flatSelectState.filter(flatSelect => flatSelect.id === action.payload.id).length).toBe(0);

    oldState = flatSelectState;
    action.payload.id = 'flat-select-id-2';
    flatSelectState = flatSelectsReducer(oldState, action);

    expect(flatSelectState.length).toBe(oldState.length - 1);
    expect(flatSelectState.filter(flatSelect => flatSelect.id === action.payload.id).length).toBe(0);
  });

  it('should return the old state when the action is "REMOVE_ACTION_BAR" and the prompt id does not exist', () => {
    const oldState: IFlatSelectState[] = [
      {
        id: 'flat-select-id-1',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-2',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-3',
        selectedOption: undefined,
      },
    ];
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.remove,
      payload: {
        id: 'some-action-bar4',
      },
    };
    const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);

    expect(flatSelectState.length).toBe(oldState.length);
    expect(flatSelectState.filter(flatSelect => flatSelect.id === action.payload.id).length).toBe(0);
  });

  it('should return the old state with the flatSelectState selected option updated when the action is "SELECT_FLAT_SELECT"', () => {
    const oldState: IFlatSelectState[] = [
      {
        id: 'flat-select-id-1',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-2',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-3',
        selectedOption: undefined,
      },
    ];
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.select,
      payload: {
        id: 'flat-select-id-1',
        selectedOption: { option: { content: 'test' } },
      },
    };

    const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);
    expect(flatSelectState.filter(flatSelect => flatSelect.selectedOption === action.payload.selectedOption).length).toBe(1);
  });

  it('should return the old state if the id does not exist when the action is "SELECT_FLAT_SELECT"', () => {
    const oldState: IFlatSelectState[] = [
      {
        id: 'flat-select-id-1',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-2',
        selectedOption: undefined,
      }, {
        id: 'flat-select-id-3',
        selectedOption: undefined,
      },
    ];
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.select,
      payload: {
        id: 'invalid-id',
        selectedOption: { option: { content: 'test' } },
      },
    };

    const flatSelectState: IFlatSelectState[] = flatSelectsReducer(oldState, action);
    expect(flatSelectState.filter(flatSelect => flatSelect.selectedOption === action.payload.selectedOption).length).toBe(0);
  });

  it('should return the old state if the id does not exist when the action is "SELECT_FLAT_SELECT" for one flat select', () => {
    const oldState: IFlatSelectState = {
      id: 'flat-select-id-1',
      selectedOption: undefined,
    };
    let action: IReduxAction<IFlatSelectActionPayload> = {
      type: FlatSelectActions.select,
      payload: {
        id: 'invalid-id',
        selectedOption: { option: { content: 'test' } },
      },
    };

    const flatSelectState: IFlatSelectState = flatSelectReducer(oldState, action);
    expect(flatSelectState.selectedOption === action.payload.selectedOption).toBe(false);
  });
});
