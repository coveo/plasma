import {Group, Stack, Text} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta = {
    title: '@foundation/Headings',
    id: 'headings',
    parameters: {
        layout: 'padded',
        controls: {
            disable: true,
        },
    },
};

export default meta;
type Story = StoryObj;

const HeadingRow = ({
    name,
    fontSize,
    lineHeight,
    fontWeight,
}: {
    name: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
}) => (
    <Group gap="md" align="center" justify="space-between" style={{marginBottom: 16}}>
        <Text fw={600} w={40} ff="monospace" size="sm">
            {name}
        </Text>
        <Text size="xs" c="dimmed" ff="monospace" w={200}>
            {fontSize} / {lineHeight} / {fontWeight.replace('var(--coveo-fw-', '').replace(')', '')}
        </Text>
        <Text
            style={{
                fontSize,
                lineHeight,
                fontWeight: fontWeight,
                fontFamily: 'canada-type-gibson, sans-serif',
                flexShrink: 0,
            }}
        >
            The quick brown fox
        </Text>
    </Group>
);

const headings = [
    {name: 'h1', fontSize: '40px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)'},
    {name: 'h2', fontSize: '32px', lineHeight: '1.35', fontWeight: 'var(--coveo-fw-normal)'},
    {name: 'h3', fontSize: '24px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)'},
    {name: 'h4', fontSize: '18px', lineHeight: '1.2', fontWeight: 'var(--coveo-fw-bold)'},
    {name: 'h5', fontSize: '16px', lineHeight: '1.25', fontWeight: 'var(--coveo-fw-bold)'},
    {name: 'h6', fontSize: '12px', lineHeight: '1.33', fontWeight: 'var(--coveo-fw-bold)'},
];

export const Headings: Story = {
    render: () => (
        <Stack gap="xs">
            {headings.map(({name, fontSize, lineHeight, fontWeight}) => (
                <HeadingRow
                    key={name}
                    name={name}
                    fontSize={fontSize}
                    lineHeight={lineHeight}
                    fontWeight={fontWeight}
                />
            ))}
        </Stack>
    ),
};
