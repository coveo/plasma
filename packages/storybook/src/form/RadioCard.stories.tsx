import {RadioCard} from '@coveord/plasma-mantine/components/RadioCard';
import {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof RadioCard> = {
    title: '@components/form/RadioCard',
    component: RadioCard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        label: {
            control: 'text',
            description: 'Radio label',
        },
        description: {
            control: 'text',
            description: 'Radio description',
        },
    },
    args: {
        disabled: false,
        label: 'Label',
        description: 'Description',
    },
};
export default meta;
type Story = StoryObj<typeof RadioCard>;
export const Demo: Story = {
    render: (props: any) => <RadioCard {...props} />,
};
