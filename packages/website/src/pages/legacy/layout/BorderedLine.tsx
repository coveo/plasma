import BorderedLineDemo from '@examples/legacy/layout/BorderedLine/BorderedLine.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const BorderedLineDemos = () => (
    <PageLayout
        id="BorderedLine"
        componentSourcePath="/borderedLine/BorderedLine.tsx"
        title="Bordered Line"
        section="Layout"
        thumbnail="placeholder"
        withPropsTable={false}
        demo={<BorderedLineDemo />}
    />
);

export default BorderedLineDemos;
