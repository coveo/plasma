import {mount} from 'enzyme';
import * as React from 'react';
import {TableCollapsibleRowWrapper} from '../TableCollapsibleRowWrapper';

describe('<TableCollapsibleRowWrapper />', () => {
    describe('render', () => {
        it('should render without error without children', () => {
            expect(() => {
                mount(<TableCollapsibleRowWrapper />, {attachTo: document.getElementById('App')});
            }).not.toThrow();
        });

        it('should render without error with children', () => {
            expect(() => {
                mount(
                    <TableCollapsibleRowWrapper>
                        <div>Hello World</div>
                    </TableCollapsibleRowWrapper>,
                    {attachTo: document.getElementById('App')}
                );
            }).not.toThrow();
        });

        it('should render a tbody wrapper with the children inside it', () => {
            const tableRowWrapper = mount(
                <TableCollapsibleRowWrapper>
                    <div>Hello World</div>
                </TableCollapsibleRowWrapper>,
                {attachTo: document.getElementById('App')}
            );

            expect(tableRowWrapper.find('tbody').exists()).toBe(true);
            expect(tableRowWrapper.find('tbody').find('div').length).toBe(1);
            expect(
                tableRowWrapper
                    .find('tbody')
                    .find('div')
                    .text()
            ).toBe('Hello World');
        });
    });
});
