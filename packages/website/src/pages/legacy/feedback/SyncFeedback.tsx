import {SyncFeedbackMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/feedback/SyncFeedback/SyncFeedback.example.tsx';
import label from '@examples/legacy/feedback/SyncFeedback/SyncFeedbackLabel.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="SyncFeedback"
        title="Sync Feedback"
        section="Feedback"
        description="A sync feedback indicates the status of an operation to the user."
        componentSourcePath="/numericInput/NumericInputConnected.tsx"
        code={code}
        propsMetadata={SyncFeedbackMetadata}
        examples={{label: {code: label, title: 'Custom Labels'}}}
    />
);
