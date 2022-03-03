import _ from 'underscore';

// jQuery has to be imported before chosen-js
import $ from 'jquery';
global.$ = global.jQuery = $;

global._ = _;

document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    range.getClientRects = () => ({
        item: () => null,
        length: 0,
        [Symbol.iterator]: jest.fn(),
    });

    return range;
};
