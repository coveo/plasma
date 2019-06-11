import * as d3 from 'd3';
import * as _ from 'underscore';

import {XYChartContextProps} from '../XYChart';

export const XYChartContextMock: XYChartContextProps = {
    width: 10,
    height: 50,
    xDomain: [0, 5],
    yDomain: [100, 0],
    series: [
        {
            label: 'First',
            data: [
                {x: 0, y: 3},
                {x: 1, y: 3},
                {x: 2, y: 6},
                {x: 3, y: 2},
                {x: 4, y: 12},
                {x: 5, y: 8},
            ],
        },
        {
            label: 'Second',
            data: [
                {x: 0, y: 5},
                {x: 1, y: 4},
                {x: 2, y: 0},
                {x: 3, y: 6},
                {x: 4, y: 7},
                {x: 5, y: 4},
            ],
        },
    ],
    colorPattern: ['blue', 'green', 'yellow'],
    color: (serie: number, pattern: string[]) => pattern[serie],
    xScale: d3.scale
        .ordinal<number, number>()
        .domain([20, 30, 40, 50, 60])
        .range([0, 10]),
    yScale: d3.scale
        .linear()
        .domain([100, 0])
        .range([50, 0]),
    xFormat: _.identity,
    yFormat: _.identity,
    xTicksCount: 2,
    yTicksCount: 10,
};

export const XYChartOnePointContextMock = {
    width: 341.5,
    height: 240,
    xDomain: [1559880000, 1559880000],
    yDomain: [0, 500],
    colorPattern: ['#0d80ef', '#26e8cc', '#4ed6ff', '#94a9bf'],
    series: [{label: 'First', data: [{x: 1559880000, y: 500}]}],
    xTicksCount: 0.5,
    yTicksCount: 0.5,
    color: (serie: number, pattern: string[]) => pattern[serie],
    xScale: d3.scale
        .ordinal<number, number>()
        .domain([1559880000])
        .range([0, 10]),
    yScale: d3.scale
        .linear()
        .domain([500])
        .range([50, 0]),
};
