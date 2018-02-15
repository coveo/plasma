import * as _ from 'underscore';
import {IReduxAction} from '../../utils/ReduxUtils';
import {ListBoxActions} from '../listBox/ListBoxActions';
import {ISelectPayload, SelectActions} from './SelectActions';

export interface ISelectState {
  id: string;
  open: boolean;
}

export const selectInitialState: ISelectState = {id: undefined, open: false};
export const selectCompositeInitialState: ISelectState[] = [];

export const selectReducer = (state: ISelectState = selectInitialState, action: IReduxAction<ISelectPayload>): ISelectState => {
  switch (action.type) {
    case SelectActions.add:
      return {
        id: action.payload.id,
        open: state.open,
      };
    case SelectActions.close:
    case SelectActions.open:
    case SelectActions.toggle:
      if (state.id !== action.payload.id) {
        return state;
      }
      // if open was sent in the dispatch use the value. Otherwise toggle the property
      return _.extend({}, state, {
        open: !_.isUndefined(action.payload.open) ? action.payload.open : !state.open,
      });
    case ListBoxActions.select:
      if (action.payload.id !== state.id) {
        return state;
      }

      // when the user selects a value in the list, close the dropdown
      return _.extend({}, state, {
        open: false,
      });
    default:
      return state;
  }
};

export const selectCompositeReducer = (state: ISelectState[] = selectCompositeInitialState,
                                       action: IReduxAction<ISelectPayload>): ISelectState[] => {
  switch (action.type) {
    case SelectActions.add:
      return [
        ...state,
        selectReducer(undefined, action),
      ];
    case SelectActions.remove:
      return _.reject(state, (listBox: ISelectState) => {
        return action.payload.id === listBox.id;
      });
    case ListBoxActions.select:
    case SelectActions.toggle:
    case SelectActions.open:
    case SelectActions.close:
      return state.map((select: ISelectState) =>
        selectReducer(select, action),
      );
    default:
      return state;
  }
};
