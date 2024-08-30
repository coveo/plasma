import {TableMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/layout/Table/Table.demo?demo';
import TableClientSideDemo from '@examples/layout/Table/TableClientSide.demo?demo';
import TableCollapsibleDemo from '@examples/layout/Table/TableCollapsible.demo?demo';
import TableColumnsSelectorDemo from '@examples/layout/Table/TableColumnsSelector.demo?demo';
import TableConfirmAction from '@examples/layout/Table/TableConfirmAction.demo?demo';
import TableDateRangePickerDemo from '@examples/layout/Table/TableDateRangePicker.demo?demo';
import TableDisableRowSelection from '@examples/layout/Table/TableDisabledRowSelection.demo?demo';
import TableEmptyStateDemo from '@examples/layout/Table/TableEmptyState.demo?demo';
import TableLayoutsDemo from '@examples/layout/Table/TableLayouts.demo?demo';
import TableMultiSelectionDemo from '@examples/layout/Table/TableMultiSelection.demo?demo';
import TablePredicateDemo from '@examples/layout/Table/TablePredicate.demo?demo';
import TableReactQuery from '@examples/layout/Table/TableReactQuery.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        section="Layout"
        title="Table"
        sourcePath="/packages/mantine/src/components/table/Table.tsx"
        description="A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added."
        id="Table"
        propsMetadata={TableMetadata}
        demo={<TableDemo noPadding layout="vertical" title="Basic table with actions on rows" />}
        examples={{
            reactQuery: (
                <TableReactQuery
                    noPadding
                    layout="vertical"
                    title="Server-side table integrated with @tanstack/react-query"
                />
            ),
            clientSide: (
                <TableClientSideDemo
                    noPadding
                    layout="vertical"
                    title="Client-side table with pagination, sorting, and filtering"
                />
            ),
            collapsible: <TableCollapsibleDemo noPadding layout="vertical" title="Table with collapsible content" />,
            predicate: (
                <TablePredicateDemo
                    noPadding
                    layout="vertical"
                    title="Table with predicate filters and with custom options"
                />
            ),
            datePicker: <TableDateRangePickerDemo noPadding layout="vertical" title="Table with date range picker" />,
            emptyState: <TableEmptyStateDemo noPadding layout="vertical" title="Table with empty states" />,
            multiSelect: (
                <TableMultiSelectionDemo noPadding layout="vertical" title="Table with bulk selection of rows" />
            ),
            disableRowSelection: (
                <TableDisableRowSelection noPadding layout="vertical" title="Table with disabled row selection" />
            ),
            columnSelector: (
                <TableColumnsSelectorDemo
                    noPadding
                    layout="vertical"
                    title="Table with the ability to select columns"
                />
            ),
            layouts: <TableLayoutsDemo noPadding layout="vertical" title="Table with multiple layouts" />,
            confirmAction: (
                <TableConfirmAction noPadding layout="vertical" title="Table with inline confirmation in actions" />
            ),
        }}
    />
);

export default DemoPage;
