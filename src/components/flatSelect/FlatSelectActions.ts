import { IReduxAction } from '../../utils/ReduxUtils';
import { IFlatSelectOptionProps } from './FlatSelectOption';
import { IReduxActionsPayload } from '../../ReactVapor';

export interface IFlatSelectActionPayload extends IReduxActionsPayload {
  id: string;
  selectedOption?: IFlatSelectOptionProps;
}

export const FlatSelectActions = {
  add: 'ADD_FLAT_SELECT',
  remove: 'REMOVE_FLAT_SELECT',
  select: 'SELECT_FLAT_SELECT',
};

export const addFlatSelect = (id: string, selectedOption: IFlatSelectOptionProps): IReduxAction<IFlatSelectActionPayload> => ({
  type: FlatSelectActions.add,
  payload: {
    id,
    selectedOption,
  },
});

export const removeFlatSelect = (id: string): IReduxAction<IFlatSelectActionPayload> => ({
  type: FlatSelectActions.remove,
  payload: {
    id,
  },
});

export const selectFlatSelect = (id: string, selectedOption: IFlatSelectOptionProps): IReduxAction<IFlatSelectActionPayload> => ({
  type: FlatSelectActions.select,
  payload: {
    id,
    selectedOption,
  },
});
