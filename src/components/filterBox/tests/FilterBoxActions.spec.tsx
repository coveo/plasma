import {defaultMatchFilter} from '../FilterBoxActions';

describe('FilterBoxActions', () => {

    describe('defaultMatchFilter', () => {

        const filterValue: string = 'test';
        const propertyToTest: string[] = ['value'];
        const defaultItem = {
            value: 'test',
        };

        it('should not throw if the list is empty', () => {
            expect(() => {
                defaultMatchFilter(filterValue, undefined, propertyToTest);
            }).not.toThrow();
        });

        it('should not throw if the property is not defined for the object in the list', () => {
            expect(() => {
                defaultMatchFilter(filterValue, [{notValue: 'aa'}], propertyToTest);
            }).not.toThrow();
        });

        it('should filter on the property value and have a match if the value is equal to the filter value', () => {
            expect(defaultMatchFilter(filterValue, defaultItem, propertyToTest)).toBe(true);
        });

        it('should filter on the property value and do not have a match if the value is not equal to the filter value', () => {
            expect(defaultMatchFilter('aaa', defaultItem, propertyToTest)).toBe(false);
        });

        it('should filter on properties values and have a match if the value is equal to the filter value', () => {
            expect(defaultMatchFilter(filterValue, {
                value: 'aaaaa',
                test: 'test',
            }, ['newValue', 'test'])).toBe(true);
        });

        it('should filter on properties values and do not have a match if the value is not equal to the filter value', () => {
            expect(defaultMatchFilter('bb', {
                value: 'aaaaa',
                test: 'test',
            }, ['newValue', 'test'])).toBe(false);
        });

        it('should return a match if the filter is empty', () => {
            expect(defaultMatchFilter('', [], [])).toBe(true);
        });

        it('should not return a match if the filterValue is not in any objects', () => {
            expect(defaultMatchFilter('GG', defaultItem, propertyToTest)).toBe(false);
        });
    });
});
