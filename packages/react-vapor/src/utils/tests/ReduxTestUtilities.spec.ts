import {TableHOCUtils} from '../../components/table-hoc/utils/TableHOCUtils';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxTestUtilities} from '../ReduxTestUtilities';

describe('ReduxTestUtilities', () => {
    const tableId = 'tableId';

    describe('createTableHOCCompositeState', () => {
        it('should return the tableHOC header', () => {
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                sortKey: 'key',
                sortAscending: true,
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );
            expect(compositeState.sortAscending).toBe(true);
            expect(compositeState.sortKey).toBe('key');
        });

        it('should return the perPage from the flatSelect', () => {
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                perPage: 10,
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );

            expect(compositeState.perPage).toBe(10);
        });

        it('should return the filter', () => {
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                filter: 'test',
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );

            expect(compositeState.filter).toBe('test');
        });

        it('should return the pageNb from the paginationComposite', () => {
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                pageNb: 2,
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );

            expect(compositeState.pageNb).toBe(2);
        });

        it('should return predicates', () => {
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                predicates: [{id: 'a', value: 'val1'}],
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );

            expect(compositeState.predicates[0].value).toBe('val1');
        });

        it('should return datePickers', () => {
            const newDate = new Date();
            const state = ReduxTestUtilities.createTableHOCCompositeState(tableId, {
                dateLimits: [newDate, newDate],
            });
            const compositeState = TableHOCUtils.getCompositeState(
                tableId,
                ReduxTestUtilities.getStateWithType<IReactVaporState>(state)
            );

            expect(compositeState.dateLimits[0]).toBe(newDate);
            expect(compositeState.dateLimits[1]).toBe(newDate);
        });
    });
});
