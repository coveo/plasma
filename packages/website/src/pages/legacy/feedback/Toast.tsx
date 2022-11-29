import {ToastMetadata} from '@coveord/plasma-components-props-analyzer';
import DownloadToastExample from '@examples/legacy/feedback/Toast/DownloadToast.example.tsx';
import ToastExample from '@examples/legacy/feedback/Toast/Toast.example.tsx';
import ToastNotifierExample from '@examples/legacy/feedback/Toast/ToastNotifier.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ToastExamples = () => (
    <PageLayout
        id="Toast"
        componentSourcePath="/toast/Toast.tsx"
        title="Toast"
        thumbnail="toast"
        section="Feedback"
        description="A toast displays a short message related to an action performed by a user."
        code={ToastExample}
        propsMetadata={ToastMetadata}
        examples={{
            download: {code: DownloadToastExample, title: 'Download Toast'},
            container: {code: ToastNotifierExample, title: 'Toast Notifier'},
        }}
    />
);
export default ToastExamples;
