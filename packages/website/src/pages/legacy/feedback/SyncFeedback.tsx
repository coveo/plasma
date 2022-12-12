import {SyncFeedbackMetadata} from '@coveord/plasma-components-props-analyzer';
import SyncFeedbackDemo from '@examples/legacy/feedback/SyncFeedback/SyncFeedback.demo.tsx';
import SyncFeedbackLabelDemo from '@examples/legacy/feedback/SyncFeedback/SyncFeedbackLabel.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="SyncFeedback"
        title="Sync Feedback"
        section="Feedback"
        description="A sync feedback indicates the status of an operation to the user."
        demo={<SyncFeedbackDemo center />}
        sourcePath="/packages/react/src/components/numericInput/NumericInputConnected.tsx"
        propsMetadata={SyncFeedbackMetadata}
        examples={{label: <SyncFeedbackLabelDemo center title="Custom Labels" />}}
    />
);

export default DemoPage;
