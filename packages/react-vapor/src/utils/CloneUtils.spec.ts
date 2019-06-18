import {deepClone} from './CloneUtils';

describe('CloneUtils', () => {
    describe('deepClone', () => {
        it('should deep clone an array and its element', () => {
            const object1 = {property: 1};
            const object2 = {property: 2};
            const array = [object1, object2];

            const deepClonedArray = deepClone(array);
            deepClonedArray[0].property = 3;

            expect(object1.property).toEqual(1);
        });

        it('should deep clone an object and all of its fields', () => {
            const object = {
                property1: 1,
                property2: 2,
            };

            const deepClonedObject = deepClone(object);
            deepClonedObject.property1 = 3;

            expect(object.property1).toEqual(1);
        });
    });
});
