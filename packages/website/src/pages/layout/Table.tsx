import {TableMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/layout/Table/Table.demo?demo';
import TableClientSideDemo from '@examples/layout/Table/TableClientSide.demo?demo';
import TableConsumerDemo from '@examples/layout/Table/TableConsumer.demo?demo';
import TableDisableRowSelection from '@examples/layout/Table/TableDisabledRowSelection.demo?demo';
import TableEmptyStateDemo from '@examples/layout/Table/TableEmptyState.demo?demo';
import TableMultiSelectionDemo from '@examples/layout/Table/TableMultiSelection.demo?demo';

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
            multiSelect: (
                <TableMultiSelectionDemo noPadding layout="vertical" title="Table with bulk selection of rows" />
            ),
            disableRowSelection: (
                <TableDisableRowSelection noPadding layout="vertical" title="Table with disabled row selection" />
            ),
            clientSide: (
                <TableClientSideDemo
                    noPadding
                    layout="vertical"
                    title="Table with client side pagination, sorting, and filtering"
                />
            ),
            emptyState: <TableEmptyStateDemo noPadding layout="vertical" title="Table with empty states" />,
            consumer: (
                <TableConsumerDemo
                    noPadding
                    layout="vertical"
                    title="Table with a child component using the hook to re-fetch"
                />
            ),
        }}
    />
);

export default DemoPage;
