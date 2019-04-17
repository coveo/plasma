import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface BarSeriesProps {
    id?: string;
    barRatio?: number;
}

export class BarSeries extends React.PureComponent<BarSeriesProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    static defaultProps: Partial<BarSeriesProps> = {
        barRatio: 0.8,
    };

    render() {
        const {series, xDomain, yDomain, width, height, color, colorPattern} = this.context;

        const globalX = d3.scale.linear()
            .domain(xDomain)
            .range([0, width]);

        const barWidth = globalX(1) / series.length * this.props.barRatio;
        const x = d3.scale.ordinal<number, number>()
            .domain(d3.range(series.length))
            .rangeBands([-barWidth, barWidth], 0);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([0, height]);

        const bars = series[0].data.map((__, i: number) => {
            return series.map((serie: XYSerie, serieIndex: number) => {
                const point: XYPoint = serie.data[i];
                const barHeight = Math.max(y(point.y), 2);
                return (
                    <rect
                        key={`${serie.label}-${point.x}`}
                        fill={color(serieIndex, colorPattern, point)}
                        width={x.rangeBand()}
                        height={barHeight}
                        x={globalX(point.x) + x(serieIndex)}
                        y={height - barHeight}
                    />
                );
            });
        });
        return (
            <g key={this.props.id} className='bar-series'>
                {bars}
                {this.props.children}
            </g>
        );
    }
}
