import * as d3 from 'd3';
import * as React from 'react';
import * as _ from 'underscore';

import {XYChartContext} from './XYChart';

export interface AxisProps {
    show?: boolean;
    numberOfTicks?: number;
    tickSize?: number;
    size?: number;
    innerPadding?: number;
    showGrid?: boolean;
    format?: (value: number) => string;
}

export interface XYAxisProps {
    x?: AxisProps;
    y?: AxisProps;
}

const withDefaultConfig = (props: Partial<AxisProps> = {}): AxisProps => _.defaults(props, {
    numberOfTicks: 5,
    tickSize: props.show !== false ? 7 : 0,
    size: props.show !== false ? 25 : 0,
    innerPadding: 0,
    showGrid: false,
    show: true,
    format: _.identity,
});

export class XYAxis extends React.PureComponent<XYAxisProps> {
    static contextType = XYChartContext;
    context!: React.ContextType<typeof XYChartContext>;

    render() {
        const xAxis = withDefaultConfig(this.props.x);
        const yAxis = withDefaultConfig(this.props.y);

        const {xDomain, yDomain, width, height} = this.context;

        const x = d3.scale.linear()
            .domain(xDomain)
            .range([yAxis.size, width - (2 * xAxis.innerPadding)]);

        const y = d3.scale.linear()
            .domain(yDomain)
            .range([height - xAxis.size, 0]);

        const yTicks = y.ticks(yAxis.numberOfTicks).map((tick: number) => (
            y(tick) >= 0 && y(tick) <= y(0)
                ? (
                    <g key={`y-axis-tick-${tick}`} transform={`translate(${x(0)},${y(tick)})`} className='y-axis-tick'>
                        <line stroke='black' x1='0' x2={-yAxis.tickSize} />
                        <text textAnchor='end' x={-yAxis.tickSize - 5} y={5}>{yAxis.format(tick)}</text>
                        {yAxis.showGrid && <line stroke='rgba(0,0,0,0.2)' x1={0} x2={width - x(0)} />}
                    </g>
                )
                : null
        ));

        const xTicks = x.ticks(xAxis.numberOfTicks).map((tick: number) => (
            x(tick) >= 0 && x(tick) <= x(xDomain[1])
                ? (
                    <g key={`x-axis-tick-${tick}`} transform={`translate(${x(tick) + xAxis.innerPadding},${y(0)})`} className='x-axis-tick'>
                        <line stroke='black' y1='0' y2={xAxis.tickSize} />
                        <text textAnchor='middle' y={xAxis.tickSize + 15}>{xAxis.format(tick)}</text>
                        {xAxis.showGrid && <line stroke='rgba(0,0,0,0.2)' y1='0' y2={-y(0)} />}
                    </g>
                )
                : null
        ));

        return (
            <>
                <XYChartContext.Provider value={{...this.context, height: y(0), width: width - x(0) - (2 * xAxis.innerPadding)}}>
                    <g transform={`translate(${x(0) + xAxis.innerPadding},0)`}>{this.props.children}</g>
                </XYChartContext.Provider>
                {yAxis.show && (
                    <g className='y-axis'>
                        <line
                            className='axis-line'
                            stroke='black'
                            x1={x(0)}
                            x2={x(0)}
                            y1={y(0)}
                            y2={y(yDomain[1])}
                        />
                        {yTicks}
                    </g>
                )}
                {xAxis.show && (
                    <g className='x-axis'>
                        <line
                            className='axis-line'
                            stroke='black'
                            x1={x(0)}
                            x2={width - x(0) + yAxis.size}
                            y1={y(0)}
                            y2={y(0)}
                        />
                        {xTicks}
                    </g>
                )}
            </>
        );
    }
}
