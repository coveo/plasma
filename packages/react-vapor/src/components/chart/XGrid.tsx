import React from 'react';

import {XYChartContext} from './XYChart';

export interface XGridProps {
    padding?: number;
    color?: string;
}

export const XGrid: React.FunctionComponent<XGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {
    const context = React.useContext(XYChartContext);
    const {yDomain, xScale, yScale} = context;

    const lines = xScale
        .range()
        .map((tick: number) => (
            <line
                key={`x-grid-${tick}`}
                stroke={color}
                x1={xScale(tick)}
                x2={xScale(tick)}
                y1={yScale(yDomain[0]) + padding}
                y2={yScale(yDomain[1]) - padding}
            />
        ));

    return <>{lines}</>;
};
XGrid.displayName = 'XGrid';
