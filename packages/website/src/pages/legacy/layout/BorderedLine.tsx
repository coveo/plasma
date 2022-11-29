import BorderedLineExample from '@examples/legacy/layout/BorderedLine/BorderedLine.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const BorderedLineExamples = () => (
    <PageLayout
        id="BorderedLine"
        componentSourcePath="/borderedLine/BorderedLine.tsx"
        title="Bordered Line"
        section="Layout"
        thumbnail="placeholder"
        withPropsTable={false}
        code={BorderedLineExample}
    />
);

export default BorderedLineExamples;
