import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {BarSeries, LineSeries, ScatterSeries, ChartTooltip, ChartContainer,XYChart, XYAxis, XYPoint} from '@coveord/plasma-react';

    export default () => (
        <div style={{height: '500px'}}>
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
    );

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

    const overPattern = ['var(--deprecated-orange-1)', 'var(--deprecated-orange)', 'var(--deprecated-coveo-orange)'];

`;

const barSeries = `
    import * as React from 'react';
    import {BarSeries, ChartContainer,XYChart } from '@coveord/plasma-react';

    export default () => (
            <ChartContainer
                renderChart={(width, height) => (
                    <XYChart
                        series={[data[0]]}
                        height={height}
                        width={width}
                        padding={{left: width / 12, right: width / 12}}
                    >
                        {<BarSeries />}
                    </XYChart>
                )}
            />
    );

    const data = [
        {
            label: 'First',
            data: [
                {x: -1, y: 3},
                {x: 2, y: 6},
                {x: 3, y: 2},
                {x: 4, y: 12},
                {x: 5, y: 8},
            ],
        }
    ];
`;

const lineSeries = `
    import * as React from 'react';
    import {LineSeries, ChartContainer,XYChart } from '@coveord/plasma-react';

    export default () => (
            <ChartContainer
                renderChart={(width, height) => (
                    <XYChart
                        series={[data[0]]}
                        height={height}
                        width={width}
                        padding={undefined}
                    >
                        {<LineSeries />}
                    </XYChart>
                )}
            />
    );

    const data = [
        {
            label: 'First',
            data: [
                {x: -1, y: 3},
                {x: 2, y: 6},
                {x: 3, y: 2},
                {x: 4, y: 12},
                {x: 5, y: 8},
            ],
        }
    ];
`;

const scatterSeries = `
    import * as React from 'react';
    import {ScatterSeries, ChartContainer,XYChart } from '@coveord/plasma-react';

    export default () => (
            <ChartContainer
                renderChart={(width, height) => (
                    <XYChart
                        series={[data[0]]}
                        height={height}
                        width={width}
                        padding={undefined}
                    >
                        {<ScatterSeries />}
                    </XYChart>
                )}
            />
    );

    const data = [
        {
            label: 'First',
            data: [
                {x: -1, y: 3},
                {x: 2, y: 6},
                {x: 3, y: 2},
                {x: 4, y: 12},
                {x: 5, y: 8},
            ],
        }
    ];
`;

const infoLines = `
    import * as React from 'react';
    import {LineSeries, InfoLine, ChartContainer, XGrid, YGrid, XYAxis, XYChart } from '@coveord/plasma-react';

    export default () => (
        <div style={{height: '500px'}}>
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
    );

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
`;

const dateChart = `
    import * as React from 'react';
    import moment=require('./node_modules/moment/ts3.1-typings/moment');
    import {BarSeries, ChartTooltip, ChartContainer, XYAxis, XYChart} from '@coveord/plasma-react';

    export default () => (
        <div style={{height: '500px'}}>
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
    );

    const dateData = [
        {
            label: 'First',
            data: Array.from(Array(25).keys()).map((i: number) => ({
                x: moment().startOf('day').subtract(i, 'day').unix(),
                y: i + 1,
            })),
        },
    ];
`;

export const ChartExamples = () => (
    <PageLayout
        id="ChartContainer"
        componentSourcePath="/chart/ChartContainer.tsx"
        title="Charts"
        layout="vertical"
        section="Layout"
        description="A chart compares sets of complex data to provide insights on their relationship and status."
        thumbnail="placeholder"
        code={code}
        examples={{
            infoLines: {code: infoLines, title: 'With info lines', exampleLayout: 'vertical'},
            dateChart: {code: dateChart, title: 'Date chart', exampleLayout: 'vertical'},
            lineSeries: {code: lineSeries, title: 'Line series'},
            scatterSeries: {code: scatterSeries, title: 'Scatter series'},
            barSeries: {code: barSeries, title: 'Bar series'},
        }}
    />
);

export default ChartExamples;
