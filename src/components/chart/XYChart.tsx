import * as d3 from 'd3';
import * as React from 'react';
import * as _ from 'underscore';

import {VaporColors} from '../color/Color';
import {ChartBaseProps} from './ChartContainer';

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
}

export interface XYChartContextProps {
    width: number;
    height: number;
    xDomain: [number, number];
    yDomain: [number, number];
    series: XYSerie[];
    colorPattern: string[];
    xScale: d3.scale.Linear<number, number>;
    yScale: d3.scale.Linear<number, number>;
    color?: (serie: number, colorPattern: string[], point?: XYPoint) => string;
}

export const XYChartContext = React.createContext<XYChartContextProps>({
    width: 0,
    height: 0,
    xDomain: [0, 0],
    yDomain: [0, 0],
    series: [],
    colorPattern: [],
    xScale: d3.scale.linear(),
    yScale: d3.scale.linear(),
});

const getDateChartColorPattern = (numOfColors: number = 0) => {
    const colorPattern: string[] = [VaporColors.azure, VaporColors.java, VaporColors.anakiwa, VaporColors.nepal];
    return numOfColors > 2 ? [VaporColors['blue-8'], ...colorPattern] : colorPattern;
};
export class XYChart extends React.PureComponent<XYChartProps> {
    static defaultProps: Partial<XYChartProps> = {
        colorPattern: [],
        padding: 10,
    };

    render() {
        const xValues = _.flatten(this.props.series.map((serie: XYSerie) => serie.data.map((d: XYPoint) => d.x)));
        const xDomain: [number, number] = [Math.min(0, ...xValues), Math.max(...xValues)];

        const yValues = _.flatten(this.props.series.map((serie: XYSerie) => serie.data.map((d: XYPoint) => d.y)));
        const yDomain: [number, number] = [Math.min(0, ...yValues), Math.max(...yValues)];

        const colorPattern = this.props.colorPattern.length ? this.props.colorPattern : getDateChartColorPattern(this.props.series.length);
        const color = this.props.color || ((serie: number, pattern: string[]) => pattern[serie]);

        const defaultPadding = XYChart.defaultProps.padding;
        const padding: Padding = _.isNumber(this.props.padding)
            ? {top: this.props.padding, right: this.props.padding, bottom: this.props.padding, left: this.props.padding}
            : _.defaults(this.props.padding, {top: defaultPadding, right: defaultPadding, bottom: defaultPadding, left: defaultPadding});

        const width = this.props.width - padding.left - padding.right;
        const height = this.props.height - padding.top - padding.bottom;

        const xScale = d3.scale.linear<number, number>()
            .domain(xDomain)
            .range([0, width]);

        const yScale = d3.scale.linear<number, number>()
            .domain(yDomain)
            .range([height, 0]);

        return (
            <XYChartContext.Provider value={{
                width,
                height,
                xDomain,
                yDomain,
                xScale,
                yScale,
                color,
                colorPattern,
                series: this.props.series,
            }}>
                <svg width={this.props.width} height={this.props.height}>
                    <g transform={`translate(${padding.left},${padding.top})`}>
                        {this.props.children}
                    </g>
                </svg>
            </XYChartContext.Provider>
        );
    }
}
