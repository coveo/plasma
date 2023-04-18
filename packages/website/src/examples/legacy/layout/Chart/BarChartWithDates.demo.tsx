import moment from 'moment';
import {BarSeries, ChartTooltip, ChartContainer, XYAxis, XYChart} from '@coveord/plasma-react';

const Demo = () => (
    <div style={{height: 400}}>
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
export default Demo;

const dateData = [
    {
        label: 'First',
        data: Array.from(Array(25).keys()).map((i: number) => ({
            x: moment().startOf('day').subtract(i, 'day').unix(),
            y: i + 1,
        })),
    },
];
