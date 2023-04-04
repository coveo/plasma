import BorderedLineDemo from '@examples/legacy/layout/BorderedLine/BorderedLine.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const BorderedLineDemos = () => (
    <PageLayout
        id="BorderedLine"
        sourcePath="/packages/react/src/components/borderedLine/BorderedLine.tsx"
        title="Bordered Line"
        section="Layout"
        thumbnail="placeholder"
        withPropsTable={false}
        demo={<BorderedLineDemo />}
    />
);

export default BorderedLineDemos;
