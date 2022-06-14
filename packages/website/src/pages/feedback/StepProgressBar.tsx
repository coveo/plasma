const code = `
    import {StepProgressBar} from '@coveord/plasma-react';

    export default () => <StepProgressBar numberOfSteps={5} currentStep={2} />;
`;

export default () => (
    <PageLayout
        id="StepProgressBar"
        title="Step Progress Bar"
        section="Feedback"
        description="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
        componentSourcePath="/stepProgressBar/StepProgressBar.tsx"
        code={code}
    />
);
