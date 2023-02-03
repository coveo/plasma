import {TableMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/layout/Table/Table.demo.tsx';
import TableMultiSelectionDemo from '@examples/layout/Table/TableMultiSelection.demo.tsx';
import TableClientSideDemo from '@examples/layout/Table/TableClientSide.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        section="Layout"
        title="Table"
        sourcePath="/packages/mantine/src/components/table/Table.tsx"
        description="A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added."
        id="Table"
        propsMetadata={TableMetadata}
        demo={<TableDemo noPadding layout="vertical" />}
        examples={{
            multiSelect: <TableMultiSelectionDemo noPadding title="Table with bulk selection of rows" />,
            clientSide: (
                <TableClientSideDemo noPadding title="Table with client side pagination, sorting, and filtering" />
            ),
        }}
    />
);

export default DemoPage;
