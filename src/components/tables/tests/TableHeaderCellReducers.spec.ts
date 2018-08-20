import {addTableDataEntry} from '../TableActions';
import {TableSortingOrder} from '../TableConstants';
import {addHeaderCell, removeHeaderCell, sortFromHeaderCell} from '../TableHeaderCellActions';
import {tableHeaderCellReducer, tableHeaderCellsInitialState, tableHeaderCellsReducer} from '../TableHeaderCellReducers';
import {getNextTableSortingOrder} from '../TableUtils';

describe('tableHeaderCellsReducer', () => {
    const testHeaderCell = {
        id: 'test-header-cell-tableid',
        attributeToSort: 'awesomeAttribute',
        tableId: 'tableid',
        sorted: TableSortingOrder.UNSORTED,
    };

    it('should return the default state if the action is unrelated and the state is undefined', () => {
        const unrelatedAction = {type: 'any', payload: {}};
        expect(tableHeaderCellsReducer(undefined, unrelatedAction)).toEqual(tableHeaderCellsInitialState);
    });

    it('should return the same state if the action is unrelated and the state is defined for tableHeaderCellReducer', () => {
        const unrelatedAction = {type: 'any', payload: {}};
        expect(tableHeaderCellReducer(testHeaderCell, unrelatedAction)).toEqual(testHeaderCell);
    });

    it('should return the state with the new header cell in it on TableHeaderCellActions.add', () => {
        const newState = {
            [testHeaderCell.id]: testHeaderCell,
        };
        expect(tableHeaderCellsReducer(undefined, addHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, testHeaderCell.tableId)))
            .toEqual(newState);
    });

    it('should return the state with the new header cell in it on TableHeaderCellActions.remove', () => {
        const currentState = {
            [testHeaderCell.id]: testHeaderCell,
        };

        const nextState = {};
        expect(tableHeaderCellsReducer(currentState, removeHeaderCell(testHeaderCell.id)))
            .toEqual(nextState);
    });

    describe('on TableHeaderCellActions.sort', () => {
        it('should modify the sorted prop to the next table sorting order of the header cell having an identical id and tableId as the ones in the payload', () => {
            const currentState = {
                [testHeaderCell.id]: testHeaderCell,
            };

            const nextState = {
                [testHeaderCell.id]: {...testHeaderCell, sorted: getNextTableSortingOrder(testHeaderCell.sorted)},
            };
            expect(tableHeaderCellsReducer(currentState, sortFromHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, testHeaderCell.tableId)))
                .toEqual(nextState);
        });

        it('should modify the sorted prop to UNSORTED if the header cell have a different id and and a similar tableId as the ones in the payload', () => {
            const currentState = {
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.ASCENDING},
            };

            const nextState = {
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.UNSORTED},
            };
            expect(tableHeaderCellsReducer(currentState, sortFromHeaderCell('differentId', testHeaderCell.attributeToSort, testHeaderCell.tableId)))
                .toEqual(nextState);
        });

        it('should not modify the sorted prop of the header cell having an identical id but a different tableId', () => {
            const currentState = {
                [testHeaderCell.id]: testHeaderCell,
            };

            expect(tableHeaderCellsReducer(currentState, sortFromHeaderCell(testHeaderCell.id, testHeaderCell.attributeToSort, 'differentTableId')))
                .toEqual(currentState);
        });

        it('should not modify the sorted prop of the header cell having a different id and a different tableId', () => {
            const currentState = {
                [testHeaderCell.id]: testHeaderCell,
            };

            expect(tableHeaderCellsReducer(currentState, sortFromHeaderCell('differentId', testHeaderCell.attributeToSort, 'differentTableId')))
                .toEqual(currentState);
        });
    });

    describe('on TableActions.addTableDataEntry', () => {
        it('should unsort table header cells related to the tableId to let the added data appear first', () => {
            const currentState = {
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.ASCENDING},
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.ASCENDING, tableId: 'unrelated'},
            };

            const nextState = {
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.UNSORTED},
                [testHeaderCell.id]: {...testHeaderCell, sorted: TableSortingOrder.ASCENDING, tableId: 'unrelated'},
            };

            expect(tableHeaderCellsReducer(currentState, addTableDataEntry(testHeaderCell.tableId, {id: 'someFakeDataId'})))
                .toEqual(nextState);
        });
    });
});
