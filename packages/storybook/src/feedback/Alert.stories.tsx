import type {StoryObj, Meta} from '@storybook/react-vite';
import {Alert} from '@coveord/plasma-mantine/components/Alert';

const meta: Meta<typeof Alert> = {
    title: '@components/feedback/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: () => (
        <Alert title="Advice" withCloseButton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </Alert>
    ),
};

export const AlertAdvice: Story = {
    render: () => (
        <Alert.Advice title="Advice" withCloseButton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </Alert.Advice>
    ),
};

export const AlertCritical: Story = {
    render: () => (
        <Alert.Critical title="Bummer!" withCloseButton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </Alert.Critical>
    ),
};

export const AlertInformation: Story = {
    render: () => (
        <Alert.Information title="Information" withCloseButton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </Alert.Information>
    ),
};

export const AlertWarning: Story = {
    render: () => (
        <Alert.Warning title="Warning!" withCloseButton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </Alert.Warning>
    ),
};
