import {TableMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/layout/Table/Table.demo?demo';
import TableColumnsSelectorColumn from '@examples/layout/Table/TableColumnsSelectorColumn.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const DemoPage = () => (
    <PageLayout
        section="Layout"
        title="Table"
        sourcePath="/packages/mantine/src/components/Table/Table.tsx"
        description="A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added."
        id="Table"
        propsMetadata={TableMetadata}
        demo={<TableDemo noPadding layout="vertical" title="Basic table with actions on rows" />}
        examples={{
            // reactQuery: (
            //     <TableReactQuery
            //         noPadding
            //         layout="vertical"
            //         title="Server-side table integrated with @tanstack/react-query"
            //     />
            // ),
            // clientSide: (
            //     <TableClientSideDemo
            //         noPadding
            //         layout="vertical"
            //         title="Client-side table with pagination, sorting, and filtering"
            //     />
            // ),
            // collapsible: <TableCollapsibleDemo noPadding layout="vertical" title="Table with collapsible content" />,
            // predicate: <TablePredicateDemo noPadding layout="vertical" title="Table with predicate filters" />,
            // datePicker: <TableDateRangePickerDemo noPadding layout="vertical" title="Table with date range picker" />,
            // emptyState: <TableEmptyStateDemo noPadding layout="vertical" title="Table with empty states" />,
            // multiSelect: (
            //     <TableMultiSelectionDemo noPadding layout="vertical" title="Table with bulk selection of rows" />
            // ),
            // disableRowSelection: (
            //     <TableDisableRowSelection noPadding layout="vertical" title="Table with disabled row selection" />
            // ),
            // columnSelector: (
            //     <TableColumnsSelectorDemo
            //         noPadding
            //         layout="vertical"
            //         title="Table with the ability to select columns"
            //     />
            // ),
            columnSelectorInColumn: (
                <TableColumnsSelectorColumn
                    noPadding
                    layout="vertical"
                    title="Table with the ability to select columns in a column"
                />
            ),
            // layouts: <TableLayoutsDemo noPadding layout="vertical" title="Table with multiple layouts" />,
            // confirmAction: (
            //     <TableConfirmAction noPadding layout="vertical" title="Table with inline confirmation in actions" />
            // ),
        }}
    />
);

export default DemoPage;
