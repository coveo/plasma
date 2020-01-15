import * as QueryString from 'query-string';

/* istanbul ignore next */
function getQuery() {
    const queryPosition = window.location.hash.lastIndexOf('?');
    return queryPosition >= 0 ? window.location.hash.substring(queryPosition, window.location.hash.length) : '';
}

/* istanbul ignore next */
function getPathName() {
    return window.location.hash.indexOf('?') >= 0
        ? window.location.href.substring(0, window.location.href.lastIndexOf('?'))
        : window.location.href;
}

function toObject(query: string) {
    return {...QueryString.parse(query, {parseBooleans: true, parseNumbers: true, sort: false})};
}

function toQueryString(obj: object): string {
    return QueryString.stringify(obj, {sort: false});
}

function getSearchParams(): {[key: string]: any} {
    return UrlUtils.toObject(UrlUtils.getQuery());
}

export const UrlUtils = {
    getQuery,
    getSearchParams,
    getPathName,
    toQueryString,
    toObject,
};
