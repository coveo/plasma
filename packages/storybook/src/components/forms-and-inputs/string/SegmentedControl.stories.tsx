import {SegmentedControl} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof SegmentedControl> = {
    title: '@components/Forms and inputs/string/SegmentedControl',
    id: 'SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
        controls: {
            include: ['data', 'disabled', 'orientation', 'fullWidth'],
        },
    },
    args: {
        data: [
            {label: 'List', value: 'list'},
            {label: 'Grid', value: 'grid'},
            {label: 'Table', value: 'table'},
        ],
        disabled: false,
        orientation: 'horizontal',
        fullWidth: false,
    },
    argTypes: {
        data: {
            control: 'object',
            description: 'Defines the labels, values, and disabled state of each segment.',
            table: {
                type: {summary: '(string | SegmentedControlItem<string>)[]'},
                defaultValue: {summary: 'undefined'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the entire control.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        orientation: {
            control: 'inline-radio',
            options: ['horizontal', 'vertical'],
            description: 'Sets the direction in which segments are arranged.',
            table: {
                type: {summary: "'horizontal' | 'vertical'"},
                defaultValue: {summary: "'horizontal'"},
            },
        },
        fullWidth: {
            control: 'boolean',
            description: 'Makes the control fill the width of its container.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Demo: Story = {
    render: (props: any) => <SegmentedControl {...props} />,
};
