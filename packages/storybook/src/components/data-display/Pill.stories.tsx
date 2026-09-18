import {Pill, type PillProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

type PillStoryArgs = Omit<PillProps, 'children'> & {
    label: string;
};

const meta: Meta<PillStoryArgs> = {
    title: '@components/Data display/Pill',
    id: 'Pill',
    component: Pill,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Sets the value displayed inside the pill in this example.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: "'React'"},
            },
        },
        withRemoveButton: {
            control: 'boolean',
            description: 'Shows a button that removes the value.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        onRemove: {
            action: 'removed',
            description: 'Runs when the user selects the remove button.',
            table: {
                type: {summary: '() => void'},
                defaultValue: {summary: 'undefined'},
            },
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
            description: 'Sets the size of the pill.',
            table: {
                type: {summary: 'MantineSize'},
                defaultValue: {summary: "'sm'"},
            },
        },
    },
    args: {
        size: 'sm',
        withRemoveButton: false,
        label: 'React',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({size, withRemoveButton, label, onRemove}) => (
        <Pill
            size={size}
            withRemoveButton={withRemoveButton}
            onRemove={onRemove}
            removeButtonProps={{'aria-label': `Remove ${label}`}}
        >
            {label}
        </Pill>
    ),
};
