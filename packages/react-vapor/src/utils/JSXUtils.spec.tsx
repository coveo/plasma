import * as React from 'react';
import {getReactNodeTextContent} from './JSXUtils';

describe('JSXUtils', () => {
    describe('getReactNodeTextContent', () => {
        it('should return an empty string when receiving falsy values as react node', () => {
            expect(getReactNodeTextContent(null)).toBe('');
            expect(getReactNodeTextContent(undefined)).toBe('');
            expect(getReactNodeTextContent(<></>)).toBe('');
        });

        it('should return the text content of the react node received as argument', () => {
            expect(getReactNodeTextContent(
                <span>Hello world!</span>,
            )).toBe('Hello world!');

            expect(getReactNodeTextContent(
                <div>
                    {'Hello there! '}
                    <span>
                        {'Can you see me? '}
                        <span>I can.</span>
                    </span>
                </div>,
            )).toBe('Hello there! Can you see me? I can.');
        });
    });
});
