import { IReduxAction } from '../../../utils/ReduxUtils';
import { ITableRowActionPayload, TableRowActions } from '../TableRowActions';
import {
  ITableRowState,
  tableRowsReducer,
  tableRowsInitialState,
  tableRowInitialState,
  tableRowReducer
} from '../TableRowReducers';

describe('Tables', () => {

  describe('TableRowReducers', () => {
    let genericAction: IReduxAction<ITableRowActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'row1'
      }
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      let oldState: ITableRowState[] = undefined;
      let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, genericAction);

      expect(collapsibleRowsState).toBe(tableRowsInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one row', () => {
      let oldState: ITableRowState = undefined;
      let collapsibleRowState: ITableRowState = tableRowReducer(oldState, genericAction);

      expect(collapsibleRowState).toBe(tableRowInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      let oldState: ITableRowState[] = [tableRowInitialState];
      let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, genericAction);

      expect(collapsibleRowsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one row', () => {
      let oldState: ITableRowState = tableRowInitialState;
      let collapsibleRowState: ITableRowState = tableRowReducer(oldState, genericAction);

      expect(collapsibleRowState).toBe(oldState);
    });

    it('should return the old state with one more CollapsibleRowState when the action is "ADD_ROW"', () => {
      let oldState: ITableRowState[] = tableRowsInitialState;
      let action: IReduxAction<ITableRowActionPayload> = {
        type: TableRowActions.add,
        payload: {
          id: 'row1'
        }
      };
      let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

      expect(collapsibleRowsState.length).toBe(oldState.length + 1);
      expect(collapsibleRowsState.filter(row => row.id === action.payload.id).length).toBe(1);

      oldState = collapsibleRowsState;
      action.payload.id = 'row2';
      collapsibleRowsState = tableRowsReducer(oldState, action);

      expect(collapsibleRowsState.length).toBe(oldState.length + 1);
      expect(collapsibleRowsState.filter(row => row.id === action.payload.id).length).toBe(1);
    });

    it('should return the old state without the CollapsibleRowState with the timer id when the action is "REMOVE_ROW"', () => {
      let oldState: ITableRowState[] = [
        {
          id: 'row2',
          opened: false
        }, {
          id: 'row1',
          opened: true
        }, {
          id: 'row3',
          opened: false
        }
      ];
      let action: IReduxAction<ITableRowActionPayload> = {
        type: TableRowActions.remove,
        payload: {
          id: 'row1'
        }
      };
      let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

      expect(collapsibleRowsState.length).toBe(oldState.length - 1);
      expect(collapsibleRowsState.filter(row => row.id === action.payload.id).length).toBe(0);

      oldState = collapsibleRowsState;
      action.payload.id = 'row2';
      collapsibleRowsState = tableRowsReducer(oldState, action);

      expect(collapsibleRowsState.length).toBe(oldState.length - 1);
      expect(collapsibleRowsState.filter(row => row.id === action.payload.id).length).toBe(0);
    });

    it('should toggle the open property value of a collapsible row when the action is "TOGGLE_ROW"', () => {
      let openValue = false;
      let oldState: ITableRowState[] = [
        {
          id: 'row2',
          opened: openValue
        }, {
          id: 'row1',
          opened: openValue
        }, {
          id: 'row3',
          opened: openValue
        }
      ];
      let action: IReduxAction<ITableRowActionPayload> = {
        type: TableRowActions.toggle,
        payload: {
          id: 'row1'
        }
      };
      let collapsibleRowsState: ITableRowState[] = tableRowsReducer(oldState, action);

      expect(collapsibleRowsState.length).toBe(oldState.length);
      expect(collapsibleRowsState.filter(row => row.id === action.payload.id)[0].opened).toBe(!openValue);
      expect(collapsibleRowsState.filter(row => row.id !== action.payload.id)[0].opened).toBe(openValue);

      collapsibleRowsState = tableRowsReducer(collapsibleRowsState, action);

      expect(collapsibleRowsState.filter(row => row.id === action.payload.id)[0].opened).toBe(openValue);
      expect(collapsibleRowsState.filter(row => row.id !== action.payload.id)[0].opened).toBe(openValue);
    });
  });
});
