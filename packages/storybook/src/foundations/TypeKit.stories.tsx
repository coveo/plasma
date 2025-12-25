import type {StoryObj, Meta} from '@storybook/react-vite';
import {Title} from '@coveord/plasma-mantine/components/Title';
import {Text} from '@coveord/plasma-mantine';

const meta: Meta<typeof Title> = {
    title: '@components/foundations/TypeKit',
    component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
    render: () => <Title order={1}>The Relevance Company</Title>,
};

export const H2: Story = {
    render: () => <Title order={2}>The Relevance Company</Title>,
};

export const H3: Story = {
    render: () => <Title order={3}>The Relevance Company</Title>,
};

export const H4: Story = {
    render: () => <Title order={4}>The Relevance Company</Title>,
};

export const H5: Story = {
    render: () => <Title order={5}>The Relevance Company</Title>,
};

export const H6: Story = {
    render: () => <Title order={6}>The Relevance Company</Title>,
};

export const Text_lg: Story = {
    render: () => <Text size="lg">The relevance company</Text>,
};

export const Text_md: Story = {
    render: () => <Text size="md">The relevance company</Text>,
};

export const Text_sm: Story = {
    render: () => <Text size="sm">The relevance company</Text>,
};

export const Text_xl: Story = {
    render: () => <Text size="xl">The relevance company</Text>,
};

export const Text_xs: Story = {
    render: () => <Text size="xs">The relevance company</Text>,
};

export const Text_xxs: Story = {
    render: () => <Text size="xxs">The relevance company</Text>,
};
