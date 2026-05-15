import {Group, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Shadows',
    id: 'shadows',
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const ShadowRow = ({name, value}: {name: string; value: string}) => (
    <Group gap="md" align="center" justify="space-between" style={{marginBottom: 24}}>
        <Text fw={600} w={40} ff="monospace" size="sm">
            {name}
        </Text>
        <Text size="xs" c="dimmed" ff="monospace">
            {`var(--mantine-shadow-${name})`}
        </Text>
        <div
            style={{
                width: 120,
                height: 64,
                backgroundColor: 'var(--mantine-color-white)',
                borderRadius: 8,
                boxShadow: value,
                flexShrink: 0,
            }}
        />
    </Group>
);

const shadows = [
    {
        name: 'xs',
        value: '0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px -0.5px 1px 0px rgba(0, 0, 0, 0.02)',
    },
    {
        name: 'sm',
        value: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
    {
        name: 'md',
        value: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
    {
        name: 'lg',
        value: '0px 12px 12px -7px rgba(0, 0, 0, 0.04), 0px 28px 23px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
    {
        name: 'xl',
        value: '0px 17px 17px -7px rgba(0, 0, 0, 0.04), 0px 36px 28px -7px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
    },
];

export const Shadows: Story = {
    render: () => (
        <Stack gap="xs">
            {shadows.map(({name, value}) => (
                <ShadowRow key={name} name={name} value={value} />
            ))}
        </Stack>
    ),
};
