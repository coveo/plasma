import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {connect, Provider} from 'react-redux';

import {getStoreMock} from '../../utils/tests/TestUtils';
import {PartialStringMatch} from './PartialStringMatch';

describe('PartialStringMatch', () => {
    const testString = 'test-string';

    it('should not throw when there is no children', () => {
        expect(() => shallow(<PartialStringMatch partialMatch="a" />)).not.toThrow();
        expect(() => shallow(<PartialStringMatch></PartialStringMatch>)).not.toThrow();
    });

    it('should render an empty string if the wholeString is a falsy value', () => {
        [undefined, ''].forEach((falsyVal) => {
            expect(shallow(<PartialStringMatch wholeString={falsyVal} />).html()).toBe(null);
        });
    });

    it('should render the wholeString unchanged if partialMatch is undefined', () => {
        expect(shallow(<PartialStringMatch wholeString={testString} />).text()).toBe(testString);
    });

    it('should render the wholeString unchanged if partialMatch is not in the wholeString', () => {
        expect(
            shallow(<PartialStringMatch wholeString={testString} partialMatch="i am not in whole string" />).find(
                'Highlight'
            ).length
        ).toBe(0);
    });

    it('should render the wholeString unchanged if partialMatch is in the wholeString but with different casing (if case sensitive)', () => {
        expect(
            shallow(<PartialStringMatch wholeString={testString} partialMatch={testString.toUpperCase()} />).find(
                'Highlight'
            ).length
        ).toBe(0);
    });

    it('should highlight the partialString match in bold if contained in the wholeString', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch} />);

        expect(component.find('Highlight').length).toBe(1);
    });

    it('should escape partialString match if dangerous', () => {
        const partialMatch = '<script>alert("I could be dangerous")</script>';
        const wholeString = 'whole string <script>alert("I could be dangerous")</script> with scripting';
        const component = shallow(<PartialStringMatch wholeString={wholeString} partialMatch={partialMatch} />);

        expect(component.find('Highlight').length).toBe(1);
        expect(component.find('script').length).toBe(0); // it will still be a string
    });

    it('should highlight the partialString in bold regardless of casing, when caseInsensitive is passed as prop', () => {
        const partialMatch = testString.substr(3, 5);
        const component = shallow(
            <PartialStringMatch wholeString={testString} partialMatch={partialMatch.toUpperCase()} caseInsensitive />
        );

        expect(component.find('Highlight').length).toBe(1);
    });

    it('should highlight all matches in a string', () => {
        const partialMatch = 'match';
        const multipleMatchString = 'match I have three match match';
        const component = shallow(<PartialStringMatch wholeString={multipleMatchString} partialMatch={partialMatch} />);

        expect(component.find('Highlight').length).toBe(3);
    });

    it('should highlight all matches in a string when there is multiple children', () => {
        const partialMatch = 'match';
        const component = shallow(
            <PartialStringMatch partialMatch={partialMatch}>
                Wow, is this really working? Because the <span className="some-wrapper">match</span> can already be in
                spans
                <br />
                <div>Or they can be in a div, like this match</div>
            </PartialStringMatch>
        );
        expect(component.find('Highlight').length).toBe(2);
    });

    it('should highlight matches by rendering them in bold', () => {
        const matcher = 'bacon';
        const component = shallow(
            <PartialStringMatch partialMatch={matcher}>bacon is my favorite vegetable</PartialStringMatch>
        );
        expect(
            component
                .find('Highlight')
                .dive()
                .hasClass('bold')
        ).toBe(true);
    });

    it('should highlight all matches rendered throught a function component', () => {
        const Porkchop: React.FunctionComponent = () => <span>porkchop is a chop of the pork</span>;
        const matcher = 'chop';
        const component = shallow(
            <PartialStringMatch partialMatch={matcher}>
                <Porkchop />
            </PartialStringMatch>
        );

        expect(component.find('Highlight').length).toBe(2);
    });

    it('should render connected components without highlighting the matches', () => {
        const Porkchop: React.FunctionComponent = () => <span>a porkchop is a chop of the pork</span>;
        const ConnectedPorkchop = connect((state: any) => ({a: state.a}))(Porkchop);
        const matcher = 'chop';
        const component = mount(
            <Provider store={getStoreMock()}>
                <PartialStringMatch partialMatch={matcher}>
                    <ConnectedPorkchop />
                </PartialStringMatch>
            </Provider>
        );

        expect(component.find('Highlight').length).toBe(0);
    });

    it('should render class Components that has no children without throwing', () => {
        class ClassComponent extends React.Component {
            render() {
                return <span>aa</span>;
            }
        }
        expect(() => {
            shallow(
                <PartialStringMatch partialMatch="a">
                    <ClassComponent />
                </PartialStringMatch>
            );
        }).not.toThrow();
    });

    it('should not throw errors when rendering a Provider inside the PartialStringMatch', () => {
        expect(() => {
            mount(
                <PartialStringMatch partialMatch="here">
                    <Provider store={getStoreMock()}>
                        <div>Something here</div>
                    </Provider>
                </PartialStringMatch>
            );
        }).not.toThrow();
    });
});
