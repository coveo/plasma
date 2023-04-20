import {
    BarSeries,
    LineSeries,
    ScatterSeries,
    ChartTooltip,
    ChartContainer,
    XYChart,
    XYAxis,
    XYPoint,
} from '@coveord/plasma-react';

const Demo = () => (
    <div style={{height: 400}}>
        <ChartContainer
            renderChart={(width, height) => (
                <XYChart
                    series={data}
                    height={height}
                    width={width}
                    color={(serie: number, colorPattern: string[], point?: XYPoint) =>
                        point && point.y > 7 ? overPattern[serie] : colorPattern[serie]
                    }
                    xFormat={(value: number) => ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][value + 1]}
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
export default Demo;

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
