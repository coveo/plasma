import {StepProgressBarMetadata} from '@coveord/plasma-components-props-analyzer';
import StepProgressBarExample from '@examples/legacy/feedback/StepProgressBar/StepProgressBar.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="StepProgressBar"
        title="Step Progress Bar"
        section="Feedback"
        description="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
        componentSourcePath="/stepProgressBar/StepProgressBar.tsx"
        code={StepProgressBarExample}
        propsMetadata={StepProgressBarMetadata}
    />
);
