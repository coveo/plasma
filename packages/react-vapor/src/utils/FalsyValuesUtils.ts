import * as _ from 'underscore';

export const convertUndefinedAndNullToEmptyString = (value: any) =>
    _.isUndefined(value) || _.isNull(value)
        ? ''
        : value;

export const callIfDefined = <T>(callback: (...params: any[]) => T, ...args: any[]): T => {
    if (_.isFunction(callback)) {
        return callback(...args);
    }
};
