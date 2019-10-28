import {UrlUtils} from './UrlUtils';

describe('UrlUtils', () => {
    describe('toObject', () => {
        it('should parse the query string into the proper object ', () => {
            expect(UrlUtils.toObject('a=b&c=d')).toEqual({a: 'b', c: 'd'});
        });
        it('should parse "true" and "false" as booleans in the object', () => {
            expect(UrlUtils.toObject('story=true')).not.toEqual({story: 'true'});
            expect(UrlUtils.toObject('story=true')).toEqual({story: true});
        });
        it('should parse digits as numbers in the object', () => {
            expect(UrlUtils.toObject('count=123')).not.toEqual({count: '123'});
            expect(UrlUtils.toObject('count=123')).toEqual({count: 123});
        });
        it('should return an object that extends the Object prototype', () => {
            expect(UrlUtils.toObject('abc=def') instanceof Object).toBe(true);
        });
        it('should not change the order of the key-value pairs in the object', () => {
            const obj = UrlUtils.toObject('vehicle=🛥&beverage=🥛');
            expect(JSON.stringify(obj)).toBe(JSON.stringify({vehicle: '🛥', beverage: '🥛'}));
            expect(JSON.stringify(obj)).not.toBe(JSON.stringify({beverage: '🥛', vehicle: '🛥'}));
        });
    });

    describe('toQueryString', () => {
        it('should translate objects into query strings properly', () => {
            expect(UrlUtils.toQueryString({a: 'b', c: 'd'})).toBe('a=b&c=d');
        });
        it('should encode values so that it produces a valid url', () => {
            const favoriteBaconFlavor = 'smoked maple';
            expect(UrlUtils.toQueryString({flavor: favoriteBaconFlavor})).toBe(
                `flavor=${encodeURIComponent(favoriteBaconFlavor)}`
            );
            expect(UrlUtils.toQueryString({flavor: favoriteBaconFlavor})).not.toBe(`flavor=${favoriteBaconFlavor}`);
        });
        it('should not change the order of the key-value pairs in the query string', () => {
            const query = UrlUtils.toQueryString({fruit: 'apple', color: 'red'});
            expect(query).toBe('fruit=apple&color=red');
            expect(query).not.toBe('color=red&fruit=apple');
        });
    });

    describe('getSearchParams', () => {
        it('should transform the current query string into a parameters object', () => {
            spyOn(UrlUtils, 'getQuery').and.returnValue('animal=tiger&age=7');
            expect(UrlUtils.getSearchParams()).toEqual({animal: 'tiger', age: 7});
        });
    });
});
