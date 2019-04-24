import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface BarSeriesProps {
    id?: string;
    barRatio?: number;
}

export const BarSeries: React.FunctionComponent<BarSeriesProps> = ({id, barRatio = 0.8, children}) => {
    const {series, xScale, yScale, yDomain, color, colorPattern} = React.useContext(XYChartContext);

    const barWidth = xScale(1) / 2 * barRatio;

    const innerXScale = d3.scale.ordinal<number, number>()
        .domain(d3.range(series.length))
        .rangeBands([-barWidth, barWidth], 0);

    const bars = series.map((serie: XYSerie, serieIndex: number) =>
        serie.data.map((point: XYPoint) => {
            const barHeight = Math.max(yScale(point.y), 2);
            return (
                <rect
                    key={`${serie.label}-${point.x}`}
                    fill={color(serieIndex, colorPattern, point)}
                    width={innerXScale.rangeBand()}
                    height={yScale(yDomain[0]) - barHeight}
                    x={xScale(point.x) + innerXScale(serieIndex)}
                    y={barHeight}
                />
            );
        }));
    return (
        <g key={id} className='bar-series'>
            {bars}
            {children}
        </g>
    );
};
