import code from '@examples/SyncFeedback/SyncFeedback.example.tsx';
import label from '@examples/SyncFeedback/SyncFeedbackLabel.example.tsx';
import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="SyncFeedback"
        title="Sync Feedback"
        section="Feedback"
        description="A sync feedback indicates the status of an operation to the user."
        componentSourcePath="/numericInput/NumericInputConnected.tsx"
        code={code}
        examples={{label: {code: label, title: 'Custom Labels'}}}
    />
);
