import {scaleLinear, scalePoint} from 'd3-scale';
import {FunctionComponent, createContext, PropsWithChildren} from 'react';
import * as _ from 'underscore';

import {ChartBaseProps} from './ChartContainer.js';
import {ChartUtils} from './ChartUtils.js';

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
    xScale: d3.ScalePoint<number>;
    yScale: d3.ScaleLinear<number, number>;
    xFormat: (value: number) => string | number;
    yFormat: (value: number) => string | number;
    xTicksCount: number;
    yTicksCount: number;
    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;
}

export const XYChartContext = createContext<XYChartContextProps>({
    width: 0,
    height: 0,
    xDomain: [0, 0],
    yDomain: [0, 0],
    series: [],
    colorPattern: [],
    xScale: scalePoint<number>(),
    yScale: scaleLinear(),
    xFormat: _.identity,
    yFormat: _.identity,
    xTicksCount: 10,
    yTicksCount: 10,
});

const getDateChartColorPattern = (numOfColors: number) => {
    const colorPattern: string[] = [
        'var(--deprecated-azure)',
        'var(--deprecated-turquoise)',
        'var(--deprecated-anakiwa)',
        'var(--deprecated-nepal)',
    ];
    return numOfColors > 2 ? ['var(--deprecated-blue-8)', ...colorPattern] : colorPattern;
};
const defaultPadding = 10;

/**
 * @deprecated Use Mantine instead
 */
export const XYChart: FunctionComponent<PropsWithChildren<XYChartProps>> = ({
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

    const xScale = scalePoint<number>().domain(xValues).range([0, width]);

    const yScale = scaleLinear<number, number>().domain(yDomain).range([height, 0]);

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
