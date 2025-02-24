import type {StoryObj, Meta} from '@storybook/react-vite';
import {Button} from '../../../mantine/src/components/Button/Button.js';

const meta: Meta<typeof Button> = {
    title: '@components/form/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        disabled: false,
    },
    render: (props) => <Button.Primary {...props}>Primary</Button.Primary>,
};

export const Secondary: Story = {
    args: {
        disabled: false,
    },
    render: (props) => <Button.Secondary {...props}>Secondary</Button.Secondary>,
};
