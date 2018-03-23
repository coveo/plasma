import {IReduxAction} from '../../../utils/ReduxUtils';
import {
    addGroupedCheckbox, IGroupableCheckboxActionPayload, removeGroupedCheckbox,
    toggleGroupedCheckbox,
} from '../GroupableCheckboxActions';
import {
    groupableCheckboxesInitialState,
    groupableCheckboxesReducer,
    groupableCheckboxInitialState,
    groupableCheckboxReducer,
    IGroupableCheckboxesState,
} from '../GroupableCheckboxReducers';

describe('GroupableCheckbox', () => {
    describe('GroupableCheckboxReducers', () => {
        const genericAction: IReduxAction<IGroupableCheckboxActionPayload> = {
            type: 'DO_SOMETHING',
            payload: {
                id: 'some-checkbox',
            },
        };

        it('should return the default state if the action is not defined and the state is undefined', () => {
            const oldState: IGroupableCheckboxesState[] = undefined;
            const groupableCheckboxState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, genericAction);

            expect(groupableCheckboxState).toBe(groupableCheckboxesInitialState);
        });

        it('should return the default state if the action is not defined and the state is undefined for one checkbox', () => {
            const oldState: IGroupableCheckboxesState = undefined;
            const groupableCheckboxState: IGroupableCheckboxesState = groupableCheckboxReducer(oldState, genericAction);

            expect(groupableCheckboxState).toBe(groupableCheckboxInitialState);
        });

        it('should return the old state when the action is not defined', () => {
            const oldState: IGroupableCheckboxesState[] = [groupableCheckboxInitialState];
            const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, genericAction);

            expect(groupableCheckboxsState).toBe(oldState);
        });

        it('should return the old state when the action is not defined for one checkbox', () => {
            const oldState: IGroupableCheckboxesState = groupableCheckboxInitialState;
            const groupableCheckboxsState: IGroupableCheckboxesState = groupableCheckboxReducer(oldState, genericAction);

            expect(groupableCheckboxsState).toBe(oldState);
        });

        describe('AddGroup action', () => {
            let action: IReduxAction<IGroupableCheckboxActionPayload>;
            const parentId: string = 'parentId';

            it('should return a new state on add child checkbox', () => {
                action = addGroupedCheckbox('id', false, parentId);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState).not.toBe(oldState);
            });

            it('should add the child checkbox in the state', () => {
                action = addGroupedCheckbox('id', false, parentId);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].checkboxes.length).toBe(1, 'checkboxes is not defined');
                }
            });

            it('should update the total on add child checkbox', () => {
                action = addGroupedCheckbox('id', false, parentId);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].total).toBe(1, 'total was not updated');
                }
            });

            it('should have nbChecked equal to 0 on add checkbox not checked', () => {
                action = addGroupedCheckbox('id', false, parentId);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].nbChecked).toBe(0, 'nbChecked has been updated');
                }
            });

            it('should update the nbChecked equal to 1 on add child checkbox checked', () => {
                action = addGroupedCheckbox('id', true, parentId);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].nbChecked).toBe(1, 'nbChecked was not updated');
                }
            });

            it('should add the parent in the new state', () => {
                action = addGroupedCheckbox(parentId, false, undefined, true);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].parent).toBeDefined();
                    expect(groupableCheckboxsState[0].parentId).toBe('parentId');
                }
            });

            it('should return a new state on add parent checkbox', () => {
                action = addGroupedCheckbox(parentId, false, undefined, true);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState).not.toBe(oldState);
            });

            it('should add the parent in the new state', () => {
                action = addGroupedCheckbox(parentId, false, undefined, true);
                const oldState: IGroupableCheckboxesState[] = groupableCheckboxesInitialState;
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(oldState, action);
                expect(groupableCheckboxsState.length).toBe(1, 'parent checkbox was not added in the new state');
                if (groupableCheckboxsState.length) {
                    expect(groupableCheckboxsState[0].parent).toBeDefined();
                    expect(groupableCheckboxsState[0].parentId).toBe('parentId');
                }
            });

            describe('with a existing state', () => {
                let currentState: IGroupableCheckboxesState[];

                beforeEach(() => {
                    currentState = [{
                        total: 1,
                        nbChecked: 0,
                        parentId,
                        checkboxes: [
                            {
                                id: 'id1',
                                checked: false,
                            },
                        ],
                    },
                    ];
                });

                it('should return a new state on add parent checkbox in the existing state', () => {
                    action = addGroupedCheckbox(parentId, false, undefined, true);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState).not.toBe(currentState);
                });

                it('should add the parent in the current state', () => {
                    action = addGroupedCheckbox(parentId, false, undefined, true);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState.length).toBe(1, 'parent checkbox was not added in the current state');
                    if (groupableCheckboxsState.length) {
                        expect(groupableCheckboxsState[0].parent).toBeDefined();
                        expect(groupableCheckboxsState[0].parentId).toBe('parentId');
                    }
                });

                it('should return a new state on add child checkbox in the existing state', () => {
                    action = addGroupedCheckbox('id', false, parentId);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState).not.toBe(currentState);
                });

                it('should add the child checkbox in the current state', () => {
                    action = addGroupedCheckbox('id', false, parentId);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the current state');
                    if (groupableCheckboxsState.length) {
                        expect(groupableCheckboxsState[0].checkboxes.length).toBe(2);
                    }
                });

                it('should update the total on add child checkbox with an existing state', () => {
                    action = addGroupedCheckbox('id', false, parentId);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                    if (groupableCheckboxsState.length) {
                        expect(groupableCheckboxsState[0].total).toBe(2, 'total was not updated');
                    }
                });

                it('should have nbChecked equal to 1 on add checkbox checked with an existing state', () => {
                    action = addGroupedCheckbox('id', true, parentId);
                    const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                    expect(groupableCheckboxsState.length).toBe(1, 'child checkbox was not added in the new state');
                    if (groupableCheckboxsState.length) {
                        expect(groupableCheckboxsState[0].nbChecked).toBe(1, 'nbChecked has been updated');
                    }
                });
            });
        });

        describe('ToggleGroup action', () => {
            let action: IReduxAction<IGroupableCheckboxActionPayload>;
            const parentId: string = 'parentId';
            const childId: string = 'id1';

            let currentState: IGroupableCheckboxesState[];

            beforeEach(() => {
                currentState = [{
                    total: 1,
                    nbChecked: 0,
                    parentId,
                    parent: {
                        id: parentId,
                        checked: false,
                    },
                    checkboxes: [
                        {
                            id: childId,
                            checked: false,
                        },
                    ],
                },
                ];
            });

            it('should return the empty state if not defined', () => {
                action = toggleGroupedCheckbox('id', parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer([], action);
                expect(groupableCheckboxsState).toEqual([]);
            });

            it('should return a new state on toggle child checkbox', () => {
                action = addGroupedCheckbox('id', false, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState).not.toBe(currentState);
            });

            it('should update the child state checked to true', () => {
                action = toggleGroupedCheckbox(childId, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].checkboxes[0].checked).toBe(true);

            });

            it('should update the nbChecked on toggle child state checked set to true', () => {
                action = toggleGroupedCheckbox(childId, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].nbChecked).toBe(1);
            });

            it('should return a new state on toggle parent checkbox', () => {
                action = toggleGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState).not.toBe(currentState);
            });

            it('should update the parent state checked to true', () => {
                action = toggleGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].parent.checked).toBe(true);
            });

            it('should update child checkbox state checked on parent toggle to true', () => {
                action = toggleGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].checkboxes[0].checked).toBe(true);
            });

            it('should update the nbChecked equal to total on parent toggle to true', () => {
                action = toggleGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].nbChecked).toBe(1);
            });
        });

        describe('RemoveGroup action', () => {
            let action: IReduxAction<IGroupableCheckboxActionPayload>;
            const parentId: string = 'parentId';
            const childId: string = 'id1';

            let currentState: IGroupableCheckboxesState[];

            beforeEach(() => {
                currentState = [{
                    total: 2,
                    nbChecked: 1,
                    parentId,
                    parent: {
                        id: parentId,
                        checked: false,
                    },
                    checkboxes: [
                        {
                            id: childId,
                            checked: false,
                        },
                        {
                            id: childId + 1,
                            checked: true,
                        },
                    ],
                },
                ];
            });

            it('should return a new state on remove child checkbox', () => {
                action = removeGroupedCheckbox(childId, 'notParentId');
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState).not.toBe(currentState);
            });

            it('should return the state if the parentId is not in the state', () => {
                action = removeGroupedCheckbox(childId, 'notParentId');
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState).toEqual(currentState);
            });

            it('should remove the child checkbox from the state', () => {
                action = removeGroupedCheckbox(childId, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].checkboxes.length).toBe(1);
            });

            it('should update total on remove child checkbox', () => {
                action = removeGroupedCheckbox(childId, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].checkboxes.length).toBe(1);
            });

            it('should update nbChecked on remove child checkbox checked', () => {
                action = removeGroupedCheckbox(childId, parentId);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState[0].checkboxes.length).toBe(1);
            });

            it('should return a new state on remove parent checkbox', () => {
                action = removeGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState).not.toBe(currentState);
            });

            it('should remove the groupable state when the parent is removed', () => {
                action = removeGroupedCheckbox(parentId, undefined, true);
                const groupableCheckboxsState: IGroupableCheckboxesState[] = groupableCheckboxesReducer(currentState, action);
                expect(groupableCheckboxsState.length).toBe(0);
            });
        });
    });
});
