import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {LinkSvg, SvgNames} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

export const IconsList = () => (
    <VaporComponent
        id="list"
        title="Icons list"
        usage={
            <p>
                List of all icons available.{' '}
                <Link to="/foundations/Svg" className="bolder text mod-link">
                    See SVG
                </Link>{' '}
                for usage
            </p>
        }
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
    `https://github.com/coveo/react-vapor/blob/master/packages/vapor/resources/icons/svg/${fileName}`;
