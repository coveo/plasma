import moment from 'moment';
import * as React from 'react';
import {
    BarSeries,
    Button,
    ChartContainer,
    ChartTooltip,
    InfoLine,
    LineSeries,
    ScatterSeries,
    VaporColors,
    XGrid,
    XYAxis,
    XYChart,
    XYPoint,
    YGrid,
} from 'react-vapor';
import * as _ from 'underscore';
import * as s from 'underscore.string';

const data = [
    {
        label: 'First',
        data: [
            {x: -1, y: 3},
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
            {x: -1, y: 1},
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
            {x: -1, y: 4},
            {x: 0, y: 7},
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 4, y: 2},
            {x: 5, y: 7},
        ],
    },
];

const dateData = [
    {
        label: 'First',
        data: _.range(25).map((i: number) => ({
            x: moment()
                .startOf('day')
                .subtract(i, 'day')
                .unix(),
            y: i + 1,
        })),
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
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">Basic {s.capitalize(chartType)} Chart</label>
                <div className="form-control" style={{height: '300px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart
                                series={[data[0]]}
                                height={height}
                                width={width}
                                padding={
                                    chartType === ChartType.Bar ? {left: width / 12, right: width / 12} : undefined
                                }
                            >
                                {chartType === ChartType.Scatter && <ScatterSeries />}
                                {chartType === ChartType.Line && <LineSeries />}
                                {chartType === ChartType.Bar && <BarSeries />}
                            </XYChart>
                        )}
                    />
                </div>
                {_.map(ChartType, (type) => (
                    <Button
                        key={type}
                        enabled={chartType !== type}
                        onClick={() => setChartType(type)}
                        name={`${type} Series`}
                    />
                ))}
            </div>

            <div className="form-group">
                <label className="form-control-label">Chart with tooltip</label>
                <div className="form-control" style={{height: '300px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart series={data} height={height} width={width}>
                                <ScatterSeries />
                                <ChartTooltip />
                            </XYChart>
                        )}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-control-label">Chart with y-axis and Info Lines</label>
                <div className="form-control" style={{height: '300px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart series={data} height={height} width={width}>
                                <XYAxis x={{innerPadding: 30}} y={{innerPadding: 30}}>
                                    <XGrid padding={30} />
                                    <YGrid padding={30} />
                                    <LineSeries />
                                    <InfoLine value={3} label="Three" padding={30} />
                                    <InfoLine value={2} label="Two" padding={30} isVertical />
                                </XYAxis>
                            </XYChart>
                        )}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-control-label">Combined Chart</label>
                <div className="form-control" style={{height: '500px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart
                                series={data}
                                height={height}
                                width={width}
                                color={(serie: number, colorPattern: string[], point?: XYPoint) =>
                                    point && point.y > 7 ? overPattern[serie] : colorPattern[serie]
                                }
                                xFormat={(value: number) =>
                                    ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][value + 1]
                                }
                                yFormat={(value: number) => value * 10 + '%'}
                            >
                                <XYAxis x={{innerPadding: width / 12}} y={{show: false}}>
                                    <BarSeries />
                                    <LineSeries />
                                    <ScatterSeries />
                                    <ChartTooltip sort />
                                </XYAxis>
                            </XYChart>
                        )}
                    />
                </div>
            </div>

            <div className="form-group">
                <label className="form-control-label">Date Chart</label>
                <div className="form-control" style={{height: '300px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart
                                series={dateData}
                                height={height}
                                width={width}
                                xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}
                            >
                                <XYAxis x={{tickTextSize: 120}} y={{show: false}}>
                                    <BarSeries />
                                    <ChartTooltip sort />
                                </XYAxis>
                            </XYChart>
                        )}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">Date Chart</label>
                <div className="form-control" style={{height: '300px'}}>
                    <ChartContainer
                        renderChart={(width, height) => (
                            <XYChart
                                series={[
                                    {
                                        label: 'First',
                                        data: [
                                            {
                                                x: moment()
                                                    .startOf('day')
                                                    .unix(),
                                                y: 500,
                                            },
                                        ],
                                    },
                                ]}
                                height={height}
                                width={width}
                                xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}
                            >
                                <XYAxis x={{tickTextSize: 120}} y={{show: false}}>
                                    <BarSeries />
                                    <ChartTooltip sort />
                                </XYAxis>
                            </XYChart>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};
