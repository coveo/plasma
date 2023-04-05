import {ModalCompositeConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import ModalLoadingDemo from '@examples/legacy/layout/ModalWindow/ModalLoading.demo?demo';
import ModalPromptDemo from '@examples/legacy/layout/ModalWindow/ModalPrompt.demo?demo';
import ModalWindowDemo from '@examples/legacy/layout/ModalWindow/ModalWindow.demo?demo';
import ModalWithDirtyDemo from '@examples/legacy/layout/ModalWindow/ModalWithDirty.demo?demo';
import ModalWithPropsDemo from '@examples/legacy/layout/ModalWindow/ModalWithProps.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ModalWindowDemos = () => (
    <PageLayout
        id="ModalCompositeConnected"
        title="Modal Window"
        section="Layout"
        description="A modal appears over the current context to have users focus on a particular task or information."
        sourcePath="/packages/react/src/components/modal/ModalComposite.tsx"
        propsMetadata={ModalCompositeConnectedMetadata}
        demo={<ModalWindowDemo />}
        examples={{
            prompts: <ModalPromptDemo title="Prompts" />,
            loading: <ModalLoadingDemo title="Loading Modal" />,
            withAdditionalProps: <ModalWithPropsDemo title="With Additional Props" />,
            withDirty: <ModalWithDirtyDemo title="With Dirty State Management" />,
        }}
    />
);

export default ModalWindowDemos;
