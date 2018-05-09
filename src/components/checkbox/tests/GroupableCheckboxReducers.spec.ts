import { IReduxAction } from '../../../utils/ReduxUtils';
import {GroupableCheckboxActions, IGroupableCheckboxActionPayload} from '../GroupableCheckboxActions';
import {
  groupableCheckboxesInitialState,
  groupableCheckboxesReducer,
  groupableCheckboxInitialState,
  groupableCheckboxReducer,
  IGroupableCheckboxesState,
} from '../GroupableCheckboxReducers';

describe('GroupableCheckboxes', () => {
  describe('CheckboxReducers', () => {
    const genericAction: IReduxAction<IGroupableCheckboxActionPayload> = {
      type: 'DO_SOMETHING',
      payload: {
        id: 'some-checkbox',
      },
    };

    it('should return the default state if the action is not defined and the state is undefined', () => {
      const oldState: IGroupableCheckboxesState[] = undefined;
      const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, genericAction);

      expect(groupableCheckboxsState).toBe(groupableCheckboxesInitialState);
    });

    it('should return the default state if the action is not defined and the state is undefined for one groupable checkbox', () => {
      const oldState: IGroupableCheckboxesState = undefined;
      const groupableCheckboxsState: IGroupableCheckboxesState = groupableCheckboxReducer(oldState, genericAction);

      expect(groupableCheckboxsState).toBe(groupableCheckboxInitialState);
    });

    it('should return the old state when the action is not defined', () => {
      const oldState: IGroupableCheckboxesState[] = [groupableCheckboxInitialState];
      const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, genericAction);

      expect(groupableCheckboxsState).toBe(oldState);
    });

    it('should return the old state when the action is not defined for one groupable checkbox', () => {
      const oldState: IGroupableCheckboxesState = groupableCheckboxInitialState;
      const checkboxState: IGroupableCheckboxesState = groupableCheckboxReducer(oldState, genericAction);

      expect(checkboxState).toBe(oldState);
    });
  });

  describe('addGroup action', () => {

    const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
    const getChildAction = (id: string = 'child-checkbox', checked: boolean = false ): IReduxAction<IGroupableCheckboxActionPayload> => ({
      type: GroupableCheckboxActions.addGroup,
      payload: {
        id,
        checked,
        parentId: 'parent-checkbox',
      },
    });

    const getParentAction = (id: string = 'parent-checkbox', checked: boolean = false ): IReduxAction<IGroupableCheckboxActionPayload> => ({
      type: GroupableCheckboxActions.addGroup,
      payload: {
        id,
        checked,
        isParent: true,
      },
    });

    it('should return a new state with the parent checkbox set if isParent is true', () => {
      const parentAction = getParentAction();
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, parentAction);

      expect(groupableCheckboxesState.length).toBe(oldState.length + 1, 'state length');

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.total).toBe(0, 'total');
      expect(groupableCheckboxState.nbSelected).toBe(0, 'nbSelected');

      expect(groupableCheckboxState.parentId).toBe(parentAction.payload.id);
      expect(groupableCheckboxState.parent.id).toBe(parentAction.payload.id);
      expect(groupableCheckboxState.parent.checked).toBe(parentAction.payload.checked);
    });

    it('should return a new state with the child checkbox if isParent is false or undefined', () => {
      const childAction = getChildAction();
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction);

      expect(groupableCheckboxesState.length).toBe(oldState.length + 1, 'state length');

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.total).toBe(1, 'total');
      expect(groupableCheckboxState.nbSelected).toBe(0, 'nbSelected');

      expect(groupableCheckboxState.parentId).toBe(childAction.payload.parentId);
      expect(groupableCheckboxState.checkboxes[0].id).toBe(childAction.payload.id);
      expect(groupableCheckboxState.checkboxes[0].checked).toBe(childAction.payload.checked);
    });

    it('should return a new state with the nbSelected updated to 1 if it is a child groupableCheckbox', () => {
      const childAction = getChildAction('child-action', true);
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction);

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.nbSelected).toBe(1, 'nbSelected');
    });

    it('should return a new state with the nbSelected updated to 0 if it is a parent groupableCheckbox', () => {
      const parentAction = getParentAction('parent-checkbox', true);
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, parentAction);

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.nbSelected).toBe(0, 'nbSelected');
    });

    it('should return a new state if we add 2 child groupableCheckboxes', () => {
      const childAction1 = getChildAction();
      const childAction2 = getChildAction('child-action-2', true);
      let groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction1);
      groupableCheckboxesState = groupableCheckboxesReducer(groupableCheckboxesState, childAction2);

      expect(groupableCheckboxesState.length).toBe(oldState.length + 1, 'state length');

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.total).toBe(2, 'total');
      expect(groupableCheckboxState.nbSelected).toBe(1, 'nbSelected');

      expect(groupableCheckboxState.checkboxes.length).toBe(2);
    });

    it('should add the child groupableCheckbox in the current state if it already created by the parent groupableCheckbox', () => {
      const parentAction = getParentAction();
      const childAction = getChildAction();
      let groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, parentAction);
      groupableCheckboxesState = groupableCheckboxesReducer(groupableCheckboxesState, childAction);

      const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxesState[0];
      expect(groupableCheckboxState.total).toBe(1, 'total');
      expect(groupableCheckboxState.parentId).toBe(parentAction.payload.id);
      expect(groupableCheckboxState.parent.id).toBe(parentAction.payload.id);
    });
  });

  describe('toggleGroup action', () => {

    const oldState: IGroupableCheckboxesState[] = [{
      total: 2,
      nbSelected: 1,
      checkboxes: [{ id: 'child-checkbox', checked: false}, { id: 'child-checkbox-1', checked: true}],
      parent: {
        id: 'parent-checkbox',
        checked: false,
      },
      parentId: 'parent-checkbox',
    }];

    const getChildAction = (id: string = 'child-checkbox'): IReduxAction<IGroupableCheckboxActionPayload> => ({
      type: GroupableCheckboxActions.toggleGroup,
      payload: {
        id,
        parentId: 'parent-checkbox',
        isParent: false,
      },
    });

    const getParentAction = (id: string = 'parent-checkbox'): IReduxAction<IGroupableCheckboxActionPayload> => ({
      type: GroupableCheckboxActions.toggleGroup,
      payload: {
        id,
        isParent: true,
      },
    });

    it('should return the old state if the child groupableCheckbox parentId do not exist in the state', () => {
      const childAction = getChildAction('invalid-id');
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction);

      expect(groupableCheckboxesState).toEqual(oldState);
    });

    it('should return the old state if the parent groupableCheckbox id do not exist in the state', () => {
      const parentAction = getParentAction('invalid-id');
      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, parentAction);

      expect(groupableCheckboxesState).toEqual(oldState);
    });

    it('should update the first child groupableCheckbox state checked to true', () => {
      const childAction = getChildAction();

      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction);

      expect(groupableCheckboxesState[0].checkboxes[0].checked).toBe(true);
    });

    it('should update the second child groupableCheckbox state checked to false', () => {
      const childAction = getChildAction('child-checkbox-1');

      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, childAction);

      expect(groupableCheckboxesState[0].checkboxes[1].checked).toBe(false);
    });

    it('should update the parent groupableCheckbox state checked to true', () => {
      const parentAction = getParentAction();

      const groupableCheckboxesState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, parentAction);

      expect(groupableCheckboxesState[0].parent.checked).toBe(true);
    });

  });

  describe('removeGroup action', () => {

  });
});
