import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface LineSeriesProps {
    id?: string;
    interpolate?: string;
    strokeWith?: number;
}

export class LineSeries extends React.PureComponent<LineSeriesProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    static defaultProps: Partial<LineSeriesProps> = {
        interpolate: 'linear',
        strokeWith: 2,
    };

    render() {
        const {series, xDomain, yDomain, width, height, color, colorPattern} = this.context;
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
            <path key={`line-${i}`} fill='none' strokeWidth={this.props.strokeWith} stroke={color(i, colorPattern)} d={line(serie.data)} />
        ));

        return (
            <g key={this.props.id} className='line-series'>
                {lines}
                {this.props.children}
            </g>
        );
    }
}
