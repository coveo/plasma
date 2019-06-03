// https://stackoverflow.com/questions/21825157/internet-explorer-11-detection#answer-22242528
const isIE = () => navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1;

export const BrowserUtils = {
    isIE,
};
