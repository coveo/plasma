import {svg as Icons, SvgName} from '@coveord/plasma-style';
import * as React from 'react';
import {LinkSvg} from '@coveord/plasma-react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

export const IconographyExamples = () => (
    <PlasmaComponent
        id="IconsList"
        title="Icons list"
        usage={<p>Icons are used to visually represent actions, functionalities, and features.</p>}
    >
        <ul className="sg-icons-list">
            {Object.keys(Icons)
                .sort()
                .map((svgName: SvgName) => (
                    <IconItem key={svgName} svgName={svgName} fileName={Icons[svgName].fileName} />
                ))}
        </ul>
    </PlasmaComponent>
);

const IconItem = ({svgName, fileName}: {svgName: SvgName; fileName: string}) => (
    <li className="cursor-pointer">
        <LinkSvg svg={{svgName}} url={getSvgURL(fileName)}>
            <label className="icon-name cursor-pointer">{svgName}</label>
        </LinkSvg>
    </li>
);

const getSvgURL = (fileName: string) =>
    `https://github.com/coveo/plasma/blob/master/packages/style/resources/icons/svg/${fileName}`;

export default IconographyExamples;
