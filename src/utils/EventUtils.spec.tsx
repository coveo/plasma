import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import {EventUtils} from './EventUtils';

describe('EventUtils', () => {
    describe('isClickingInsideElementWithClassname', () => {
        let wrapper: ShallowWrapper;
        const shallowWithHandler = (eventHandler: (e: React.MouseEvent<any>) => void) => {
            wrapper = shallow(
                <div className='div1' onClick={eventHandler}>
                    <ul>
                        <li>
                            <div className='div2'>
                                <div className='div3' />
                            </div>
                        </li>
                    </ul>
                </div>,
            );
        };

        it('should not throw and return false when passing falsy values', () => {
            shallowWithHandler((e: React.MouseEvent<any>) => {
                expect(EventUtils.isClickingInsideElementWithClassname(undefined, undefined)).not.toThrow();
                expect(EventUtils.isClickingInsideElementWithClassname(null, null)).not.toThrow();
                expect(EventUtils.isClickingInsideElementWithClassname(undefined, '')).not.toThrow();
                expect(EventUtils.isClickingInsideElementWithClassname(e, undefined)).not.toThrow();
                expect(EventUtils.isClickingInsideElementWithClassname(e, '')).not.toThrow();

                expect(EventUtils.isClickingInsideElementWithClassname(undefined, undefined)).toBe(false);
                expect(EventUtils.isClickingInsideElementWithClassname(null, null)).toBe(false);
                expect(EventUtils.isClickingInsideElementWithClassname(undefined, '')).toBe(false);
                expect(EventUtils.isClickingInsideElementWithClassname(e, undefined)).toBe(false);
                expect(EventUtils.isClickingInsideElementWithClassname(e, '')).toBe(false);
            });

            wrapper.find('.div3').simulate('click');
        });

        it('should return true if the click event happens inside the element with the specified classname', () => {
            shallowWithHandler((e: React.MouseEvent<any>) => {
                expect(EventUtils.isClickingInsideElementWithClassname(e, 'div1')).toBe(true);
            });

            wrapper.find('.div3').simulate('click');
            wrapper.find('.div2').simulate('click');
            wrapper.find('li').simulate('click');
        });

        it('should return false if the click event happens outside the element with the specified classname', () => {
            shallowWithHandler((e: React.MouseEvent<any>) => {
                expect(EventUtils.isClickingInsideElementWithClassname(e, 'div3')).toBe(false);
            });

            wrapper.find('li').simulate('click');
        });

        it('should return false if the click event happens directly on the element with the specified classname ' +
            'since it is not considered as "inside"', () => {
                shallowWithHandler((e: React.MouseEvent<any>) => {
                    expect(EventUtils.isClickingInsideElementWithClassname(e, 'div2')).toBe(false);
                });

                wrapper.find('.div2').simulate('click');
            });
    });
});
