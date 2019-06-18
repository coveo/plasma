import {InputSelectors} from '../InputSelectors';

describe('InputSelectors', () => {
    const ownProps = {
        id: 'iron man',
    };

    describe('getValue', () => {
        it('should return undefined if the input id is not in the state', () => {
            expect(
                InputSelectors.getValue(
                    {
                        inputs: [{id: 'ham man', value: 'man', valid: true, disabled: false}],
                    },
                    ownProps
                )
            ).toBeUndefined();
        });

        it('should return undefined if the input value is not defined', () => {
            expect(
                InputSelectors.getValue(
                    {
                        inputs: [{id: ownProps.id, value: undefined, valid: true, disabled: false}],
                    },
                    ownProps
                )
            ).toBeUndefined();
        });

        it('should return the value if the input is defined in the state', () => {
            const expectedValue = 'bacon';
            expect(
                InputSelectors.getValue(
                    {
                        inputs: [{id: ownProps.id, value: expectedValue, valid: true, disabled: false}],
                    },
                    ownProps
                )
            ).toBe(expectedValue);
        });
    });

    describe('getIsValid', () => {
        it('should return false if the input id is not in the state', () => {
            expect(
                InputSelectors.getIsValid(
                    {
                        inputs: [{id: 'ham man', value: 'man', valid: true, disabled: false}],
                    },
                    ownProps
                )
            ).toBe(false);
        });

        it('should return false if the input is not valid', () => {
            expect(
                InputSelectors.getIsValid(
                    {
                        inputs: [{id: ownProps.id, value: 'bacon', valid: false, disabled: false}],
                    },
                    ownProps
                )
            ).toBe(false);
        });

        it('should return true if the input is valid', () => {
            expect(
                InputSelectors.getIsValid(
                    {
                        inputs: [{id: ownProps.id, value: 'bacon', valid: true, disabled: false}],
                    },
                    ownProps
                )
            ).toBe(true);
        });
    });
});
