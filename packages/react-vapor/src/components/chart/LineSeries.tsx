import * as d3 from 'd3';
import React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface LineSeriesProps {
    interpolate?: string;
    strokeWith?: number;
}

export const LineSeries: React.FunctionComponent<LineSeriesProps> = ({
    interpolate = 'linear',
    strokeWith = 2,
    children,
}) => {
    const {series, xScale, yScale, color, colorPattern} = React.useContext(XYChartContext);

    const line = d3.svg
        .line<XYPoint>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .interpolate(interpolate);

    const lines = series.map((serie: XYSerie, i: number) => (
        <path
            key={`line-${i}`}
            fill="none"
            strokeWidth={strokeWith}
            stroke={color(i, colorPattern)}
            d={line(serie.data)}
        />
    ));

    return (
        <g className="line-series">
            {lines}
            {children}
        </g>
    );
};
LineSeries.displayName = 'LineSeries';
