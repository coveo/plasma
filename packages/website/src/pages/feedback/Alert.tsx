import {AlertMetadata} from '@coveord/plasma-components-props-analyzer';
import AlertDemo from '@examples/feedback/alert/Alert.demo?demo';
import AlertAdviceDemo from '@examples/feedback/alert/AlertAdvice.demo?demo';
import AlertCriticalDemo from '@examples/feedback/alert/AlertCritical.demo?demo';
import AlertInformationDemo from '@examples/feedback/alert/AlertInformation.demo?demo';
import AlertWarningDemo from '@examples/feedback/alert/AlertWarning.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

const AlertPage = () => (
    <PageLayout
        id="Alert"
        title="Alert"
        section="Feedback"
        thumbnail="placeholder"
        description="Attract user attention with important static message."
        demo={<AlertDemo center />}
        examples={{
            information: <AlertInformationDemo center title="Information" />,
            advice: <AlertAdviceDemo center title="Advice" />,
            warning: <AlertWarningDemo center title="Warning" />,
            critical: <AlertCriticalDemo center title="Critical" />,
        }}
        sourcePath="/packages/mantine/src/components/Alert/Alert.tsx"
        propsMetadata={AlertMetadata}
    />
);

export default AlertPage;
