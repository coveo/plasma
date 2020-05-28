import {Random} from './RandomUtils';

describe('RandomUtils', () => {
    // Not sure how to unit test randomness ¯\_(ツ)_/¯

    describe('Random.pick', () => {
        it('should return undefined if the array is empty', () => {
            expect(Random.pick([])).toBeUndefined();
        });

        it('should return the only element in the array', () => {
            expect(Random.pick(['🤠'])).toBe('🤠');
        });

        it('should return an element from the array', () => {
            const possibleValues = ['😎', '🤠', '😮'];
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
            expect(possibleValues).toContain(Random.pick(possibleValues));
        });
    });

    describe('Random.bool', () => {
        it('should return either true or false', () => {
            const possibleValues = [true, false];
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
            expect(possibleValues).toContain(Random.bool());
        });
    });
});
