import {FileNodesResponse, Frame} from 'figma-js';
import {readJson} from 'fs-extra';
import {optimize, OptimizedSvg} from 'svgo';

import {getPage} from '../figma';
import {Token, TokenGroup} from '../formats/token';
import {generateTokens} from '../generateTokens';
import {PagesId} from '../mappings';

const cleanSvgMarkup = (name: string, svgMarkup: string): string => {
    const result = optimize(svgMarkup, {
        multipass: true,
        plugins: [
            {name: 'removeViewBox', active: false},
            {name: 'removeDimensions', active: true},
            {
                name: 'removeAttributesBySelector',
                active: true,
                params: {selector: "[stroke='#282829']", attributes: ['stroke']} as any,
            },
            {
                name: 'addAttributesToSVGElement',
                active: true,
                params: {attribute: {stroke: '#282829'}} as any,
            },
        ],
    });

    if (result.error) {
        console.error(`Could not parse SVG markup for icon ${name}.`);
        console.error(result.error);
        return '';
    } else {
        return (result as OptimizedSvg).data;
    }
};

const generateIconsTokens = (tokenLibrary: FileNodesResponse, iconsMarkup: Record<string, string>) => {
    const {name, children} = getPage(tokenLibrary, PagesId.Icons[0]);

    const iconTokens = (children as Frame[]).map(
        (iconSet): TokenGroup => ({
            name: iconSet.name,
            children: iconSet.children.map(
                (iconVariant): Token => ({
                    name: iconVariant.name,
                    type: 'svg',
                    value: cleanSvgMarkup(iconVariant.name, iconsMarkup[iconVariant.id]),
                })
            ),
        })
    );

    generateTokens(name, [{name: 'icons', children: iconTokens}]);
};

export const buildIconsTokens = async () => {
    const libraryContent: FileNodesResponse = await readJson('./data/iconsLibrary.json');
    const iconsMarkup: Record<string, string> = await readJson('./data/icons.json');
    generateIconsTokens(libraryContent, iconsMarkup);
};
