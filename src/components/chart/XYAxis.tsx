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

export const XYAxis: React.FunctionComponent<XYAxisProps> = ({x, y, children}) => {
    const context = React.useContext(XYChartContext);
    const {xDomain, yDomain, xScale, yScale, width, height} = context;

    const xAxis = withDefaultConfig(x);
    const yAxis = withDefaultConfig(y);

    const newXScale = xScale.copy().range([0, width - yAxis.size - (2 * xAxis.innerPadding)]);
    const newYScale = yScale.copy().range([height - xAxis.size - (2 * yAxis.innerPadding), 0]);

    const minX = newXScale(xDomain[0]);
    const maxX = newXScale(xDomain[1]);
    const minY = newYScale(yDomain[0]);
    const maxY = newYScale(yDomain[1]);

    const yTicks = newYScale.ticks(yAxis.numberOfTicks).map((tick: number) => (
        newYScale(tick) >= 0 && newYScale(tick) <= minY
            ? (
                <g key={`y-axis-tick-${tick}`} transform={`translate(${minX},${newYScale(tick)})`} className='y-axis-tick'>
                    <line stroke='black' x1='0' x2={-yAxis.tickSize} />
                    <text textAnchor='end' x={-yAxis.tickSize - 5} y={5}>{yAxis.format(tick)}</text>
                    {yAxis.showGrid && <line stroke='rgba(0,0,0,0.2)' x1={0} x2={maxX} />}
                </g>
            )
            : null
    ));

    const xTicks = newXScale.ticks(xAxis.numberOfTicks).map((tick: number) => (
        newXScale(tick) >= 0 && newXScale(tick) <= maxX
            ? (
                <g key={`x-axis-tick-${tick}`} transform={`translate(${newXScale(tick) + xAxis.innerPadding},${minY})`} className='x-axis-tick'>
                    <line stroke='black' y1='0' y2={xAxis.tickSize} />
                    <text textAnchor='middle' y={xAxis.tickSize + 15}>{xAxis.format(tick)}</text>
                    {xAxis.showGrid && <line stroke='rgba(0,0,0,0.2)' y1='0' y2={-minY} />}
                </g>
            )
            : null
    ));

    return (
        <>
            <XYChartContext.Provider value={{
                ...context,
                xScale: newXScale,
                yScale: newYScale,
                height: minY,
                width: maxX,
            }}>
                <g transform={`translate(${yAxis.size + xAxis.innerPadding},0)`}>{children}</g>
            </XYChartContext.Provider>
            <g transform={`translate(${yAxis.size},0)`}>
                {yAxis.show && (
                    <g className='y-axis'>
                        <line className='axis-line' stroke='black' x1={minX} x2={minX} y1={minY} y2={maxY} />
                        {yTicks}
                    </g>
                )}
                {xAxis.show && (
                    <g className='x-axis'>
                        <line className='axis-line' stroke='black' x1={minX} x2={maxX} y1={minY} y2={minY} />
                        {xTicks}
                    </g>
                )}
            </g>
        </>
    );
};
