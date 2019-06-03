import {MultilineBoxSelectors} from '../MultilineBoxSelector';

describe('MultilineBoxSelectors', () => {
    const id: string = 'Raptor';
    const list: string[] = ['Cactus', 'Captus'];

    describe('getIds', () => {
        it('should return an empty array if the state is undefined', () => {
            expect(MultilineBoxSelectors.getIds(undefined, {id})).toEqual([]);
        });

        it('should return an empty array if the id do not exist in the state', () => {
            expect(MultilineBoxSelectors.getIds({}, {id})).toEqual([]);
        });

        it('should return an empty list of id if the id is in the state but the list undefined', () => {
            const state = {
                multilineIds: {
                    [id]: {id, list: undefined} as any,
                },
            };
            expect(MultilineBoxSelectors.getIds(state, {id})).toEqual([]);
        });

        it('should return the list of id if the id is in the state', () => {
            const state = {
                multilineIds: {
                    [id]: {id, list},
                },
            };
            expect(MultilineBoxSelectors.getIds(state, {id})).toEqual(list);
        });
    });
});
