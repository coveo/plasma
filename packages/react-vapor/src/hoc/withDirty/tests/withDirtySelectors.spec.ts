import {WithDirtySelectors} from '../withDirtySelectors';

describe('WithDirtySelectors', () => {
    describe('getIsDirty selector', () => {
        const componentId = 'componentId';

        it('should return true if the component id is in the state', () => {
            expect(WithDirtySelectors.getIsDirty({dirtyComponents: [componentId]}, {id: componentId})).toBe(true);
        });

        it('should return false if the component id is not in the state', () => {
            expect(WithDirtySelectors.getIsDirty({dirtyComponents: []}, {id: componentId})).toBe(false);
            expect(WithDirtySelectors.getIsDirty({}, {id: componentId})).toBe(false);
        });
    });
});
