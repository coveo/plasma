import {TableHOCUtils} from '../TableHOCUtils';

describe('TableHOCUtils', () => {
    const defaultProps = {
        id: 'some-id',
        tableId: 'some-tableId',
        componentId: 'some-componentId',
        PREDICATE_SEPARATOR: '--',
    };

    describe('getPredicateId', () => {
        it('should get predicate id', () => {
            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);

            expect(predicateId).toEqual(
                defaultProps.tableId + defaultProps.PREDICATE_SEPARATOR + defaultProps.componentId
            );
        });
    });

    describe('getTableIdFromPredicateId', () => {
        it('should parse predicated id to table id', () => {
            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);
            const getTableId = TableHOCUtils.getTableIdFromPredicateId(predicateId);

            expect(getTableId).toEqual(defaultProps.tableId);
        });
    });

    describe('getPaginationId', () => {
        it('should get pagination id', () => {
            const paginationId = TableHOCUtils.getPaginationId(defaultProps.tableId);
            const expectedResult = `pagination-${defaultProps.tableId}`;

            expect(paginationId).toEqual(expectedResult);
        });
    });
});
