import {TableHOCMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/Table/main.example.tsx';
import withAction from '@examples/Table/withAction.example.tsx';
import withBlankslate from '@examples/Table/withBlankslate.example.tsx';
import withDatePicker from '@examples/Table/withDatePicker.example.tsx';
import withFilter from '@examples/Table/withFilter.example.tsx';
import withLoading from '@examples/Table/withLoading.example.tsx';
import withPagination from '@examples/Table/withPagination.example.tsx';
import withPredicate from '@examples/Table/withPredicate.example.tsx';
import withServer from '@examples/Table/withServer.example.tsx';
import withSort from '@examples/Table/withSort.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

const TableExamples = () => (
    <PageLayout
        id="TableHOC"
        componentSourcePath="/table-hoc/TableHOC.tsx"
        title="Table"
        section="Layout"
        description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
        code={code}
        propsMetadata={TableHOCMetadata}
        examples={{
            withLoading: {code: withLoading, title: 'Loading table'},
            withBlankslate: {code: withBlankslate, title: 'Table blankslate'},
            withPagination: {code: withPagination, title: 'With pagination'},
            withPredicate: {code: withPredicate, title: 'With predicate'},
            withAction: {code: withAction, title: 'With actions'},
            withSort: {code: withSort, title: 'With colum sort'},
            withFilter: {code: withFilter, title: 'With filter box'},
            withDatePicker: {code: withDatePicker, title: 'With date picker'},
            withServer: {code: withServer, title: 'With server side rendering'},
        }}
    />
);
export default TableExamples;
