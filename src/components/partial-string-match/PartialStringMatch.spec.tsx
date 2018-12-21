import {shallow} from 'enzyme';
import * as escapeRegExp from 'escape-string-regexp';
import * as React from 'react';
import {escape} from 'underscore';
import {PartialStringMatch} from './PartialStringMatch';

describe('PartialStringMatch', () => {
    const testString = 'test-string';

    it('should render an empty string if the wholeString is a falsy value', () => {
        [undefined, ''].forEach((falsyVal) => {
            expect(shallow(<PartialStringMatch wholeString={falsyVal} />).html()).toBe(null);
        });
    });

    it('should render the wholeString unchanged if partialMatch is undefined', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} />).text()).toBe(testString);
    });

    it('should render the wholeString unchanged if partialMatch is not in the wholeString', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} partialMatch='i am not in whole string' />).text()).toBe(testString);
    });

    it('should render the wholeString unchanged if partialMatch is in the wholeString but with different casing (if case sensitive)', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} partialMatch={testString.toUpperCase()} />).text()).toBe(testString);
    });

    it('should render a span with the partialString match in bold if contained in the wholeString', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch} />);

        expect(
            component
                .find('span')
                .prop('dangerouslySetInnerHTML')
                .__html,
        ).toContain(`<span class='bold'>${partialMatch}</span>`);
    });

    it('should escape partialString match if dangerous', () => {
        const partialMatch = '<script>alert("I could be dangerous")</script>';
        const wholeString = 'whole string <script>alert("I could be dangerous")</script> with scripting';
        const component = shallow(<PartialStringMatch wholeString={wholeString} partialMatch={partialMatch} />);

        expect(
            component
                .find('span')
                .prop('dangerouslySetInnerHTML')
                .__html,
        ).toContain(`<span class='bold'>${escape(partialMatch)}</span>`);
    });

    it('should render a span with the partialString in bold regardless of casing, when caseInsensitive is passed as prop', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch.toUpperCase()} caseInsensitive />);

        expect(
            component
                .find('span')
                .prop('dangerouslySetInnerHTML')
                .__html,
        ).toContain(`<span class='bold'>${escape(partialMatch)}</span>`);
    });

    it('should wrap all matches in a string with a span.bold', () => {
        const partialMatch = 'match';
        const multipleMatchString = 'match I have three match match';
        const component = shallow(<PartialStringMatch wholeString={multipleMatchString} partialMatch={partialMatch} />);

        expect(
            component
                .find('span')
                .prop('dangerouslySetInnerHTML')
                .__html
                .match(RegExp(escapeRegExp(`<span class='bold'>${escape(partialMatch)}</span>`), 'g'))
                .length,
        ).toBe(3);
    });
});
