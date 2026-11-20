import {Combobox, type ComboboxOptionProps} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
    title: '@components/Forms and inputs/string/Combobox',
    // No `!dev` here on purpose: Combobox has no MDX page and no autodocs, so hiding its
    // story would remove the component from the sidebar entirely. Add the tag once it has
    // a documentation page to switch to.
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
    name: 'Combobox',
    render: (props) => (
        <Combobox>
            <Combobox.Options w={240}>
                <Combobox.Option {...props}>Option</Combobox.Option>
            </Combobox.Options>
        </Combobox>
    ),
};
