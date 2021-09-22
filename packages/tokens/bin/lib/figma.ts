import {FileNodesResponse, Document} from 'figma-js';

export const getPage = (file: FileNodesResponse, pageId: string) => {
    const page = file?.nodes?.[pageId];

    if (!page) {
        throw new Error(`Page not found: ${pageId}`);
    }

    return {
        name: page.document.name,
        styles: page.styles,
        children: (page.document as Document).children,
    };
};
