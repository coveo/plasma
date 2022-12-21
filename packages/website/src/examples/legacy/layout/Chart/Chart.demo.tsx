import {LineSeries, ChartContainer, XYChart} from '@coveord/plasma-react-charts';

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
const DemoPage = () => (
    <div style={{height: 400}}>
        <ChartContainer
            renderChart={(width, height) => (
                <XYChart series={[data[0]]} height={height} width={width} padding={undefined}>
                    {<LineSeries />}
                </XYChart>
            )}
        />
    </div>
);

export default DemoPage;
