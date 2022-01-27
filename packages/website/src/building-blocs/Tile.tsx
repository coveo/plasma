import * as React from 'react';
import '@styles/tile.scss';

import placeholder from '../../resources/thumbnail_component.png';

export interface TileProps {
    title?: string;
    description?: string;
    href?: string;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, href}) => {
    const tileIcon = <img src={placeholder} className="full-content-x" />;
    const tileInfo = (title || description) && (
        <div className="tile-information">
            {title && <div className="tile-title h6-subdued">{title}</div>}
            {description && <div className="tile-description body-m-book-subdued">{description}</div>}
        </div>
    );

    if (href && href.length > 0) {
        return (
            <a className="tile card" href={href}>
                {tileIcon}
                {tileInfo}
            </a>
        );
    }

    return (
        <div className="tile card">
            {tileIcon}
            {tileInfo}
        </div>
    );
};
