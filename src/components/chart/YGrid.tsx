import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface YGridProps {
    padding?: number;
    color?: string;
}

export const YGrid: React.FunctionComponent<YGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {
    const context = React.useContext(XYChartContext);
    const {xDomain, yDomain, xScale, yScale, yTicksCount} = context;

    const lines = yScale.ticks(yTicksCount).map((tick: number) => (
        yScale(tick) >= 0 && yScale(tick) <= yScale(yDomain[0])
            ? <line stroke={color} x1={xScale(xDomain[0]) - padding} x2={xScale(xDomain[1]) + padding} y1={yScale(tick)} y2={yScale(tick)} />
            : null
    ));

    return (
        <>{lines}</>
    );
};
