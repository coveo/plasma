import * as d3 from 'd3';
import {FunctionComponent, useContext} from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface LineSeriesProps {
    interpolate?: string;
    strokeWith?: number;
}

/**
 * @deprecated Use Mantine instead
 */
export const LineSeries: FunctionComponent<React.PropsWithChildren<LineSeriesProps>> = ({
    interpolate = 'linear',
    strokeWith = 2,
    children,
}) => {
    const {series, xScale, yScale, color, colorPattern} = useContext(XYChartContext);

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
