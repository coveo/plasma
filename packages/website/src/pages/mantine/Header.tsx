import {HeaderMantineMetadata} from '@coveord/plasma-components-props-analyzer';
import mainExample from '@examples/Header/Header.mantine.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

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
