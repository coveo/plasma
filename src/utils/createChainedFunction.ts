export const createChainedFunction = (...funcs: ((...args: any[]) => void)[]) => {
  return funcs
    .filter((func: Function) => func != null)
    .reduce((accumulator: (...args: any[]) => void, func: (...args: any[]) => void) => {
      if (accumulator === null) {
        return func;
      }

      return (...args: any[]) => {
        accumulator(args);
        func(args);
      };
    }, null);
};
