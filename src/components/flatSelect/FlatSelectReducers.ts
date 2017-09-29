import { IReduxAction } from '../../utils/ReduxUtils';
import * as _ from 'underscore';
import { FlatSelectActions, IFlatSelectActionPayload } from './FlatSelectActions';
import { IFlatSelectOptionProps } from './FlatSelectOption';

export interface IFlatSelectState {
  id: string;
  selectedOption?: IFlatSelectOptionProps;
}

export const flatSelectInitialState: IFlatSelectState = { id: undefined, selectedOption: undefined };
export const flatSelectsInitialState: IFlatSelectState[] = [];

export const flatSelectReducer = (state: IFlatSelectState = flatSelectInitialState,
  action: (IReduxAction<IFlatSelectActionPayload>)): IFlatSelectState => {
  switch (action.type) {
    case FlatSelectActions.select:
      if (state.id !== action.payload.id) {
        return state;
      }

      return {
        id: state.id,
        selectedOption: action.payload.selectedOption,
      };
    case FlatSelectActions.add:
      return _.extend({}, action.payload);
    default:
      return state;
  }
};

export const flatSelectsReducer = (state: IFlatSelectState[] = flatSelectsInitialState,
  action: IReduxAction<IFlatSelectActionPayload>): IFlatSelectState[] => {
  switch (action.type) {
    case FlatSelectActions.select:
      return state.map((flatSelect: IFlatSelectState) => {
        return flatSelect.id === action.payload.id
          ? flatSelectReducer(flatSelect, action)
          : flatSelect;
      });
    case FlatSelectActions.add:
      return [
        ...state,
        flatSelectReducer(undefined, action),
      ];
    case FlatSelectActions.remove:
      return _.reject(state, (flatSelect: IFlatSelectState) => {
        return action.payload.id === flatSelect.id;
      });
    default:
      return state;
  }
};
