import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {PrimaryAction} from '../../actions/PrimaryAction';
import {openDropdownSearch} from '../../dropdownSearch/DropdownSearchActions';
import {ITableProps, Table} from '../Table';
import {TableConnected} from '../TableConnected';
import {TableChildComponent} from '../TableConstants';
import * as TableDataModifier from '../TableDataModifier';
import {getTableChildComponentId} from '../TableUtils';
import {tablePossibleProps, tablePropsMock, tablePropsMockWithData} from './TableTestCommon';

describe('<TableConnected />', () => {
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
                <TableConnected {...props} />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
    };

    describe('render', () => {

        const getInitialTableDataMock: any = (selectedIds = ['id1']) => ({
            byId: {
                id1: {
                    status: 'pokeball',
                    pokemon: 'pikachu',
                },
                id2: {
                    status: 'pokeball',
                    pokemon: 'Ditto',
                },
                id3: {
                    status: 'board',
                    pokemon: 'Mew',
                },
            },
            allIds: ['id1', 'id2', 'id3'],
            displayedIds: ['id1', 'id2'],
            selectedIds,
            totalEntries: 3,
            totalPages: 1,
        });

        it('should render without error in different scenarios', () => {
            tablePossibleProps.forEach((props: ITableProps) => {
                expect(() => mountComponentWithProps(props)).not.toThrow();
            });
        });

        it('should put the table state in the store on mount', () => {
            expect(store.getState().tables[tablePropsMock.id]).toBeUndefined();
            mountComponentWithProps(tablePropsMock);
            expect(store.getState().tables[tablePropsMock.id]).toBeDefined();
        });

        it('should remove the table state in the store on unmount', () => {
            const tableConnected = mountComponentWithProps({...tablePropsMock, actionBar: true});
            expect(store.getState().tables[tablePropsMock.id]).toBeDefined();
            tableConnected.unmount();
            expect(store.getState().tables[tablePropsMock.id]).toBeUndefined();
        });

        it('should update action in props with the selectedIds array and the rowsData from the state', () => {
            const actions = [{id: 'action1', enabled: true}];
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, getActions: () => actions, initialTableData: getInitialTableDataMock()});

            const tableConnected = wrapper.find(Table);

            expect(tableConnected.props().actions[0]).toEqual(actions[0]);
        });

        it('should update action grouped in props with the selectedIds array and the rowsData from the state if rowsMultiSelect is true', () => {
            const actions = [{id: 'action1', enabled: true}, {id: 'action2', enabled: true, grouped: true}];
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, getActions: () => actions, initialTableData: getInitialTableDataMock(['id1', 'id2']), rowsMultiSelect: true});

            const tableConnected = wrapper.find(Table);

            expect(tableConnected.props().actions[0]).toEqual(actions[1]);
        });
    });

    describe('after render', () => {
        it('should add as many actions as there are dispatched table actions on onRowClick', () => {
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});
            const tableConnected = wrapper.find(Table);

            const actions = [
                {
                    enabled: true,
                    name: 'action1',
                    primary: true,
                    icon: 'edit',
                },
                {
                    enabled: true,
                    name: 'action2',
                    primary: true,
                    icon: 'clear',
                },
            ];

            expect(wrapper.find(PrimaryAction).length).toBe(0);
            tableConnected.props().onRowClick(actions, 1);
            wrapper.update();
            expect(wrapper.find(PrimaryAction).length).toBe(actions.length);
        });

        it('should show only grouped action if the numberOfSelectedIds is greater than 2 on onRowClick', () => {
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, rowsMultiSelect: true});
            const tableConnected = wrapper.find(Table);

            const actions = [
                {
                    enabled: true,
                    name: 'action1',
                    primary: true,
                    icon: 'edit',
                },
                {
                    enabled: true,
                    name: 'action2',
                    primary: true,
                    icon: 'clear',
                    grouped: true,
                },
            ];

            expect(wrapper.find(PrimaryAction).length).toBe(0);
            tableConnected.props().onRowClick(actions, 2);
            wrapper.update();
            expect(wrapper.find(PrimaryAction).length).toBe(1);
        });

        it('should modify the selected option in the predicate and close the dropdown on onPredicateOptionClick', () => {
            const testOption = {value: 'test emails', selected: false};
            const predicate = {
                attributeName: 'email',
                attributeNameFormatter: _.identity,
                props: {defaultOptions: [testOption]},
            };
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true, predicates: [predicate]});
            const tableConnected = wrapper.find(Table);
            const predicateId = `${getTableChildComponentId(tableConnected.props().id, TableChildComponent.PREDICATE)}${predicate.attributeName}`;
            store.dispatch(openDropdownSearch(predicateId));
            wrapper.update();

            tableConnected.props().onPredicateOptionClick(predicateId, testOption);

            const dropdownSearch = _.findWhere(store.getState().dropdownSearch, {id: predicateId});

            expect(dropdownSearch.isOpened).toBe(false);
            expect(_.findWhere(dropdownSearch.options, {selected: true}).value).toBe(testOption.value);
        });

        it('should update the actions in the actionBar on onWillUpdate', () => {
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});
            const tableConnected = wrapper.find(Table);

            const actions = [
                {
                    enabled: true,
                    name: 'action1',
                    primary: true,
                    icon: 'edit',
                },
                {
                    enabled: true,
                    name: 'action2',
                    primary: true,
                    icon: 'clear',
                    grouped: true,
                },
            ];

            expect(wrapper.find(PrimaryAction).length).toBe(0);
            tableConnected.props().onWillUpdate(actions);
            wrapper.update();
            expect(wrapper.find(PrimaryAction).length).toBe(actions.length);
        });

        it('should keep the empty actionBar if the length of the new actions is empty', () => {
            const wrapper = mountComponentWithProps({...tablePropsMock, actionBar: true});
            const tableConnected = wrapper.find(Table);

            expect(wrapper.find(PrimaryAction).length).toBe(0);
            tableConnected.props().onWillUpdate([]);
            wrapper.update();
            expect(wrapper.find(PrimaryAction).length).toBe(0);
        });

        it('should call the manual thunk if it is passed as own props on onModifyData', () => {
            const manualSpy = jasmine.createSpy('manualSpy').and.returnValue(_.noop);
            const wrapper = mountComponentWithProps({...tablePropsMock, manual: manualSpy});
            const tableConnected = wrapper.find(Table);

            const shouldResetPage = true;
            const tableComposite1 = tablePropsMock.tableCompositeState;
            const tableComposite2 = tablePropsMock.tableCompositeState;
            tableConnected.props().onModifyData(shouldResetPage, tableComposite1, tableComposite2);
            expect(manualSpy).toHaveBeenCalledTimes(1);
            expect(_.rest(manualSpy.calls.mostRecent().args)).toEqual([shouldResetPage, tableComposite1, tableComposite2]);
        });

        it('should call the default data modifier thunk if manual is not in ownProps on onModifyData', () => {
            const wrapper = mountComponentWithProps({...tablePropsMockWithData});
            const tableConnected = wrapper.find(Table);
            const defaultTableStateModifierThunkSpy = spyOn(TableDataModifier, 'defaultTableStateModifierThunk').and.returnValue(_.noop);

            const shouldResetPage = true;
            const tableComposite1 = tablePropsMock.tableCompositeState;
            tableConnected.props().onModifyData(shouldResetPage, tableComposite1);
            expect(defaultTableStateModifierThunkSpy).toHaveBeenCalledTimes(1);
            expect(_.rest(defaultTableStateModifierThunkSpy.calls.mostRecent().args)).toEqual([shouldResetPage, tableComposite1]);
        });
    });
});
