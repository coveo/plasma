import { flatSelectInitialState, IFlatSelectState } from '../FlatSelectReducers';
import { FlatSelectSelectors } from '../FlatSelectSelectors';

fdescribe('FlatSelectSelectors', () => {
    describe('getInput', () => {
        it('should return the default flatSelect state when the flatSelect is not in the store', () => {
            const FlatSelect = FlatSelectSelectors.getInput({ flatSelect: [] }, { id: 'nothing is selected by the user' });
            expect(FlatSelect).toEqual(flatSelectInitialState);
        });

        it('should return the selected FlatSelect', () => {
            const expectedSelectedFlatSelect: IFlatSelectState = {
                id: 'the-id',
                selectedOptionId: 'the-selected-option-id',
            };
            const selectedFlatSelect = FlatSelectSelectors.getInput({ flatSelect: [expectedSelectedFlatSelect] }, { id: expectedSelectedFlatSelect.id });
            expect(selectedFlatSelect).toEqual(expectedSelectedFlatSelect);
        });
    });
});

describe('getSelectedOptionId', () => {
    it('should return undefined state if no other value is chosen in the state', () => {
        const selectedOptionId = FlatSelectSelectors.getSelectedOptionId({ flatSelect: [] }, { id: 'nothing-is-selected-by-the-user' });
        expect(selectedOptionId).toBe(undefined);
    });

    it('should return the flatSelected value from the state that the user chose', () => {
        const expectedSelectedFlatSelect: IFlatSelectState = {
            id: 'the-id',
            selectedOptionId: 'the-selected-option-id',
        };
        const selectedFlatSelectOptionId = FlatSelectSelectors.getSelectedOptionId({ flatSelect: [expectedSelectedFlatSelect] }, { id: expectedSelectedFlatSelect.id });
        expect(expectedSelectedFlatSelect.selectedOptionId).toEqual(selectedFlatSelectOptionId);
    });
});
