import {AlertMetadata} from '@coveord/plasma-components-props-analyzer';
import AlertDemo from '@examples/feedback/alert/Alert.demo?demo';
import AlertTipDemo from '@examples/feedback/alert/AlertTip.demo?demo';
import AlertSuccessDemo from '@examples/feedback/alert/AlertSuccess.demo?demo';
import AlertWarningDemo from '@examples/feedback/alert/AlertWarning.demo?demo';
import AlertCriticalDemo from '@examples/feedback/alert/AlertCritical.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout';

const AlertPage = () => (
    <PageLayout
        id="Alert"
        title="Alert"
        section="Feedback"
        thumbnail="placeholder"
        description="Attract user attention with important static message."
        demo={<AlertDemo center />}
        examples={{
            tip: <AlertTipDemo center title="Tip" />,
            success: <AlertSuccessDemo center title="Success" />,
            warning: <AlertWarningDemo center title="Warning" />,
            critical: <AlertCriticalDemo center title="Critical" />,
        }}
        sourcePath="/packages/mantine/src/components/button/Button.tsx"
        propsMetadata={AlertMetadata}
    />
);

export default AlertPage;
