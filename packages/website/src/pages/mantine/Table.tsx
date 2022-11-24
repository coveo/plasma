import {TableMantineMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import mainExample from '../../examples/MantineTable/main.example.tsx';

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