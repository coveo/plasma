import {curveLinear, line as d3Line} from 'd3-shape';
import {FunctionComponent, PropsWithChildren, useContext} from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart.js';

export interface LineSeriesProps {
    strokeWith?: number;
}

/**
 * @deprecated Use Mantine instead
 */
export const LineSeries: FunctionComponent<PropsWithChildren<LineSeriesProps>> = ({strokeWith = 2, children}) => {
    const {series, xScale, yScale, color, colorPattern} = useContext(XYChartContext);

    const line = d3Line<XYPoint>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(curveLinear);

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
