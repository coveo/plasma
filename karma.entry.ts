import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as $ from 'jquery';
import * as ReactModal from 'react-modal';
import * as s from 'underscore.string';

// Polyfill MouseEvent if needed
((window) => {
    try {
        new ((window as any).MouseEvent as any)('test');
        return false; // No need to polyfill
    } catch (e) {
        // Need to polyfill - fall through
    }

    // Polyfills DOM4 MouseEvent
    const MouseEvent = (eventType: any, params: any) => {
        params = params || {bubbles: false, cancelable: false};
        const mouseEvent = document.createEvent('MouseEvent');
        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

        return mouseEvent;
    };

    MouseEvent.prototype = Event.prototype;

    (window as any).MouseEvent = MouseEvent;
})(window);

beforeEach(() => {
    if (!$('#App').length) {
        $('body').append('<div id="App" class="coveo-styleguide"></div>');
    }
});

afterEach(() => {
    $('body > div:not(.jasmine_html-reporter)').remove();
});

Enzyme.configure({adapter: new Adapter()});
ReactModal.setAppElement('body');

const testsContext = require.context('./src', true, /\.spec\.ts(x?)$/);
testsContext.keys().forEach(testsContext);

const coverageContext = require.context('./src', true, /^((?!\.d).)*.ts(x?)$/);
coverageContext.keys()
    .filter((file) => !s.contains(file, '.spec.') && !s.contains(file, 'Examples') && !s.contains(file, 'css'))
    .forEach(coverageContext);
