import {StringUtils} from './StringUtils.js';

describe('StringUtils', () => {
    describe('separateCamelCase', () => {
        it('should convert a list of camelCase to normal text', () => {
            const strings = [
                {from: 'camelCase', expected: 'camel case'},
                {from: 'imTheBatman', expected: 'im the batman'},
                {from: 'whatAboutAWaterBottleWaddle?', expected: 'what about a water bottle waddle?'},
                {from: 'sheSellsSheShellsOnTheSeaShore', expected: 'she sells she shells on the sea shore'},
            ];

            strings.forEach((str) => {
                expect(StringUtils.separateCamelCase(str.from)).toBe(str.expected);
            });
        });
    });
});
