import {NumberInput} from '@coveord/plasma-mantine/components/NumberInput';
import {IconCoins} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof NumberInput> = {
    title: '@components/form/number/NumberInput',
    id: 'NumberInput',
    component: NumberInput,
    parameters: {
        layout: 'centered',
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
        leftSection: {
            control: 'boolean',
            description: 'Show icon in left section',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        prefix: {
            control: 'text',
            description: 'Prefix for the input value',
            table: {
                type: {summary: 'string'},
            },
        },
        suffix: {
            control: 'text',
            description: 'Suffix for the input value',
            table: {
                type: {summary: 'string'},
            },
        },
        min: {
            control: 'number',
            description: 'Minimum value',
            table: {
                type: {summary: 'number'},
            },
        },
        max: {
            control: 'number',
            description: 'Maximum value',
            table: {
                type: {summary: 'number'},
            },
        },
        allowNegative: {
            control: 'boolean',
            description: 'Allow negative values',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        allowDecimal: {
            control: 'boolean',
            description: 'Allow decimal values',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
        thousandSeparator: {
            control: 'text',
            description: 'Thousand separator character',
            table: {
                defaultValue: {summary: "','"},
                type: {summary: 'string'},
            },
        },
        decimalSeparator: {
            control: 'text',
            description: 'Decimal separator character',
            table: {
                defaultValue: {summary: "'.'"},
                type: {summary: 'string'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Demo: Story = {
    render: ({leftSection, ...props}: any) => (
        <NumberInput leftSection={leftSection ? <IconCoins size={16} /> : undefined} {...props} />
    ),
};
