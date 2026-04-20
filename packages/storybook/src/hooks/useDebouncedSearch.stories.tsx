import {Stack, Text, TextInput} from '@coveord/plasma-mantine';
import {useDebouncedSearch} from '@coveord/plasma-mantine/hooks';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@hooks/useDebouncedSearch',
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
    name: 'Debounced search state',
    render: () => {
        const search = useDebouncedSearch();

        return (
            <Stack>
                <TextInput
                    label="Search"
                    placeholder="Type to search..."
                    value={search.value}
                    onChange={(event) => search.setValue(event.currentTarget.value)}
                />
                <Text size="sm" c="dimmed">
                    Immediate value: <strong>{search.value || '(empty)'}</strong>
                </Text>
                <Text size="sm" c="dimmed">
                    Debounced value: <strong>{search.debouncedValue || '(empty)'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const CustomDelay: Story = {
    name: 'Custom debounce delay (500ms)',
    render: () => {
        const search = useDebouncedSearch({debounceMs: 500});

        return (
            <Stack>
                <TextInput
                    label="Search (500ms debounce)"
                    placeholder="Type to search..."
                    value={search.value}
                    onChange={(event) => search.setValue(event.currentTarget.value)}
                />
                <Text size="sm" c="dimmed">
                    Immediate value: <strong>{search.value || '(empty)'}</strong>
                </Text>
                <Text size="sm" c="dimmed">
                    Debounced value: <strong>{search.debouncedValue || '(empty)'}</strong>
                </Text>
            </Stack>
        );
    },
};

export const WithInitialValue: Story = {
    name: 'With initial value',
    render: () => {
        const search = useDebouncedSearch({initialValue: 'hello'});

        return (
            <Stack>
                <TextInput
                    label="Search (with initial value)"
                    placeholder="Type to search..."
                    value={search.value}
                    onChange={(event) => search.setValue(event.currentTarget.value)}
                />
                <Text size="sm" c="dimmed">
                    Immediate value: <strong>{search.value || '(empty)'}</strong>
                </Text>
                <Text size="sm" c="dimmed">
                    Debounced value: <strong>{search.debouncedValue || '(empty)'}</strong>
                </Text>
            </Stack>
        );
    },
};
