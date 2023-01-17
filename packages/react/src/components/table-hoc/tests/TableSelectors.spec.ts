import {PlasmaState} from '../../../PlasmaState.js';
import {TableSelectors, TableSelectorsProps} from '../TableSelectors.js';
import {ITableHOCCompositeState, TableHOCUtils} from '../utils/TableHOCUtils.js';

describe('TableSelectors', () => {
    describe('isEmptyStateSet', () => {
        const anyId = '🍡';
        it('should return true if the emptyStateSet property is true', () => {
            const state = {tablesHOC: [{id: anyId, emptyStateSet: true}]} as PlasmaState;
            expect(TableSelectors.isEmptyStateSet(state, {id: anyId} as TableSelectorsProps)).toBe(true);
        });

        it('should return false if the emptyStateSet property is false', () => {
            const state = {tablesHOC: [{id: anyId, emptyStateSet: false}]} as PlasmaState;
            expect(TableSelectors.isEmptyStateSet(state, {id: anyId} as TableSelectorsProps)).toBe(false);
        });

        it('should return false if the emptyStateSet property is undefined', () => {
            const state = {} as PlasmaState;
            expect(TableSelectors.isEmptyStateSet(state, {id: anyId} as TableSelectorsProps)).toBe(false);
        });
    });

    describe('isEmptyStateAlreadySet', () => {
        const anyId = '🍡';
        it('should return true if the emptyStateSet property is set as true', () => {
            const state = {tablesHOC: [{id: anyId, emptyStateSet: true}]} as PlasmaState;
            expect(TableSelectors.isEmptyStateAlreadySet(state, {id: anyId} as TableSelectorsProps)).toBe(true);
        });

        it('should return true if the emptyStateSet property is set as false', () => {
            const state = {tablesHOC: [{id: anyId, emptyStateSet: false}]} as PlasmaState;
            expect(TableSelectors.isEmptyStateAlreadySet(state, {id: anyId} as TableSelectorsProps)).toBe(true);
        });

        it('should return false if the emptyStateSet property undefined', () => {
            const state = {} as PlasmaState;
            expect(TableSelectors.isEmptyStateAlreadySet(state, {id: anyId} as TableSelectorsProps)).toBe(false);
        });
    });

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
            jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValueOnce({});

            expect(TableSelectors.getIsTrulyEmpty({} as PlasmaState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return true if the data is empty, there is no filter, predicate or date limit applied (null dates)', () => {
            const tableState: ITableHOCCompositeState = {
                dateLimits: [null, null],
            };
            jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValueOnce(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as PlasmaState, {id: 'table-id', data: []})).toBe(true);
        });

        it('should return false if the data is empty but a filter is applied', () => {
            const tableState: ITableHOCCompositeState = {
                filter: 'desk',
            };
            jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValueOnce(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as PlasmaState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a predicate is applied', () => {
            const tableState: ITableHOCCompositeState = {
                predicates: [{id: 'type', value: 'a'}],
            };
            jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValueOnce(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as PlasmaState, {id: 'table-id', data: []})).toBe(false);
        });

        it('should return false if the data is empty but a date limit is applied', () => {
            const now = new Date();
            const tableState: ITableHOCCompositeState = {
                dateLimits: [now],
            };
            jest.spyOn(TableHOCUtils, 'getCompositeState').mockReturnValueOnce(tableState);

            expect(TableSelectors.getIsTrulyEmpty({} as PlasmaState, {id: 'table-id', data: []})).toBe(false);
        });
    });
});
