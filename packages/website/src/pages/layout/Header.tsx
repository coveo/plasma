import {HeaderMetadata} from '@coveord/plasma-components-props-analyzer';
import HeaderDemo from '@examples/layout/Header/Header.demo?demo';
import HeaderSecondaryDemo from '@examples/layout/Header/HeaderSecondary.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
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
            secondaryVariant: <HeaderSecondaryDemo grow title="Secondary variant" />,
        }}
    />
);

export default Page;
