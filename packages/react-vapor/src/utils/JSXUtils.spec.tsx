import {shallow} from 'enzyme';
import * as React from 'react';

import {addClassNameToChildren, getReactNodeTextContent} from './JSXUtils';

describe('JSXUtils', () => {
    describe('getReactNodeTextContent', () => {
        it('should return an empty string when receiving falsy values as react node', () => {
            expect(getReactNodeTextContent(null)).toBe('');
            expect(getReactNodeTextContent(undefined)).toBe('');
            expect(getReactNodeTextContent(<></>)).toBe('');
        });

        it('should return the text content of the react node received as argument', () => {
            expect(getReactNodeTextContent(<span>Hello world!</span>)).toBe('Hello world!');

            expect(
                getReactNodeTextContent(
                    <div>
                        {'Hello there!    '}
                        <span>
                            {" Can't you see me? "}
                            <span>I can.</span>
                        </span>
                    </div>
                )
            ).toBe("Hello there! Can't you see me? I can.");
        });
    });

    describe('addClassNameToChildren', () => {
        it('should wrap the child with a span that has the classname if the children is not a react element', () => {
            const resultingChildren = addClassNameToChildren('a string is not a react element', 'new-class');
            const component = shallow(resultingChildren[0] as React.ReactElement);

            expect(component.type()).toBe('span');
            expect(component.hasClass('new-class')).toBe(true);
        });

        it('should add the new className to existing ones if the children a react element', () => {
            const resultingChildren = addClassNameToChildren(
                <span className="old-class">Hello react-vapor!</span>,
                'new-class'
            );
            const component = shallow(resultingChildren[0] as React.ReactElement);
            expect(component.hasClass('old-class')).toBe(true);
            expect(component.hasClass('new-class')).toBe(true);
        });
    });
});
