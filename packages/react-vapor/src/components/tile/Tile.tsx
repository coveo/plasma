// import classNames from 'classnames';
import * as React from 'react';

import {Svg, SvgNames} from '../svg';

export interface TileProps {
    title: string;
    svgName: SvgNames;
    description: string;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, svgName}) => (
    <>
        <div className="tile">
            <div className="tile-icon">
                <Svg svgName={svgName} svgClass="" />
            </div>
            <div className="tile-information">
                <div className="tile-title h6-subdued">{title}</div>
                <div className="tile-description body-m-book-subdued">{description}</div>
            </div>
        </div>
    </>
);
