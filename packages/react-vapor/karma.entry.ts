import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';
import {Defaults} from './src/Defaults';

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
        mouseEvent.initMouseEvent(
            eventType,
            params.bubbles,
            params.cancelable,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );

        return mouseEvent;
    };

    MouseEvent.prototype = Event.prototype;

    (window as any).MouseEvent = MouseEvent;
})(window);

describe('React-Vapor', () => {
    beforeAll(() => {
        Enzyme.configure({adapter: new Adapter()});
        window.onbeforeunload = () => {
            // tslint:disable-next-line
            debugger;
        };
    });

    beforeEach(() => {
        if (!$('#App').length) {
            $('body').append('<div id="App" class="coveo-styleguide"></div>');
        }
        Defaults.APP_ELEMENT = '#App';
        jasmine.clock().uninstall();
    });

    afterEach(() => {
        $('body > div:not(.jasmine_html-reporter)').remove();
    });

    const testsContext = require.context('./src', true, /\.spec\.tsx?$/);
    testsContext.keys().forEach(testsContext);
});
