import {PaginationSelectors} from '../PaginationSelectors';

describe('PaginationSelectors tests', () => {
    describe('getPaginationState', () => {
        it('should get the paginationState from the state', () => {
            const paginationState = {id: 'test', pageNb: 2};
            expect(
                PaginationSelectors.getPaginationState({paginationComposite: [paginationState]}, {id: 'test'})
            ).toEqual(paginationState);
        });

        it('should not get the paginationState from the state if the id is not present', () => {
            const paginationState = {id: 'aaaaa', pageNb: 2};
            expect(
                PaginationSelectors.getPaginationState({paginationComposite: [paginationState]}, {id: 'test'})
            ).not.toEqual(paginationState);
        });
    });

    describe('getPaginationPageNumber', () => {
        it('should ', () => {
            const paginationState = {id: 'test', pageNb: 2};
            expect(
                PaginationSelectors.getPaginationPageNumber({paginationComposite: [paginationState]}, {id: 'test'})
            ).toEqual(paginationState.pageNb);
        });

        it('should not get the PaginationPageNumber from the state if the pagination dont exist', () => {
            const paginationState = {id: 'aaaaa', pageNb: 2};
            expect(
                PaginationSelectors.getPaginationPageNumber({paginationComposite: [paginationState]}, {id: 'test'})
            ).not.toEqual(paginationState.pageNb);
        });
    });
});
