import {LineSeries, InfoLine, ChartContainer, XGrid, YGrid, XYAxis, XYChart} from '@coveord/plasma-react';

export default () => (
    <div style={{height: 400}}>
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
