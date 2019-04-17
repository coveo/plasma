import * as d3 from 'd3';
import * as React from 'react';

import {XYChartContext} from './XYChart';

export interface InfoLineProps {
    value: number;
    label: string;
    stroke?: string;
    isVertical?: boolean;
}

export class InfoLine extends React.PureComponent<InfoLineProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    static defaultProps: Partial<InfoLineProps> = {
        stroke: '#000',
        isVertical: false,
        label: '',
    };

    render() {
        const {xDomain, yDomain, width, height} = this.context;

        const x = d3.scale.linear()
            .domain(xDomain)
            .range([0, width]);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([height, 0]);

        return (
            <>
                <line
                    className='info-line'
                    stroke={this.props.stroke}
                    strokeDasharray='6'
                    x1={this.props.isVertical ? x(this.props.value) : 0}
                    x2={this.props.isVertical ? x(this.props.value) : x(xDomain[1])}
                    y1={this.props.isVertical ? 0 : y(this.props.value)}
                    y2={this.props.isVertical ? height : y(this.props.value)}
                />
                {this.props.label && (
                    <text textAnchor='end' x={x(xDomain[1])} y={y(this.props.value) - 5}>{this.props.label}</text>
                )}
            </>
        );
    }
}
