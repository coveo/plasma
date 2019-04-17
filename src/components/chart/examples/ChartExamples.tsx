import * as React from 'react';
import {Button} from '../../button/Button';

import {BarSeries} from '../BarSeries';
import {ChartContainer} from '../ChartContainer';
import {InfoLine} from '../InfoLine';
import {LineSeries} from '../LineSeries';
import {ScatterSeries} from '../ScatterSeries';
import {XYAxis} from '../XYAxis';
import {XYChart, XYPoint} from '../XYChart';

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
            {x: 2, y: 0},
            {x: 3, y: 6},
            {x: 4, y: 7},
            {x: 5, y: 4},
        ],
    },
];

const overPattern = ['#c30101', '#940000'];

export const ChartExamples = () => {
    const [chartType, setChartType] = React.useState('scatter');
    return (
        <div className='mt2'>
            <h1 className='text-blue mb1 bold'>Line Chart</h1>
            <div className='form-group'>
                <label className='form-control-label'>Basic Chart</label>
                <div className='form-control' style={{height: '300px'}}>
                    <ChartContainer id='yeah' renderChart={(width, height) => (
                        <XYChart series={data} height={height} width={width} padding={chartType === 'bar' ? {left: width / 12, right: width / 12} : undefined}>
                            {chartType === 'scatter' && <ScatterSeries />}
                            {chartType === 'line' && <LineSeries />}
                            {chartType === 'bar' && <BarSeries />}
                        </XYChart>
                    )} />
                </div>
                <Button enabled={chartType !== 'scatter'} onClick={() => setChartType('scatter')} name='Scatter Series' />
                <Button enabled={chartType !== 'line'} onClick={() => setChartType('line')} name='Line Series' />
                <Button enabled={chartType !== 'bar'} onClick={() => setChartType('bar')} name='Bar Series' />
            </div>

            <div className='form-group'>
                <label className='form-control-label'>Chart with y-axis and Info Lines</label>
                <div className='form-control' style={{height: '300px'}}>
                    <ChartContainer id='yeah' renderChart={(width, height) => (
                        <XYChart series={data} height={height} width={width}>
                            <XYAxis x={{show: false}} y={{showGrid: true}}>
                                <LineSeries />
                                <InfoLine value={3} label='Three' />
                                <InfoLine value={3} isVertical />
                            </XYAxis>
                        </XYChart>
                    )} />
                </div>
            </div>

            <div className='form-group'>
                <label className='form-control-label'>Combined Chart</label>
                <div className='form-control' style={{height: '500px'}}>
                    <ChartContainer id='yeah' renderChart={(width, height) => (
                        <XYChart
                            series={data}
                            height={height}
                            width={width}
                            color={(serie: number, colorPattern: string[], point?: XYPoint) => point && point.y > 7 ? overPattern[serie] : colorPattern[serie]}
                        >
                            <XYAxis x={{innerPadding: width / 12}} y={{show: false}}>
                                <BarSeries />
                                <LineSeries />
                                <ScatterSeries />
                            </XYAxis>
                        </XYChart>
                    )} />
                </div>
            </div>
        </div>
    );
};
