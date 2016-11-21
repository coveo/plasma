import { IReduxAction } from '../../../utils/ReduxUtils';
import { IDropdownActionPayload, DropdownActions } from '../DropdownActions';
import {
  IDropdownState, dropdownsReducer, dropdownsInitialState, dropdownInitialState,
  dropdownReducer
} from '../DropdownReducers';

describe('Reducers', () => {

  describe('facets', () => {
    let genericAction: IReduxAction<IDropdownActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'dropdown'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: IDropdownState[] = undefined;
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, genericAction);

      expect(dropdownsState).toBe(dropdownsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one dropdown', () => {
      let oldState: IDropdownState = undefined;
      let dropdownState: IDropdownState = dropdownReducer(oldState, genericAction);

      expect(dropdownState).toBe(dropdownInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: IDropdownState[] = [dropdownInitialState];
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, genericAction);

      expect(dropdownsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one facet', () => {
      let oldState: IDropdownState = dropdownInitialState;
      let dropdownState: IDropdownState = dropdownReducer(oldState, genericAction);

      expect(dropdownState).toBe(oldState);
    });

    it('should return the old state with one more DropdownState when the action is "ADD_DROPDOWN"', () => {
      let oldState: IDropdownState[] = dropdownsInitialState;
      let action: IReduxAction<IDropdownActionPayload> = {
        type: DropdownActions.add,
        payload: {
          id: 'dropdown'
        }
      };
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length + 1);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id).length).toBe(1);

      oldState = dropdownsState;
      action.payload.id = 'dropdown2';
      dropdownsState = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length + 1);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the DropdownState with the action facet when the action is "REMOVE_DROPDOWN"', () => {
      let oldState: IDropdownState[] = [
        {
          id: 'dropdown2',
          opened: false
        }, {
          id: 'dropdown3',
          opened: true
        }, {
          id: 'dropdown1',
          opened: false
        }
      ];
      let action: IReduxAction<IDropdownActionPayload> = {
        type: DropdownActions.remove,
        payload: {
          id: 'dropdown1'
        }
      };
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length - 1);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id).length).toBe(0);

      oldState = dropdownsState;
      action.payload.id = 'dropdown2';
      dropdownsState = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length - 1);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id).length).toBe(0);
    });

    it('should toggle the open property value of a dropdown when the action is "TOGGLE_DROPDOWN"', () => {
      let openValue = false;
      let oldState: IDropdownState[] = [
        {
          id: 'dropdown1',
          opened: openValue
        }, {
          id: 'dropdown3',
          opened: openValue
        }, {
          id: 'dropdown',
          opened: openValue
        }
      ];
      let action: IReduxAction<IDropdownActionPayload> = {
        type: DropdownActions.toggle,
        payload: {
          id: 'dropdown1'
        }
      };
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id)[0].opened).toBe(!openValue);
      expect(dropdownsState.filter(dropdown => dropdown.id !== action.payload.id)[0].opened).toBe(openValue);

      dropdownsState = dropdownsReducer(dropdownsState, action);

      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id)[0].opened).toBe(openValue);
      expect(dropdownsState.filter(dropdown => dropdown.id !== action.payload.id)[0].opened).toBe(openValue);
    });

    it('should set opened property value to false for all facets when the action is "CLOSE_DROPDOWN"', () => {
      let oldState: IDropdownState[] = [
        {
          id: 'dropdown3',
          opened: true
        }, {
          id: 'dropdown2',
          opened: false
        }, {
          id: 'dropdown1',
          opened: true
        }
      ];
      let action: IReduxAction<IDropdownActionPayload> = {
        type: DropdownActions.close,
        payload: {
          id: 'dropdown3'
        }
      };
      let dropdownsState: IDropdownState[] = dropdownsReducer(oldState, action);

      expect(dropdownsState.length).toBe(oldState.length);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id)[0].opened).toBe(false);

      dropdownsState = dropdownsReducer(dropdownsState, action);
      expect(dropdownsState.filter(dropdown => dropdown.id === action.payload.id)[0].opened).toBe(false);
    });
  });
});
