import {ModalWizardMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalWizardDemo from '@examples/layout/ModalWizard/ModalWizard.demo';
import ModalWizardFormDemo from '@examples/layout/ModalWizard/ModalWizardForm.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        section="Layout"
        title="ModalWizard"
        sourcePath="/packages/mantine/src/components/modal-wizard/ModalWizard.tsx"
        description="A Modal Wizard is a collection of Modals that user can interact with to display any information step by step"
        id="ModalWizard"
        propsMetadata={ModalWizardMetadata}
        demo={<ModalWizardDemo />}
        examples={{
            formValidation: <ModalWizardFormDemo noPadding title="Modal Wizard with Form Validation" />,
        }}
    />
);
