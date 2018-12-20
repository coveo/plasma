import {InputSelectors} from '../InputSelectors';

describe('getContextValue', () => {
    const ownProps = {
        id: 'iron man',
    };

    it('should return undefined if the input id is not in the state', () => {
        expect(InputSelectors.getValue({inputs: [{id: 'ham man', value: 'man', valid: true, disabled: false}]}, ownProps))
            .toBeUndefined();
    });

    it('should return undefined if the input value is not defined', () => {
        expect(InputSelectors.getValue({inputs: [{id: ownProps.id, value: undefined, valid: true, disabled: false}]}, ownProps))
            .toBeUndefined();
    });

    it('should return the value if the input is defined in the state', () => {
        expect(InputSelectors.getValue({inputs: [{id: ownProps.id, value: 'value', valid: true, disabled: false}]}, ownProps))
            .toBe('value');
    });
});
