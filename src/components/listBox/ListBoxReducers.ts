import * as _ from 'underscore';
import { IReduxAction } from '../../utils/ReduxUtils';
import {IListBoxPayload, ListBoxActions} from './ListBoxActions';

export interface IListBoxState {
  id: string;
  selected: string[];
}

export const listBoxInitialState: IListBoxState = { id: undefined, selected: [] };
export const listBoxesInitialState: IListBoxState[] = [];

export const listBoxReducer = (state: IListBoxState = listBoxInitialState, action: IReduxAction<IListBoxPayload>): IListBoxState => {
  switch (action.type) {
    case ListBoxActions.add:
      const selected = _.chain(action.payload.items)
        .where({selected: true}).pluck('value')
        .value();
      return {
        id: action.payload.id,
        selected: selected || state.selected,
      };
    case ListBoxActions.select:
      if (state.id !== action.payload.id) {
        return state;
      }
      if (action.payload.multi) {
        return _.extend({}, state, {
          selected: [...state.selected, action.payload.value],
        });
      }
      return _.extend({}, state, {
        selected: [action.payload.value],
      });
    case ListBoxActions.unselect:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        selected: _.without(state.selected, action.payload.value),
      });
    case ListBoxActions.clear:
      if (state.id !== action.payload.id) {
        return state;
      }
      return _.extend({}, state, {
        selected: [],
      });
    default:
      return state;
  }
};

export const listBoxesReducer = (state: IListBoxState[] = listBoxesInitialState, action: IReduxAction<IListBoxPayload>): IListBoxState[] => {
  switch (action.type) {
    case ListBoxActions.add:
      return [
        ...state,
        listBoxReducer(undefined, action),
      ];
    case ListBoxActions.remove:
      return _.reject(state, (listBox: IListBoxState) => {
        return action.payload.id === listBox.id;
      });
    case ListBoxActions.clear:
    case ListBoxActions.unselect:
    case ListBoxActions.select:
      return state.map((lastUpdated: IListBoxState) =>
        listBoxReducer(lastUpdated, action),
      );
    default:
      return state;
  }
};
