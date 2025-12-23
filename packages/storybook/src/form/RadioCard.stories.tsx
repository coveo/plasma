import {RadioCard} from '@coveord/plasma-mantine/components/RadioCard';
import {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

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
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
    },
    args: {
        checked: false,
        disabled: false,
        label: 'Label',
        description: 'Description',
    },
};
export default meta;
type Story = StoryObj<typeof RadioCard>;
export const Demo: Story = {
    render: (props: any) => {
        const [{checked}, updateArgs] = useArgs();
        const onClick = () => updateArgs({checked: !checked});

        return <RadioCard {...props} onClick={onClick} />;
    },
};
