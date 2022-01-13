import * as React from 'react';

import {Svg, SvgNames} from '../svg';

export interface TileProps {
    title?: string;
    svgName: SvgNames;
    description?: string;
    href?: string;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, svgName, href}) => {
    const tileIcon = (
        <div className="tile-icon">
            <Svg svgName={svgName} svgClass="icon" />
        </div>
    );
    const tileInfo = (title || description) && (
        <div className="tile-information">
            {title && <div className="tile-title h6-subdued">{title}</div>}
            {description && <div className="tile-description body-m-book-subdued">{description}</div>}
        </div>
    );

    if (href && href.length > 0) {
        return (
            <a className="tile" href={href}>
                {tileIcon}
                {tileInfo}
            </a>
        );
    }

    return (
        <div className="tile">
            {tileIcon}
            {tileInfo}
        </div>
    );
};
