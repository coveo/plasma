import {HeaderMetadata} from '@coveord/plasma-components-props-analyzer';
import mainExample from '@examples/layout/Header/Header.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Header"
        sourcePath="/packages/mantine/src/components/header/Header.tsx"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
        thumbnail="header"
        id="Header"
        propsMetadata={HeaderMetadata}
        code={mainExample}
    />
);
