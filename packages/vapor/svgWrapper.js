import * as _ from 'underscore';
import * as s from 'underscore.string';
import * as $ from 'jquery';

import {svg as svgEnum} from './tmp/svg.js';

function formatSvgName(svgName) {
    return s.camelize(s.humanize(svgName), true);
}

function isSvgStringValid(svgString) {
    return /^<svg(\s.+)?>.*<\/svg>$/i.test(svgString);
}

function renderSvg(svgString, svgClass, attr) {
    svgClass = svgClass || '';
    attr = attr || {};

    if (svgString && isSvgStringValid(svgString)) {
        var svgHTML = $($.parseHTML(svgString));
        svgHTML[0].setAttribute('class', svgClass);
        _.mapObject(attr, function(value, key) {
            svgHTML[0].setAttribute(key, value);
        });
        return svgHTML.prop('outerHTML');
    }
    return '<svg class="' + svgClass + '"></svg>';
}

export function svgWrapper(svgString, svgClass, spanClass, title, attr) {
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
}
