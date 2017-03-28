import { IReduxAction } from '../../Index';
import { ITabActionPayload, TabAction } from './TabActions';
import * as _ from 'underscore';

export interface ITabState {
  id: string;
  isSelected: boolean;
}

export const tabInitialState: ITabState = { id: undefined, isSelected: false };
export const tabsInitialState: ITabState[] = [];

export const tabReducer = (state: ITabState = tabInitialState,
  action: IReduxAction<ITabActionPayload>): ITabState => {
  switch (action.type) {
    case TabAction.addTab:
      return {
        id: action.payload.id,
        isSelected: state.isSelected
      };
    case TabAction.selectTab:
      return {
        id: state.id,
        isSelected: state.id === action.payload.id
      };
    default:
      return state;
  }
};

export const tabsReducer = (state: ITabState[] = tabsInitialState,
  action: IReduxAction<ITabActionPayload>): ITabState[] => {
  switch (action.type) {
    case TabAction.addTab:
      let isSelected = false;
      if (state.length === 0) {
        isSelected = true;
      }
      return [
        ...state,
        tabReducer({ id: undefined, isSelected }, action)
      ];
    case TabAction.removeTab:
      return _.reject(state, (tab: ITabState) => {
        return action.payload.id === tab.id;
      });
    case TabAction.selectTab:
      return state.map(tab => tabReducer(tab, action));
    default:
      return state;
  }
};
