import $ from 'jquery';
import _ from 'underscore';
import {camelize, humanize} from 'underscore.string';

import {svg as svgEnum} from './tmp/svg.js';

const formatSvgName = (svgName) => camelize(humanize(svgName), true);

const renderSvg = (svgString, svgClass, attr) => {
    svgClass = svgClass || '';
    attr = attr || {};

    if (svgString) {
        const svgHTML = $($.parseHTML(svgString));
        svgHTML[0].setAttribute('class', svgClass);
        _.mapObject(attr, (value, key) => {
            svgHTML[0].setAttribute(key, value);
        });
        return svgHTML.prop('outerHTML');
    }
    return '<svg class="' + svgClass + '"></svg>';
};

export const svgWrapper = (svgString, svgClass, spanClass, title, attr) => {
    if (svgString.indexOf('#coveo-icon-') !== -1) {
        const svgNameFormatted = formatSvgName(svgString.replace('#coveo-icon-', ''));
        if (!_.isUndefined(svgEnum[svgNameFormatted])) {
            return svgEnum[svgNameFormatted].render(svgClass || '', spanClass || '', title || '', attr || '');
        }
    }

    const titleToDisplay = title ? 'title="' + title + '"' : '';
    const spanClassAttribute = spanClass ? 'class="' + spanClass + '"' : '';
    return (
        '<span ' +
        spanClassAttribute +
        ' ' +
        titleToDisplay +
        '>' +
        renderSvg(svgString || '', svgClass || '', attr || '') +
        '</span>'
    );
};
