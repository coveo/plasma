import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {ITableProps, ITableRowData, Table} from '../Table';
import {TableChildBlankSlate} from '../table-children/TableChildBlankSlate';
import {TableChildBody} from '../table-children/TableChildBody';
import {TableChildHeader} from '../table-children/TableChildHeader';
import {TableChildLastUpdated} from '../table-children/TableChildLastUpdated';
import {DEFAULT_TABLE_DATA, TableSortingOrder} from '../TableConstants';
import {ITableData} from '../TableReducers';
import {tablePossibleProps, tablePropsMock, tablePropsMockWithData} from './TableTestCommon';

const perPageNumbers = [5, 10, 20];

describe('<Table />', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    const mountComponentWithProps = (props: ITableProps) => {
        return mount(
            <Provider store={store}>
                <Table {...props} />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
    };

    describe('on instantiation', () => {
        it('should set isInitialLoad to true if initialTableData equals DEFAULT_TABLE_DATA', () => {
            expect((new Table(tablePropsMock) as any).isInitialLoad).toBe(true);
        });

        it('should set isInitialLoad to false if initialTableData does not equal DEFAULT_TABLE_DATA', () => {
            const tablePropsWithoutDefaultInitialData = {
                ...tablePropsMock,
                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},
            };
            expect((new Table(tablePropsWithoutDefaultInitialData) as any).isInitialLoad).toBe(false);
        });
    });

    describe('render', () => {
        it('should render without error in different scenarios', () => {
            tablePossibleProps.forEach((props: ITableProps) => {
                expect(() => mountComponentWithProps(props)).not.toThrow();
            });
        });

        it('should not render the <TableChildLastUpdated/> if withoutLastUpdated is true', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({
                ...tablePropsMock,
                withoutLastUpdated: true,
            } as any);

            expect(table.find(TableChildLastUpdated).length).toBe(0);
        });

        it('should render a blankslate null if some rows are displayed', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({
                ...tablePropsMock,
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: ['test'], totalEntries: 1, totalPages: 1},
                },
            } as any);

            expect(table.find(TableChildBlankSlate).length).toBe(0);
        });

        it('should render null if table is loading', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({
                ...tablePropsMock,
                tableCompositeState: {
                    isLoading: true,
                },
            } as any);

            expect(table.find(TableChildBlankSlate).length).toBe(0);
        });

        it('should render a blankslate if no loading, empty table and isInitialLoad is false', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({
                ...tablePropsMock,
                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},
                    isLoading: false,
                },
            } as any);

            expect(table.find(TableChildBlankSlate).length).toBe(1);
        });

        it('should render a blankslate if no loading, empty table, isInError is true, and isInitialLoad is true (related issue: https://github.com/coveo/react-vapor/issues/621)', () => {
            const tableAsAny: any = mountComponentWithProps({
                ...tablePropsMock,
                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},
                    isLoading: false,
                    isInError: true,
                },
            } as any);
            tableAsAny.isInitialLoad = true;

            expect(tableAsAny.find(TableChildBlankSlate).length).toBe(1);
        });

        it('should render with the wrapper fixed-header-table-container if the props withFixedHeader is true', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps({
                ...tablePropsMock,
                withFixedHeader: true,
            } as any);

            expect(table.find(TableChildBlankSlate).length).toBe(0);
        });

        it('should have the class loading component if it is the initial load', () => {
            const tableAsAny: any = mountComponentWithProps({
                ...tablePropsMock,
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},
                    isLoading: false,
                    isInError: false,
                },
            } as any);

            expect(tableAsAny.html()).toContain('loading-component');
        });

        it('should not have the class loading component if it is not the initial load', () => {
            const tableAsAny: any = mountComponentWithProps({
                ...tablePropsMock,
                initialTableData: {...DEFAULT_TABLE_DATA, totalPages: 10, totalEntries: 1000},
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},
                    isLoading: false,
                    isInError: false,
                },
            } as any);

            expect(tableAsAny.html()).not.toContain('loading-component');
        });

        it('should not have the class loading component if it is the initial load and the table is in error', () => {
            const tableAsAny: any = mountComponentWithProps({
                ...tablePropsMock,
                tableCompositeState: {
                    data: {byId: {'test': {}}, allIds: ['test'], displayedIds: [], totalEntries: 1, totalPages: 1},
                    isLoading: false,
                    isInError: true,
                },
            } as any);

            expect(tableAsAny.html()).not.toContain('loading-component');
        });
    });

    describe('after render', () => {
        it('should call onDidMount on componentDidMount if it is defined', () => {
            const onDidMountSpy = jasmine.createSpy('onDidMountSpy');

            mountComponentWithProps({...tablePropsMock, onDidMount: onDidMountSpy});

            expect(onDidMountSpy).toHaveBeenCalledTimes(1);
        });

        it('should call onUnmount on componentWillUnmount if it is defined', () => {
            const onUnmountSpy = jasmine.createSpy('onUnmountSpy');

            mountComponentWithProps({...tablePropsMock, onUnmount: onUnmountSpy}).unmount();

            expect(onUnmountSpy).toHaveBeenCalledTimes(1);
        });

        it('should set isInitialLoad to false after tableCompositeState.data changes from DEFAULT_TABLE_DATA to new table data', () => {
            const tableCompositeState = {...tablePropsMock.tableCompositeState, data: DEFAULT_TABLE_DATA};
            const tableAsAny = new Table({...tablePropsMock, tableCompositeState}) as any;

            expect(tableAsAny.props.tableCompositeState.data).toEqual(DEFAULT_TABLE_DATA);
            expect(tableAsAny.isInitialLoad).toBe(true);

            tableAsAny.props.tableCompositeState.data = {...DEFAULT_TABLE_DATA, allIds: ['trigger-change-in-default-table-data']};
            tableAsAny.componentDidUpdate();

            expect(tableAsAny.isInitialLoad).toBe(false);
        });

        it('should set isInitialLoad to false after tableCompositeState.data changes from DEFAULT_TABLE_DATA to new table data, even if new data is empty', () => {
            const tableCompositeState = {...tablePropsMock.tableCompositeState, data: DEFAULT_TABLE_DATA};
            const tableAsAny = new Table({...tablePropsMock, tableCompositeState}) as any;

            expect(tableAsAny.props.tableCompositeState.data).toEqual(DEFAULT_TABLE_DATA);
            expect(tableAsAny.isInitialLoad).toBe(true);

            tableAsAny.props.tableCompositeState.data = _.omit(DEFAULT_TABLE_DATA, 'IS_DEFAULT_TABLE_DATA');
            tableAsAny.componentDidUpdate();

            expect(tableAsAny.isInitialLoad).toBe(false);
        });

        it('should not render a table wrapper if there are no displayed rows', () => {
            expect(mountComponentWithProps(tablePropsMock).find(TableChildBody).length).toBe(0);
        });

        it('should render as many <TableChildBody /> as there are displayed ids', () => {
            expect(mountComponentWithProps(tablePropsMockWithData).find(TableChildBody).length)
                .toBe(tablePropsMockWithData.tableCompositeState.data.displayedIds.length);
        });

        it('should call onRowClick when a <TableChildBody /> calls its onRowClick function', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps(tablePropsMockWithData);
            table.find(TableChildBody).first().props().onRowClick([]);

            expect(tablePropsMockWithData.onRowClick).toHaveBeenCalledTimes(1);
        });

        it('should call getActions when a <TableChildBody /> calls its getActions function', () => {
            const table: ReactWrapper<ITableProps, {}> = mountComponentWithProps(tablePropsMockWithData);
            table.find(TableChildBody).first().props().getActions({id: 'any'});

            expect(tablePropsMockWithData.getActions).toHaveBeenCalled();
        });

        describe('componentWillReceiveProps', () => {
            let tableAsAny: any;
            let onModifyDataSpy: jasmine.Spy;
            let tableProps: any;

            beforeEach(() => {
                onModifyDataSpy = jasmine.createSpy('onModifyDataSpy');
                tableProps = {...tablePropsMock, onModifyData: onModifyDataSpy};
                tableAsAny = new Table(tableProps);
            });

            it('should not call onMofidyData if next tableCompositeState is identical to the previous', () => {
                tableAsAny.componentWillReceiveProps(tableProps);
                expect(onModifyDataSpy).not.toHaveBeenCalled();
            });

            it('should call onMofidyData with shouldResetPage true if next tableCompositeState is not identical to the previous and change is not in per page or pagination', () => {
                const nextProps = {
                    ...tableProps,
                    tableCompositeState: {
                        ...tableProps.tableCompositeState,
                        filter: 'someone just searched for something in the table',
                    },
                };
                tableAsAny.componentWillReceiveProps(nextProps);

                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
                const shouldResetPage = true;
                expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
            });

            it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in pagination', () => {
                const nextProps = {
                    ...tableProps,
                    tableCompositeState: {
                        ...tableProps.tableCompositeState,
                        page: 3,
                    },
                };
                tableAsAny.componentWillReceiveProps(nextProps);

                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
                const shouldResetPage = false;
                expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
            });

            it('should call onMofidyData with shouldResetPage false if next tableCompositeState is not identical to the previous and change is in perPage', () => {
                const nextProps = {
                    ...tableProps,
                    tableCompositeState: {
                        ...tableProps.tableCompositeState,
                        perPage: 20,
                    },
                };
                tableAsAny.componentWillReceiveProps(nextProps);

                expect(onModifyDataSpy).toHaveBeenCalledTimes(1);
                const shouldResetPage = false;
                expect(onModifyDataSpy).toHaveBeenCalledWith(shouldResetPage, nextProps.tableCompositeState, tableProps.tableCompositeState);
            });

            describe('hasTableCompositeStateChanged', () => {
                beforeEach(() => {
                    tableProps = {...tablePropsMock, onModifyData: onModifyDataSpy};
                    tableAsAny = new Table(tableProps);
                });

                it('should return false if nothing changed in the tableCompositeState', () => {
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, tableProps.tableCompositeState))
                        .toBe(false);
                });

                it('should return true if the filter has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        filter: 'someone just searched for something in the table',
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the from (datepicker) has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        from: Date.now(),
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the to (datepicker) has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        to: Date.now(),
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the perPage has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        perPage: 50,
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the page has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        page: 3,
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the sort attribute has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        sortState: {
                            ...tableProps.tableCompositeState.sortState,
                            attribute: 'userName',
                        },
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the sort order has changed and nothing else has', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        sortState: {
                            ...tableProps.tableCompositeState.sortState,
                            order: TableSortingOrder.ASCENDING,
                        },
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if the predicates were empty and next state has one', () => {
                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        predicates: {
                            anyWouldDo: 'anyWouldDo',
                        },
                    };
                    expect(tableAsAny.hasTableCompositeStateChanged(tableProps.tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });

                it('should return true if predicates were not empty but one of the value of the predicates changed', () => {
                    const tableCompositeState = {
                        ...tableProps.tableCompositeState,
                        predicates: {
                            anyWouldDo: 'anyWouldDo',
                        },
                    };

                    const nextTableCompositeState = {
                        ...tableProps.tableCompositeState,
                        predicates: {
                            anyWouldDo: 'predicate value changed',
                        },
                    };

                    expect(tableAsAny.hasTableCompositeStateChanged(tableCompositeState, nextTableCompositeState))
                        .toBe(true);
                });
            });
        });

        describe('componentWillUpdate', () => {
            let tableAsAny: any;
            let onWillUpdateSpy: jasmine.Spy;
            let tableProps: any;

            beforeEach(() => {
                onWillUpdateSpy = jasmine.createSpy('onWillUpdateSpy');
                tableProps = {...tablePropsMock, onWillUpdate: onWillUpdateSpy, actions: [{id: 'id1'}]};
                tableAsAny = new Table(tableProps);
            });

            it('should not call onWillUpdate if next actions is identical to the previous action from the state', () => {
                const nextProps = {
                    actions: [{id: 'id1'}],
                };

                tableAsAny.componentWillUpdate(nextProps);

                expect(onWillUpdateSpy).not.toHaveBeenCalled();
            });

            it('should call onWillUpdate if next actions is different to the previous action from the state', () => {
                const nextProps = {
                    actions: [{id: 'id2'}],
                };

                tableAsAny.componentWillUpdate(nextProps);

                expect(onWillUpdateSpy).toHaveBeenCalledWith(nextProps.actions);
            });
        });

        it('should not show table head if table has no rows and it is display as card', () => {
            const emptyData: ITableRowData = {};
            const empty: ITableData = {
                byId: emptyData,
                allIds: _.keys(emptyData),
                displayedIds: _.keys(emptyData),
                totalEntries: _.keys(emptyData).length,
                totalPages: Math.ceil(_.keys(emptyData).length / perPageNumbers[0]),
            };
            const tableProps: ITableProps = {
                ...tablePropsMock,
                asCard: true,
                initialTableData: empty,
            };
            const table = mountComponentWithProps(tableProps);

            expect(table.find(TableChildHeader).length).toBe(0);
            expect(table.find(TableChildBlankSlate).length).toBe(1);
        });
    });
});
