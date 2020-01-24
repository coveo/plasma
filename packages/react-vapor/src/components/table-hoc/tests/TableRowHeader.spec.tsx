import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {TextLoadingPlaceholder} from '../../loading';
import {TableRowHeader} from '../TableRowHeader';

describe('TableRowHeader', () => {
    describe('<TableRowHeader /> tests', () => {
        it('should mount and unmount without errors', () => {
            expect(() => {
                const wrapper = shallowWithState(
                    <TableRowHeader>
                        <span />
                    </TableRowHeader>,
                    {}
                );
                wrapper.unmount();
            });
        });

        describe('once mounted', () => {
            it('should render a <TextLoadingPlaceholder /> if loading', () => {
                const wrapper = shallowWithState(<TableRowHeader isLoading />, {});
                expect(wrapper.find(TextLoadingPlaceholder).length).toBe(1);
            });
        });
    });
});
