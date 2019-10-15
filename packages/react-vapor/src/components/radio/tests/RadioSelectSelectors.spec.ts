import {IRadioSelectState, radioSelectInitialState} from '../RadioSelectReducers';
import {RadioSelectSelectors} from '../RadioSelectSelectors';

describe('RadioSelectSelectors', () => {
    describe('get', () => {
        it('should return the default radio select state when the radio select does not exist in the state', () => {
            const radioSelect = RadioSelectSelectors.get({radioSelects: []}, {id: 'I-do-not-exist-in-the-state'});
            expect(radioSelect).toEqual(radioSelectInitialState);
        });

        it('should return the right radio select state for the specified id', () => {
            const expectedRadioSelect: IRadioSelectState = {
                id: 'radio-select-123',
                value: 'choice-2',
                disabledValues: [],
            };
            const radioSelect = RadioSelectSelectors.get(
                {radioSelects: [expectedRadioSelect]},
                {id: expectedRadioSelect.id}
            );
            expect(radioSelect).toEqual(expectedRadioSelect);
        });
    });

    describe('getValue', () => {
        it('should return undefined when the radio select does not exist in the state', () => {
            const selectedValue = RadioSelectSelectors.getValue(
                {radioSelects: []},
                {id: 'I-do-not-exist-in-the-state'}
            );
            expect(selectedValue).toBeUndefined();
        });

        it('should return the radio select value from the state', () => {
            const expectedRadioSelect: IRadioSelectState = {
                id: 'radio-select-123',
                value: 'choice-2',
                disabledValues: [],
            };
            const selectedValue = RadioSelectSelectors.getValue(
                {radioSelects: [expectedRadioSelect]},
                {id: expectedRadioSelect.id}
            );
            expect(selectedValue).toBe(expectedRadioSelect.value);
        });
    });

    describe('getDisabledValue', () => {
        it('should return undefined when the radio select does not exist in the state', () => {
            const disabledValue = RadioSelectSelectors.getDisabledValue(
                {radioSelects: []},
                {id: 'I-do-not-exist-in-the-state'}
            );
            expect(disabledValue).toBeUndefined();
        });

        it('should return the disabled values if the radio select from the state', () => {
            const expectedRadioSelect: IRadioSelectState = {
                id: 'I-have-disabled-values',
                value: 'im-not-disabled',
                disabledValues: ['im-disabled', 'me-too'],
            };
            const disabledValues = RadioSelectSelectors.getDisabledValue(
                {radioSelects: [expectedRadioSelect]},
                {id: expectedRadioSelect.id}
            );
            expect(disabledValues).toBe(expectedRadioSelect.disabledValues);
        });
    });
});
