import {shallowWithState} from '@helpers/enzyme-redux';
import * as React from 'react';

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
            }).not.toThrow();
        });
    });
});
