import {shallowWithState} from '@helpers/enzyme-redux';

import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithPrepend} from '../TableWithPrepend';

describe('TableWithPrepend', () => {
    const TableWithPrepend = tableWithPrepend(TableHOC);

    const basicProps = {
        id: 'table-id',
        renderBody: (): null => null,
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const wrapper = shallowWithState(<TableWithPrepend {...basicProps} data={[]} />, {}).dive();
            wrapper.unmount();
        }).not.toThrow();
    });

    it('should not render prepended content if the table is truly empty', () => {
        vi.spyOn(TableSelectors, 'getIsTrulyEmpty').mockReturnValue(true);
        const Prepend = () => <span>ink!</span>;
        const wrapper = shallowWithState(<TableWithPrepend {...basicProps} data={[]} prepend={<Prepend />} />, {})
            .dive()
            .dive();

        expect(wrapper.children().first().type()).not.toBe(Prepend);

        expect(wrapper.children().first().type()).toBe(TableHOC);
    });

    it('should render prepended content if the table is not truly empty', () => {
        vi.spyOn(TableSelectors, 'getIsTrulyEmpty').mockReturnValue(false);
        const Prepend = () => <span>ink!</span>;
        const wrapper = shallowWithState(<TableWithPrepend {...basicProps} data={[]} prepend={<Prepend />} />, {})
            .dive()
            .dive();

        expect(wrapper.children().first().type()).not.toBe(TableHOC);

        expect(wrapper.children().first().type()).toBe(Prepend);
    });
});
