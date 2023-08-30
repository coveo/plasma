import {HeaderMetadata} from '@coveord/plasma-components-props-analyzer';
import HeaderDemo from '@examples/layout/Header/Header.demo?demo';
import HeaderModalDemo from '@examples/layout/Header/HeaderModal.demo?demo';

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
        demo={<HeaderDemo />}
        examples={{
            modalVariant: <HeaderModalDemo grow title="Modal variant" />,
        }}
    />
);
