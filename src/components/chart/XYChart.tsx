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

export interface XYChartProps extends ChartBaseProps {
    series: XYSerie[];
    xDomain?: [number, number];
    yDomain?: [number, number];
    colors?: string[];
}

export interface XYChartContextProps {
    width: number;
    height: number;
    xDomain: [number, number];
    yDomain: [number, number];
    series: XYSerie[];
    colors: string[];
}

export const XYChartContext = React.createContext<XYChartContextProps>({width: 0, height: 0, xDomain: [0, 0], yDomain: [0, 0], series: [], colors: []});

const getDateChartColorPattern = (numOfColors: number = 0) => {
    const colorPattern: string[] = [VaporColors.azure, VaporColors.java, VaporColors.anakiwa, VaporColors.nepal];
    return numOfColors > 2 ? [VaporColors.blue8, ...colorPattern] : colorPattern;
};
export class XYChart extends React.PureComponent<XYChartProps> {
    render() {
        const xValues = _.flatten(this.props.series.map((serie: XYSerie) => serie.data.map((d: XYPoint) => d.x)));
        const xDomain = this.props.xDomain || [Math.min(0, ...xValues), Math.max(...xValues)];

        const yValues = _.flatten(this.props.series.map((serie: XYSerie) => serie.data.map((d: XYPoint) => d.y)));
        const yDomain = this.props.yDomain || [Math.min(0, ...yValues), Math.max(...yValues)];

        return (
            <XYChartContext.Provider value={{
                xDomain,
                yDomain,
                width: this.props.width,
                height: this.props.height,
                series: this.props.series,
                colors: getDateChartColorPattern(this.props.series.length),
            }}>
                <svg width={this.props.width} height={this.props.height}>
                    {this.props.children}
                </svg>
            </XYChartContext.Provider>
        );
    }
}
