import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface BarSerieProps {
    availableHeight: number;
    id?: string;
}

export class BarSeries extends React.PureComponent<BarSerieProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    render() {
        const {series, xDomain, yDomain, width, colors} = this.context;
        const {availableHeight} = this.props;

        const globalX = d3.scale.ordinal<number, number>()
            .domain(d3.range(xDomain[0], xDomain[1] + 1, 1))
            .rangeRoundBands([0, width], 0);

        const x = d3.scale.ordinal<number, number>()
            .domain(d3.range(series.length))
            .rangeRoundBands([0, globalX.rangeBand()], 0);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([0, availableHeight]);

        const bars = series[0].data.map((__, i: number) => {
            return series.map((serie: XYSerie, serieIndex: number) => {
                const point: XYPoint = serie.data[i];
                return (
                    <rect
                        key={`${serie.label}-${point.x}`}
                        fill={colors[serieIndex]}
                        width={x.rangeBand()}
                        height={y(point.y)}
                        x={globalX(point.x) + x(serieIndex)}
                        y={availableHeight - y(point.y)}
                    />
                );
            });
        });
        return <g key={this.props.id}>{bars}</g>;
    }
}
