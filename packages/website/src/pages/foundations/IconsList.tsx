import * as VaporSVG from '@coveord/plasma-style';
import * as React from 'react';
import {LinkSvg, SvgNames} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';

export const IconsList = () => (
    <VaporComponent
        id="IconsList"
        title="Icons list"
        usage={<p>Icons are used to visually represent actions, functionalities, and features.</p>}
    >
        <ul className="sg-icons-list">
            {Object.keys(VaporSVG.svg)
                .sort()
                .map((svgName) => (
                    <IconItem key={svgName} svgName={svgName as SvgNames} fileName={VaporSVG.svg[svgName].fileName} />
                ))}
        </ul>
    </VaporComponent>
);

const IconItem = ({svgName, fileName}: {svgName: SvgNames; fileName: string}) => (
    <li className="cursor-pointer">
        <LinkSvg svg={{svgName}} url={getSvgURL(fileName)}>
            <label className="icon-name cursor-pointer">{svgName}</label>
        </LinkSvg>
    </li>
);

const getSvgURL = (fileName: string) =>
    `https://github.com/coveo/plasma/blob/master/packages/style/resources/icons/svg/${fileName}`;
