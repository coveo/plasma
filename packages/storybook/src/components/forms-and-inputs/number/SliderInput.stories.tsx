import {SliderInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {BaseInputArgs, InputWrapperArgs, type InputWrapperStoryArgs} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

type SliderInputStoryArgs = ComponentProps<typeof SliderInput> & Pick<InputWrapperStoryArgs, 'labelInfo'>;

const meta = {
    title: '@components/Forms and inputs/number/SliderInput',
    id: 'SliderInput',
    component: SliderInput,
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
            include: [
                'inputLabel',
                'labelInfo',
                'description',
                'error',
                'min',
                'max',
                'step',
                'marks',
                'disabled',
                'showLabelOnHover',
                'labelAlwaysOn',
                'thumbLabel',
            ],
        },
    },
    args: {
        defaultValue: 40,
        inputLabel: InputWrapperArgs.Args.label,
        labelInfo: InputWrapperArgs.Args.labelInfo,
        description: InputWrapperArgs.Args.description,
        error: InputWrapperArgs.Args.error,
        disabled: BaseInputArgs.Args.disabled,
        min: 0,
        max: 100,
        step: 1,
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
        inputLabel: InputWrapperArgs.ArgsTypes.label,
        labelInfo: InputWrapperArgs.ArgsTypes.labelInfo,
        description: InputWrapperArgs.ArgsTypes.description,
        error: InputWrapperArgs.ArgsTypes.error,
        disabled: BaseInputArgs.ArgsTypes.disabled,
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
            table: {
                type: {summary: 'SliderMark[]'},
                defaultValue: {summary: 'undefined'},
            },
        },
        showLabelOnHover: {
            control: 'boolean',
            description: 'Displays the current value label while the slider is hovered.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'true'},
            },
        },
        labelAlwaysOn: {
            control: 'boolean',
            description: 'Keeps the current value label visible.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        thumbLabel: {
            control: 'text',
            description: 'Provides an accessible name for the slider thumb.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
    },
} satisfies Meta<SliderInputStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({inputLabel, labelInfo, ...props}) => (
        <SliderInput {...props} inputLabel={withLabelInfoProps({label: inputLabel, labelInfo}).label} />
    ),
};
