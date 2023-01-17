import {FileNodesResponse, Document} from 'figma-js';

export type LibraryName = 'Icons' | 'Colors';

export const FilesId: Record<LibraryName, string> = {
    Icons: 'xyrRxkBsAoDeHuo7tX8hog',
    Colors: 'OPYZ4jHCTpy9lo6eupgGTk',
};

export const PagesId: Record<LibraryName, string[]> = {
    Icons: ['2:21942'],
    Colors: ['524:288'],
};

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
