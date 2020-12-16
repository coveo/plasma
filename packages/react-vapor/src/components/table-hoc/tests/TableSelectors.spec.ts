import {IReactVaporState} from '../../../ReactVapor';
import {TableSelectors} from '../TableSelectors';
import {ITableHOCCompositeState, TableHOCUtils} from '../utils/TableHOCUtils';

describe('TableSelectors', () => {
    describe('getIsEmpty', () => {
        describe('when the "isServer" prop is true', () => {
            it('returns true if the "data" prop is undefined', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: true, data: undefined})).toBe(true);
            });

            it('returns true if the "data" prop is null', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: true, data: null})).toBe(true);
            });

            it('returns true if the "data" prop is an empty array', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: true, data: []})).toBe(true);
            });

            it('returns false if the "data" prop is a non-empty array', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: true, data: [1, 2, 3]})).toBe(false);
            });
        });

        describe('when the "isServer" prop is false', () => {
            it('returns true if the "data" prop is undefined', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: false, data: undefined})).toBe(true);
            });

            it('returns true if the "data" prop is an empty array', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: false, data: []})).toBe(true);
            });

            it('returns false if the "data" prop is null', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: false, data: null})).toBe(false);
            });

            it('returns false if the "data" prop is a non-empty array', () => {
                expect(TableSelectors.getIsEmpty({}, {id: '🌶', isServer: false, data: [1, 2, 3]})).toBe(false);
            });
        });
    });

    describe('getIsTrulyEmpty', () => {
        it('should return true if the data is empty, there is no filter, predicate or date limit applied', () => {
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue({});

            expect(TableSelectors.getIsTrulyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return true if the data is empty, there is no filter, predicate or date limit applied (null dates)', () => {
            const tableState: ITableHOCCompositeState = {
                dateLimits: [null, null],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return false if the data is empty but a filter is applied', () => {
            const tableState: ITableHOCCompositeState = {
                filter: 'desk',
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a predicate is applied', () => {
            const tableState: ITableHOCCompositeState = {
                predicates: [{id: 'type', value: 'a'}],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a date limit is applied', () => {
            const now = new Date();
            const tableState: ITableHOCCompositeState = {
                dateLimits: [now],
            };
            spyOn(TableHOCUtils, 'getCompositeState').and.returnValue(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as IReactVaporState, {id: 'table-id', data: []})).toBe(false);
        });
    });
});
