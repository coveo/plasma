import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface XGridProps {
    padding?: number;
    color?: string;
}

export const XGrid: React.FunctionComponent<XGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {
    const context = React.useContext(XYChartContext);
    const {xDomain, yDomain, xScale, yScale, xTicksCount} = context;

    const lines = xScale.ticks(xTicksCount).map((tick: number) => (
        xScale(tick) >= 0 && xScale(tick) <= xScale(xDomain[1])
            ? <line stroke={color} x1={xScale(tick)} x2={xScale(tick)} y1={yScale(yDomain[0]) + padding} y2={yScale(yDomain[1]) - padding} />
            : null
    ));

    return (
        <>{lines}</>
    );
};
