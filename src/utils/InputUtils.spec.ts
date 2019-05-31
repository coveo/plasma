import {decodeHtml} from './InputUtils';

describe('decodeHtml', () => {
    it('should not throw when passing falsy values', () => {
        expect(() => {
            decodeHtml('');
            decodeHtml(null);
            decodeHtml(undefined);
        }).not.toThrow();
    });

    it('should return the same string if it is free of html entities', () => {
        const str = 'I need a better chair, because my back hurts.';
        expect(decodeHtml(str)).toBe(str);
    });

    it('should decode the html entities from the string', () => {
        const encodedString = 'Groceries&#58; ham&#44; bread&#44; and cheese';
        const decodedString = 'Groceries: ham, bread, and cheese';
        expect(decodeHtml(encodedString)).toBe(decodedString);
    });
});
