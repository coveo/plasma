import {Monaco} from '@monaco-editor/react';
import type {editor} from 'monaco-editor';

const format = (xml: string): string => {
    // https://stackoverflow.com/questions/57039218/doesnt-monaco-editor-support-xml-language-by-default
    const PADDING = ' '.repeat(2);
    const reg = /(>)(<)(\/*)/g;
    let pad = 0;

    xml = xml.replace(reg, '$1\r\n$2$3');

    return xml
        .split('\r\n')
        .map((node) => {
            let indent = 0;
            if (node.match(/.+<\/\w[^>]*>$/)) {
                indent = 0;
            } else if (node.match(/^<\/\w/) && pad > 0) {
                pad -= 1;
            } else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
                indent = 1;
            } else {
                indent = 0;
            }

            pad += indent;

            return PADDING.repeat(pad - indent) + node;
        })
        .join('\r\n');
};

const register = (monaco: Monaco): void => {
    monaco.languages.registerDocumentFormattingEditProvider('xml', {
        provideDocumentFormattingEdits: async (model: editor.ITextModel) => [
            {
                range: model.getFullModelRange(),
                text: format(model.getValue()),
            },
        ],
    });
};

export const XML = {register};
