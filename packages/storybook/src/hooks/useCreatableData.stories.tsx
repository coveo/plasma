import {Button, Group, MultiSelect, Select, Stack, Text} from '@coveord/plasma-mantine';
import {getCreateOptionValue, useCreatableData} from '@coveord/plasma-mantine/hooks';
import {useForm} from '@mantine/form';
import {IconPlus} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';

const meta: Meta = {
    title: '@hooks/useCreatableData',
};
export default meta;
type Story = StoryObj;

const baseData = ['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Qwik', 'Preact', 'Lit'];

export const SelectCreatableWithUseState: Story = {
    name: 'Select + useState',
    render: () => {
        const [value, setValue] = useState<string | null>(null);
        const creatable = useCreatableData({data: baseData});

        return (
            <Stack>
                <Select
                    {...creatable}
                    searchable
                    label="Select a framework (creatable)"
                    placeholder="Search or create..."
                    value={value}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        setValue(val ? getCreateOptionValue(val) : null);
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected value: <strong>{value ?? 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const SelectCreatableWithUseForm: Story = {
    name: 'Select + useForm',
    render: () => {
        const form = useForm({initialValues: {framework: ''}});
        const creatable = useCreatableData({
            data: baseData,
            getCreateLabel: (searchValue) => `➕ Add "${searchValue}"`,
        });

        return (
            <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values)))}>
                <Stack>
                    <Select
                        {...creatable}
                        searchable
                        label="Select a framework (creatable + useForm)"
                        placeholder="Search or create..."
                        {...form.getInputProps('framework')}
                        onChange={(val) => {
                            creatable.persistCreatedValues(val);
                            form.setFieldValue('framework', val ? getCreateOptionValue(val) : '');
                        }}
                    />
                    <Button.Primary type="submit">Submit</Button.Primary>
                    <Text size="sm" c="dimmed">
                        Form value: <strong>{form.values.framework || 'none'}</strong>
                    </Text>
                </Stack>
            </form>
        );
    },
};

export const SelectCreatableWithCustomRender: Story = {
    name: 'Select + renderCreateOption (IconPlus)',
    render: () => {
        const [value, setValue] = useState<string | null>(null);
        const creatable = useCreatableData({
            data: baseData,
            getCreateLabel: (searchValue) => `Add "${searchValue}"`,
            renderCreateOption: (searchValue) => (
                <Group gap="xs">
                    <IconPlus height={16} />
                    <Text fw={500}>
                        Add <strong>{searchValue}</strong>
                    </Text>
                </Group>
            ),
        });

        return (
            <Stack>
                <Select
                    {...creatable}
                    searchable
                    label="Select a framework (custom create option)"
                    placeholder="Search or create..."
                    value={value}
                    onChange={(val) => {
                        creatable.persistCreatedValues(val);
                        setValue(val ? getCreateOptionValue(val) : null);
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected value: <strong>{value ?? 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const MultiSelectCreatableWithUseState: Story = {
    name: 'MultiSelect + useState',
    render: () => {
        const [value, setValue] = useState<string[]>([]);
        const creatable = useCreatableData({data: baseData});

        return (
            <Stack>
                <MultiSelect
                    {...creatable}
                    searchable
                    label="Select frameworks (creatable)"
                    placeholder="Search or create..."
                    value={value}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        setValue(vals.map(getCreateOptionValue));
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected values: <strong>{value.length > 0 ? value.join(', ') : 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const MultiSelectCreatableWithUseForm: Story = {
    name: 'MultiSelect + useForm',
    render: () => {
        const form = useForm<{frameworks: string[]}>({initialValues: {frameworks: []}});
        const creatable = useCreatableData({
            data: baseData,
            getCreateLabel: (searchValue) => `➕ Add "${searchValue}"`,
        });

        return (
            <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values)))}>
                <Stack>
                    <MultiSelect
                        {...creatable}
                        searchable
                        label="Select frameworks (creatable + useForm)"
                        placeholder="Search or create..."
                        {...form.getInputProps('frameworks')}
                        onChange={(vals) => {
                            creatable.persistCreatedValues(vals);
                            form.setFieldValue('frameworks', vals.map(getCreateOptionValue));
                        }}
                    />
                    <Button.Primary type="submit">Submit</Button.Primary>
                    <Text size="sm" c="dimmed">
                        Form values:{' '}
                        <strong>
                            {form.values.frameworks.length > 0 ? form.values.frameworks.join(', ') : 'none'}
                        </strong>
                    </Text>
                </Stack>
            </form>
        );
    },
};

export const MultiSelectCreatableWithCustomRender: Story = {
    name: 'MultiSelect + renderCreateOption (IconPlus)',
    render: () => {
        const [value, setValue] = useState<string[]>([]);
        const creatable = useCreatableData({
            data: baseData,
            getCreateLabel: (searchValue) => `Add "${searchValue}"`,
            renderCreateOption: (searchValue) => (
                <Group gap="xs">
                    <IconPlus height={16} />
                    <Text fw={500}>
                        Add <strong>{searchValue}</strong>
                    </Text>
                </Group>
            ),
        });

        return (
            <Stack>
                <MultiSelect
                    {...creatable}
                    searchable
                    label="Select frameworks (custom create option)"
                    placeholder="Search or create..."
                    value={value}
                    onChange={(vals) => {
                        creatable.persistCreatedValues(vals);
                        setValue(vals.map(getCreateOptionValue));
                    }}
                />
                <Text size="sm" c="dimmed">
                    Selected values: <strong>{value.length > 0 ? value.join(', ') : 'none'}</strong>
                </Text>
            </Stack>
        );
    },
};
