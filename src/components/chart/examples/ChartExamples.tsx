import * as React from 'react';
import * as _ from 'underscore';
import * as s from 'underscore.string';

import {Button} from '../../button/Button';
import {VaporColors} from '../../color/Color';
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
    {
        label: 'Third',
        data: [
            {x: 0, y: 7},
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 4, y: 2},
            {x: 5, y: 7},
        ],
    },
];

const overPattern = [VaporColors['orange-1'], VaporColors['orange-2'], VaporColors['orange-3']];
const ChartType = {
    Scatter: 'scatter',
    Line: 'line',
    Bar: 'bar',
};

export const ChartExamples: React.FunctionComponent = () => {
    const [chartType, setChartType] = React.useState(ChartType.Scatter);
    return (
        <div className='mt2'>
            <h1 className='text-blue mb1 bold'>Charts</h1>
            <div className='form-group'>
                <label className='form-control-label'>Basic {s.capitalize(chartType)} Chart</label>
                <div className='form-control' style={{height: '300px'}}>
                    <ChartContainer id='yeah' renderChart={(width, height) => (
                        <XYChart series={[data[0]]} height={height} width={width} padding={chartType === ChartType.Bar ? {left: width / 12, right: width / 12} : undefined}>
                            {chartType === ChartType.Scatter && <ScatterSeries />}
                            {chartType === ChartType.Line && <LineSeries />}
                            {chartType === ChartType.Bar && <BarSeries />}
                        </XYChart>
                    )} />
                </div>
                {_.map(ChartType, (type) => (
                    <Button key={type} enabled={chartType !== type} onClick={() => setChartType(type)} name={`${type} Series`} />
                ))}
            </div>

            <div className='form-group'>
                <label className='form-control-label'>Chart with y-axis and Info Lines</label>
                <div className='form-control' style={{height: '300px'}}>
                    <ChartContainer id='yeah' renderChart={(width, height) => (
                        <XYChart series={data} height={height} width={width}>
                            <XYAxis x={{showGrid: true}} y={{showGrid: true}}>
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
