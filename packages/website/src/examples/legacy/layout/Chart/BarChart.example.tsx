import {BarSeries, ChartContainer, XYChart} from '@coveord/plasma-react';

export default () => (
    <ChartContainer
        renderChart={(width, height) => (
            <XYChart series={[data[0]]} height={height} width={width} padding={{left: width / 12, right: width / 12}}>
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
    },
];
