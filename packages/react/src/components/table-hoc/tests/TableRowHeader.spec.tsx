import {shallowWithState} from '@test-utils';

import {TableRowHeader} from '../TableRowHeader';

describe('TableRowHeader', () => {
    it('should mount and unmount without errors', () => {
        expect(() => {
            const wrapper = shallowWithState(
                <TableRowHeader>
                    <span />
                </TableRowHeader>,
                {},
            );
            wrapper.unmount();
        }).not.toThrow();
    });
});
