import {ReduxUtils} from './ReduxUtils';

describe('ReduxUtils', () => {
    it('should correctly merge all props when calling ReduxUtils.mergeProps is called', () => {
        const expectedStateProps = {
            a: 'something',
            b: false,
        };
        const expectedDispatchProps = {
            c: jasmine.createSpy('c'),
        };
        const expectedOwnProps = {
            d: 'd',
        };
        const result = ReduxUtils.mergeProps(expectedStateProps, expectedDispatchProps, expectedOwnProps);

        expect(result).toEqual(jasmine.objectContaining(expectedStateProps));
        expect(result).toEqual(jasmine.objectContaining(expectedDispatchProps));
        expect(result).toEqual(jasmine.objectContaining(expectedOwnProps));
    });
});
