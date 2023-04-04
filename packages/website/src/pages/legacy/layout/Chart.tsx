import {ChartContainerMetadata} from '@coveord/plasma-components-props-analyzer';
import BarChartDemo from '@examples/legacy/layout/Chart/BarChart.demo?demo';
import BarChartWithDatesDemo from '@examples/legacy/layout/Chart/BarChartWithDates.demo?demo';
import ChartDemo from '@examples/legacy/layout/Chart/Chart.demo?demo';
import ChartWithInfoLinesDemo from '@examples/legacy/layout/Chart/ChartWithInfoLines.demo?demo';
import ComplexChartDemo from '@examples/legacy/layout/Chart/ComplexChart.demo?demo';
import ScatterChartDemo from '@examples/legacy/layout/Chart/ScatterChart.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ChartDemos = () => (
    <PageLayout
        id="ChartContainer"
        sourcePath="/packages/react/src/components/chart/ChartContainer.tsx"
        title="Charts"
        section="Layout"
        description="A chart compares sets of complex data to provide insights on their relationship and status."
        demo={<ChartDemo />}
        propsMetadata={ChartContainerMetadata}
        examples={{
            scatterSeries: <ScatterChartDemo title="Scatter series" />,
            barSeries: <BarChartDemo title="Bar series" />,
            infoLines: <ChartWithInfoLinesDemo title="With info lines" />,
            dateChart: <BarChartWithDatesDemo title="Date chart" />,
            complex: <ComplexChartDemo title="Complex chart" />,
        }}
    />
);

export default ChartDemos;
