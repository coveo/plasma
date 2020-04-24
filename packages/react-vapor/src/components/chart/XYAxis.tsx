import * as d3 from 'd3';
import React from 'react';
import * as _ from 'underscore';

import {XYChartContext} from './XYChart';

export interface AxisProps {
    show?: boolean;
    tickSize?: number;
    tickTextSize?: number;
    size?: number;
    innerPadding?: number;
}

export interface XYAxisProps {
    x?: AxisProps;
    y?: AxisProps;
}

const withDefaultConfig = (props: Partial<AxisProps> = {}): AxisProps =>
    _.defaults(props, {
        tickSize: props.show !== false ? 7 : 0,
        tickTextSize: 0,
        size: props.show !== false ? 40 : 0,
        innerPadding: 0,
        show: true,
        format: _.identity,
    });

export const XYAxis: React.FunctionComponent<XYAxisProps> = ({x, y, children}) => {
    const context = React.useContext(XYChartContext);
    const {xDomain, yDomain, xScale, yScale, xFormat, yFormat, width, height, xTicksCount, yTicksCount} = context;

    const xAxis = withDefaultConfig(x);
    const yAxis = withDefaultConfig(y);

    const yInnerPadding = yAxis.innerPadding || yAxis.tickTextSize / 2;
    const xInnerPadding = xAxis.innerPadding || xAxis.tickTextSize / 2;

    const newWidth = width - yAxis.size - 2 * xInnerPadding;
    const newHeight = height - xAxis.size - 2 * yInnerPadding;

    const newXScale = xScale.rangePoints([0, newWidth]);
    const newYScale = yScale.range([newHeight, 0]);

    const minX = newXScale(xDomain[0]);
    const maxX = newXScale(xDomain[1]);
    const minY = newYScale(yDomain[0]);
    const maxY = newYScale(yDomain[1]);

    const yTicks = newYScale
        .ticks(yAxis.tickTextSize === 0 ? yTicksCount : Math.floor(newHeight / yAxis.tickTextSize))
        .map((tick: number) => (
            <g
                key={`y-axis-tick-${tick}`}
                className="y-axis-tick"
                transform={`translate(${maxX + 2 * xInnerPadding},${newYScale(tick) + yInnerPadding})`}
            >
                <line stroke="black" x1="0" x2={yAxis.tickSize} />
                <text textAnchor="start" x={yAxis.tickSize + 5} y={5}>
                    {yFormat(tick)}
                </text>
            </g>
        ));

    const xLinearScale = d3.scale
        .linear()
        .range(newXScale.range())
        .domain(xDomain);
    const xNumberOfTicks = xLinearScale.ticks(
        xAxis.tickTextSize === 0 ? xTicksCount : Math.floor(newWidth / xAxis.tickTextSize)
    ).length;
    const ticks = _.chunk(newXScale.domain(), Math.floor(newXScale.domain().length / xNumberOfTicks))
        // filter out the last array if it contains only one value and other arrays are bigger
        .filter(
            (arr: number[], index: number, arrays: number[][]) =>
                index < arrays.length - 1 || arr.length > 1 || arrays[0].length === 1
        )
        // get the element in the middle of the chunk
        .map((values: number[]) => values[Math.floor((values.length - 1) / 2)]);

    const xTicks = newXScale.domain().map((tick: number) => {
        const text = _.contains(ticks, tick) && xFormat(tick);
        const textX = newXScale(tick);
        return (
            <g
                key={`x-axis-tick-${tick}`}
                transform={`translate(${textX + xInnerPadding},${minY + 2 * yInnerPadding})`}
                className="x-axis-tick"
            >
                <line stroke="black" y1="0" y2={xAxis.tickSize} />
                {text && (
                    <text textAnchor="middle" y={xAxis.tickSize + 15}>
                        {text}
                    </text>
                )}
            </g>
        );
    });

    return (
        <>
            <XYChartContext.Provider
                value={{
                    ...context,
                    xScale: newXScale,
                    yScale: newYScale,
                    height: minY,
                    width: maxX,
                }}
            >
                <g transform={`translate(${xInnerPadding},${yInnerPadding})`}>{children}</g>
            </XYChartContext.Provider>
            {yAxis.show && (
                <g className="y-axis">
                    <line
                        className="axis-line"
                        stroke="black"
                        x1={maxX + 2 * xInnerPadding}
                        x2={maxX + 2 * xInnerPadding}
                        y1={minY + 2 * yInnerPadding}
                        y2={maxY}
                    />
                    {yTicks}
                </g>
            )}
            {xAxis.show && (
                <g className="x-axis">
                    <line
                        className="axis-line"
                        stroke="black"
                        x1={minX}
                        x2={maxX + 2 * xInnerPadding}
                        y1={minY + 2 * yInnerPadding}
                        y2={minY + 2 * yInnerPadding}
                    />
                    {xTicks}
                </g>
            )}
        </>
    );
};
XYAxis.displayName = 'XYAxis';
