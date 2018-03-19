import {shallow} from 'enzyme';
import * as React from 'react';
import {PartialStringMatch} from './PartialStringMatch';

fdescribe('PartialStringMatch', () => {
    const testString = 'test-string';

    it('should render an empty span if the wholeString is a falsy value', () => {
        [undefined, null, ''].forEach((falsyVal) => {
            expect(shallow(<PartialStringMatch wholeString={falsyVal} />).find('span').text())
                .toBe('');
        });
    });

    it('should render the wholeString unchanged if partialMatch is undefined', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} />).find('span').text())
            .toBe(testString);
    });

    it('should render the wholeString unchanged if partialMatch is not in the wholeString', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} partialMatch='i am not in whole string' />).find('span').text())
            .toBe(testString);
    });

    it('should render the wholeString unchanged if partialMatch is in the wholeString but with different casing (if case sensitive)', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} partialMatch={testString.toUpperCase()} />).find('span').text())
            .toBe(testString);
    });

    it('should render a span with the partialString match in bold if contained in the wholeString', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch} />);
        expect(component.find('span .bold').text()).toBe(partialMatch);
        expect(component.find('span').first().text()).toBe(testString);
    });

    it('should render a span with the partialString in bold regardless of casing, when caseInsensitive is passed as prop', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch.toUpperCase()} caseInsensitive />);
        expect(component.find('span .bold').text()).toBe(partialMatch);
        expect(component.find('span').first().text()).toBe(testString);
    });
});
