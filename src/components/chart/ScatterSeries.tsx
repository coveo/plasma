import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext, XYPoint, XYSerie} from './XYChart';

export interface ScatterSeriesProps {
    id?: string;
}

export class ScatterSeries extends React.PureComponent<ScatterSeriesProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    static defaultProps: Partial<ScatterSeriesProps> = {
    };

    render() {
        const {series, xDomain, yDomain, width, height, color, colorPattern} = this.context;
        const x = d3.scale.linear()
            .domain(xDomain)
            .range([0, width]);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([height, 0]);

        const points = series.map((serie: XYSerie, i: number) => serie.data.map((point: XYPoint, index: number) => (
            <circle key={`scatter-${serie.label}-${index}`} cx={x(point.x)} cy={y(point.y)} r={3} fill={color(i, colorPattern, point)} />
        )));

        return (
            <g key={this.props.id} className='scatter-series'>
                {points}
                {this.props.children}
            </g>
        );
    }
}
