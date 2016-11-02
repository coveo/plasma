import {ReduxUtils} from './ReduxUtils';

describe('ReduxUtils', () => {
  it('should correctly merge all props when calling ReduxUtils.mergeProps is called', () => {
    let expectedStateProps = {
      a: 'something',
      b: false
    };
    let expectedDispatchProps = {
      c: jasmine.createSpy('c')
    };
    let expectedOwnProps = {
      d: 'd'
    };
    let result = ReduxUtils.mergeProps(expectedStateProps, expectedDispatchProps, expectedOwnProps);

    expect(result).toEqual(jasmine.objectContaining(expectedStateProps));
    expect(result).toEqual(jasmine.objectContaining(expectedDispatchProps));
    expect(result).toEqual(jasmine.objectContaining(expectedOwnProps));
  });
});
