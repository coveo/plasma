import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {TableHOC} from '@coveord/plasma-react';

    export default () => (
        <div>hihi</div>
    );
`;

const TableExamples = () => (
    <PageLayout
        id="TableHOC"
        componentSourcePath="/table-hoc/TableHOC.tsx"
        title="Table"
        section="Layout"
        description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
        code={code}
        // examples={{complex: {code: complex, title: 'With documentation link and tabs'}}}
    />
);
export default TableExamples;
