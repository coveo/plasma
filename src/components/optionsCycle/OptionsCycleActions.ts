import { IReduxAction } from '../../utils/ReduxUtils';

export const OptionsCycleActions = {
  add: 'ADD_OPTIONS_CYCLE',
  remove: 'REMOVE_OPTIONS_CYCLE',
  change: 'CHANGE_OPTIONS_CYCLE'
};

export interface IOptionsCycleOptions {
  id: string;
}

export interface IChangeOptionsCycleOptions extends IOptionsCycleOptions {
  currentOption: number;
}

export const addOptionsCycle = (id: string, currentOption: number = 0): IReduxAction<IChangeOptionsCycleOptions> => ({
  type: OptionsCycleActions.add,
  payload: {
    id,
    currentOption
  }
});

export const removeOptionsCycle = (id: string): IReduxAction<IOptionsCycleOptions> => ({
  type: OptionsCycleActions.remove,
  payload: {
    id
  }
});

export const changeOptionsCycle = (id: string, currentOption: number): IReduxAction<IChangeOptionsCycleOptions> => ({
  type: OptionsCycleActions.change,
  payload: {
    id,
    currentOption
  }
});
