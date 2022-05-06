import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
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

const barSeries = `
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

const scatterSeries = `
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
    import {LineSeries, InfoLine, ChartContainer, XGrid, YGrid, XYAxis, XYChart } from '@coveord/plasma-react';

    export default () => (
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
    import moment from 'moment';
    import {BarSeries, ChartTooltip, ChartContainer, XYAxis, XYChart} from '@coveord/plasma-react';

    export default () => (
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

const complex = `
    import {BarSeries, LineSeries, ScatterSeries, ChartTooltip, ChartContainer,XYChart, XYAxis, XYPoint} from '@coveord/plasma-react';

    export default () => (
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

export const ChartExamples = () => (
    <PageLayout
        id="ChartContainer"
        componentSourcePath="/chart/ChartContainer.tsx"
        title="Charts"
        section="Layout"
        description="A chart compares sets of complex data to provide insights on their relationship and status."
        code={code}
        examples={{
            scatterSeries: {code: scatterSeries, title: 'Scatter series'},
            barSeries: {code: barSeries, title: 'Bar series'},
            infoLines: {code: infoLines, title: 'With info lines'},
            dateChart: {code: dateChart, title: 'Date chart'},
            complex: {code: complex, title: 'Complex chart'},
        }}
    />
);

export default ChartExamples;
