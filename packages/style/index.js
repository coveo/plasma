import './scss/guide.scss';

import {svgWrapper} from './svgWrapper';
import {svg as svgEnum} from './tmp/svg.js';

export const SVG = svgWrapper;

export const svgFromName = (svgName, svgClass, spanClass, title) => {
    svgClass = svgClass || '';
    spanClass = spanClass || '';
    title = title || '';

    if (!_.isUndefined(svgEnum[svgName])) {
        return svgEnum[svgName].render(svgClass, spanClass, title);
    }
    return '';
};

export const svg = svgEnum;

export const version = WEBPACK_DEFINED_VERSION;
