import queryString from 'query-string';

/* istanbul ignore next */
const getQuery = () => {
    if (typeof window !== 'undefined') {
        const queryPosition = window.location.hash.lastIndexOf('?');
        return queryPosition >= 0 ? window.location.hash.substring(queryPosition, window.location.hash.length) : '';
    }
    return '';
};

/* istanbul ignore next */
const getPathName = () => {
    if (typeof window !== 'undefined') {
        return window.location.hash.indexOf('?') >= 0
            ? window.location.href.substring(0, window.location.href.lastIndexOf('?'))
            : window.location.href;
    }
    return '';
};

const toObject = (query: string) => ({
    ...queryString.parse(query, {parseBooleans: true, parseNumbers: true, sort: false}),
});

const toQueryString = (obj: Record<string, unknown>): string => queryString.stringify(obj, {sort: false});

const getSearchParams = (): {[key: string]: any} => UrlUtils.toObject(UrlUtils.getQuery());

const redirectToUrl = (link: string) => {
    window.location.href = link;
};

export const UrlUtils = {
    redirectToUrl,
    getQuery,
    getSearchParams,
    getPathName,
    toQueryString,
    toObject,
};
