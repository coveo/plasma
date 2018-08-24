import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITableHeadingRowOwnProps, ITableHeadingRowProps, TableHeadingRow} from '../TableHeadingRow';
import {TableHeadingRowConnected} from '../TableHeadingRowConnected';

describe('Tables', () => {
    let basicTableHeadingRowProps: ITableHeadingRowOwnProps;

    describe('<TableHeadingRowConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let tableHeadingRow: ReactWrapper<ITableHeadingRowProps, any>;
        let store: Store<IReactVaporState>;

        const mountWithProps = (props?: Partial<ITableHeadingRowOwnProps>) => {
            if (wrapper && wrapper.length) {
                wrapper.unmount();
            }
            wrapper = mount(
                <Provider store={store}>
                    <table>
                        <tbody>
                            <TableHeadingRowConnected {...{...basicTableHeadingRowProps, ...props}} />
                        </tbody>
                    </table>
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            tableHeadingRow = wrapper.find(TableHeadingRow).first();
        };

        beforeEach(() => {
            basicTableHeadingRowProps = {
                id: 'heading-row',
                isCollapsible: true,
            };

            store = TestUtils.buildStore();
            mountWithProps();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get its id as a prop', () => {
            const idProp = tableHeadingRow.props().id;

            expect(idProp).toBeDefined();
            expect(idProp).toBe(basicTableHeadingRowProps.id);
        });

        it('should get if its collapsible row is opened as a prop', () => {
            const openedProp = tableHeadingRow.props().opened;

            expect(openedProp).toBeDefined();
            expect(openedProp).toBe(false);
        });

        it('should get what to do on render as a prop', () => {
            const onRowRenderProp = tableHeadingRow.props().onRender;

            expect(onRowRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onRowDestroyProp = tableHeadingRow.props().onDestroy;

            expect(onRowDestroyProp).toBeDefined();
        });

        it('should get what to do on click as a prop', () => {
            const onRowClickProp = tableHeadingRow.props().onClick;

            expect(onRowClickProp).toBeDefined();
        });

        it('should add the row in the store on render', () => {
            expect(store.getState().rows.filter((row) => row.id === basicTableHeadingRowProps.id).length).toBe(1);
        });

        it('should remove the row in the store on destroy', () => {
            wrapper.unmount();
            expect(store.getState().rows.filter((row) => row.id === basicTableHeadingRowProps.id).length).toBe(0);
        });

        it('should set the open property to true on click', () => {
            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).opened).toBe(false);

            tableHeadingRow.find('tr').simulate('click');
            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).opened).toBe(true);
        });

        it('should set the selected property to true on click when the selectionDisabled prop is false', () => {
            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);

            tableHeadingRow.find('tr').simulate('click');
            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(true);
        });

        it('should not set the selected property to true on click if the selectionDisabled prop is true', () => {
            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);

            mountWithProps({selectionDisabled: true});

            wrapper.find('tr').simulate('click');
            wrapper.update();

            expect(_.findWhere(store.getState().rows, {id: basicTableHeadingRowProps.id}).selected).toBe(false);
        });

        it('should not dispatch any action on render, on destroy and on click if not collapsible', () => {
            store.dispatch(clearState());

            const rowState = _.clone(store.getState().rows);

            mountWithProps({isCollapsible: false});

            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));

            tableHeadingRow.find('tr').simulate('click');
            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));

            wrapper.unmount();
            expect(store.getState().rows).toEqual(jasmine.objectContaining(rowState));
        });
    });
});
