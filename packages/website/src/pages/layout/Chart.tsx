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
    Section,
    XGrid,
    XYAxis,
    XYChart,
    XYPoint,
    YGrid,
} from '@coveord/plasma-react';
import * as _ from 'underscore';

import {PageLayout} from '../../building-blocs/PageLayout';

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
            x: moment().startOf('day').subtract(i, 'day').unix(),
            y: i + 1,
        })),
    },
];

//                 <Section level={3} title="Chart with tooltip">
//                     <div className="form-control" style={{height: '300px'}}>
//                         <ChartContainer
//                             renderChart={(width, height) => (
//                                 <XYChart series={data} height={height} width={width}>
//                                     <ScatterSeries />
//                                     <ChartTooltip />
//                                 </XYChart>
//                             )}
//                         />
//                     </div>
//                 </Section>
//                 <Section level={3} title="Chart with y-axis and Info Lines">
//                     <div className="form-control" style={{height: '300px'}}>
//                         <ChartContainer
//                             renderChart={(width, height) => (
//                                 <XYChart series={data} height={height} width={width}>
//                                     <XYAxis x={{innerPadding: 30}} y={{innerPadding: 30}}>
//                                         <XGrid padding={30} />
//                                         <YGrid padding={30} />
//                                         <LineSeries />
//                                         <InfoLine value={3} label="Three" padding={30} />
//                                         <InfoLine value={2} label="Two" padding={30} isVertical />
//                                     </XYAxis>
//                                 </XYChart>
//                             )}
//                         />
//                     </div>
//                 </Section>
//                 <Section level={3} title="Combined Chart">
//                     <div className="form-control" style={{height: '500px'}}>

//                     </div>
//                 </Section>
//                 <Section level={3} title="Date Chart">
//                     <div className="form-control" style={{height: '300px'}}>
//                         <ChartContainer
//                             renderChart={(width, height) => (
//                                 <XYChart
//                                     series={dateData}
//                                     height={height}
//                                     width={width}
//                                     xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}
//                                 >
//                                     <XYAxis x={{tickTextSize: 120}} y={{show: false}}>
//                                         <BarSeries />
//                                         <ChartTooltip sort />
//                                     </XYAxis>
//                                 </XYChart>
//                             )}
//                         />
//                     </div>
//                     <div className="form-control" style={{height: '300px'}}>
//                         <ChartContainer
//                             renderChart={(width, height) => (
//                                 <XYChart
//                                     series={[
//                                         {
//                                             label: 'First',
//                                             data: [
//                                                 {
//                                                     x: moment().startOf('day').unix(),
//                                                     y: 500,
//                                                 },
//                                             ],
//                                         },
//                                     ]}
//                                     height={height}
//                                     width={width}
//                                     xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}
//                                 >
//                                     <XYAxis x={{tickTextSize: 120}} y={{show: false}}>
//                                         <BarSeries />
//                                         <ChartTooltip sort />
//                                     </XYAxis>
//                                 </XYChart>
//                             )}
//                         />
//                     </div>
//                 </Section>
//             </Section>
//         </PlasmaComponent>
//     );
// };

const code = `
    import * as React from 'react';
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

export const ChartExamples = () => (
    <PageLayout
        id="Charts"
        componentSourcePath="/breadcrumbs/BreadcrumbHeader.tsx"
        title="Charts"
        // layout="vertical"
        section="Layout"
        description="A chart compares sets of complex data to provide insights on their relationship and status."
        thumbnail="placeholder"
        code={code}
        examples={{
            lineSeries: {code: lineSeries, title: 'Line series'},
            scatterSeries: {code: scatterSeries, title: 'Scatter series'},
            barSeries: {code: barSeries, title: 'Bar series'},
        }}
    />
);

export default ChartExamples;
