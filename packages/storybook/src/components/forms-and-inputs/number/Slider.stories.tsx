import {Slider} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Slider> = {
    title: '@components/Forms and inputs/number/Slider',
    id: 'Slider',
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
        controls: {
            include: ['min', 'max', 'step', 'marks', 'disabled', 'showLabelOnHover', 'labelAlwaysOn', 'thumbLabel'],
        },
    },
    args: {
        defaultValue: 40,
        min: 0,
        max: 100,
        step: 1,
        disabled: false,
        showLabelOnHover: true,
        labelAlwaysOn: false,
        thumbLabel: 'Percentage',
        marks: [
            {value: 25, label: '25%'},
            {value: 50, label: '50%'},
            {value: 75, label: '75%'},
        ],
    },
    argTypes: {
        min: {
            control: 'number',
            description: 'Sets the minimum selectable value.',
            table: {type: {summary: 'number'}, defaultValue: {summary: '0'}},
        },
        max: {
            control: 'number',
            description: 'Sets the maximum selectable value.',
            table: {type: {summary: 'number'}, defaultValue: {summary: '100'}},
        },
        step: {
            control: 'number',
            description: 'Sets the increment used by dragging and keyboard arrows.',
            table: {type: {summary: 'number'}, defaultValue: {summary: '1'}},
        },
        marks: {
            control: 'object',
            description: 'Displays labeled reference points along the track.',
            table: {type: {summary: 'SliderMark[]'}, defaultValue: {summary: 'undefined'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the slider.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        showLabelOnHover: {
            control: 'boolean',
            description: 'Displays the current value label while the slider is hovered.',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        labelAlwaysOn: {
            control: 'boolean',
            description: 'Keeps the current value label visible.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        thumbLabel: {
            control: 'text',
            description: 'Provides an accessible name for the slider thumb.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
    },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Demo: Story = {
    render: (props) => <Slider {...props} />,
};
