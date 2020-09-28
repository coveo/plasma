// This file helps to set up the Jest testing environment
const {configure} = require('enzyme');
const ReactSixteenAdapter = require('enzyme-adapter-react-16');

// jQuery has to be imported before chosen-js
const $ = require('jquery');
global['$'] = global['jQuery'] = $;

require('chosen-js');

// createRange is from IE apparently, but I had trouble with this particular config. Think it might need reworking
global.document.createRange = () => {
    return {
        setEnd: () => {},
        setStart: () => {},
        getBoundingClientRect: () => {},
        getClientRects: () => [],
    };
};

global.document.body.createTextRange = jest.fn();

configure({adapter: new ReactSixteenAdapter()});
