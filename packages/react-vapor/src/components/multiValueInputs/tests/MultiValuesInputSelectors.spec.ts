import {IReactVaporState} from '../../../ReactVapor';
import {MultiValuesInputSelectors} from '../MultiValuesInputSelectors';

describe('MultiValuesInputSelectors', () => {
    describe('getValues', () => {
        it('should not throw and return an empty array when the multi-value does not exists', () => {
            expect(MultiValuesInputSelectors.getValues({} as IReactVaporState, undefined)).toEqual([]);
            expect(MultiValuesInputSelectors.getValues({} as IReactVaporState, null)).toEqual([]);
            expect(MultiValuesInputSelectors.getValues({} as IReactVaporState, '')).toEqual([]);
        });

        it('should return the values from the inputs', () => {
            const id = '🍣';
            const expectedValues = ['🍱', '🍙', '🍚'];
            const testState = ({
                multilineIds: {
                    [id]: {id, list: ['🍝', '🍜', '🍲']},
                },
                inputs: [
                    {id: '🍝', value: '🍱'},
                    {id: '🍲', value: '🍚'},
                    {id: '🍜', value: '🍙'},
                ],
            } as any) as IReactVaporState;

            expect(MultiValuesInputSelectors.getValues(testState, id)).toEqual(expectedValues);
        });

        it('should not return the values from the another multiline', () => {
            const id = '🇮🇹';
            const expectedValues = ['🍝'];
            const testState = ({
                multilineIds: {
                    [id]: {id, list: ['🍕']},
                    other: {id: 'other', list: ['👾']},
                },
                inputs: [
                    {id: '🍕', value: '🍝'},
                    {id: '👾', value: '🤖'},
                ],
            } as any) as IReactVaporState;

            expect(MultiValuesInputSelectors.getValues(testState, id)).toEqual(expectedValues);
        });
    });
});
