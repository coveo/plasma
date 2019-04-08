/*import * as d3 from 'd3';
import * as React from 'react';
import {ChartBaseProps} from '../ChartContainer';

export interface LineChartPoint {
    x: number;
    y: number;
}

export interface LineChartProps extends ChartBaseProps<LineChartPoint[]> {
    min: number;
    max: number;
    axis: {
        x: {height: number},
        y: {width: number},
    };
    interpolate: string;
}

const tickSize = 7;

export class LineChart extends React.PureComponent<LineChartProps> {
    static defaultProps: Partial<LineChartProps> = {
        min: 0,
        axis: {
            x: {height: 20},
            y: {width: 30},
        },
        interpolate: 'linear',
    };

    render() {
        const x = d3.scale.linear()
            .domain(d3.extent(this.props.data, (d: LineChartPoint) => d.x))
            .range([this.props.axis.y.width, this.props.width]);

        const y = d3.scale.linear()
            .domain([this.props.min, this.props.max || d3.max(this.props.data, (d: LineChartPoint) => d.y)])
            .range([this.props.height - this.props.axis.x.height, 0]);

        const line = d3.svg.line<LineChartPoint>()
            .x((d) => x(d.x))
            .y((d) => y(d.y))
            .interpolate(this.props.interpolate);

        const xTicks = x.ticks(6).map((tick: number) => (
            x(tick) > this.props.axis.y.width && x(tick) < this.props.width
            ? (
                <g transform={`translate(${x(tick)},${this.props.height - this.props.axis.x.height})`}>
                    <line stroke='black' x1='0' x2='0' y1='0' y2={tickSize} />
                    <text textAnchor='middle' y={this.props.axis.x.height}>{tick}</text>
                </g>
            )
            : null
        ));

        const yTicks = y.ticks(6).map((tick: number) => (
            y(tick) > 0 && y(tick) < this.props.height - this.props.axis.x.height
            ? (
                <g transform={`translate(0,${y(tick)})`}>
                    <line stroke='black' x1={this.props.axis.y.width - tickSize} x2={this.props.axis.y.width} y1='0' y2='0' />
                    <text textAnchor='end' x={this.props.axis.y.width - tickSize - 3} y={tickSize / 2}>{tick}</text>
                </g>
            )
            : null
        ));

        return (
            <svg width={this.props.width} height={this.props.height}>
                <path fill='none' stroke='black' d={line(this.props.data)}/>
                <g className='x-axis'>
                    <line stroke='black' className='axis-line' x1='0' x2={this.props.width} y1={this.props.height - this.props.axis.x.height} y2={this.props.height - this.props.axis.x.height} />
                    {xTicks}
                </g>
                <g className='y-axis'>
                    <line stroke='black' className='axis-line' x1={this.props.axis.y.width} x2={this.props.axis.y.width} y1='0' y2={this.props.height - this.props.axis.x.height} />
                    {yTicks}
                </g>
            </svg>
        );
    }
}*/
