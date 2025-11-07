import {MockUtils} from './MockUtils';

describe('MockUtils', () => {
    describe('formatLabel', () => {
        it('transforms icon name to camelCase label', () => {
            expect(MockUtils.formatLabel('ArrowUpSize16Px')).toBe('arrowUp');
        });

        it('handles single word names', () => {
            expect(MockUtils.formatLabel('HomeSize24Px')).toBe('home');
        });

        it('handles multi-word names', () => {
            expect(MockUtils.formatLabel('ChevronDownSize32Px')).toBe('chevronDown');
        });

        it('returns original name if pattern does not match', () => {
            expect(MockUtils.formatLabel('InvalidName')).toBe('invalidName');
        });
    });

    describe('formatToTablerClassName', () => {
        it('does not transform names that do not start with Icon', () => {
            expect(MockUtils.formatToTablerClassName('ArrowUpSize16Px')).toBe('ArrowUpSize16Px');
        });

        it('handles single word names', () => {
            expect(MockUtils.formatToTablerClassName('IconHome')).toBe('tabler-icon tabler-icon-home');
        });

        it('handles multi-word names', () => {
            expect(MockUtils.formatToTablerClassName('IconChevronDown')).toBe('tabler-icon tabler-icon-chevron-down');
        });

        it('handles names with numbers', () => {
            expect(MockUtils.formatToTablerClassName('Icon24')).toBe('tabler-icon tabler-icon-24');
        });

        it('handles consecutive uppercase letters', () => {
            expect(MockUtils.formatToTablerClassName('IconHTTPS')).toBe('tabler-icon tabler-icon-https');
        });
    });
});
