import {Group, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Font Sizes',
    id: 'font-sizes',
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const FontSizeRow = ({name, value}: {name: string; value: string}) => (
    <Group gap="md" justify="space-between" style={{marginBottom: 12}} grow>
        <Text fw={600} w={40} ff="monospace" size="sm">
            {name}
        </Text>
        <Text size="sm" c="dimmed" ff="monospace">
            {value}
        </Text>
        <Text size="xs" c="dimmed" ff="monospace">
            {`var(--mantine-font-size-${name})`}
        </Text>
        <Text style={{fontSize: value, flexShrink: 0}}>The quick brown fox</Text>
    </Group>
);

const fontSizes = [
    {name: 'xxs', value: '10px'},
    {name: 'xs', value: '12px'},
    {name: 'sm', value: '14px'},
    {name: 'md', value: '16px'},
    {name: 'lg', value: '18px'},
    {name: 'xl', value: '20px'},
];

export const FontSizes: Story = {
    render: () => (
        <Stack gap="xs">
            {fontSizes.map(({name, value}) => (
                <FontSizeRow key={name} name={name} value={value} />
            ))}
        </Stack>
    ),
};
