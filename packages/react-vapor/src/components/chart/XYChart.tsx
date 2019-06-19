import * as d3 from 'd3';
import * as React from 'react';
import * as _ from 'underscore';

import {VaporColors} from '../color/Color';
import {ChartBaseProps} from './ChartContainer';
import {ChartUtils} from './ChartUtils';

export interface XYPoint {
    x: number;
    y: number;
}

export interface XYSerie {
    label: string;
    data: XYPoint[];
}

export type Padding = {top?: number; right?: number; bottom?: number; left?: number};

export interface XYChartProps extends ChartBaseProps {
    series: XYSerie[];
    padding?: number | Padding;
    colorPattern?: string[];
    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;
    xFormat?: (value: number) => string | number;
    yFormat?: (value: number) => string | number;
    xTicksCount?: number;
    yTicksCount?: number;
}

export interface XYChartContextProps {
    width: number;
    height: number;
    xDomain: [number, number];
    yDomain: [number, number];
    series: XYSerie[];
    colorPattern: string[];
    xScale: d3.scale.Ordinal<number, number>;
    yScale: d3.scale.Linear<number, number>;
    xFormat: (value: number) => string | number;
    yFormat: (value: number) => string | number;
    xTicksCount: number;
    yTicksCount: number;
    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;
}

export const XYChartContext = React.createContext<XYChartContextProps>({
    width: 0,
    height: 0,
    xDomain: [0, 0],
    yDomain: [0, 0],
    series: [],
    colorPattern: [],
    xScale: d3.scale.ordinal<number, number>(),
    yScale: d3.scale.linear(),
    xFormat: _.identity,
    yFormat: _.identity,
    xTicksCount: 10,
    yTicksCount: 10,
});

const getDateChartColorPattern = (numOfColors: number) => {
    const colorPattern: string[] = [VaporColors.azure, VaporColors.java, VaporColors.anakiwa, VaporColors.nepal];
    return numOfColors > 2 ? [VaporColors['blue-8'], ...colorPattern] : colorPattern;
};
const defaultPadding = 10;

export const XYChart: React.FunctionComponent<XYChartProps> = ({
    width,
    height,
    series,
    colorPattern = [],
    color,
    padding = defaultPadding,
    xFormat = _.identity,
    yFormat = _.identity,
    xTicksCount,
    yTicksCount,
    children,
}) => {
    const xValues = ChartUtils.getXValues(series);
    const xDomain: [number, number] = [Math.min(...xValues), Math.max(...xValues)];

    const yValues = ChartUtils.getYValues(series);
    const yDomain: [number, number] = [Math.min(0, ...yValues), Math.max(...yValues)];

    colorPattern = colorPattern.length ? colorPattern : getDateChartColorPattern(series.length);
    color = color || ((serie: number, pattern: string[]) => pattern[serie]);

    const chartPadding: Padding = _.isNumber(padding)
        ? {top: padding, right: padding, bottom: padding, left: padding}
        : _.defaults(padding, {
              top: defaultPadding,
              right: defaultPadding,
              bottom: defaultPadding,
              left: defaultPadding,
          });

    width = width - chartPadding.left - chartPadding.right;
    height = height - chartPadding.top - chartPadding.bottom;

    const xScale = d3.scale
        .ordinal<number, number>()
        .domain(xValues)
        .rangePoints([0, width]);

    const yScale = d3.scale
        .linear<number, number>()
        .domain(yDomain)
        .range([height, 0]);

    return (
        <XYChartContext.Provider
            value={{
                width,
                height,
                xDomain,
                yDomain,
                xScale,
                yScale,
                xFormat,
                yFormat,
                color,
                colorPattern,
                series,
                xTicksCount: xTicksCount || xValues.length / 2,
                yTicksCount: yTicksCount || yValues.length / 2,
            }}
        >
            <svg width={width} height={height}>
                <g transform={`translate(${chartPadding.left},${chartPadding.top})`}>{children}</g>
            </svg>
        </XYChartContext.Provider>
    );
};
XYChart.displayName = 'XYChart';
