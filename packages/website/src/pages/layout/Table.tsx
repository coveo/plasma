import code from '@examples/Table/main.example.tsx';
import withLoading from '@examples/Table/withLoading.example.tsx';
import withBlankslate from '@examples/Table/withBlankslate.example.tsx';
import withServer from '@examples/Table/withServer.example.tsx';
import complex from '@examples/Table/complex.example.tsx';

import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const TableExamples = () => (
    <PageLayout
        id="TableHOC"
        componentSourcePath="/table-hoc/TableHOC.tsx"
        title="Table"
        section="Layout"
        description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
        code={code}
        examples={{
            withLoading: {code: withLoading, title: 'Loading table'},
            withBlankslate: {code: withBlankslate, title: 'Table blankslate'},
            // withServer: {code: withServer, title: 'With server side rendering'},
            complex: {code: complex, title: 'Complex table', layout: 'vertical'},
        }}
    />
);
export default TableExamples;
