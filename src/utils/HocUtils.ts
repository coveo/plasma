import * as _ from 'underscore';

type ConfigSupplier<C = {}> = C | ((...args: any[]) => C);

const HocUtils = {
    supplyConfig: <C>(supplier: ConfigSupplier<C>): C => _.isFunction(supplier) ? supplier() : supplier,
};

export {
    ConfigSupplier,
    HocUtils,
};
