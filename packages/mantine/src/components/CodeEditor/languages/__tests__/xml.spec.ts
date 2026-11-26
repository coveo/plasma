import type {Monaco} from '@monaco-editor/react';
import {XML} from '../xml.js';

describe('XML', () => {
    it('registers the xml formatter only once per monaco instance', () => {
        const monaco = {languages: {registerDocumentFormattingEditProvider: vi.fn()}} as unknown as Monaco;

        XML.register(monaco);
        XML.register(monaco);

        expect(monaco.languages.registerDocumentFormattingEditProvider).toHaveBeenCalledTimes(1);
        expect(monaco.languages.registerDocumentFormattingEditProvider).toHaveBeenCalledWith('xml', expect.anything());
    });
});
