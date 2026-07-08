import {Chip} from '@coveord/plasma-mantine/components/Chip';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta: Meta<typeof Chip> = {
    title: '@components/form/array/Chip',
    id: 'Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Chip',
        size: 'sm',
        disabled: false,
        checked: false,
    },
    argTypes: {
        children: {control: 'text', description: 'Chip label'},
        size: {control: 'select', options: ['xs', 'sm']},
        disabled: {control: 'boolean'},
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => {
        const [{checked}, updateArgs] = useArgs();
        return <Chip {...props} checked={checked} onChange={(newValue) => updateArgs({checked: newValue})} />;
    },
};
