import {HeaderMantineMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';
import mainExample from '../../examples/Header/Header.mantine.example.tsx';

export default () => (
    <PageLayout
        section="Mantine"
        title="Page Header"
        sourcePath="/packages/mantine/src/components/header/Header.tsx"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
        thumbnail="header"
        id="Header"
        propsMetadata={HeaderMantineMetadata}
        code={mainExample}
    />
);
