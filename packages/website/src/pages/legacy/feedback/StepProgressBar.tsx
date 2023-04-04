import {StepProgressBarMetadata} from '@coveord/plasma-components-props-analyzer';
import StepProgressBarDemo from '@examples/legacy/feedback/StepProgressBar/StepProgressBar.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const DemoPage = () => (
    <PageLayout
        id="StepProgressBar"
        title="Step Progress Bar"
        section="Feedback"
        description="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
        demo={<StepProgressBarDemo />}
        sourcePath="/packages/react/src/components/stepProgressBar/StepProgressBar.tsx"
        propsMetadata={StepProgressBarMetadata}
    />
);

export default DemoPage;
