import {CheckIcon, Combobox, Group, Pill, useCombobox} from '@coveord/plasma-mantine';
import {PillsInput} from '@coveord/plasma-mantine/components/PillsInput';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {InputArgs, InputArgTypes, InputWrapperArgs, InputWrapperArgTypes} from './InputArgs.js';

const meta: Meta<typeof PillsInput> = {
    title: '@components/form/PillsInput',
    component: PillsInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs,
        ...InputArgs,
        leftSection: false,
        rightSection: false,
    },
    argTypes: {
        ...InputWrapperArgTypes,
        ...InputArgTypes,
        leftSection: {
            control: 'boolean',
            description: 'Show icon in left section',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        rightSection: {
            control: 'boolean',
            description: 'Show text in right section',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
    },
    decorators: [
        (Story: any) => (
            <div style={{width: 400}}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof PillsInput>;

export const Demo: Story = {
    render: ({leftSection, rightSection, ...props}: any) => {
        const fruits = ['🍎 Apples', '🍌 Bananas', '🍇 Grapes', '🥝 Kiwis', '🍫 Chocolate'];
        const combobox = useCombobox({
            onDropdownClose: () => combobox.resetSelectedOption(),
            onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
        });
        const [value, setValue] = useState<string[]>([]);
        const handleValueSelect = (val: string) =>
            setValue((current) => (current.includes(val) ? current.filter((v) => v !== val) : [...current, val]));

        const handleValueRemove = (val: string) => setValue((current) => current.filter((v) => v !== val));

        const values = value.map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)} disabled={props.disabled}>
                {item}
            </Pill>
        ));

        const options = fruits.map((item) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    {value.includes(item) ? <CheckIcon size={12} /> : null}
                    <span>{item}</span>
                </Group>
            </Combobox.Option>
        ));

        return (
            <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
                <Combobox.DropdownTarget>
                    <PillsInput
                        rightSection={rightSection ? <IconX size={16} onClick={() => setValue([])} /> : undefined}
                        leftSection={leftSection ? <IconSearch size={16} /> : undefined}
                        {...props}
                        onClick={() => combobox.openDropdown()}
                    >
                        <Pill.Group>
                            {values}

                            <Combobox.EventsTarget>
                                <PillsInput.Field
                                    onFocus={() => combobox.openDropdown()}
                                    onBlur={() => combobox.closeDropdown()}
                                />
                            </Combobox.EventsTarget>
                        </Pill.Group>
                    </PillsInput>
                </Combobox.DropdownTarget>
                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        );
    },
};
