import {CheckboxSelectors} from '../CheckboxSelectors';

describe('CheckboxSelectors', () => {
    describe('getIsSelected', () => {
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
});
