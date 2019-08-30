import {TableHOCUtils} from '../TableHOCUtils';

describe('TableHOCUtils', () => {
    const defaultProps = {id: 'some-id', componentId: 'some-componentId', tableId: 'some-tableId'};

    describe('getPredicateId', () => {
        it('should get predicate id', () => {
            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);

            expect(predicateId).toEqual(defaultProps.tableId + '--' + defaultProps.componentId);
        });
    });

    describe('getTableIdFromPredicateId', () => {
        it('should parse predicated id to table id', () => {
            const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);
            const tableId = TableHOCUtils.getTableIdFromPredicateId(predicateId);

            expect(tableId).toEqual(defaultProps.tableId);
        });
    });

    describe('getPaginationId', () => {
        it('should get pagination id', () => {
            const paginationId = TableHOCUtils.getPaginationId(defaultProps.tableId);
            const expectedResult = `pagination-${defaultProps.tableId}`;

            expect(paginationId).toEqual(expectedResult);
        });
    });

    describe('getCompositeState', () => {
        const predicateId = TableHOCUtils.getPredicateId(defaultProps.tableId, defaultProps.componentId);
        const predicateValue = 'LONG_64';
        const defaultState: any = {
            tableHOCHeader: [{id: defaultProps.id, tableId: defaultProps.tableId, isAsc: true}],
            paginationComposite: [{id: `pagination-${defaultProps.tableId}`, pageNb: 2}],
            perPageComposite: [{id: defaultProps.tableId, perPage: 10}],
            filters: [{id: defaultProps.tableId, filterText: 'some-text'}],
            listBoxes: [{id: predicateId, selected: [predicateValue]}],
        };

        it('should return composite state', () => {
            const compositeState = TableHOCUtils.getCompositeState(defaultProps.tableId, defaultState);
            const expectedResult = {
                predicates: [{id: defaultProps.componentId, value: predicateValue}],
                sortKey: defaultProps.id,
                sortAscending: true,
                perPage: 10,
                pageNb: 2,
                filter: 'some-text',
                dateLimits: [null, null] as any,
            };

            expect(compositeState).toEqual(expectedResult);
        });
    });
});
