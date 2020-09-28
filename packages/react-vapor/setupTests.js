import {configure} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import _ from 'underscore';

// jQuery has to be imported before chosen-js
import * as $ from 'jquery';
global['$'] = global['jQuery'] = $;

import 'chosen-js';

global.document.createRange = () => {
    return {
        setEnd: () => {},
        setStart: () => {},
        getBoundingClientRect: () => {},
        getClientRects: () => [],
    };
};

global.document.body.createTextRange = jest.fn();
global._ = _;

configure({adapter: new ReactSixteenAdapter()});
