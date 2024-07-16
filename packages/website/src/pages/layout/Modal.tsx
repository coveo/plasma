import {ModalMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalDemo from '@examples/layout/Modal/Modal.demo?demo';
import ModalWithTabsDemo from '@examples/layout/Modal/ModalWithTabs.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        section="Layout"
        title="Modal"
        sourcePath="/packages/mantine/src/components/modal/Modal.tsx"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
        id="Modal"
        propsMetadata={ModalMetadata}
        demo={<ModalDemo />}
        examples={{
            withTabs: <ModalWithTabsDemo title="Modal with tabs and footer" />,
        }}
    />
);

export default Page;
