import {IModalSelectState, modalSelectInitialState} from '../ModalSelectReducers';
import {ModalSelectSelectors} from '../ModalSelectSelectors';

describe('ModalSelectSelectors', () => {
    describe('get', () => {
        it('should return the default modal select state when the modal select does not exist in the state', () => {
            const modalSelect = ModalSelectSelectors.get({modalSelects: []}, {id: 'I-do-not-exist-in-the-state'});

            expect(modalSelect).toEqual(modalSelectInitialState);
        });

        it('should return the right modal select state for the specified id', () => {
            const expectedModalSelect: IModalSelectState = {
                id: 'modal-select-123',
                value: 'choice-2',
            };
            const modalSelect = ModalSelectSelectors.get(
                {modalSelects: [expectedModalSelect]},
                {id: expectedModalSelect.id}
            );

            expect(modalSelect).toEqual(expectedModalSelect);
        });
    });

    describe('getValue', () => {
        it('should return undefined when the modal select does not exist in the state', () => {
            const selectedValue = ModalSelectSelectors.getValue(
                {modalSelects: []},
                {id: 'I-do-not-exist-in-the-state'}
            );

            expect(selectedValue).toBeUndefined();
        });

        it('should return the modal select value from the state', () => {
            const expectedModalSelect: IModalSelectState = {
                id: 'modal-select-123',
                value: 'choice-2',
            };
            const selectedValue = ModalSelectSelectors.getValue(
                {modalSelects: [expectedModalSelect]},
                {id: expectedModalSelect.id}
            );

            expect(selectedValue).toBe(expectedModalSelect.value);
        });
    });
});
