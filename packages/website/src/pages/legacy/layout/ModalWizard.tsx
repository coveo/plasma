import {ModalWizardMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalWizardExample from '@examples/legacy/layout/ModalWizard/ModalWizard.example.tsx';
import ModalWizardWithValidationIdsExample from '@examples/legacy/layout/ModalWizard/ModalWizardWithValidationIds.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ModalWizardExamples = () => (
    <PageLayout
        id="ModalWizard"
        title="Modal Wizard"
        section="Layout"
        description="A modal wizard guides users through a task by presenting a succession of actions to complete."
        componentSourcePath="/modalWizard/ModalWizard.tsx"
        code={ModalWizardExample}
        propsMetadata={ModalWizardMetadata}
        examples={{withValidationIds: {code: ModalWizardWithValidationIdsExample, title: 'Using validation ids'}}}
    />
);

export default ModalWizardExamples;
