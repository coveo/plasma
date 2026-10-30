import {Combobox, type ComboboxOptionProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
    title: '@components/Forms and inputs/string/Combobox',
    id: 'Combobox',
    component: Combobox.Option,
    parameters: {
        layout: 'centered',
        controls: {include: ['active', 'selected', 'disabled']},
    },
    args: {
        value: 'option',
        active: false,
        selected: false,
        disabled: false,
    },
    argTypes: {
        active: {
            control: 'boolean',
            description: 'Marks the option as the current value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        selected: {
            control: 'boolean',
            description: 'Marks the option as highlighted with the keyboard.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the option.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
} satisfies Meta<ComboboxOptionProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => (
        <Combobox>
            <Combobox.Options w={240}>
                <Combobox.Option {...props}>Option</Combobox.Option>
            </Combobox.Options>
        </Combobox>
    ),
};
