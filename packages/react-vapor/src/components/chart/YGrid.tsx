import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface YGridProps {
    padding?: number;
    color?: string;
}

export const YGrid: React.FunctionComponent<YGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {
    const context = React.useContext(XYChartContext);
    const {xDomain, xScale, yScale, yTicksCount} = context;

    const lines = yScale
        .ticks(yTicksCount)
        .map((tick: number) => (
            <line
                key={`y-grid-${tick}`}
                stroke={color}
                x1={xScale(xDomain[0]) - padding}
                x2={xScale(xDomain[1]) + padding}
                y1={yScale(tick)}
                y2={yScale(tick)}
            />
        ));

    return <>{lines}</>;
};
YGrid.displayName = 'YGrid';
