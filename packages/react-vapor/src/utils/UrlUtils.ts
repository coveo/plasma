import * as QueryString from 'query-string';

/* istanbul ignore next */
function getSearchParams() {
    const currentUrl = window.location.href;
    const qPos = currentUrl.lastIndexOf('?');
    const query = qPos >= 0 ? currentUrl.substring(qPos, currentUrl.length) : '';
    return {...QueryString.parse(query, {parseBooleans: true, parseNumbers: true})};
}

export const UrlUtils = {
    getSearchParams,
};
