import {FileUtils} from './FileUtils';

describe('FileUtils', () => {
    describe('serialize', () => {
        const now = new Date().valueOf();
        const file = new File(['this is a nice file you got there'], '🤓', {type: 'text/plain', lastModified: now});

        it('should return undefined if no file is specified', () => {
            expect(FileUtils.serialize(null)).toBeUndefined();
        });

        it('should return an object containing the specified file name', () => {
            expect(FileUtils.serialize(file)).toEqual(jasmine.objectContaining({name: '🤓'}));
        });

        it('should return an object containing the specified file type', () => {
            expect(FileUtils.serialize(file)).toEqual(jasmine.objectContaining({type: 'text/plain'}));
        });

        it('should return an object containing the specified file size', () => {
            expect(FileUtils.serialize(file)).toEqual(jasmine.objectContaining({size: 33}));
        });

        it('should return an object containing the specified file last modified date', () => {
            expect(FileUtils.serialize(file)).toEqual(jasmine.objectContaining({lastModified: now}));
        });
    });
});
