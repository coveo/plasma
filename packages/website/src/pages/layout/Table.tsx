import {TableMantineMetadata} from '@coveord/plasma-components-props-analyzer';
import mainExample from '@examples/Table/main.mantine.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Mantine"
        title="Table"
        sourcePath="/packages/mantine/src/components/table/Table.tsx"
        description="A table displays large quantities of items or data in a list format. Filtering features, date picker, collapsible rows and actions may be added."
        id="Table"
        propsMetadata={TableMantineMetadata}
        code={mainExample}
    />
);
