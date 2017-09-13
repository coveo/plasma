export const createChainedFunction = (...funcs: Function[]) => {
  return funcs
    .filter(f => f != null)
    .reduce((acc: Function, f: Function) => {
      if (typeof f !== 'function') {
        throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
      }

      if (acc === null) {
        return f;
      }

      return (...args: any[]) => {
        acc(args);
        f(args);
      };
    }, null);
};
