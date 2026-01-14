import {Button, Group, Stepper} from '@coveord/plasma-mantine';
import {StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta = {
    title: '@components/feedback/Stepper',
    id: 'Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        active: {
            options: [0, 1, 2],
            control: {type: 'select'},
        },
        firstStepLabel: {
            control: 'text',
            description: 'Label for the first step',
        },
        firstStepDescription: {
            control: 'text',
            description: 'Description for the first step',
        },
        secondStepLabel: {
            control: 'text',
            description: 'Label for the second step',
        },
        secondStepDescription: {
            control: 'text',
            description: 'Description for the second step',
        },
        thirdStepLabel: {
            control: 'text',
            description: 'Label for the final step',
            table: {
                type: {summary: 'string'},
            },
        },
        thirdStepDescription: {
            control: 'text',
            description: 'Description for the final step',
        },
    },
    args: {
        active: 1,
        firstStepLabel: 'First step',
        secondStepLabel: 'Second step',
        thirdStepLabel: 'Final step',
    },
    decorators: [
        (Story: any) => (
            <div style={{width: 800}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
    render: (props: any) => {
        const [{active}, setActive] = useArgs();

        return (
            <Stepper active={active} onStepClick={(stepIndex) => setActive({active: stepIndex})}>
                <Stepper.Step label={props.firstStepLabel} description={props.firstStepDescription}>
                    Step 1 content: Create an account
                </Stepper.Step>
                <Stepper.Step label={props.secondStepLabel} description={props.secondStepDescription}>
                    Step 2 content: Verify email
                </Stepper.Step>
                <Stepper.Step label={props.thirdStepLabel} description={props.thirdStepDescription}>
                    Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>Completed! Click back button to get to previous step.</Stepper.Completed>
            </Stepper>
        );
    },
};

export const WithNavigation: Story = {
    render: (props: any) => {
        const [{active}, setActive] = useArgs();

        const nextStep = (current: number) => setActive({active: current < 3 ? current + 1 : current});
        const prevStep = (current: number) => setActive({active: current > 0 ? current - 1 : current});

        return (
            <>
                <Stepper active={active} onStepClick={(stepIndex) => setActive({active: stepIndex})}>
                    <Stepper.Step label={props.firstStepLabel} description={props.firstStepDescription}>
                        Step 1 content: Create an account
                    </Stepper.Step>
                    <Stepper.Step label={props.secondStepLabel} description={props.secondStepDescription}>
                        Step 2 content: Verify email
                    </Stepper.Step>
                    <Stepper.Step label={props.thirdStepLabel} description={props.thirdStepDescription}>
                        Step 3 content: Get full access
                    </Stepper.Step>
                    <Stepper.Completed>Completed! Click back button to get to previous step.</Stepper.Completed>
                </Stepper>

                <Group justify="center" mt="xl">
                    <Button variant="default" onClick={() => prevStep(active)}>
                        Back
                    </Button>
                    <Button onClick={() => nextStep(active)}>Next step</Button>
                </Group>
            </>
        );
    },
};
