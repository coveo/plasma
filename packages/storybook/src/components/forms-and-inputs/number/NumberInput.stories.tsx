import {NumberInput} from '@coveord/plasma-mantine';
import {IconCoins} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {withLabelInfoProps} from '../LabelInfoArgs.js';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';

type NumberInputStoryArgs = Omit<ComponentProps<typeof NumberInput>, 'leftSection'> &
    BaseInputStoryArgs &
    InputWrapperStoryArgs & {
        leftSection: boolean;
    };

const meta = {
    title: '@components/Forms and inputs/number/NumberInput',
    id: 'NumberInput',
    component: NumberInput,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'leftSection',
                'prefix',
                'suffix',
                'min',
                'max',
                'allowNegative',
                'allowDecimal',
                'thousandSeparator',
                'decimalSeparator',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        leftSection: false,
        defaultValue: 0,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        label: {
            control: 'text',
            description: 'Content displayed as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        description: {
            control: 'text',
            description: 'Helper content displayed below the label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        error: {
            control: 'text',
            description: 'Validation feedback displayed below the input.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        required: {
            control: 'boolean',
            description: 'Marks the field as required and displays a required indicator.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input and its increment and decrement controls.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        readOnly: {
            control: 'boolean',
            description: 'Prevents users from changing the value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        leftSection: {
            control: 'boolean',
            description: 'Toggles a representative icon before the value in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        prefix: {
            control: 'text',
            description: 'Adds text before the numeric value.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
        suffix: {
            control: 'text',
            description: 'Adds text after the numeric value.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
        min: {
            control: 'number',
            description: 'Sets the minimum allowed value.',
            table: {
                type: {summary: 'NumberInputNumericType'},
                defaultValue: {summary: 'undefined'},
            },
        },
        max: {
            control: 'number',
            description: 'Sets the maximum allowed value.',
            table: {
                type: {summary: 'NumberInputNumericType'},
                defaultValue: {summary: 'undefined'},
            },
        },
        allowNegative: {
            control: 'boolean',
            description: 'Allows users to enter negative values.',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        allowDecimal: {
            control: 'boolean',
            description: 'Allows users to enter decimal values.',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        thousandSeparator: {
            control: 'text',
            description: 'Sets the character used to group thousands.',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'string | boolean'},
            },
        },
        decimalSeparator: {
            control: 'text',
            description: 'Sets the character used as the decimal separator.',
            table: {
                defaultValue: {summary: "'.'"},
                type: {summary: 'string'},
            },
        },
    },
} satisfies Meta<NumberInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({leftSection, ...props}) => (
        <NumberInput leftSection={leftSection ? <IconCoins size={16} /> : undefined} {...withLabelInfoProps(props)} />
    ),
};
