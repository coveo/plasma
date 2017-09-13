import { createChainedFunction } from './createChainedFunction';

describe('createChainedFunction', () => {
  it('should return function that calls all functions provided as input', () => {
    let func1CalledCount = 0;
    let func2CalledCount = 0;
    let func3CalledCount = 0;

    const resultingFunction = createChainedFunction(() => func1CalledCount++,
      () => func2CalledCount++,
      () => func3CalledCount++);
    expect(func1CalledCount).toBe(0);
    expect(func2CalledCount).toBe(0);
    expect(func3CalledCount).toBe(0);

    resultingFunction();

    expect(func1CalledCount).toBe(1);
    expect(func2CalledCount).toBe(1);
    expect(func3CalledCount).toBe(1);
  });

  it('should ignore null parameter inputs', () => {
    let counter = 0;
    const resultingFunction = createChainedFunction(null,
      () => counter++,
      null,
      () => counter++);

    resultingFunction();
    expect(counter).toBe(2);
  });

  it('should return null when called only with null', () => {
    const resultingFunction = createChainedFunction(null);

    expect(resultingFunction).toBe(null);
  });

  it('should return null when called only with undefined', () => {
    const resultingFunction = createChainedFunction(undefined);

    expect(resultingFunction).toBe(null);
  });
});
