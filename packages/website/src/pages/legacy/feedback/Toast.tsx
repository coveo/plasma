import {ToastMetadata} from '@coveord/plasma-components-props-analyzer';
import DownloadToastDemo from '@examples/legacy/feedback/Toast/DownloadToast.demo.tsx';
import ToastDemo from '@examples/legacy/feedback/Toast/Toast.demo.tsx';
import ToastNotifierDemo from '@examples/legacy/feedback/Toast/ToastNotifier.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ToastDemos = () => (
    <PageLayout
        id="Toast"
        sourcePath="/packages/react/src/components/toast/Toast.tsx"
        title="Toast"
        thumbnail="toast"
        section="Feedback"
        description="A toast displays a short message related to an action performed by a user."
        demo={<ToastDemo center />}
        propsMetadata={ToastMetadata}
        examples={{
            download: <DownloadToastDemo center title="Download Toast" />,
            container: <ToastNotifierDemo center title="Toast Notifier" />,
        }}
    />
);
export default ToastDemos;
