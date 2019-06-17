import * as _ from 'underscore';

export type ConfigSupplier<C = {}> = C | ((...args: any[]) => C);

export const HocUtils = {
    supplyConfig: <C>(supplier: ConfigSupplier<C>): C => (_.isFunction(supplier) ? supplier() : supplier),
};
