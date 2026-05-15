import {Group, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Radii',
    id: 'radii',
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const RadiusRow = ({name, value}: {name: string; value: string}) => (
    <Group gap="md" align="center" justify="space-between" style={{marginBottom: 12}}>
        <Text fw={600} w={40} ff="monospace" size="sm">
            {name}
        </Text>
        <Text size="sm" c="dimmed" ff="monospace">
            {value}
        </Text>
        <Text size="xs" c="dimmed" ff="monospace">
            {`var(--mantine-radius-${name})`}
        </Text>
        <div
            style={{
                width: 64,
                height: 64,
                backgroundColor: 'var(--mantine-color-blue-6)',
                borderRadius: value,
                flexShrink: 0,
            }}
        />
    </Group>
);

const radiiValues = [
    {name: 'none', value: '0px'},
    {name: 'xs', value: '2px'},
    {name: 'sm', value: '4px'},
    {name: 'md', value: '8px'},
    {name: 'lg', value: '16px'},
    {name: 'xl', value: '24px'},
    {name: 'xxl', value: '32px'},
];

export const Radii: Story = {
    render: () => (
        <Stack gap="xs">
            {radiiValues.map(({name, value}) => (
                <RadiusRow key={name} name={name} value={value} />
            ))}
        </Stack>
    ),
};
