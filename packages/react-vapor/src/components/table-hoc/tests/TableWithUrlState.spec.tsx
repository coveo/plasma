import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import React from 'react';
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
            expect(() => {
                const TableWithUrlState = tableWithUrlState(TableHOC);
                table = shallowWithStore(<TableWithUrlState />, store).dive();
                table.unmount();
            }).not.toThrow();
        });

        it('should call the "onUpdateUrl" prop with the query string representing the current state when the table needs to update', () => {
            const onUpdateUrlSpy = jasmine.createSpy('onUpdateUrl');
            const TableWithUrlState = tableWithUrlState(TableHOC);
            table = shallowWithStore(<TableWithUrlState onUpdateUrl={onUpdateUrlSpy} />, store).dive();

            expect(onUpdateUrlSpy).not.toHaveBeenCalled();
            table.prop('onUpdate')();
            expect(onUpdateUrlSpy).toHaveBeenCalledTimes(1);
            expect(onUpdateUrlSpy).toHaveBeenCalledWith('');
        });

        describe('when table has pagination', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithPagination())(TableHOC);

            it('should set the current page number in the url using "page" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    pageNb: 2,
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain('page=2');
            });

            it('should set the current perPage number in the url using "pageSize" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    perPage: 5,
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain('pageSize=5');
            });

            it('should dispatch an action to set the page number on mount if "page" param is specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({page: 4});
                table = shallowWithStore(<TableWithUrlState id="🦋" />, store).dive();

                expect(store.getActions()).toContain(changePage(TableHOCUtils.getPaginationId('🦋'), 4));
            });

            it('should dispatch an action to set the page size on mount if "pageSize" param is specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({pageSize: 3});
                table = shallowWithStore(<TableWithUrlState id="💎" />, store).dive();

                expect(store.getActions()).toContain(changePerPage('💎', 3));
            });
        });

        describe('when table has sortable columns', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithSort())(TableHOC);

            it('should set the current sorted column key in the url using "sortBy" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    sortKey: 'bacon',
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain('sortBy=bacon');
            });

            it('should set the current sort direction in the url using "order" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    sortAscending: true,
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain('order=asc');
            });

            it('should dispatch an action to set the sort key on mount if "sortBy" and "order" params are specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({sortBy: '🔥', order: 'desc'});
                table = shallowWithStore(<TableWithUrlState id="🦋" />, store).dive();

                expect(store.getActions()).toContain(TableHeaderActions.sortTable('🔥', false));
            });
        });

        describe('when the table is filterable', () => {
            const TableWithUrlState = compose(tableWithUrlState, tableWithFilter())(TableHOC);

            it('should set the current filter text in the url using "q" as param name', () => {
                const filterText = 'not so black sheep 🐑';
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    filter: filterText,
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain(`q=${encodeURIComponent(filterText)}`);
            });

            it('should dispatch an action to set the filter value on mount if "q" param is specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({q: '💧'});
                table = shallowWithStore(<TableWithUrlState id="🎠" />, store).dive();

                expect(store.getActions()).toContain(filterThrough('🎠', '💧'));
            });
        });

        describe('when the table has a date picker', () => {
            const lowerLimit = new Date(2019, 1, 1);
            const upperLimit = new Date(2019, 1, 2);
            const TableWithUrlState = compose(tableWithUrlState, tableWithDatePicker())(TableHOC);

            it('should set the current lower date limit in the url using "from" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    dateLimits: [lowerLimit],
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain(`from=${encodeURIComponent(lowerLimit.toISOString())}`);
            });

            it('should set the current upper date limit in the url using "to" as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    dateLimits: [null, upperLimit],
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain(`to=${encodeURIComponent(upperLimit.toISOString())}`);
            });

            it('should dispatch an action to set the lower date limit on mount if "from" param is specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({from: lowerLimit.toISOString()});
                table = shallowWithStore(<TableWithUrlState id="🏦" />, store).dive();

                expect(store.getActions()).toContain(
                    changeDatePickerLowerLimit(TableHOCUtils.getDatePickerId('🏦'), lowerLimit)
                );
                expect(store.getActions()).toContain(applyDatePicker('🏦'));
            });

            it('should dispatch an action to set the upper date limit on mount if "to" param is specified in the url', () => {
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({to: upperLimit.toISOString()});
                table = shallowWithStore(<TableWithUrlState id="🏥" />, store).dive();

                expect(store.getActions()).toContain(
                    changeDatePickerUpperLimit(TableHOCUtils.getDatePickerId('🏥'), upperLimit)
                );
                expect(store.getActions()).toContain(applyDatePicker('🏥'));
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
                })
            )(TableHOC);

            it('should set the selected predicate values in the url using the each predicate id as param name', () => {
                spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({
                    predicates: [
                        {id: 'size', value: '12 inches'},
                        {id: 'topping', value: 'pepperoni'},
                    ],
                });

                table = shallowWithStore(<TableWithUrlState />, store);
                expect(table.prop('query')).toContain(`size=${encodeURIComponent('12 inches')}`);
                expect(table.prop('query')).toContain('topping=pepperoni');
            });

            it('should dispatch an action to set each selected predicate on mount if its id is specified in the url', () => {
                spyOn(TableHOCUtils, 'getPredicateIds').and.returnValue(['size', 'topping']);
                spyOn(UrlUtils, 'getSearchParams').and.returnValue({size: '12 inches', topping: 'pepperoni'});
                table = shallowWithStore(<TableWithUrlState id="🍕" />, store).dive();

                expect(store.getActions()).toContain(
                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'size'), false, '12 inches')
                );
                expect(store.getActions()).toContain(
                    selectListBoxOption(TableHOCUtils.getPredicateId('🍕', 'topping'), false, 'pepperoni')
                );
            });
        });
    });
});
