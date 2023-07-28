import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from '@test-utils';
import {compose} from 'underscore';

import {getStoreMock, TestUtils} from '../../../utils/tests/TestUtils';
import {UrlUtils} from '../../../utils/UrlUtils';
import {
    applyDatePicker,
    changeDatePickerLowerLimit,
    changeDatePickerUpperLimit,
} from '../../datePicker/DatePickerActions';
import {filterThrough} from '../../filterBox/FilterBoxActions';
import {selectListBoxOption} from '../../listBox/ListBoxActions';
import {changePage} from '../../navigation/pagination/NavigationPaginationActions';
import {changePerPage} from '../../navigation/perPage/NavigationPerPageActions';
import {TableHeaderActions} from '../actions/TableHeaderActions';
import {ITableHOCOwnProps, TableHOC} from '../TableHOC';
import {tableWithDatePicker} from '../TableWithDatePicker';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {tableWithUrlState} from '../TableWithUrlState';
import {TableHOCUtils} from '../utils/TableHOCUtils';
import {selectFlatSelect} from '../../flatSelect';

describe('Table HOC', () => {
    describe('tableWithUrlState', () => {
        let table: ShallowWrapper<ITableHOCOwnProps>;
        let store: ReturnType<typeof getStoreMock>;

        beforeAll(() => {
            store = getStoreMock();
            TestUtils.makeDebounceStatic();
        });

        beforeEach(() => {
            store.clearActions();
        });

        afterEach(() => {
            table && table.exists() && table.unmount();
        });

        it('should not throw when creating the HOC component', () => {
            expect(() => {
                tableWithUrlState(TableHOC);
            }).not.toThrow();
        });

        it('should not throw when rendering the HOC component', () => {
            const onUpdateUrlSpy = jest.fn();
            const renderBodySpy = jest.fn();

            expect(() => {
                const TableWithUrlState = tableWithUrlState(TableHOC);
                table = shallowWithStore(
                    <TableWithUrlState
                        id={'table'}
                        data={[]}
                        onUpdateUrl={onUpdateUrlSpy}
                        renderBody={renderBodySpy}
                    />,
                    store,
                )
                    .dive()
                    .dive();
                table.unmount();
            }).not.toThrow();
        });

        it('should call the "onUpdateUrl" prop with the query string representing the current state when the table needs to update', () => {
            jest.useFakeTimers();
            const onUpdateUrlSpy = jest.fn();
            const renderBodySpy = jest.fn();
            const TableWithUrlState = tableWithUrlState(TableHOC);
            table = shallowWithStore(
                <TableWithUrlState id={'table'} data={[]} onUpdateUrl={onUpdateUrlSpy} renderBody={renderBodySpy} />,
                store,
            )
                .dive()
                .dive();

            expect(onUpdateUrlSpy).not.toHaveBeenCalled();

            table.prop('onUpdate')();
            jest.runAllTimers();

            expect(onUpdateUrlSpy).toHaveBeenCalledTimes(1);
            expect(onUpdateUrlSpy).toHaveBeenCalledWith('');
        });

        describe('when table has pagination', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithPagination())(TableHOC);

            it('should set the current page number in the url using "page" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    pageNb: 2,
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toContain('page=2');
            });

            it('should set the current perPage number in the url using "pageSize" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    perPage: 5,
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toContain('pageSize=5');
            });

            it('should dispatch an action to set the page number on mount if "page" param is specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({page: 4});
                table = shallowWithStore(<TableWithUrlState id="🦋" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(changePage(TableHOCUtils.getPaginationId('🦋'), 4));
            });

            it('should dispatch an action to set the page size on mount if "pageSize" param is specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({pageSize: 3});
                table = shallowWithStore(<TableWithUrlState id="💎" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(changePerPage('💎', 3));
                expect(store.getActions()).toContainEqual(selectFlatSelect('💎_PerPage', '3'));
            });
        });

        describe('when table has sortable columns', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithSort())(TableHOC);

            it('should set the current sorted column key in the url using "sortBy" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    sortKey: 'bacon',
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toContain('sortBy=bacon');
            });

            it('should set the current sort direction in the url using "order" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    sortAscending: true,
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toContain('order=asc');
            });

            it('should dispatch an action to set the sort key on mount if "sortBy" and "order" params are specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({sortBy: '🔥', order: 'desc'});
                table = shallowWithStore(<TableWithUrlState id="🦋" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(TableHeaderActions.sortTable('🔥', false));
            });
        });

        describe('when the table is filterable', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithFilter())(TableHOC);

            it('should set the current filter text in the url using "q" as param name', () => {
                const filterText = 'not so black sheep 🐑';
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    filter: filterText,
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toBe(`q=${encodeURIComponent(filterText)}`);
            });

            it('should dispatch an action to set the filter value on mount if "q" param is specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({q: '💧'});
                table = shallowWithStore(<TableWithUrlState id="🎠" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(filterThrough('🎠', '💧'));
            });
        });

        describe('when the table has a date picker', () => {
            const lowerLimit = new Date(2019, 1, 1);
            const upperLimit = new Date(2019, 1, 2);
            const TableWithUrlState = compose(tableWithUrlState, tableWithDatePicker())(TableHOC);

            it('should set the current lower date limit in the url using "from" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    dateLimits: [lowerLimit],
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toBe(`from=${encodeURIComponent(lowerLimit.toISOString())}`);
            });

            it('should set the current upper date limit in the url using "to" as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    dateLimits: [null, upperLimit],
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toBe(`to=${encodeURIComponent(upperLimit.toISOString())}`);
            });

            it('should dispatch an action to set the lower date limit on mount if "from" param is specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({from: lowerLimit.toISOString()});
                table = shallowWithStore(<TableWithUrlState id="🏦" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(
                    changeDatePickerLowerLimit(TableHOCUtils.getDatePickerId('🏦'), lowerLimit),
                );

                expect(store.getActions()).toContainEqual(applyDatePicker('🏦'));
            });

            it('should dispatch an action to set the upper date limit on mount if "to" param is specified in the url', () => {
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({to: upperLimit.toISOString()});
                table = shallowWithStore(<TableWithUrlState id="🏥" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(
                    changeDatePickerUpperLimit(TableHOCUtils.getDatePickerId('🏥'), upperLimit),
                );

                expect(store.getActions()).toContainEqual(applyDatePicker('🏥'));
            });
        });

        describe('when the table has predicates', () => {
            const TableWithUrlState = compose(
                tableWithUrlState,
                tableWithPredicate({
                    id: 'size',
                    values: [],
                }),
                tableWithPredicate({
                    id: 'topping',
                    values: [],
                }),
            )(TableHOC);

            it('should set the selected predicate values in the url using the each predicate id as param name', () => {
                jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValue({
                    predicates: [
                        {id: 'size', value: '12 inches'},
                        {id: 'topping', value: 'pepperoni'},
                    ],
                });

                table = shallowWithStore(<TableWithUrlState />, store).dive();

                expect(table.prop('query')).toContain(`size=${encodeURIComponent('12 inches')}`);
                expect(table.prop('query')).toContain('topping=pepperoni');
            });

            it('should dispatch an action to set each selected predicate on mount if its id is specified in the url', () => {
                jest.spyOn(TableHOCUtils, 'getPredicateIds').mockReturnValue(['size', 'topping']);
                jest.spyOn(UrlUtils, 'getSearchParams').mockReturnValue({size: '12 inches', topping: 'pepperoni'});
                table = shallowWithStore(<TableWithUrlState id="🍕" />, store)
                    .dive()
                    .dive();

                expect(store.getActions()).toContainEqual(
                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'size'), false, '12 inches'),
                );

                expect(store.getActions()).toContainEqual(
                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'topping'), false, 'pepperoni'),
                );
            });
        });
    });
});
