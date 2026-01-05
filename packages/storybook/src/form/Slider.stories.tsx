import {Slider} from '@coveord/plasma-mantine/components/Slider';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Slider> = {
    title: '@components/form/Slider',
    component: Slider,
    decorators: [
        (Story) => (
            <div style={{width: 500}}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    args: {
        disabled: false,
        showLabelOnHover: true,
        labelAlwaysOn: false,
        marks: [
            {value: 25, label: '25%'},
            {value: 50, label: '50%'},
            {value: 75, label: '75%'},
        ],
    },
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the slider is disabled',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        showLabelOnHover: {
            control: 'boolean',
            description: 'Whether to show the label on hover',
            table: {
                defaultValue: {summary: 'true'},
            },
        },
        labelAlwaysOn: {
            control: 'boolean',
            description: 'Whether the label is always visible',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Demo: Story = {
    render: ({disabled, showLabelOnHover, labelAlwaysOn, marks}) => (
        <Slider disabled={disabled} showLabelOnHover={showLabelOnHover} labelAlwaysOn={labelAlwaysOn} marks={marks} />
    ),
};
