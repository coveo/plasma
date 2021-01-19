import {mountWithStore, shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {HOCTableRowState} from '..';
import {clearState} from '../../../utils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {TableHOCRowActions} from '../actions/TableHOCRowActions';
import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithActions} from '../TableWithActions';

describe('Table HOC', () => {
    describe('TableWithActions', () => {
        const TableWithActions = _.compose(tableWithActions())(TableHOC);

        it('should not throw', () => {
            expect(() => {
                shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {});

                shallowWithState(
                    <TableWithActions
                        id="b"
                        data={[{value: 'a'}]}
                        renderBody={(allData: any[]) =>
                            _.map(allData, (data: any) => (
                                <tr>
                                    <td>{data.value}</td>
                                </tr>
                            ))
                        }
                    />,
                    {}
                );
            }).not.toThrow();
        });

        it('should render a TableHOC', () => {
            const wrapper = shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {}).dive();

            expect(wrapper.find(TableHOC).exists()).toBe(true);
        });

        it('should add the hasActionButtons prop on the table', () => {
            const wrapper = shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {}).dive();

            expect(wrapper.find(TableHOC).prop('hasActionButtons')).toBe(true);
        });

        describe('click outside', () => {
            const id = 'a';
            let store: ReactVaporMockStore;
            let registeredListeners: Record<string, EventListener>;
            let outside: HTMLElement;

            const triggerClick = (element: HTMLElement) =>
                registeredListeners?.mousedown(({target: element} as unknown) as MouseEvent);

            beforeAll(() => {
                outside = document.createElement('div');
                document.body.appendChild(outside);
            });

            beforeEach(() => {
                store = getStoreMock();
                registeredListeners = {};
                document.addEventListener = jest.fn((event, cb) => {
                    registeredListeners[event] = cb as EventListener;
                });
            });

            afterEach(() => {
                store.dispatch(clearState());
            });

            afterAll(() => {
                document.body.removeChild(outside);
            });

            it('should not dispatch an action when the user click outside and no rows are selected', () => {
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([]);

                mountWithStore(<TableWithActions id="a" data={[{value: 'a'}]} renderBody={() => <tr></tr>} />, store);

                triggerClick(outside);

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });

            it('should dispatch an action when the user click outside and a row is selected', () => {
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([{} as HOCTableRowState]);

                mountWithStore(<TableWithActions id="a" data={[{value: 'a'}]} renderBody={() => <tr></tr>} />, store);

                triggerClick(outside);

                expect(store.getActions()).toContainEqual(TableHOCRowActions.deselectAll(id));
            });

            it('should not dispatch an action when the user click inside the table', () => {
                jest.spyOn(TableSelectors, 'getSelectedRows').mockReturnValue([{} as HOCTableRowState]);
                const wrapper = mountWithStore(
                    <TableWithActions id="a" data={[{value: 'a'}]} renderBody={() => <tr></tr>} />,
                    store
                );

                triggerClick(wrapper.find(TableHOC).getDOMNode() as HTMLElement);

                wrapper.find(TableHOC).simulate('click', {target: {closest: () => expect.anything()}});

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });
        });
    });
});
