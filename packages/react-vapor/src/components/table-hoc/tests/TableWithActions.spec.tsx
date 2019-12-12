import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {TableHOCRowActions} from '../actions/TableHOCRowActions';
import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithActions} from '../TableWithActions';

describe('Table HOC', () => {
    describe('TableWithActions', () => {
        const TableWithActions = _.compose(tableWithActions())(TableHOC);

        it('should not throw', () => {
            expect(shallowWithState(<TableWithActions id="a" data={[]} renderBody={_.identity} />, {}));
            expect(
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
                )
            );
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
            let wrapper: ShallowWrapper;
            let store: ReactVaporMockStore;

            const shallowComponent = () => {
                spyOn(document.body, 'contains').and.returnValue(true);
                const spy = spyOn(document, 'addEventListener');

                store = getStoreMock({});
                wrapper = shallowWithStore(
                    <TableWithActions id={id} data={[]} renderBody={_.identity} />,
                    store
                ).dive();
                return [spy.calls.mostRecent().args[1]];
            };

            afterEach(() => {
                wrapper?.unmount();
            });

            it('should not dispatch an action when the user click outside and no rows are selected', () => {
                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([]);
                const [clickOnElement] = shallowComponent();

                clickOnElement({target: {closest: (): HTMLElement => null}});

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });

            it('should dispatch an action when the user click outside and a row is selected', () => {
                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([{}]);
                const [clickOnElement] = shallowComponent();

                clickOnElement({target: {closest: (): HTMLElement => null}});

                expect(store.getActions()).toContain(TableHOCRowActions.deselectAll(id));
            });

            it('should not dispatch an action when the user click inside the table', () => {
                spyOn(TableSelectors, 'getSelectedRows').and.returnValue([{}]);
                const [clickOnElement] = shallowComponent();

                clickOnElement({target: {closest: () => jasmine.anything()}});

                expect(store.getActions()).not.toContain(TableHOCRowActions.deselectAll(id));
            });
        });
    });
});
