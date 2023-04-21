import {TableHOCMetadata} from '@coveord/plasma-components-props-analyzer';
import TableDemo from '@examples/legacy/layout/Table/main.demo?demo';
import TableWithActionDemo from '@examples/legacy/layout/Table/withAction.demo?demo';
import TableWithBlankslateDemo from '@examples/legacy/layout/Table/withBlankslate.demo?demo';
import TableWithDatePickerDemo from '@examples/legacy/layout/Table/withDatePicker.demo?demo';
import TableWithFilterDemo from '@examples/legacy/layout/Table/withFilter.demo?demo';
import TableWithLoadingDemo from '@examples/legacy/layout/Table/withLoading.demo?demo';
import TableWithPaginationDemo from '@examples/legacy/layout/Table/withPagination.demo?demo';
import TableWithPredicateDemo from '@examples/legacy/layout/Table/withPredicate.demo?demo';
import TableWithServerDemo from '@examples/legacy/layout/Table/withServer.demo?demo';
import TableWithSortDemo from '@examples/legacy/layout/Table/withSort.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const TableDemos = () => (
    <PageLayout
        id="TableHOC"
        sourcePath="/packages/react/src/components/table-hoc/TableHOC.tsx"
        title="Table"
        section="Layout"
        description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
        demo={<TableDemo />}
        propsMetadata={TableHOCMetadata}
        examples={{
            withLoading: <TableWithLoadingDemo title="Loading table" />,
            withBlankslate: <TableWithBlankslateDemo title="Table blankslate" />,
            withPagination: <TableWithPaginationDemo title="With pagination" />,
            withPredicate: <TableWithPredicateDemo title="With predicate" />,
            withAction: <TableWithActionDemo title="With actions" />,
            withSort: <TableWithSortDemo title="With colum sort" />,
            withFilter: <TableWithFilterDemo title="With filter box" />,
            withDatePicker: <TableWithDatePickerDemo title="With date picker" />,
            withServer: <TableWithServerDemo title="With server side rendering" />,
        }}
    />
);
export default TableDemos;
