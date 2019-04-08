import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface LineProps {
    id?: string;
    interpolate?: string;
}

export class LineSeries extends React.PureComponent<LineProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    static defaultProps: Partial<LineProps> = {
        interpolate: 'linear',
    };

    render() {
        const {series, xDomain, yDomain, width, height, colors} = this.context;
        const x = d3.scale.linear()
            .domain(xDomain)
            .range([0, width]);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([height, 0]);

        const line = d3.svg.line<XYPoint>()
            .x((d) => x(d.x))
            .y((d) => y(d.y))
            .interpolate(this.props.interpolate);

        const lines = series.map((serie: XYSerie, i: number) => (
            <path fill='none' stroke={colors[i]} d={line(serie.data)} />
        ));

        return (
            <g key={this.props.id}>
                {lines}
            </g>
        );
    }
}
