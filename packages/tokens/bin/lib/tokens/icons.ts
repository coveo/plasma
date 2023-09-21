import {FileNodesResponse, Frame} from 'figma-js';
import {readJson} from 'fs-extra';

import {getPage} from '../figma';
import {Token, TokenGroup} from '../formats/token';
import {generateTokens} from '../generateTokens';
import {PagesId} from '../mappings';

const generateIconsTokens = (tokenLibrary: FileNodesResponse, iconsMarkup: Record<string, string>) => {
    const {name, children} = getPage(tokenLibrary, PagesId.Icons[0]);

    const iconSvgTokens = (children as Frame[]).map(
        (iconSet): TokenGroup => ({
            name: iconSet.name,
            children: iconSet.children.map(
                (iconVariant): Token => ({
                    name: iconVariant.name,
                    type: 'svg',
                    value: iconsMarkup[iconVariant.id],
                }),
            ),
        }),
    );

    generateTokens(name, [{name: 'icons', children: iconSvgTokens}]);
};

export const buildIconsTokens = async () => {
    const libraryContent: FileNodesResponse = await readJson('./data/iconsLibrary.json');
    const iconsMarkup: Record<string, string> = await readJson('./data/icons.json');
    generateIconsTokens(libraryContent, iconsMarkup);
};
