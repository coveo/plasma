import {Group, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Spacings',
    id: 'spacings',
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const SpacingRow = ({name, value}: {name: string; value: string}) => (
    <Group gap="md" align="center" justify="space-between" style={{marginBottom: 12}}>
        <Text fw={600} w={40} ff="monospace" size="sm">
            {name}
        </Text>
        <Text size="sm" c="dimmed" ff="monospace">
            {value}
        </Text>
        <Text size="xs" c="dimmed" ff="monospace">
            {`var(--mantine-spacing-${name})`}
        </Text>
        <div
            style={{
                width: value,
                height: 24,
                backgroundColor: 'var(--mantine-color-blue-6)',
                borderRadius: 4,
                flexShrink: 0,
            }}
        />
    </Group>
);

const spacings = [
    {name: 'xxs', value: '4px'},
    {name: 'xs', value: '8px'},
    {name: 'sm', value: '16px'},
    {name: 'md', value: '24px'},
    {name: 'lg', value: '32px'},
    {name: 'xl', value: '40px'},
];

export const Spacings: Story = {
    render: () => (
        <Stack gap="xs">
            {spacings.map(({name, value}) => (
                <SpacingRow key={name} name={name} value={value} />
            ))}
        </Stack>
    ),
};
