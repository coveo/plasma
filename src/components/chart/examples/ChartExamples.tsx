import * as React from 'react';

import {BarSeries} from '../BarSeries';
import {ChartContainer} from '../ChartContainer';
import {LineSeries} from '../LineSeries';
import {XYChart} from '../XYChart';

const data = [
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
            {x: 2, y: 1},
            {x: 3, y: 6},
            {x: 4, y: 7},
            {x: 5, y: 4},
        ],
    },
];

export const ChartExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Line Chart</h1>
        <div className='form-group'>
            <label className='form-control-label'>Basic Line Chart</label>
            <div className='form-control' style={{height: '300px'}}>
                <ChartContainer id='yeah' renderChart={(width, height) => (
                    <XYChart series={data} height={height} width={width}>
                        <LineSeries />
                    </XYChart>
                )} />
            </div>
        </div>

        <div className='form-group'>
            <label className='form-control-label'>Basic Bar Chart</label>
            <div className='form-control' style={{height: '300px'}}>
                <ChartContainer id='yeah' renderChart={(width, height) => (
                    <XYChart series={data} height={height} width={width}>
                        <BarSeries availableHeight={height} />
                    </XYChart>
                )} />
            </div>
        </div>

        <div className='form-group'>
            <label className='form-control-label'>Basic Bar Chart</label>
            <div className='form-control' style={{height: '300px'}}>
                <ChartContainer id='yeah' renderChart={(width, height) => (
                    <XYChart series={data} height={height} width={width} xDomain={[-2, 7]}>
                        <LineSeries />
                        <BarSeries availableHeight={height} />
                    </XYChart>
                )} />
            </div>
        </div>
    </div>;
