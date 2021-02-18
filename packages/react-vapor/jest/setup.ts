import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import _ from 'underscore';

import * as ReactDOM from 'react-dom';
import React from 'react';

// jQuery has to be imported before chosen-js
import $ from 'jquery';
global.$ = global.jQuery = $;

import 'chosen-js';

global._ = _;

global.window.React = React;
global.window.ReactDOM = ReactDOM;

Enzyme.configure({adapter: new Adapter()});

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
