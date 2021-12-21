import {IItemBoxProps} from '../../itemBox/ItemBox';
import {defaultListBoxMatchFilter} from '../FilterBoxUtils';

describe('defaultListBoxMatchFilter', () => {
    const defaultItemBox: IItemBoxProps = {
        value: 'abc',
    };

    it('should return true if the filterValue is empty', () => {
        expect(defaultListBoxMatchFilter('', defaultItemBox)).toBe(true);
    });

    it('should not throw for falsy values', () => {
        expect(() => defaultListBoxMatchFilter(null, defaultItemBox)).not.toThrow();
        expect(() => defaultListBoxMatchFilter(undefined, defaultItemBox)).not.toThrow();
        expect(() => defaultListBoxMatchFilter('', defaultItemBox)).not.toThrow();
    });

    it('should not throw errors when the filterValue contains special characters', () => {
        expect(() => {
            defaultListBoxMatchFilter('(', defaultItemBox);
            defaultListBoxMatchFilter('/', defaultItemBox);
            defaultListBoxMatchFilter('\\', defaultItemBox);
            defaultListBoxMatchFilter('[', defaultItemBox);
        }).not.toThrow();
    });

    describe('with value', () => {
        it('should return true if the item value contain the filterValue', () => {
            expect(defaultListBoxMatchFilter('a', defaultItemBox)).toBe(true);
        });

        it('should return true if the item value contain a exact match with the filterValue', () => {
            expect(defaultListBoxMatchFilter(defaultItemBox.value, defaultItemBox)).toBe(true);
        });

        it('should return false if the item value do not contain the filterValue', () => {
            expect(defaultListBoxMatchFilter('d', defaultItemBox)).toBe(false);
        });
    });

    describe('with displayValue', () => {
        const itemBoxWithDisplayValue: IItemBoxProps = {
            displayValue: 'abc',
            value: 'z',
        };

        it('should return true if the item displayValue contain the filterValue', () => {
            expect(defaultListBoxMatchFilter('a', itemBoxWithDisplayValue)).toBe(true);
        });

        it('should return true if the item displayValue contain a exact match with the filterValue', () => {
            expect(
                defaultListBoxMatchFilter(itemBoxWithDisplayValue.displayValue as string, itemBoxWithDisplayValue)
            ).toBe(true);
        });

        it('should return false if the item displayValue do not contain the filterValue', () => {
            expect(defaultListBoxMatchFilter('d', itemBoxWithDisplayValue)).toBe(false);
        });
    });
});
