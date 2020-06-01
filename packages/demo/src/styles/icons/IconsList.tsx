import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {LinkSvg} from 'react-vapor';
import * as _ from 'underscore';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const IconsList = () => {
    return (
        <VaporComponent id="list" title="Icons list" usage="List of all icons available">
            <ul className="sg-icons-list">
                {Object.keys(VaporSVG.svg)
                    .sort()
                    .map((svgName) => (
                        <IconItem key={svgName} svgName={svgName} fileName={VaporSVG.svg[svgName].fileName} />
                    ))}
            </ul>
        </VaporComponent>
    );
};

function IconItem({svgName, fileName}: {svgName: string; fileName: string}) {
    return (
        <li className="cursor-pointer">
            <LinkSvg svg={{svgName}} url={getSvgURL(fileName)}>
                <label className="icon-name text-black cursor-pointer">{svgName}</label>
            </LinkSvg>
        </li>
    );
}

function getSvgURL(fileName: string) {
    return `https://github.com/coveo/react-vapor/blob/master/packages/vapor/resources/icons/svg/${fileName}`;
}

export default IconsList;
