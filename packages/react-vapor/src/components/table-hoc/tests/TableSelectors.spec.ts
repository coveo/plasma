import {IReactVaporState} from '../../../ReactVapor';
import {TableSelectors} from '../TableSelectors';
import {ITableHOCCompositeState, TableHOCUtils} from '../utils/TableHOCUtils';

describe('TableSelectors', () => {
    describe('getIsTruelyEmpty', () => {
        it('should return true if the data is empty, there is no filter, predicate or date limit applied', () => {
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({});

            expect(TableSelectors.getIsTruelyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return true if the data is empty, there is no filter, predicate or date limit applied (null dates)', () => {
            const tableState: ITableHOCCompositeState = {
                dateLimits: [null, null],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTruelyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return false if the data is empty but a filter is applied', () => {
            const tableState: ITableHOCCompositeState = {
                filter: 'desk',
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTruelyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a predicate is applied', () => {
            const tableState: ITableHOCCompositeState = {
                predicates: [{id: 'type', value: 'a'}],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTruelyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a date limit is applied', () => {
            const now = new Date();
            const tableState: ITableHOCCompositeState = {
                dateLimits: [now],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTruelyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });
    });
});
