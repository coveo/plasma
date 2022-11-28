import {ModalCompositeConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalLoadingExample from '@examples/legacy/layout/ModalWindow/ModalLoading.example.tsx';
import ModalPromptExample from '@examples/legacy/layout/ModalWindow/ModalPrompt.example.tsx';
import ModalWindowExample from '@examples/legacy/layout/ModalWindow/ModalWindow.example.tsx';
import ModalWithDirtyExample from '@examples/legacy/layout/ModalWindow/ModalWithDirty.example.tsx';
import ModalWithPropsExample from '@examples/legacy/layout/ModalWindow/ModalWithProps.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ModalWindowExamples = () => (
    <PageLayout
        id="ModalCompositeConnected"
        title="Modal Window"
        section="Layout"
        description="A modal appears over the current context to have users focus on a particular task or information."
        componentSourcePath="/modal/ModalComposite.tsx"
        propsMetadata={ModalCompositeConnectedMetadata}
        code={ModalWindowExample}
        examples={{
            prompts: {code: ModalPromptExample, title: 'Prompts'},
            loading: {code: ModalLoadingExample, title: 'Loading Modal'},
            withAdditionalProps: {code: ModalWithPropsExample, title: 'With Additional Props'},
            withDirty: {code: ModalWithDirtyExample, title: 'With Dirty State Management'},
        }}
    />
);

export default ModalWindowExamples;
