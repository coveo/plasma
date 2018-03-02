import * as _ from 'underscore';

export const convertUndefinedAndNullToEmptyString = (value: any) =>
    _.isUndefined(value) || _.isNull(value)
        ? ''
        : value;
