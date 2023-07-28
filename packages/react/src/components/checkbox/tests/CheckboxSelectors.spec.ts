import {CheckboxSelectors} from '../CheckboxSelectors';

describe('CheckboxSelectors', () => {
    describe('getIsSelected', () => {
        describe('when the state is checkboxState', () => {
            it('should not throw when no checkbox exist at the specified id', () => {
                expect(() => {
                    CheckboxSelectors.getIsSelected({checkboxes: []}, {id: ''});
                    CheckboxSelectors.getIsSelected({checkboxes: []}, {id: 'I do not exist in the state'});
                }).not.toThrow();
            });

            it('should return false when the checkbox at the specified id is not checked', () => {
                const id = 'angry-lizard';
                const state = {
                    checkboxes: [{id, checked: false, disabled: false}],
                };

                expect(CheckboxSelectors.getIsSelected(state, {id})).toBe(false);
            });

            it('should return true when the checkbox at the specified id is checked', () => {
                const id = 'happy-lizard';
                const state = {
                    checkboxes: [{id, checked: true, disabled: false}],
                };

                expect(CheckboxSelectors.getIsSelected(state, {id})).toBe(true);
            });
        });

        describe('when the state is groupableCheckboxesState', () => {
            it('should not throw when no checkbox exist in groupableCheckboxes with a specified id', () => {
                expect(() => {
                    CheckboxSelectors.getIsSelected(
                        {groupableCheckboxes: [{total: 100, nbChecked: 0, checkboxes: [], parentId: ''}]},
                        {id: '', isGroupableState: true, groupableCheckboxProps: {parentId: ''}},
                    );
                    CheckboxSelectors.getIsSelected(
                        {groupableCheckboxes: [{total: 100, nbChecked: 0, checkboxes: [], parentId: ''}]},
                        {
                            id: 'I do not exist in the state',
                            isGroupableState: true,
                            groupableCheckboxProps: {parentId: ''},
                        },
                    );
                }).not.toThrow();
            });

            it('should return false when the checkbox in the groupabelCheckboxes at the specified id is not checked', () => {
                const id = 'dummy-id';
                const state = {
                    groupableCheckboxes: [
                        {
                            total: 100,
                            nbChecked: 1,
                            checkboxes: [{id, checked: false, disabled: false}],
                            parentId: 'parentId',
                        },
                    ],
                };

                expect(
                    CheckboxSelectors.getIsSelected(state, {
                        id,
                        isGroupableState: true,
                        groupableCheckboxProps: {parentId: 'parentId'},
                    }),
                ).toBe(false);
            });

            it('should return true when the checkbox in the groupabelCheckboxes at the specified id is checked', () => {
                const id = 'dummy-id';
                const state = {
                    groupableCheckboxes: [
                        {
                            total: 100,
                            nbChecked: 1,
                            checkboxes: [{id, checked: true, disabled: false}],
                            parentId: 'parentId',
                        },
                    ],
                };

                expect(
                    CheckboxSelectors.getIsSelected(state, {
                        id,
                        isGroupableState: true,
                        groupableCheckboxProps: {parentId: 'parentId'},
                    }),
                ).toBe(true);
            });
        });
    });
});
