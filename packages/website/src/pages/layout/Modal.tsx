import {ModalMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalDemo from '@examples/layout/Modal/Modal.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="Modal"
        sourcePath="/packages/mantine/src/components/modal/Modal.tsx"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional call to actions."
        id="Modal"
        propsMetadata={ModalMetadata}
        demo={<ModalDemo />}
    />
);
