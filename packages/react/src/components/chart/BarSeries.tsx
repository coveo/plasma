import {scaleBand} from 'd3-scale';
import {range} from 'd3-array';
import {FunctionComponent, PropsWithChildren, useContext} from 'react';

import {ChartUtils} from './ChartUtils';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface BarSeriesProps {
    barRatio?: number;
}

/**
 * @deprecated Use Mantine instead
 */
export const BarSeries: FunctionComponent<PropsWithChildren<BarSeriesProps>> = ({barRatio = 0.8, children}) => {
    const {series, xScale, yScale, xDomain, yDomain, color, colorPattern} = useContext(XYChartContext);
    const xValues = ChartUtils.getXValues(series);
    const barWidth =
        xValues.length > 1
            ? ((xScale(xDomain[1]) - xScale(xDomain[0])) / xValues.length / 2) * barRatio
            : (xScale(xDomain[0]) / 2) * barRatio;

    const innerXScale = scaleBand<number>().domain(range(series.length)).rangeRound([-barWidth, barWidth]);

    const bars = series.map((serie: XYSerie, serieIndex: number) =>
        serie.data.map((point: XYPoint) => {
            const barHeight = Math.max(yScale(point.y), 2);
            return (
                <rect
                    key={`${serie.label}-${point.x}`}
                    fill={color(serieIndex, colorPattern, point)}
                    width={innerXScale.bandwidth()}
                    height={yScale(yDomain[0]) - barHeight}
                    x={xScale(point.x) + innerXScale(serieIndex)}
                    y={barHeight}
                />
            );
        })
    );
    return (
        <g className="bar-series">
            {bars}
            {children}
        </g>
    );
};
BarSeries.displayName = 'BarSeries';
