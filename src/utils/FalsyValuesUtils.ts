import * as _ from 'underscore';

export const convertUndefinedAndNullToEmptyString = (value: any) =>
    _.isUndefined(value) || _.isNull(value)
        ? ''
        : value;

export const callIfDefined = (callback: any, ...args: any[]): any => {
    if (_.isFunction(callback)) {
        return callback(...args);
    }
};
