import {TableMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/layout/Table/Table.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Table"
        sourcePath="/packages/mantine/src/components/table/Table.tsx"
        description="A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added."
        id="Table"
        propsMetadata={TableMetadata}
        demo={<TableDemo layout="vertical" />}
    />
);
