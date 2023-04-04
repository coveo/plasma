import {ModalWizardLegacyMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalWizardDemo from '@examples/legacy/layout/ModalWizard/ModalWizard.demo?demo';
import ModalWizardWithValidationIdsDemo from '@examples/legacy/layout/ModalWizard/ModalWizardWithValidationIds.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ModalWizardDemos = () => (
    <PageLayout
        id="ModalWizard"
        title="Modal Wizard"
        section="Layout"
        description="A modal wizard guides users through a task by presenting a succession of actions to complete."
        sourcePath="/packages/react/src/components/modalWizard/ModalWizard.tsx"
        demo={<ModalWizardDemo />}
        propsMetadata={ModalWizardLegacyMetadata}
        examples={{withValidationIds: <ModalWizardWithValidationIdsDemo title="Using validation ids" />}}
    />
);

export default ModalWizardDemos;
