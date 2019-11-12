import * as _ from 'underscore';

export const convertUndefinedAndNullToEmptyString = (value: any) =>
    _.isUndefined(value) || _.isNull(value) ? '' : value;

/**
 * @deprecated Typescript 3.7 now has built-in optional function calls.
 *
 * ```
 * callIfDefined(myfunction, arg1, arg2);
 *
 * // can be replaced with
 * myFunction?.(arg1, arg2);
 * ```
 */
export const callIfDefined = <T>(callback?: ((...params: any[]) => T) | null, ...args: any[]): T | undefined => {
    if (_.isFunction(callback)) {
        return callback(...args);
    }
};
