export const createChainedFunction = (...funcs: Function[]) => {
  return funcs
    .filter(f => f != null)
    .reduce((accumulator: Function, func: Function) => {
      if (accumulator === null) {
        return func;
      }

      return (...args: any[]) => {
        accumulator(args);
        func(args);
      };
    }, null);
};
