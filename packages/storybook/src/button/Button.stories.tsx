import {Button, ButtonPrimary, ButtonSecondary} from '../../../mantine/src/components/button/Button';
import type {StoryObj, Meta} from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: '@components/form/Button',
    component: Button,
    subcomponents: {ButtonPrimary, ButtonSecondary},
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
    render: (props) => <ButtonPrimary {...props}>Primary</ButtonPrimary>,
};

export const Secondary: Story = {
    args: {
        disabled: false,
    },
    render: (props) => <ButtonSecondary {...props}>Secondary</ButtonSecondary>,
};
