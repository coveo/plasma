import {FileNodesResponse, Frame} from 'figma-js';

import {optimize} from 'svgo';
import {getPage} from '../figma';
import {Token, TokenGroup} from '../formats/token';
import {generateTokens} from '../generateTokens';
import {PagesId} from '../mappings';

const cleanSvgMarkup = (svgMarkup: string): string =>
    optimize(svgMarkup, {
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
    }).data;

export const generateIconsTokens = (tokenLibrary: FileNodesResponse, iconsMarkup: Record<string, string>) => {
    const {name, children} = getPage(tokenLibrary, PagesId.Icons);

    const iconTokens = (children as Frame[]).map(
        (iconSet): TokenGroup => ({
            name: iconSet.name,
            children: iconSet.children.map(
                (iconVariant): Token => ({
                    name: iconVariant.name,
                    type: 'svg',
                    value: cleanSvgMarkup(iconsMarkup[iconVariant.id]),
                })
            ),
        })
    );

    generateTokens(name, [{name: 'icons', children: iconTokens}]);
};
