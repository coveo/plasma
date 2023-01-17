import {ReduxUtils} from './ReduxUtils.js';

describe('ReduxUtils', () => {
    it('should correctly merge all props when calling ReduxUtils.mergeProps is called', () => {
        const expectedStateProps = {
            a: 'something',
            b: false,
        };
        const expectedDispatchProps = {
            c: jest.fn(),
        };
        const expectedOwnProps = {
            d: 'd',
        };
        const result = ReduxUtils.mergeProps(expectedStateProps, expectedDispatchProps, expectedOwnProps);

        expect(result).toEqual(expect.objectContaining(expectedStateProps));
        expect(result).toEqual(expect.objectContaining(expectedDispatchProps));
        expect(result).toEqual(expect.objectContaining(expectedOwnProps));
    });
});
