import * as React from 'react';

import {Svg, SvgNames} from '../svg';

export interface TileProps {
    title: string;
    svgName: SvgNames;
    // badges?: IBadgeProps[];
    description?: string;
    onClick?: (choice?: string) => void;
    // tooltip?: ITooltipProps;
    // choices?: IconCardChoice[];
    // small?: boolean;
    animateOnHover?: boolean;
}

export const Tile: React.FunctionComponent<TileProps> = ({title, description, onClick, svgName, animateOnHover}) => (
    <>
        <div className="tile">
            {svgName && <Svg svgName={svgName} svgClass="icon mod-info mod-5x mod-stroke" />}
            <h6 className="tile-name-container">{title}</h6>
            {/* pick font */}
        </div>
    </>
);
