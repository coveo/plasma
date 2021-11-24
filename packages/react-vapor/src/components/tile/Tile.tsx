import * as React from 'react';

import {Svg, SvgNames} from '../svg';

export interface TileProps {
    title: string;
    svgName: SvgNames;
    description: string;
    href: string;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, svgName, href}) => (
    <>
        <a href={href}>
            <div className="tile">
                <div className="tile-icon">
                    <Svg svgName={svgName} svgClass="icon" />
                </div>
                <div className="tile-information">
                    <div className="tile-title h6-subdued">{title}</div>
                    <div className="tile-description body-m-book-subdued">{description}</div>
                </div>
            </div>
        </a>
    </>
);
