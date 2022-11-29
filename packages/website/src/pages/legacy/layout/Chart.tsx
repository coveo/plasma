import {ChartContainerMetadata} from '@coveord/plasma-components-props-analyzer';
import BarChartExample from '@examples/legacy/layout/Chart/BarChart.example.tsx';
import BarChartWithDatesExample from '@examples/legacy/layout/Chart/BarChartWithDates.example.tsx';
import ChartExample from '@examples/legacy/layout/Chart/Chart.example.tsx';
import ChartWithInfoLinesExample from '@examples/legacy/layout/Chart/ChartWithInfoLines.example.tsx';
import ComplexChartExample from '@examples/legacy/layout/Chart/ComplexChart.example.tsx';
import ScatterChartExample from '@examples/legacy/layout/Chart/ScatterChart.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ChartExamples = () => (
    <PageLayout
        id="ChartContainer"
        componentSourcePath="/chart/ChartContainer.tsx"
        title="Charts"
        section="Layout"
        description="A chart compares sets of complex data to provide insights on their relationship and status."
        code={ChartExample}
        propsMetadata={ChartContainerMetadata}
        examples={{
            scatterSeries: {code: ScatterChartExample, title: 'Scatter series'},
            barSeries: {code: BarChartExample, title: 'Bar series'},
            infoLines: {code: ChartWithInfoLinesExample, title: 'With info lines'},
            dateChart: {code: BarChartWithDatesExample, title: 'Date chart'},
            complex: {code: ComplexChartExample, title: 'Complex chart'},
        }}
    />
);

export default ChartExamples;
