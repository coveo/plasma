import {shallowWithState} from '@helpers/enzyme-redux';

describe('TableRowHeader', () => {
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
