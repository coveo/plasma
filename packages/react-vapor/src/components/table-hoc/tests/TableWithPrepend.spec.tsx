import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';

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

    it('should not render prepended content if the table is truely empty', () => {
        spyOn(TableSelectors, 'getIsTruelyEmpty').and.returnValue(true);
        const Prepend = () => <span>ink!</span>;
        const wrapper = shallowWithState(
            <TableWithPrepend {...basicProps} data={[]} prepend={<Prepend />} />,
            {}
        ).dive();

        expect(wrapper.children().first().type()).not.toBe(Prepend);
        expect(wrapper.children().first().type()).toBe(TableHOC);
    });

    it('should render prepended content if the table is not truely empty', () => {
        spyOn(TableSelectors, 'getIsTruelyEmpty').and.returnValue(false);
        const Prepend = () => <span>ink!</span>;
        const wrapper = shallowWithState(
            <TableWithPrepend {...basicProps} data={[]} prepend={<Prepend />} />,
            {}
        ).dive();

        expect(wrapper.children().first().type()).not.toBe(TableHOC);
        expect(wrapper.children().first().type()).toBe(Prepend);
    });
});
